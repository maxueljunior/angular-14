import { animate, keyframes, query, stagger, style, transition, trigger } from "@angular/animations";

export const searchBooksTrigger = trigger('searchBooksAnimate', [
    transition('* => *', [
        query(':enter',[
            style({
                transform: 'translateX(-100%)',
                opacity: 0
            }),
            stagger(200, [
                animate('500ms ease-out', keyframes([
                    style({offset:0,transform: 'translateX(-100%)', opacity: 0}),
                    style({offset:0.7,transform: 'translateX(15%)', opacity: 0.7}),
                    style({offset:1,transform: 'translateX(0%)', opacity: 1})
                ]))
            ])
        ], {optional: true}),
        query(':leave', [
            style({
                transform: 'translateX(0%)',
                opacity: 1
            }),
            stagger(200, [
                animate('500ms ease-out', keyframes([
                    style({offset:0,transform: 'translateX(0%)', opacity: 1}),
                    style({offset:0.7,transform: 'translateX(15%)', opacity: 0.7}),
                    style({offset:1,transform: 'translateX(-100%)', opacity: 0})
                ]))
            ])
        ], {optional: true})
    ]),
])