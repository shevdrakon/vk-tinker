import React from 'react';
import {useSelector} from 'react-redux';

import Button from '../../../components/Buttons/Button';
import {LoginState} from '../../../store/session/session.types';
import CircularProgress from '../../../components/progress/CircularProgress';

import {IStore} from '../../../store/types/store.types';

interface IContinueButton {
  onClick?: () => void;
}

const ContinueButton = (props: IContinueButton) => {
  const loginState = useSelector<IStore>(state => state.session.loginState);
  const isProcessing = loginState === LoginState.processing;
  const continueButtonIcon = isProcessing ? <CircularProgress /> : null;

  const handleContinueButtonClick = () => {
    if (!isProcessing)
      props.onClick && props.onClick();
  };

  return <Button disabled={isProcessing} endIcon={continueButtonIcon} onClick={handleContinueButtonClick}>
    Continue
  </Button>
}

export default ContinueButton;
