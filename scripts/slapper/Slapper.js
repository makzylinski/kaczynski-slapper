export default class Slapper {
    slapArea = document.querySelector('.slapper__head');

    constructor() {
        console.log('eeeeelo')
        this.slapArea.addEventListener('click', this.onSlap)
    }

    onSlap() {
        console.log('slapped')
    }
}