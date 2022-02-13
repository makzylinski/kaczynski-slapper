import SlapsState from "./game_state/SlapsState.js";

const ADD = 'add';
const SPC = 'spc';

export default class Slapper {
    slapArea = document.querySelector('.slapper__head');
    slapsOverall = document.querySelector('.score');
    slapsPerSecond = document.querySelector('.per-second');
    slapperName = document.getElementById('slapper-name');

    constructor() {
        this.slapsState = new SlapsState();
        this.init();
    }

    init() {
        this.slapArea.addEventListener('click', this.onSlap);
        this.slapperName.addEventListener('keyup', this.onSlapperNameChange);
        this.slapperName.value = this.slapsState._sName;
        this.dataSyncInterval();
    }

    onSlapperNameChange = () => {
        this.slapsState._sName = this.slapperName.value;
    }

    onSlap = () => {                   // using ES6 arrow function here to keep 'this' context
        this.slapsState.calculateSlaps(ADD, SPC);
    }

    dataSyncInterval() {
        setInterval(() => {
            this.slapsOverall.textContent = this.slapsState._sOverall;
            
        }, 100);
    }
}