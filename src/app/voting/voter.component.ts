import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component(
    {
        selector: 'app-voter',
        templateUrl: './voter.component.html'
    }
)

export class VoterComponent {
    @Input() name: string;
    @Output() voted = new EventEmitter<boolean>();

    didVote = false;

    vote(agreed: boolean){
        this.didVote = true;
        this.voted.emit(agreed);
    }
}