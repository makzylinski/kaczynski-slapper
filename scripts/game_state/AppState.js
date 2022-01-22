export default class AppState {
    _sOverall = 0; // slaps overall
    _sps = 0; // slaps per second
    _spc = 1; // slaps per click

    constructor() {
        this.init();
    }

    calculateSlaps(mode, slapType) {
        console.log('calculateSlaps')
        if (mode === 'add') {
            this.addValue(slapType);
        } else if (mode === 'subtract') {
            this.subtractValue(slapType);
        }

        this.saveSlapsData();
    }

    init() {
        this.saveSlapsData();
        // this.slapsInterval();
    }

    slapsInterval() {
        const slapInterval = setInterval(() => {
            this._sOverall += this.addValue('sps');
            console.log('interval')
        }, 1000)
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
        localStorage.setItem('slapsData', JSON.stringify({_spc: this._spc, _sps: this._sps}));
    }

    getSlapsData() {
        const localSlapsData = JSON.parse(localStorage.getItem('slapsData'));
        console.log(localSlapsData);
    }
}