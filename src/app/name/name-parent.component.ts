import {Component} from '@angular/core';

@Component(
    {
        selector: 'app-name-parent',
        templateUrl: './name-parent.component.html'
    }
)

export class NameParentComponent {
    names = ['Mr. IQ', '    ', '   Bombasto  '];
}
