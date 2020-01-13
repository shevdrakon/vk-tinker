/**
 * https://vk.com/dev/oauth_dialog
 */
import qs from 'querystring';

interface IOAuthDialogOptions {
  applicationId: number;
}

enum display {
  page = 'page', // форма авторизации в отдельном окне;
  popup = 'popup',// всплывающее окно;
  mobile = 'mobile',// авторизация для мобильных устройств (без использования Javascript)
}

enum responseType {
  code = 'code', // если Вы хотите делать запросы со стороннего сервера (по умолчанию)
  token = 'token', // если Вы хотите делать запросы с клиента
}

const openOAuthDialog = (options: IOAuthDialogOptions) => {
  const {applicationId} = options;

  const UI = {
    active: null,

    popup: (options) => {
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

      this.active = window.open(options.url, 'vk_openapi', features);
    }
  }

  const query = qs.stringify({
    client_id: applicationId,
    redirect_uri: 'blank.html',
    display: display.popup,
    scope: 'groups,photos',
    response_type: responseType.token,
  });

  // https://oauth.vk.com/authorize?client_id=1&redirect_uri=http://example.com/callback&scope=12&display=mobile
  const url = `https://oauth.vk.com/authorize?${query}`;

  UI.popup({
    width: 600,
    height: 200,
    url,
  });
}

export default openOAuthDialog;
