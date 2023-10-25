import { IUser } from './user.interface';

export interface IAccount {
  id: string;
  name: string;
  user: string | IUser;
  amount: number;
}
