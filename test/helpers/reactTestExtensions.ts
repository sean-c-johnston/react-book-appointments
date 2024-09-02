import {act, ReactNode} from "react";
import ReactDOM from "react-dom/client";

export let container: Element;

export const initializeReactContainer = () => {
    container = document.createElement('div');
    document.body.replaceChildren(container);
}

export const render = (component: ReactNode) => act(() => {
    ReactDOM.createRoot(container)
        .render(component)
});

export const click = (button: HTMLElement) => {
    act(() => button.click());
};

export const element = <T extends HTMLElement>(selector: string) =>
    document.querySelector(selector) as T;

export const elements = <T extends HTMLElement>(selector: string) =>
    Array.from(document.querySelectorAll(selector)) as T[];

export const typesOf = (elements: Element[]) =>
    elements.map(e => e.nodeName);

export const textOf = (elements: Element[]) =>
    elements.map(e => e.textContent);