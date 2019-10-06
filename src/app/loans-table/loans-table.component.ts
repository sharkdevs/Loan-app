import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent implements OnInit {
  @Input() dataSource: [];
  @Input() displayColumns;
  constructor() { }

  ngOnInit() {
  }

  calculateOutstandingLoan(data) {
    console.log('outstanding data', data)
    let amount = 0;
    if(data != null)
    {
      data.Payments.map((payment) => {
        amount = amount + parseInt(payment.amountPaid);
        console.log('outstanding amount', amount)
      });
      return data.amount - amount;
    }
    return 0;
  }

}
