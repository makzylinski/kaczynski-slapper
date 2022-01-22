import AppState from "../game_state/AppState.js";

const ADD = 'add';
const SPC = 'spc';

export default class Slapper {
    slapArea = document.querySelector('.slapper__head');
    slapsOverall = document.querySelector('.score');
    slapsPerSecond = document.querySelector('.per-second');

    constructor() {
        this.appState = new AppState();
        this.slapArea.addEventListener('click', this.onSlap);
        this.dataSyncInterval();
    }

    onSlap = () => {                   // using ES6 arrow function here to keep 'this' context
        console.log(this.appState);
        this.appState.calculateSlaps(ADD, SPC);
    }

    dataSyncInterval() {
        setInterval(() => {
            this.slapsOverall.textContent = this.appState._sOverall;
        }, 1000);
    }
}