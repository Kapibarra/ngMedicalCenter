import { Component } from '@angular/core';

@Component({
  selector: 'app-prof-osmotr-org',
  templateUrl: './prof-osmotr-org.component.html',
  styleUrl: './prof-osmotr-org.component.scss',
})
export class ProfOsmotrOrgComponent {
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
