export interface IVkLoginStatus {
  auth: boolean;
  access_token: string;
  expire: number;
  time: number;
  user: {
    id: number;
    domain: string;
    href: string;
    first_name: string;
    last_name: string;
    nickname: string;
  };
}
