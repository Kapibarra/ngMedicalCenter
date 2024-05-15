import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss',
})
export class CertificateComponent {
  price = [
    {
      serviceName: 'Справка для ГИБДД',
      price: 1000,
      duration: '-',
    },
    {
      serviceName: 'Для работы, учебы 086-у',
      price: 1500,
      duration: '-',
    },
    {
      serviceName: 'Справка в бассейн',
      price: 500,
      duration: '-',
    },
    {
      serviceName: 'Справка в бассейн с анализами',
      price: 1000,
      duration: '-',
    },
    {
      serviceName: 'Справка для управления маломерными судами',
      price: 2000,
      duration: '-',
    },
    {
      serviceName: 'Справки 001-ГСУ/У для госслужбы',
      price: 1800,
      duration: '-',
    },
    {
      serviceName: 'Справка для доступа к гостайне 989-Н',
      price: 1700,
      duration: '-',
    },
    {
      serviceName: 'Санаторно курортная карта 072-у',
      price: 1600,
      duration: '-',
    },
    {
      serviceName: 'Справки на спорт (без стоимости анализов) ',
      price: 1700,
      duration: '6 месяцев',
    },
  ];
}
