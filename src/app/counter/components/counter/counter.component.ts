import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{ counter }}</h3>
    <button   button (click)="increaseBy(-1)">-1</button>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <hr />
    `
})

// template: '<h1>Hola Counter</h1>', sería un Template en línea.
//Con backtips

export class CounterComponent {
    public counter: number = 10

    increaseBy(value: number): void {
        this.counter += value;
    }
    resetCounter() {
        this.counter = 10
    }
    constructor() { }
}