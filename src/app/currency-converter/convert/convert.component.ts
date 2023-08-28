import { Component } from '@angular/core';
import { ICurrency, ICurrencyConvert } from 'src/app/models/icurrencies';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
})
export class ConvertComponent {
  loading = false;
  selectedCurrency: ICurrency = {
    id: 11,
    currencyCode: 'EGP',
    flagUrl: 'https://flagcdn.com/h60/eg.png',
  };
  amount: number = 1;
  currencyFrom: ICurrency = this.selectedCurrency;
  currencyTo: ICurrency = this.selectedCurrency;
  result: number = 1;
  constructor(private appService: AppService) {}

  submit() {
    this.loading = true;
    let data: ICurrencyConvert = {
      from: this.currencyFrom.id,
      to: this.currencyTo.id,
      amount: this.amount,
    };

    this.appService.convert(data).subscribe({
      next: (res) => {
        this.result = res.result;
        this.loading = false;
      },
    });
  }

  getSelected(e: ICurrency) {
    console.log(e);
  }
}
