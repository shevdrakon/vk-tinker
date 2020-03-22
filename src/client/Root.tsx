import React, {useEffect} from 'react';

import OAuthDialog from './lib/vk-oauth-dialog';

// import {BrowserRouter as Router, Route} from 'react-router-dom';

// import ChatPage from './chat/chat-page';
// import LoginPage from './login/login-page';

// import {AppStoreContextProvider} from './contexts/AppStoreContext';
// import PrivateRoute from './components/routes/private-route';

import LoginPage from './pages/login-page/LoginPage';

const Root = () => {
  // useEffect(() => {
  //   // OAuthDialog({
  //   //   applicationId: 7277411
  //   // });
  //
  //   VK.init({apiId: 7277411});
  //   VK.Widgets.Auth("vk_auth", {
  //     "onAuth": function (data) {
  //       debugger
  //
  //       VK.Auth.getLoginStatus((data) => {
  //         debugger
  //       }, true);
  //
  //       VK.Api.call('users.search', {v:"5.103"}, function(r) {
  //         debugger
  //         if(r.response) {
  //           alert('Привет, ' + r.response[0].first_name);
  //         }
  //       });
  //
  //       alert('user ' + data['uid'] + ' authorized');
  //     }
  //   });
  // });

  return (
    <>
      <LoginPage/>
      {/*<div>Hello!</div>*/}
      {/*<div id="vk_auth"></div>*/}
    </>
  );
};

export default Root;
