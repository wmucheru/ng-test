import { Component, OnInit } from '@angular/core';

import { TRANSACTIONS } from './mock-transactions';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  title = 'Table View';
  dtOptions: any = {};
  transactions = TRANSACTIONS;

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Bfrtip',
      buttons: [
        // 'columnsToggle',
        // 'colvis',
        'copy',
        'print',
        'excel',
        'csv'
      ]
    }
  }

}
