import { AfterViewInit, ViewChild } from '@angular/core';
import { Component }                from '@angular/core';
import { CountdownViewChildTimerComponent} from './countdown-timer-vc.component';

@Component(
    {
        selector: 'app-countdown-parent-viewchild',
        templateUrl: './countdown-parent-vc.component.html',
        styleUrls: ['./../../assets/demo.scss']
    }
)

export class CountdownViewChildParentComponent implements AfterViewInit{

    @ViewChild(CountdownViewChildTimerComponent)
    private timerComponent: CountdownViewChildTimerComponent;

    seconds() {return 0;}

    ngAfterViewInit() {
        // Redefine 'seconds()' to get 
        // from the 'CountdownViewChildTimerComponent.seconds' ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error

        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }

    start() {this.timerComponent.start();}
    stop() {this.timerComponent.stop();}
}