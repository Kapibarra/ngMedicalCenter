import { Component } from '@angular/core';

@Component({
  selector: 'app-prof-osmotr',
  templateUrl: './prof-osmotr.component.html',
  styleUrl: './prof-osmotr.component.scss',
})
export class ProfOsmotrComponent {
  price = [
    {
      serviceName: ' Медицинский осмотр - мужчина',
      price: 2500,
      duration: '-',
    },
    {
      serviceName: 'Медицинский осмотр – женщина ',
      price: 2800,
      duration: '-',
    },
    {
      serviceName: 'Медицинский осмотр – женщина после 40 лет',
      price: 3000,
      duration: '-',
    },
  ];
}
