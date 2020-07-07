// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";
import {NodeFetchHelper} from "./NodeFetchHelper";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        countries: null,
        selectedIndex: 0,
    },
    actions: {
        setCountried({state}, countries) {
            state.countries = countries
        },
        setSelectedIndex({state}, index) {
            state.selectedIndex = index
        },
    }
});
