import {
    trigger,
    transition,
    style,
    stagger,
    animate,
    query
} from '@angular/animations';

export const pageAnimation = trigger('pageAnimation', [
    transition(':enter', [
        query('mat-card', [
            style({
                opacity: 0,
                transform: 'translateY(-100px)'
            }),
            stagger(-30, [
                animate('0.3s', style({
                    opacity: 1,
                    transform: 'none'
                }))
            ])
        ])
    ])
]);