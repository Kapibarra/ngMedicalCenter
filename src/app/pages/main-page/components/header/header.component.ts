import { Component, OnInit } from '@angular/core';
import { Metrika } from 'ng-yandex-metrika';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor(private metrika: Metrika) {
    this.items = [
      {
        label: 'Главная',
        routerLink: '/',
      },
      {
        label: 'Профосмотры',
        icon: 'pi pi-fw pi-user',
        routerLink: '/prof-osmotr',
        command: () => {
          this.onClickProf();
        },
      },
      {
        label: 'Медкнижки',
        icon: 'pi pi-fw pi-book',
        routerLink: '/medical-books',
        command: () => {
          this.onClickBooks();
        },
      },
      {
        label: 'Организациям',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Телефон: 8(925) 741-00-03',
            command: () => {
              this.callNumber('+79257410003');
              this.onClickPhone();
            },
          },
          {
            label: 'Телефон: 8(495) 542-60-17',
            command: () => {
              this.callNumber('+74955426017');
              this.onClickPhone();
            },
          },
          {
            label: 'Предварительный/Периодический медицинский осмотр',
            routerLink: '/medical-checkup',
            command: () => {
              this.onClickProfOrg();
            },
          },
          {
            label: 'Психиатрическое освидетельствование',
            routerLink: '/psychology',
            command: () => {
              this.onClickProfPsy();
            },
          },
          {
            label: 'Личные медицинские книжки',
            routerLink: '/medical-books',
            command: () => {
              this.onClickBooksOrg();
            },
          },
          {
            label: 'Организация медицинского пункта на предприятии',
            routerLink: '/medical-clinic',
          },
        ],
      },
      {
        label: 'Справки',
        routerLink: '/certificates',
        command: () => {
          this.onClickCert();
        },
      },
      {
        label: 'Анализы',
        icon: 'pi pi-fw pi-check-circle',
        routerLink: '/medical-tests',
        command: () => {
          this.onClickTests();
        },
      },
      {
        label: 'О нас',
        routerLink: '/about',
      },
      {
        label: 'Контакты',
        routerLink: '/contacts',
        icon: 'pi pi-fw pi-at',
        command: () => {
          this.onClickContacts();
        },
      },
    ];
  }

  ngOnInit(): void {}

  callNumber(phoneNumber: string) {
    window.location.href = 'tel:' + phoneNumber;
  }
  onClickProf() {
    this.metrika.reachGoal('profosmotr');
    console.log('prof.metrika');
  }
  onClickBooks() {
    this.metrika.reachGoal('books');
  }
  onClickTests() {
    this.metrika.reachGoal('tests');
  }
  onClickCert() {
    this.metrika.reachGoal('certificates');
  }
  onClickPhone() {
    this.metrika.reachGoal('phone');
  }
  onClickProfOrg() {
    this.metrika.reachGoal('profosmotrorg');
  }
  onClickProfPsy() {
    this.metrika.reachGoal('psy');
  }
  onClickBooksOrg() {
    this.metrika.reachGoal('books');
  }
  onClickContacts() {
    this.metrika.reachGoal('contacts');
  }
}
