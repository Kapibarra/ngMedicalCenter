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
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'Терапия и экспертиза временной недееспособности',
            routerLink: '/',
          },
          {
            label: 'Гинекология и ведение беременности',
            routerLink: '/',
          },
          {
            label: 'Функциональная диагностика',
            routerLink: '/',
          },
          {
            label: 'Ультразвуковые исследования',
            routerLink: '/',
          },
          {
            label: 'Рентгенология',
            routerLink: '/',
          },
          {
            label: 'Медицинские справки, выписки заключение',
            routerLink: '/',
          },
          {
            label: 'Профосмотры и личные медицинские книжки',
            routerLink: '/',
          },
          {
            label: 'Лабораторная диагностика',
            routerLink: '/',
          },
        ],
      },
      {
        label: 'Анализы',
        icon: 'pi pi-fw pi-chart-bar',
        items: [
          {
            label: 'Общеклинические анализы',
            routerLink: '/',
          },
          {
            label: 'Биохимия крови',
            routerLink: '/',
          },
          {
            label: 'Гормоны',
            routerLink: '/',
          },
          {
            label: 'Онкомаркеры',
            routerLink: '/',
          },
          {
            label: 'Иммунологические исследования',
            routerLink: '/',
          },
          {
            label: 'Микробиологические анализы',
            routerLink: '/',
          },
        ],
      },
      {
        label: 'Профосмотры и личные медицинские книжки',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Профилактический медицинский осмотр',
            routerLink: '/',
          },
          {
            label: 'Дополнительные профилактические исследования',
            routerLink: '/',
          },
          {
            label: 'Медицинские осмотры для учебы и работы',
            routerLink: '/',
          },
          {
            label:
              'Медицинская справка для получения или замены водительского удостоверения',
            routerLink: '/',
          },
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
        routerLink: '/contacts',
      },
    ];
  }

  ngOnInit(): void {}
}
