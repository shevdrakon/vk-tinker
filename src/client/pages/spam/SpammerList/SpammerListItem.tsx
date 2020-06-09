import React from 'react';
import cn from 'classnames';
import {ISpammer} from '../../../../server/api/violations/types';

import Avatar from '../../../components/Avatars/Avatar';
import IconButton from '../../../components/Buttons/IconButton';
import PhotoCameraIcon from '../../../components/Icons/PhotoCameraIcon';
import KeyboardArrowDownIcon from '../../../components/Icons/KeyboardArrowDownIcon';
import SpammerDetails from './components/SpammerDetails';

import bemFactory from '../../../lib/bem-factory';
import styles from './SpammerListItem.module.scss';

const {block, element, modifier} = bemFactory('spammer-list-item', styles);

interface ISpammerListItemProps {
  spammer: ISpammer;
}

const SpammerListItem = (props: ISpammerListItemProps) => {
  const {spammer: {user, photos}} = props;

  const [expanded, setExpanded] = React.useState(false);

  const name = `${user.first_name} ${user.last_name}`;
  const userUrl = `https://vk.com/id${user.id}`;

  const handleNavigateClick = (e) => {
    e.stopPropagation();
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const chevronIconClasses = cn(element('chevron-icon'), {
    [element('chevron-icon', 'expanded')]: expanded,
  });

  const detailsClasses = cn(element('details-row'), {
    [element('details-row', 'expanded')]: expanded,
  });

  const classes = cn(block(), {
    [modifier('expanded')]: expanded
  });

  return <div className={classes}>
    <div className={element('summary')} onClick={handleExpandClick}>
      <div className={element('container')}>
        <Avatar src={user.photo_50} />
        <div className={element('name')}>{name}</div>

        <div className={element('description')}>
          <PhotoCameraIcon />
          <span className={element('text')}>{photos.length}</span>
        </div>
      </div>
      {/*<div className={element('actions')}>*/}
      {/*  <LinkIconButton href={userUrl} className={element('padding')} onClick={handleNavigateClick}>*/}
      {/*    <ShareIcon className={element('action-button')} size={14} />*/}
      {/*  </LinkIconButton>*/}
      {/*</div>*/}

      <IconButton className={element('expand-button')}>
        <KeyboardArrowDownIcon className={chevronIconClasses} />
      </IconButton>
    </div>

    {expanded && <div className={detailsClasses}>
      <div className={element('details')}>
        <SpammerDetails spammer={props.spammer} />
      </div>
    </div>
    }
  </div>
};

export default SpammerListItem;
