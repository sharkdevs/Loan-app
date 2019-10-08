import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-officer-performance',
  templateUrl: './officer-performance.component.html',
  styleUrls: ['./officer-performance.component.scss']
})
export class OfficerPerformanceComponent implements OnInit {
  displayColumns: string[] = ['name', 'loanAmount', 'outstanding', 'arrears'];
  dataSource: any;
  columnNames: {} = {
    totalLoan: 'Total Loan',
    name: 'Officer Name',
    outstanding: 'Outstanding Balance',
    arrears: 'Total Paid'
  };
  submitDataPoint$: Subject<string> = new Subject();

  constructor( private officerService: ManagerService) { }

  ngOnInit() {
    this.getOfficer()
  }

  getOfficer() {
    this.officerService.getOfficers().subscribe((data) => {
      let rawDataSource = data['officerData'];
      this.displayChart(data['officerData'][0]);
      let processedData = rawDataSource.map((rawData) => {
        return this.processData(rawData);
      });
      this.dataSource = processedData;
    });
  }

  calculateOfficerTotal(data) {
    const { Users } = data;
    let totalLoan: number = 0;
    let totalPaid: number = 0;
    let loanOutstanding: number = 0;
    Users.map((user) => {
      const { Loan } = user;
      Loan &&
        (
        totalLoan = totalLoan + parseInt(Loan.amount),
          Loan.Payments &&
          Loan.Payments.map((payment) => {
            totalPaid = totalPaid + parseInt(payment.amountPaid);
          })
        );
    });
    loanOutstanding = totalLoan - totalPaid;
    return { totalPaid, loanOutstanding,totalLoan, };
  }

  displayChart(event) {
    const { firstName, lastName } = event;
    const { totalPaid, loanOutstanding, totalLoan } = this.calculateOfficerTotal(event);
    const name: string = `${firstName} ${lastName}`;
    const data = {
      name: `${firstName} ${lastName}`,
      dataPoints: [totalPaid, loanOutstanding, totalLoan]
    };
    this.submitDataPoint$.next(JSON.stringify(data));
  }
  handleClick(event) {
    const { totalPaid, loanOutstanding, totalLoan } = event;
    this.submitDataPoint$.next(JSON.stringify({
      name: event.name,
      dataPoints: [totalPaid, loanOutstanding, totalLoan]
    }));
  }
  processData(data) {
    const name: string = `${data.firstName} ${data.lastName}`;
    let officer = { name,...this.calculateOfficerTotal(data) };
    return officer;
  }
}
