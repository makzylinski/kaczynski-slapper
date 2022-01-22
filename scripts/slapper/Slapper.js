import AppState from "../game_state/AppState.js";

const ADD = 'add';
const SPC = 'spc';

export default class Slapper {
    slapArea = document.querySelector('.slapper__head');
    slapsOverall = document.querySelector('.score');
    slapsPerSecond = document.querySelector('.per-second');
    slapperName = document.getElementById('slapper-name');

    constructor() {
        this.appState = new AppState();
        this.init();
    }

    init() {
        this.slapArea.addEventListener('click', this.onSlap);
        this.slapperName.addEventListener('keyup', this.onSlapperNameChange);
        this.slapperName.value = this.appState._sName;
        this.dataSyncInterval();
    }

    onSlapperNameChange = () => {
        this.appState._sName = this.slapperName.value;
    }

    onSlap = () => {                   // using ES6 arrow function here to keep 'this' context
        this.appState.calculateSlaps(ADD, SPC);
    }

    dataSyncInterval() {
        setInterval(() => {
            this.slapsOverall.textContent = this.appState._sOverall;
            
        }, 100);
    }
}