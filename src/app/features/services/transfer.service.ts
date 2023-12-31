import { BaseService } from 'src/app/core/services/base-service.service';
import { ITransfer } from '../interfaces/transfer.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TransferHttpService extends BaseService<ITransfer> {
  protected override url: string = 'transference';

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
