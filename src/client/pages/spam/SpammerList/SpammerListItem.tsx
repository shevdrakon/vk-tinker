import React from 'react';
import cn from 'classnames';
import {ISpammer} from '../../../../server/api/violations/types';

import Avatar from '../../../components/Avatars/Avatar';
import IconButton from '../../../components/Buttons/IconButton';
import PhotoCameraIcon from '../../../components/Icons/PhotoCameraIcon';
import KeyboardArrowDownIcon from '../../../components/Icons/KeyboardArrowDownIcon';
import CopyIcon from '../../../components/Icons/CopyIcon';
import SpammerDetails from './components/SpammerDetails';

import bemFactory from '../../../lib/bem-factory';
import styles from './SpammerListItem.module.scss';

const {block, element, modifier} = bemFactory('spammer-list-item', styles);

interface ISpammerListItemProps {
  spammer: ISpammer;
}

const SpammerListItem = (props: ISpammerListItemProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const {spammer: {user, photos}} = props;
  const name = `${user.first_name} ${user.last_name}`;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const handleCopyLinksClick = (e) => {
    e.stopPropagation();

    const urls = photos.map(x => `https://vk.com/photo${x.owner_id}_${x.id}`).join('\r\n');
    try {
      navigator.clipboard.writeText(urls);
    } catch (e) {
    }
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

  const groupByAlbums = photos.reduce((acc, cur) => {
    acc[cur.album_id] = (acc[cur.album_id] || []).concat(cur);
    return acc;
  }, {});
  const counters = Object.keys(groupByAlbums).map(x => groupByAlbums[x].length);
  const photosDescription = counters.length === 1
    ? counters[0]
    : `${photos.length} (${counters.join(' + ')})`;

  return <div className={classes}>
    <div className={element('summary')} onClick={handleExpandClick}>
      <div className={element('container')}>
        <Avatar src={user.photo_50} />
        <div className={element('name')}>{name}</div>
        <div className={element('description')}>
          <PhotoCameraIcon />
          <span className={element('text')}>{photosDescription}</span>

          <IconButton onClick={handleCopyLinksClick}>
            <CopyIcon />
          </IconButton>
        </div>
      </div>
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
