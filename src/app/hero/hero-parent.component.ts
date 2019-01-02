import { Component} from '@angular/core';

import { HEROES } from '../hero';
import {Subject} from 'rxjs';

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

        // display "Anyname" in the console log, but using an encapsulated
        // object that contains a proper function doing that
        let obj = {
            name: "Anyname",
            saylater: function() {
                console.log(this.name);
            }
        };
        obj.saylater();

        // doing the same with a delay
        let obj1 = {
            name: "Anyname1",
            saylater: function() {
                // this line here is necessary to reference to the correct level
                // otherwise it display nothing or undefined
                let anyBlabla = this;
                setTimeout(function() {
                    console.log(anyBlabla.name);
                }
                , 2000);
            }
        };
        obj1.saylater();

        // doing the same with fat arrow syntax
        let obj2 = {
            name: "Anyname2",
            saylater: function() {
                setTimeout(() => {
                    // here we can use "this" again without limitations
                    console.log(this.name);
                }
                , 3000);
            }
        };
        obj2.saylater();

        // creating and subscribing to a basis Subject-Observable
        const subject = new Subject();
        subject.next('missing message from Subject');
        subject.subscribe(v => console.log(v));
        subject.next('hello from subject');
        subject.next('another text');

    }

}
