import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() {
    this.items = [
      {
        label: 'Главная',
        routerLink: '/home',
      },
      {
        label: 'Услуги',
        items: [
          {
            label: 'ЭЭГ',
            routerLink: '/',
          },
          {
            label: 'Электро кардиография',
            routerLink: '/',
          },
          {
            label: 'Рентгенография',
            routerLink: '/',
          },
        ],
      },
      {
        label: 'Анализы',
        items: [
          {
            label: 'Анализ крови',
            routerLink: '/',
          },
          {
            label: 'Анализ мочи',
            routerLink: '/',
          },
          // Добавьте здесь другие анализы
        ],
      },
      {
        label: 'Профосмотры',
        items: [
          {
            label: 'Детский профосмотр',
            routerLink: '/services/child-checkup',
          },
          {
            label: 'Взрослый профосмотр',
            routerLink: '/',
          },
          // Добавьте здесь другие профосмотры
        ],
      },
      {
        label: 'Организациям',
        routerLink: '/',
      },
      {
        label: 'О нас',
        routerLink: '/',
      },
      {
        label: 'Контакты',
        routerLink: '/',
      },
    ];
  }

  ngOnInit(): void {}
}
