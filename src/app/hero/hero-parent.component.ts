import { Component} from '@angular/core';

import { HEROES } from '../hero';

@Component(
    {
        selector: 'app-hero-parent',
        templateUrl: './hero-parent.component.html'
    }
)

export class HeroParentComponent {
    heroes = HEROES;
    master = 'Master';

    constructor() {

        // Fat Arrow usage
        // Original JS usage
        const add = function(a, b) { return a + b; };
        console.log(add(1, 2));

        // new ES6 fat arrow usage
        const add1 = (a, b) => { return a + b; };
        console.log(add1(5, 7));

        // further simplified fat arrow usage, if code is in one line
        const add2 = (a, b) =>  a + b;
        console.log(add2(3, 5));

    }

}
