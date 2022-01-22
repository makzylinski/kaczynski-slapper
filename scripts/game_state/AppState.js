export default class AppState {
    _sName = ''; // slapper name
    _sOverall = 0; // slaps overall
    _sps = 2; // slaps per second
    _spc = 1; // slaps per click

    constructor() {
        this.init();
    }

    calculateSlaps(mode, slapType) {
        if (mode === 'add') {
            this.addValue(slapType);
        } else if (mode === 'subtract') {
            this.subtractValue(slapType);
        }
    }

    init() {
        this.slapsInterval();
        this.getSlapsData();
        this.gameAutosave();
    }

    slapsInterval() {
        const slapInterval = setInterval(() => {
            this.addValue('sps', this._sps);
        }, 1000)
    }

    gameAutosave() {
        const autosaveInterval = setInterval(() => {
            this.saveSlapsData();
        }, 3000)
    }

    addValue(slapType) {
        switch (slapType) {             // putting switch here cuz thinkin about more slap types in future
            case 'sps':
                this._sOverall += this._sps;
                break;
            case 'spc': 
                this._sOverall += this._spc;
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
        localStorage.setItem('slapsData', JSON.stringify({
                _sName: this._sName,
                _sOverall: this._sOverall,
                _spc: this._spc,
                _sps: this._sps
            }));
    }

    getSlapsData() {
        const localSlapsData = JSON.parse(localStorage.getItem('slapsData'));
        this._sName = localSlapsData._sName;
        this._sOverall = localSlapsData._sOverall;
        this._sps = localSlapsData._sps;
        this._spc = localSlapsData._spc;
    }
}