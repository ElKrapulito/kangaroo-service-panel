import { ITransaction } from './transaction.interface';

export interface ITransfer {
  id: string;
  transactionWithdrown: ITransaction | string;
  transactionBenefited: ITransaction | string;
}
