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
        routerLink: '/',
      },
      {
        label: 'Профосмотры',
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'Консультация врачей',
            routerLink: '/consultation',
          },
        ],
      },
      {
        label: 'Медкнижки',
        icon: 'pi pi-fw pi-chart-bar',
        items: [
          {
            label: 'Общеклинические анализы',
            routerLink: '/',
          },
        ],
      },
      {
        label: 'Организациям',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Профилактический медицинский осмотр',
            routerLink: '/',
          },
          {
            label: 'Психиатрическое освидетельствование',
            routerLink: '/',
          },
          {
            label: 'Личные медицинские книжки',
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
        label: 'Справки',
        routerLink: '/certificates',
      },
      {
        label: 'О нас',
        routerLink: '/about',
      },
      {
        label: 'Контакты',
        routerLink: '/contacts',
      },
    ];
  }

  ngOnInit(): void {}
}
