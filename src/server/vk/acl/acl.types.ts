export enum TokenType {
  standalone = 'standalone',
  user = 'user',
}

export interface IAclPermission {
  permission: number;
  name: string;
  url: string;
  accessLevel: TokenType;
}
