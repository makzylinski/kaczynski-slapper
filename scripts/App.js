import News from "./News.js";
import Slapper from "./Slapper.js";

export default class App {
    static init() {
        const slapper = new Slapper();
        const news = new News();
    };
}