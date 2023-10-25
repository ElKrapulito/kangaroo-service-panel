import { BaseService } from 'src/app/core/services/base-service.service';
import { ITransaction } from '../interfaces/transaction.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionHttpService extends BaseService<ITransaction> {
  protected override url: string = 'transaction';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getTransactionsFiltered(dto: any) {
    return this.http.post<ITransaction[]>(
      `${this.MAIN_URL}/${this.url}/filter`,
      dto
    );
  }
}
