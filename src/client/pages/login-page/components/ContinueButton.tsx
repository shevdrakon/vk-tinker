import React from 'react';

import useAppStateSelector from '../../../hooks/useAppStateSelector';

import Button from '../../../components/Buttons/Button';
import {LoginState} from '../../../store/session/session.types';
import CircularProgress from '../../../components/Progress/CircularProgress';

interface IContinueButton {
  onClick?: () => void;
}

const ContinueButton = (props: IContinueButton) => {
  const loginState = useAppStateSelector(x => x.session.loginState);
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
