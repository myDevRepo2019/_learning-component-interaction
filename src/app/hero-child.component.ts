import {Component, Input} from '@angular/core';

import {Hero} from './hero';

@Component(
    {
        selector: 'app-hero-child',
        templateUrl: './hero-child.component.html'
    }
)

export class HeroChildComponent {
    @Input() hero: Hero;
    // tslint:disable-next-line:no-input-rename
    @Input('master') masterName: string;
}
