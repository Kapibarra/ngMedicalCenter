import { Component } from '@angular/core';
import { Metrika } from 'ng-yandex-metrika';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  constructor(private metrika: Metrika) {}
  onClickPhoneOrg() {
    this.metrika.reachGoal('phone-org');
  }
  onClickPhoneReg() {
    this.metrika.reachGoal('phone-reg');
  }
}
