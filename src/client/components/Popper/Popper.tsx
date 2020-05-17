import React from 'react';

import MuiPopper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import {IPopperProps} from './Popper.types';

import styles from './Popper.module.scss';
import bemFactory from '../../lib/bem-factory';

const {element} = bemFactory('popper', styles);

const Popper = (props: IPopperProps) => {
  const {open, placement = 'bottom', anchorEl, onClose, children} = props;

  const handleCloseAway = (e) => {
    onClose && onClose(e);
  }

  return <MuiPopper open={open} anchorEl={anchorEl}
                    transition disablePortal
                    placement={placement}
                    role={undefined}
  >
    {({TransitionProps}) => (
      <Grow {...TransitionProps} timeout={350}>
        <Paper className={element('paper')} elevation={4}>
          <ClickAwayListener onClickAway={handleCloseAway}>
            {children}
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
  </MuiPopper>
};

export default Popper;
