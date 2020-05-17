import React from 'react';

import {ISelectorProps} from './Selector.types';
import Button from '../Buttons/Button';
import Popper from '../Popper/Popper';
import KeyboardArrowDownIcon from '../Icons/KeyboardArrowDownIcon';

import SelectorHeader from './Items/SelectorHeader';
import SelectorOptionsList from './Items/SelectorOptionsList';
import SelectorOption from './Items/SelectorOption';
import SelectorOptionDivider from './Items/SelectorOptionDivider';

import cn from 'classnames';
import styles from './Selector.module.scss';
import bemFactory from '../../lib/bem-factory';

const {block, element} = bemFactory('selector', styles);

const Selector = (props: ISelectorProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };

  const iconClasses = cn(element('icon'),
    {
      [element('icon', 'open')]: open,
    }
  );

  const {text, className, children} = props;
  const IconComponent = <KeyboardArrowDownIcon className={iconClasses} />
  const buttonClasses = cn(block(), className);

  const childrenArray = React.Children.toArray(children);
  const headerComponent = childrenArray.find(x => x.type === SelectorHeader);
  const items = childrenArray.filter(x => x.type !== SelectorHeader);

  const showText = !headerComponent;

  return <>
    <Button className={buttonClasses} color="inherit" variant="text" onClick={handleClick} endIcon={IconComponent}>
      {headerComponent}
      {showText && text}
    </Button>
    <Popper open={open} anchorEl={anchorEl} onClose={handleClose}>
      <div>
        <SelectorOptionsList>
          {items}
        </SelectorOptionsList>
      </div>
    </Popper>
  </>
};

Selector.Header = SelectorHeader;
Selector.Option = SelectorOption;
Selector.Divider = SelectorOptionDivider;

export default Selector;
