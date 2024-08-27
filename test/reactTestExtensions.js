import {act} from "react";
import ReactDOM from "react-dom/client";

export let container;

export const initializeReactContainer = () => {
    container = document.createElement('div');
    document.body.replaceChildren(container);
}

export const render = component => act(() => {
    ReactDOM.createRoot(container)
        .render(component)
});

export const click = (button) => {
    act(() => button.click());
};

export const element = (selector) => document.querySelector(selector);
export const elements = (selector) => Array.from(document.querySelectorAll(selector));
export const typesOf = (elements) => elements.map(e => e.type);
export const textOf = (elements) => elements.map(e => e.textContent);

export const testing = (c) => {
    return "test";
    let x = "what";
}