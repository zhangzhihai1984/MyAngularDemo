import {
    trigger,
    transition,
    style,
    animate,
    group,
    query,
    animateChild
} from '@angular/animations';

/**
 * During a transition, a new view is inserted directly after the old one and
 * both elements appear on screen at the same time. To prevent this, apply
 * additional styling to the host view, and to the removed and inserted child
 * views. The host view must use relative positioning, and the child views must
 * use absolute positioning. Adding styling to the views animates the containers
 * in place, without the DOM moving things around.
 */

/**
 * `query(":enter, :leave")` returned zero elements.
 * (Use `query(":enter, :leave", { optional: true })`
 * if you wish to allow this.)
 *
 * **optional**
 *
 * A required query throws an error if no elements are retrieved when
 * the query is executed. An optional query does not.
 */

/**
 * **animateChild**
 *
 * Each time an animation is triggered in Angular, the parent animation
 * has priority and any child animations are blocked. In order for a child
 * animation to run, the parent animation must query each of the elements
 * containing child animations, and run them using this function.
 *
 * Note that this feature designed to be used with query() and it will only
 * work with animations that are assigned using the Angular animation library.
 * CSS keyframes and transitions are not handled by this API.
 */

export const routeAnimation = trigger('routeAnimation', [
    transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        query(':enter', style({ left: '-100%' }), { optional: true }),
        query(':enter', animateChild(), { optional: true }),
        group([
            query(':enter', [
                animate('.3s', style({ left: '0%' }))
            ], { optional: true }),
            query(':leave', [
                animate('.3s', style({ left: '100%' }))
            ], { optional: true })
        ])
    ])
]);