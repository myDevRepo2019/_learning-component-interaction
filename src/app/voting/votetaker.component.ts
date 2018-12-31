import {Component} from '@angular/core';

@Component(
     {
         selector: 'app-votetaker',
         templateUrl: './voteteker.component.html'
     }
)

export class VoteTakerComponent{
    voters = ['Voter 1', 'Voter 2', 'Voter 3'];
    agreed=0;
    disagreed=0;

    onVoted(agreed: boolean){
        agreed ? this.agreed++ : this.disagreed++; 
    }
}