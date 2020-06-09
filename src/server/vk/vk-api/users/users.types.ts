export enum UserFields {
  photo_50 = 'photo_50',
}

// https://vk.com/dev/objects/user
export interface IVkUser {
  id: number;
  first_name: string;
  last_name: string;
  // is_closed: boolean;
  // can_access_closed: boolean;
  domain: string;

  // optional fields
  photo_50?: string;
  photo_100?: string;
}
