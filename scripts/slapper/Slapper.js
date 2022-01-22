import AppState from "../game_state/AppState.js";

const ADD = 'add';
const SPC = 'spc';

export default class Slapper {
    slapArea = document.querySelector('.slapper__head');

    constructor() {
        this.appState = new AppState();
        this.slapArea.addEventListener('click', this.onSlap);
    }

    onSlap = () => {                   // using ES6 arrow function here to keep 'this' context
        console.log(this.appState);
        this.appState.calculateSlaps(ADD, SPC);
    }
}