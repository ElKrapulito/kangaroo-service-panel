import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICategory } from 'src/app/features/interfaces/category.interface';
import { AuthService } from '../../../../services/auth.service';
import { CategoryHttpService } from 'src/app/features/services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryFormComponent } from 'src/app/features/components/category-form/category-form.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public categoryAccountHeaders = ['name', 'actions'];
  public $categoryList: Observable<ICategory[]>;

  constructor(
    private authService: AuthService,
    private categoryService: CategoryHttpService,
    public dialog: MatDialog
  ) {
    this.$categoryList = of([]);
  }
  ngOnInit(): void {
    this.setUp();
  }

  setUp() {
    const token = this.authService.getParseAccessToken();
    this.$categoryList = this.categoryService.getByCategoryByUserId(token.id);
  }

  createCategory() {
    const dialog = this.dialog.open(CategoryFormComponent);
    dialog.afterClosed().subscribe(() => {
      this.setUp();
    });
  }
}
