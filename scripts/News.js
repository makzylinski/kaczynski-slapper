export default class News {
    infoArea = document.querySelector('.board__info--active');
    newsData = [];

    constructor() {
        this.loadNews();
    }

    loadNews() {
        fetch("../data/news.json").then(data => {
            return data.json();
        }).then(jsonData => {
            this.newsData = jsonData;

            this.newsChange();
        })
    }

    pickNews() {
        const randomNewsIndex = Math.floor(Math.random() * this.newsData.news.length);
        this.infoArea.innerText = this.newsData.news[randomNewsIndex].value;
    }

    newsChange() {
        const newsInterval = setInterval(() => {
            this.pickNews();
        }, 10000)
    }
    
}