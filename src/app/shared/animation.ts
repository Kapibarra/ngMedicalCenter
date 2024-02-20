import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

export const routerAnimation = trigger('routerAnimation', [
  transition('* <=> *', [
    animate(
      '1s',
      keyframes([
        style({ opacity: 0, transform: 'translateY(-50px)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateY(20px)', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
      ])
    ),
  ]),
]);
