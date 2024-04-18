import { Component } from '@angular/core';

@Component({
  selector: 'app-psychology',
  templateUrl: './psychology.component.html',
  styleUrl: './psychology.component.scss',
})
export class PsychologyComponent {
  price = [
    {
      serviceName: 'Временные и постоянные работники различных отраслей;',
      price: 1500,
      duration: '3 рабочих дня',
    },
    {
      serviceName:
        'Определенные категории сотрудников, выделенные по решению муниципального руководства;',
      price: 2500,
      duration: '3 рабочих дня',
    },
    {
      serviceName:
        'Соискатели на должность со специфическими трудовым условиями (на транспорте, на высотных объектах, с оружием, в условиях повышенной опасности, в соприкосновении с химикатами и взрывчатыми веществами);',
      price: 4000,
      duration: '3 рабочих дня',
    },
    {
      serviceName:
        'Претенденты на трудоустройство в социально-бытовом секторе (учебных и лечебных заведениях, общепите, сфере торговли и т. д.).',
      price: 2200,
      duration: '3 рабочих дня',
    },
  ];
}
