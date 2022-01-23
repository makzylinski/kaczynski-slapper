import NewUpgrade from "./components/NewUpgrade.js";
import News from "./News.js";
import Slapper from "./Slapper.js";
import Upgrades from "./Upgrades.js";

export default class App {
    static init() {
        const slapper = new Slapper();
        const news = new News();
        const upgrades = new Upgrades();
        const test = new NewUpgrade();     // to delete
    };
}