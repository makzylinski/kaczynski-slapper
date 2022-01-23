export default class NewUpgrade {
    upgradesList = document.querySelector('.upgrades__buildings-list')
    constructor() {
        this.createListItem();
    }

    createListItem() {
        const el = document.createElement('li');
        el.classList.add('upgrades__buildings-list-item');

        el.appendChild(this.createThumbnailContent());
        el.appendChild(this.createInfoContent());
        el.appendChild(this.createQuantityContent());

        this.upgradesList.appendChild(el);
    }

    createThumbnailContent() {     // TODO dynamic creation el based on passed data
        const thumbnailEl = document.createElement('div');
        thumbnailEl.classList.add('thumbnail');

        const avatar = document.createElement('img');

        thumbnailEl.appendChild(avatar);

        return thumbnailEl;
    }

    createInfoContent() {           // TODO as above
        const infoEl = document.createElement('div');
        infoEl.classList.add('info');

        // name cost
        const nameEl = document.createElement('div');
        nameEl.classList.add('name');
        nameEl.innerText = 'Julka';     // dummy data

        const costEl = document.createElement('div');
        costEl.classList.add('cost');
        costEl.innerText = 2137;

        infoEl.appendChild(nameEl);
        infoEl.appendChild(costEl);

        return infoEl;
    }

    createQuantityContent() {
        const quantityEl = document.createElement('div');
        quantityEl.classList.add('quantity');
        quantityEl.innerText = 5;
        return quantityEl;
    }
}