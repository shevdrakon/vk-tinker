import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showStandaloneAccessToken} from '../../../store/session/sessionActions';

import InputAdornment from '../../../components/Inputs/InputAdornment';
import TextField from '../../../components/TextFields/TextField';
import IconButton from '../../../components/Buttons/IconButton';
import {KeyIcon} from '../../../components/icons';

import styles from './AccessTokenTextField.module.scss';
import bemFactory from '../../../lib/bem-factory';
import {IStore} from '../../../store/types/store.types';

const {block} = bemFactory('access-token-text-field', styles);

interface IAccessTokenTextField {
  onChange?: (value: string) => void;
}

const AccessTokenTextField = (props: IAccessTokenTextField) => {
  const dispatch = useDispatch();
  const accessTokenError = useSelector<IStore, string>(state => state.session.accessTokenError);

  const handleClick = () => {
    dispatch(showStandaloneAccessToken());
  }

  const endAdornment = <InputAdornment position="end">
    <IconButton onClick={handleClick}>
      <KeyIcon size={20} />
    </IconButton>
  </InputAdornment>;

  return <TextField className={block()}
                    error={accessTokenError}
                    label="Access Token"
                    endAdornment={endAdornment}
                    onChange={props.onChange} />
};

export default AccessTokenTextField;
