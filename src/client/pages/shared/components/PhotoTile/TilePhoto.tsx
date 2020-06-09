import React from 'react';

import {ErrorCircleIcon, RulerCircleIcon, SoldCircleIcon,} from '../../../../components/Icons';

import {IDashboardPhoto} from '../../../../store/photos/photos.types';
import {PhotoRules} from '../../../../../server/PhotoRules/rules.types';

import cn from 'classnames';
import bemFactory from '../../../../lib/bem-factory';
import styles from './TilePhoto.module.scss';
import IconButton from '../../../../components/Buttons/IconButton';

const {block, element} = bemFactory('tile-photo', styles);

interface ITilePhoto {
  photo: IDashboardPhoto;
}

const ruleTypeToIconMapper = {
  [PhotoRules.Size]: RulerCircleIcon,
}

const TilePhoto = (props: ITilePhoto) => {
  const {photo} = props;
  const {rules} = photo;

  const hasSold = rules[PhotoRules.Sold] && rules[PhotoRules.Sold].success;
  const hasNoSize = rules[PhotoRules.Size] && !rules[PhotoRules.Size].success;
  const hasBrokenRules = !![hasNoSize].filter(Boolean).length;

  const renderRuleIcon = (ruleType: PhotoRules) => {
    const ruleResult = rules[ruleType];
    if (!ruleResult || ruleResult.success) return null;

    const IconComponent = ruleTypeToIconMapper[ruleType];

    return <IconComponent className={element('error-item')} size={30} />
  }

  const [showErrors, setShowErrors] = React.useState(false);
  const handleToggleErrors = (e) => {
    e.stopPropagation();

    setShowErrors(!showErrors);
  }

  const url = photo.sizes['q'].url;
  const errorContainerClasses = cn(
    element('error-details-container'),
    element('error-details-container', 'color2'),
    {
      [element('error-details-container', 'open')]: showErrors
    }
  );

  return <div className={block()}>
    <img alt="" className={element('image')} src={url} />
    <div className={element('shadow')} data-role="shadow" />

    <div className={element('icons-container')}>
      {hasSold && <SoldCircleIcon size={35} />}
      {hasBrokenRules && <div className={element('errors')}>
        <IconButton className={element('error-icon-button')} onClick={handleToggleErrors}>
          <ErrorCircleIcon size={35} />
        </IconButton>
        <div className={errorContainerClasses}>
          {renderRuleIcon(PhotoRules.Size)}
          {/*<ShoppingCircleIcon className={element('error-item')} size={30} />*/}
          {/*<MonumentCircleIcon className={element('error-item')} size={30} />*/}
          {/*<PriceCircleIcon className={element('error-item')} size={30} />*/}
          {/*<WrongAlbumIcon className={styles.errorItem} size={30} />*/}
        </div>
      </div>
      }
    </div>
  </div>
};

export default TilePhoto;
