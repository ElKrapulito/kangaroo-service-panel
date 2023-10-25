import { BaseService } from 'src/app/core/services/base-service.service';
import { ICategory } from '../interfaces/category.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryHttpService extends BaseService<ICategory> {
  protected override url: string = 'category';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getByCategoryByUserId(id: string) {
    return this.http.get<ICategory[]>(
      `${this.MAIN_URL}/${this.url}/user/${id}`
    );
  }
}
