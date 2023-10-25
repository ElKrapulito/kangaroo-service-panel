import { BaseService } from 'src/app/core/services/base-service.service';
import { IAccount } from '../interfaces/account.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountHttpService extends BaseService<IAccount> {
  protected override url: string = 'account';

  constructor(protected override http: HttpClient) {
    super(http);
  }
  getByAccountByUserId(id: string) {
    return this.http.get<IAccount[]>(`${this.MAIN_URL}/${this.url}/user/${id}`);
  }
}
