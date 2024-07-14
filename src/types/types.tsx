export interface IIcons {
  width?: string | number;
  height?: string | number;
}

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  onClickInvite: (id: number) => void;
  isInvited: boolean;
}
