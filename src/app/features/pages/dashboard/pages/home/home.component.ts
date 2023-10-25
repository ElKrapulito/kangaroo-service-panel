import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tableTransactionHeaders: string[] = [
    'account',
    'category',
    'amount',
    'transactionType',
  ];
  public accountsList: any[];
  public categoryList: any[];
  public transactionType: any[];
  public transactions: any[];

  public filterForm: FormGroup;
  public range: FormGroup;

  constructor(private fb: FormBuilder) {
    this.transactions = [];
    this.accountsList = [];
    this.categoryList = [];
    this.transactionType = [];
    this.filterForm = this.fb.group({});
    this.range = this.fb.group({});
  }
  ngOnInit(): void {
    this.filterForm = this.fb.group({
      accounts: [],
      category: [],
      transactionType: [],
    });
    this.range = this.fb.group({ startDate: [''], endDate: [''] });
  }
}
