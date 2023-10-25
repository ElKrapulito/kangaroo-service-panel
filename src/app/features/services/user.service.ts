import { Injectable } from '@angular/core';
import { BaseService } from '../../core/services/base-service.service';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserHttpService extends BaseService<IUser> {
  protected override url: string = 'user';
  constructor(protected override http: HttpClient) {
    super(http);
  }
}
