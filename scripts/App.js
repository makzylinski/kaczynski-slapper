import AppState from "./AppState.js";
import Slapper from "./slapper/Slapper.js";

export default class App {
    constructor() {
        console.log('App');
        
        const state = new AppState();
        const c = new Slapper();
        
        state.saveSlapsData();
        state.getSlapsData();
    }

    
}