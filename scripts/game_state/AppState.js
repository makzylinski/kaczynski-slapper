export default class AppState {
    _sps = 0; // sps stands for slaps per second
    _spc = 0; // spc stands for slaps per click

    constructor() {
        this.init();
    }

    init() {
        this.saveSlapsData();
    }

    calculateSlaps(mode, value, slapType) {
        if (mode === 'add') {
            this.addValue(value, slapType);
        } else if (mode === 'subtract') {
            this.subtractValue(value, slapType);
        }

        this.saveSlapsData();
    }

    addValue(value, slapType) {
        switch (slapType) {             // putting switch here cuz thinkin about more slap types in future
            case 'sps':
                this._sps += value;
                break;
            case 'spc': 
                this._spc += value;
                break;
        }
    }

    subtractValue(value, slapType) {
        switch (slapType) {
            case 'sps':
                this._sps -= value;
                break;
            case 'spc':
                this._spc -= value;
                break;
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