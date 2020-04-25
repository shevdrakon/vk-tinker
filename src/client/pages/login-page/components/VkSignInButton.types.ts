import {LoginState} from '../../../store/session/session.types';

export interface IVkSignInButtonDispatchProps {
  authorizeWithLimitedAccess: (arg?: void) => void;
}

export interface IVkSignInButtonStateProps {
  loginState: LoginState;
}

export interface IVkSignInButtonProps extends IVkSignInButtonStateProps, IVkSignInButtonDispatchProps {
}
