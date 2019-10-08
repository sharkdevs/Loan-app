import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.scss']
})
export class LoansTableComponent implements OnInit {
  @Input() tableType: string;
  @Input() columnNames: any;
  @Input() dataSource: [];
  @Input() displayColumns;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  calculateOutstandingLoan(data) {
    let amount = 0;
    if(data != null)
    {
      data.Payments.map((payment) => {
        amount = amount + parseInt(payment.amountPaid);
      });
      return data.amount - amount;
    }
    return 0;
  }
  handleClick(event) {
    this.clickEvent.emit(event);
  }
}
