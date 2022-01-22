import AppState from "./state.js";
import Slapper from "./slapper/slapper.js";

const state = new AppState();
const c = new Slapper();

state.saveSlapsData();
state.getSlapsData();