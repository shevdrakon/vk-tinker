export enum TokenTypes {
  Standalone = 'standalone',
  User = 'user',
}

export interface IAclPermission {
  permission: number;
  name: string;
  url: string;
  accessLevel: TokenTypes;
}
