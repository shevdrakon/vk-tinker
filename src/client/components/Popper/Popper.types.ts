import React from 'react';

type PlacementType =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

export interface IPopperProps {
  open: boolean;
  anchorEl?: any;
  placement?: PlacementType;
  onClose: (event: React.MouseEvent<Document>) => void;
  children: React.ReactNode;
}
