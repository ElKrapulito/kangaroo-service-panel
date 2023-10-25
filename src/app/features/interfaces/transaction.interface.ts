import { ICategory } from './category.interface';
import { IAccount } from './account.interface';
import { TransactionType } from '../enum/transaction-type.enum';

export interface ITransaction {
  id: string;
  amount: number;
  account: string | IAccount;
  date: Date;
  type: TransactionType;
  category: ICategory | string;
}
