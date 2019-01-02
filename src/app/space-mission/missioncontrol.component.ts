import {Component} from '@angular/core';
import { MissionService } from './mission.service';


@Component({
    selector: 'app-missioncontrol',
    templateUrl: './missioncontrol.component.html',
    providers: [MissionService]
})

export class MissionControlComponent {

    astronauts = ['Astronaut1', 'Astronaut2', 'Astronaut3'];
    history: string[] = [];
    missions = ['Mission 1', 'Mission 2', 'Mission 3'];
    missionCounter = 0;

    constructor(private missionService: MissionService) {
        missionService.missionConfirmed$.subscribe(
            astronaut => {
                this.history.push(`${astronaut} confirmed the mission`)
            }
        );
    }

    announceMission() {
        const currentMission = this.missions[this.missionCounter++];
        console.log(currentMission);
        this.missionService.announceMission(currentMission);
        this.history.push(`mission ${currentMission} has been announced`);
        if (this.missionCounter >= this.missions.length) {this.missionCounter = 0; }

    }
}
