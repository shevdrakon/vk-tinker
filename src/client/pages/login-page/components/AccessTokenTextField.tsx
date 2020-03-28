import React from 'react';

import InputAdornment from '../../../components/Inputs/InputAdornment';
import TextField from '../../../components/TextFields/TextField';
import IconButton from '../../../components/Buttons/IconButton';
import {KeyIcon} from '../../../components/icons';

import VkAuth from '../../../lib/VkAuth';

const AccessTokenTextField = () => {
  const handleGetAccessTokenClick = () => {
    new VkAuth({applicationId: 5737599}).loginAsStandalone();
  };

  const endAdornment = <InputAdornment position="end">
    <IconButton onClick={handleGetAccessTokenClick}>
      <KeyIcon size={20} />
    </IconButton>
  </InputAdornment>;

  return <TextField label="Access Token" endAdornment={endAdornment} />
};

export default AccessTokenTextField;
