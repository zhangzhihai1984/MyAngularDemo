import {
    trigger,
    transition,
    style,
    animate,
    query,
    state
} from '@angular/animations';

export const detailRowAnimation = trigger('detailRowAnimation', [
    state('collapsed', style({
        height: '0px',
        display: 'none'
    })),
    state('expanded', style({
        height: '*'
    })),
    transition('collapsed <=> expanded', [
        animate('0.5s cubic-bezier(0.4, 0.0, 0.2, 1)')
    ])
]);