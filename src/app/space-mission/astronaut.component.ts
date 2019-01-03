import {Component, Input, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from './mission.service';


@Component({
    selector: 'app-astronaut',
    templateUrl: './astronaut.component.html'
})

export class AstronautComponent implements OnDestroy{
    @Input() astronaut: string;

    subscription: Subscription;
    mission = '<currently no mission>';
    buttonDisabled = false;

    isMissionAnnounced = false;
    isMissionConfirmed = false;

    constructor(private missionService: MissionService) {
        this.subscription = missionService.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.isMissionAnnounced = true;
                this.isMissionConfirmed = false;
                this.updateButtonStatus();
            }
        );
    }

    confirmMission(astronaut: string) {
        this.isMissionConfirmed = true;
        this.missionService.confirmMission(this.astronaut);

        this.updateButtonStatus();
    }

    updateButtonStatus() {
        if (this.isMissionAnnounced && this.isMissionConfirmed) {
            this.buttonDisabled = true;
        } else {
            this.buttonDisabled = false;
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
