import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/services/loan.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalLoan: number = 0;
  totalOutstanding: number = 0;
  dataSource;
  displayColumns: string[] = ['name', 'loanAmount', 'outstanding', 'arrears'];

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.getFarmersData();
    console.log(this.dataSource);
  }

  getFarmersData() {
    this.loanService.getFarmers().subscribe((data) => {
      const { farmers } = data;
      this.dataSource = farmers;
      this.getTotalLoan(this.dataSource)
    })
  }

  getTotalLoan(data) {
    let totalPaid = 0;
    data.map((data, index) => {
      if (data.Loan != null) {
        this.totalLoan = this.totalLoan + parseInt(data.Loan.amount);
        data.Loan.Payments &&
          data.Loan.Payments.map((data)=>{
            totalPaid = totalPaid = data.amountPaid;
          });
      }
    })
    this.totalOutstanding = this.totalLoan - totalPaid;
  }


}
