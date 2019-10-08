import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalLoan: number = 0;
  totalOutstanding: number = 0;
  dataSource: any;
  dataPoints: any = [10, 0, 0];
  columnNames: {} = {
    totalLoan: 'Total Loan',
    name: 'Farmer Name',
    outstanding: 'Outstanding Balance',
    arrears: 'arrears'
  };
  displayColumns: string[] = ['name', 'loanAmount', 'outstanding', 'arrears'];
  isFarmerPerformance: boolean = false;
  isLoanPerformance: boolean = true;
  isOfficerPerformance: boolean = false;
  @Input() selectedTab$: Subject<string>;
  submitDataPoint$: Subject<string> = new Subject();
  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.getFarmersData();
    this.selectedTab$.subscribe((tab) => {
      switch (tab) {
        case 'farmerPerformance':
          this.isFarmerPerformance = true;
          setTimeout(() => {
            this.handleClick(this.dataSource[0]);
          }, 100);

          break;
        
        case 'officerPerformance':
          this.isOfficerPerformance = true;
          this.isFarmerPerformance = false;
          this.isLoanPerformance = false;
          break;

        default:
          this.isFarmerPerformance = false;
          this.isLoanPerformance = true;
          this.isOfficerPerformance = false;
          break;
      }
    });
  }
   getFarmersData() {
    this.loanService.getFarmers().subscribe((data) => {
      this.dataSource = data['farmers'];
      this.handleClick(this.dataSource[0]);
      this.getTotalLoan(this.dataSource);
    });
  }

  getTotalLoan(data) {
    let totalPaid = 0;
    data.map((data, index) => {
      if (data.Loan != null) {
        this.totalLoan = this.totalLoan + parseInt(data.Loan.amount);
        data.Loan.Payments &&
          data.Loan.Payments.map((data)=>{
            totalPaid = totalPaid + parseInt(data.amountPaid);
          });
      }
    })
    this.totalOutstanding = this.totalLoan - totalPaid;
  }
  handleClick(event) {
    let paid: number = 0;
    let outstanding: number;

    const { Loan, firstName, lastName } = event;
    if (Loan !== null) {

      const loanAmount: number = Loan.amount;
      Loan.Payments &&
        Loan.Payments.map((payment) => {
          paid = paid + parseInt(payment.amountPaid);
        });
      outstanding = loanAmount - paid;
    }
    const data = {
      name: `${firstName} ${lastName}`,
      dataPoints: [paid, outstanding, 30]};
    this.submitDataPoint$.next(JSON.stringify(data));
  }
}