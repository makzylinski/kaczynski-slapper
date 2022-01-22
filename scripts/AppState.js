export default class AppState {
    _sps = 0; // sps stands for slaps per second
    _spc = 0; // spc stands for slaps per click

    constructor() {

    }

    calculateSlaps(mode, value, slapType) {
        if (mode === 'add') {
            console.log(slapType)
        }
    }

    saveSlapsData() {
        localStorage.setItem('slapsData', JSON.stringify({_spc: this._spc, _sps: this._sps}));
    }

    getSlapsData() {
        const localSlapsData = JSON.parse(localStorage.getItem('slapsData'));
        console.log(localSlapsData);
    }

}