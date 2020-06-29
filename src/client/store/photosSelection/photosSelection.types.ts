export enum PhotosActionsMode {
  view = 'view',
  edit = 'edit',
}

export interface IPhotosSelectionState {
  selected: Record<number, boolean>;
}
