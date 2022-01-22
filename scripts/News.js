export default class News {
    infoArea = document.querySelector('.board__info--active');
    newsData = [];
    currentElement = null;

    constructor() {
        this.loadNews();
    }

    loadNews() {
        fetch("../data/news.json").then(data => {
            return data.json();
        }).then(jsonData => {
            this.newsData = jsonData;
            console.log(jsonData)

            this.pickNews();
        })
    }

    pickNews() {
        
    }
    
}