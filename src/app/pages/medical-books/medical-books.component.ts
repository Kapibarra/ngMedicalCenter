import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-books',
  templateUrl: './medical-books.component.html',
  styleUrl: './medical-books.component.scss',
})
export class MedicalBooksComponent {
  price = [
    {
      serviceName: 'Детские оздоровительные учреждения:',
      price: 3200,
      price2: 2700,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Дополнительное образование:',
      price: 3200,
      price2: 2700,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Дошкольные образовательные учреждения:',
      price: 3200,
      price2: 2800,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Общеобразовательные учреждения: ',
      price: 3200,
      price2: 2700,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Средне специальные учебные заведения: ',
      price: 3200,
      price2: 2800,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'ВУЗ',
      price: 3200,
      price2: 'нет',
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Социальные учреждения: ',
      price: 3200,
      price2: 2800,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Медицинская деятельность: ',
      price: 3200,
      price2: 'нет',
      price3: 1800,
      duration: '3 рабочих дня',
    },

    {
      serviceName: 'Коммунально-бытовое  обслуживание: ',
      price: 3200,
      price2: 2700,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Коммунально-бытовое обслуживание (медики студ):',
      price: 3200,
      price2: 3000,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Продовольственные рынки:',
      price: 3200,
      price2: 2800,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Продукты (кроме рынков): ',
      price: 3200,
      price2: 2800,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Пром. Рынок:',
      price: 3200,
      price2: 2800,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Пром. торговля: ',
      price: 3200,
      price2: 2800,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Пассажирский транспорт: ',
      price: 3200,
      price2: 2700,
      price3: 1800,
      duration: '3 рабочих дня',
    },
    {
      serviceName: 'Пр-во и реализ. лекарств. средств',
      price: 3200,
      price2: 2800,
      price3: 1800,
      duration: '3 рабочих дня',
    },
  ];
}
