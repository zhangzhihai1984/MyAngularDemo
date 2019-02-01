import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const openCloseAnim = trigger('openClose', [
    state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
    })),
    state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
    })),
    transition('* => close', [
        style({
            opacity: 0.6
        }),
        animate('2.5s', style({
            // transform: 'scale(1.2)',
            opacity: 0,
            // height: '0px'
            // backgroundColor: 'red'
        })),

    ]),
    transition('close => open', animate('1000ms', keyframes([
        style({ backgroundColor: 'blue' }),
        style({ backgroundColor: 'red' })
    ]))),
    transition(':enter', [
        style({
            transform: 'translateX(-100%)'
        }),
        animate(500, style({
            transform: 'translateX(0)'
        }))])
]);

export const insertRemoveAnim = trigger('insertRemove', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        animate('3s', style({ opacity: 0 }))
    ])
]);

export const openCloseAnim2 = trigger('openClose2', [
    state('true', style({ height: '60px' })),
    state('false', style({ height: '0px' })),
    transition('true <=> false', animate(500))
]);