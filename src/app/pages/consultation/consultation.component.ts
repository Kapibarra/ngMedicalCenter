import { Component } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss',
})
export class ConsultationComponent {
  price = [
    {
      serviceName: 'Консультация терапевта',
      price: 1500,
      duration: '30 минут',
    },
    {
      serviceName: 'Консультация кардиолога',
      price: 2000,
      duration: '40 минут',
    },
    {
      serviceName: 'Консультация гинеколога',
      price: 1800,
      duration: '30 минут',
    },
    {
      serviceName: 'Консультация офтальмолога',
      price: 1700,
      duration: '30 минут',
    },
    { serviceName: 'Консультация уролога', price: 1600, duration: '30 минут' },
    {
      serviceName: 'Консультация невролога',
      price: 1700,
      duration: '40 минут',
    },
    { serviceName: 'Консультация педиатра', price: 1400, duration: '30 минут' },
    { serviceName: 'Консультация лора', price: 1600, duration: '30 минут' },
    {
      serviceName: 'Консультация стоматолога',
      price: 1800,
      duration: '40 минут',
    },
    {
      serviceName: 'Консультация аллерголога',
      price: 1700,
      duration: '30 минут',
    },
    {
      serviceName: 'Консультация дерматолога',
      price: 1600,
      duration: '30 минут',
    },
    {
      serviceName: 'Консультация эндокринолога',
      price: 1800,
      duration: '40 минут',
    },
    {
      serviceName: 'Консультация гастроэнтеролога',
      price: 1700,
      duration: '30 минут',
    },
    {
      serviceName: 'Консультация травматолога',
      price: 1900,
      duration: '40 минут',
    },
    { serviceName: 'Консультация хирурга', price: 2000, duration: '40 минут' },
    { serviceName: 'Консультация онколога', price: 2200, duration: '60 минут' },
    {
      serviceName: 'Консультация психиатра',
      price: 1800,
      duration: '30 минут',
    },
    {
      serviceName: 'Консультация психолога',
      price: 1600,
      duration: '30 минут',
    },
    {
      serviceName: 'Консультация гинеколога-эндокринолога',
      price: 1900,
      duration: '40 минут',
    },
    {
      serviceName: 'Консультация невропатолога',
      price: 1700,
      duration: '30 минут',
    },
  ];
}
