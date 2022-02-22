import { createStore } from 'vuex';
import nbcsportModule from './modules/nbcsport/index.js';
import bbcsportModule from './modules/bbcsport/index.js';
import skysportsModule from './modules/skysports/index.js';

// Create a new store instance.
const store = createStore({
    modules: {
        nbcsport: nbcsportModule,
        bbcsport: bbcsportModule,
        skysports: skysportsModule,
    }
})

export default store;