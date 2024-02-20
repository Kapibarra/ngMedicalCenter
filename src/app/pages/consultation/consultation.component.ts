import { Component } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss',
})
export class ConsultationComponent {
  price = [
    { serviceName: 'Консультация терапевта', price: 1500 },
    { serviceName: 'Консультация кардиолога', price: 2000 },
    { serviceName: 'Консультация гинеколога', price: 1800 },
    { serviceName: 'Консультация офтальмолога', price: 1700 },
    { serviceName: 'Консультация уролога', price: 1600 },
    { serviceName: 'Консультация невролога', price: 1700 },
    { serviceName: 'Консультация педиатра', price: 1400 },
    { serviceName: 'Консультация лора', price: 1600 },
    { serviceName: 'Консультация стоматолога', price: 1800 },
    { serviceName: 'Консультация аллерголога', price: 1700 },
    { serviceName: 'Консультация дерматолога', price: 1600 },
    { serviceName: 'Консультация эндокринолога', price: 1800 },
    { serviceName: 'Консультация гастроэнтеролога', price: 1700 },
    { serviceName: 'Консультация травматолога', price: 1900 },
    { serviceName: 'Консультация хирурга', price: 2000 },
    { serviceName: 'Консультация онколога', price: 2200 },
    { serviceName: 'Консультация психиатра', price: 1800 },
    { serviceName: 'Консультация психолога', price: 1600 },
    { serviceName: 'Консультация гинеколога-эндокринолога', price: 1900 },
    { serviceName: 'Консультация невропатолога', price: 1700 },
  ];
}
