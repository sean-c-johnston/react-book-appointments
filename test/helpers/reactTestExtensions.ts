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

export const submit = (form: HTMLFormElement) => {
    const event = new Event("submit", {bubbles: true, cancelable: true});
    act(() => form.dispatchEvent(event)).then(() => {});
    return event;
};

export const element = <T extends HTMLElement>(selector: string) =>
    document.querySelector(selector) as T;

export const elements = <T extends HTMLElement>(selector: string) =>
    Array.from(document.querySelectorAll(selector)) as T[];

export const typesOf = (elements: Element[]) =>
    elements.map(e => e.nodeName);

export const textOf = (elements: Element[]) =>
    elements.map(e => e.textContent);


export const originalValueProperty = (reactElement: Element) => {
    const prototype = Object.getPrototypeOf(reactElement);
    return Object.getOwnPropertyDescriptor(prototype, "value");
}
export const change = (target: Element, value: any) => {
    originalValueProperty(target).set.call(target, value);
    const event = new Event("change", {bubbles: true});

    act(() => target.dispatchEvent(event)).then(() => {});
}