import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  cryptoRecords: any = [];
  payload = {
    page: 1,
    size: 10,
    title: null,
  };
  search_text: any;
  total_docs: number = 0;
  current_page: number = 0;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAllRecords();
  }
  getAllRecords(): any {
    // let payload = {
    //   page: 1,
    //   size: 10,
    // };
    this.accountService.getAll(this.payload).subscribe((Data: any) => {
      if (Data.res === '1') {
        this.cryptoRecords = Data.data;
        this.total_docs = Data.totalItems;
        console.log(this.cryptoRecords);
      } else {
        console.log(Data.msg);
      }
    });
  }
  pageChanged(page) {
    this.payload.page = page;
    this.getAllRecords();
  }
  serachData(event?: any): any {
    this.payload.title = event.target['value'];
    this.payload.page = 1;
    // this.payload.size = 10;

    this.getAllRecords();
  }
}
