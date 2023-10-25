import { IUser } from './user.interface';

export interface ICategory {
  id: string;
  name: string;
  user: IUser | string;
}
