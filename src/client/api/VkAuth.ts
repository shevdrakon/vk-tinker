/**
 * https://vk.com/dev/oauth_dialog
 */
import qs from 'querystring';
import fetch from 'isomorphic-fetch';

import {IVkLoginStatus} from '../../server/vk/vk-api/openapi.types';

enum display {
  page = 'page', // форма авторизации в отдельном окне;
  popup = 'popup',// всплывающее окно;
  mobile = 'mobile',// авторизация для мобильных устройств (без использования Javascript)
}

enum responseType {
  code = 'code', // если Вы хотите делать запросы со стороннего сервера (по умолчанию)
  token = 'token', // если Вы хотите делать запросы с клиента
}

// https://vk.com/dev/permissions
enum scopes {
  photos = 1 << 2,
  groups = 1 << 18,
}

export interface IVkAuthService {
  loginAsStandalone: () => void;
  loginAsUser: () => Promise<IVkLoginStatus>;
}

class VkAuth implements IVkAuthService {
  private readonly applicationId: number;
  private readonly scopes: number;

  constructor(options: { applicationId: number }) {
    this.applicationId = options.applicationId;
    this.scopes = scopes.photos | scopes.groups;
  }

  private popup(options: { width: number; height: number; url: string; }) {
    let
      screenX = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
      screenY = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
      outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
      outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
      width = options.width,
      height = options.height,
      left = screenX + ((outerWidth - width) / 2),
      top = screenY + ((outerHeight - height) / 2.5),
      features = (
        'width=' + width +
        ',height=' + height +
        ',left=' + left +
        ',top=' + top
      );

    return window.open(options.url, 'vk_openapi', features);
  }

  loginAsStandalone() {
    const query = qs.stringify({
      client_id: this.applicationId,
      redirect_uri: 'blank.html',
      display: display.popup,
      scope: this.scopes,
      response_type: responseType.token,
    });

    // https://oauth.vk.com/authorize?client_id=1&redirect_uri=http://example.com/callback&scope=12&display=mobile
    const url = `https://oauth.vk.com/authorize?${query}`;

    this.popup({
      width: 665,
      height: 370,
      url,
    });
  }

  async loginAsUser(): Promise<IVkLoginStatus> {
    const query = qs.stringify({
      client_id: this.applicationId,
      redirect_uri: 'close.html',
      display: display.popup,
      response_type: responseType.token,
      openapi: 1,
      scope: this.scopes,
    });

    // https://oauth.vk.com/authorize?client_id=5737599&display=popup&redirect_uri=close.html&response_type=token&openapi=1&scope=262148
    const url = `https://oauth.vk.com/authorize?${query}`;

    const active = this.popup({
      width: 665,
      height: 370,
      url,
    });

    await this.waitForPopupClosed(active);

    return await this.getLoginStatus();
  }

  // Get current auth status from vk.com (async)
  async getLoginStatus(): Promise<IVkLoginStatus> {
    const query = qs.stringify({
      aid: this.applicationId,
      oauth: 1,
      act: 'openapi',
      location: encodeURIComponent(window.location.hostname),
      new: 1,
    });

    //  var url = VK._domain.auth + '?act=openapi&oauth=1&aid=' + parseInt(VK._apiId, 10) + '&location=' + encodeURIComponent(window.location.hostname) + '&do_logout=1&token=' + VK._session.sid;
    const url = `https://login.vk.com?${query}`;
    const response = await fetch(url, {credentials: 'include'});

    if (response.status !== 200)
      throw new Error(`Unable to get login status from vk.`);

    const {auth, access_token, user, expire, time} = await response.json();

    return {auth, access_token, user, expire, time};
  }

  private waitForPopupClosed(active: Window): Promise<void> {
    return new Promise((resolve, reject) => {
      const popupCheck = () => {
        if (!active) {
          reject();
          return;
        }

        try {
          if (!active.top || active.closed) {
            resolve();
            return;
          }
        } catch {
          resolve();
          return;
        }

        setTimeout(popupCheck, 100);
      };

      setTimeout(popupCheck, 100);
    });
  }
}

export default VkAuth;
