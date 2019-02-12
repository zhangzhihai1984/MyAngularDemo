import { trigger, transition, style, animate } from '@angular/animations';

export const Hi = '';
export const routeAnimation = trigger('routeAnimation', [
    transition('* <=> *', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
    ]),
    // transition('grid => *', [
    //     animate('2s', style({ opacity: 0 }))
    // ])
]);