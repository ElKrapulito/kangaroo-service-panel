import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CategoryHttpService } from '../../services/category.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  public categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private categoryService: CategoryHttpService,
    public dialogRef: MatDialogRef<CategoryFormComponent>
  ) {
    this.categoryForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.categoryForm.invalid) {
      return;
    }
    const token = this.authService.getParseAccessToken();
    const data = { ...this.categoryForm.value, user: token.id };
    this.categoryService.create(data).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
