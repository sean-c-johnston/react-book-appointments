import React from 'react';
import ReactDOM from 'react-dom/client';

import {Appointment} from '../src/Appointment'
import {act} from "react";

describe("Appointment", () => {
    it("renders the customer's first name", () => {
        const customer = {firstName: "Sean"};
        const component = <Appointment customer={customer}/>;

        const container = document.createElement("div");
        document.body.replaceChildren(container);

        act(() =>
            ReactDOM.createRoot(container).render(component));

        expect(document.body.textContent).toContain("Sean");
    });

    it("renders a different customer's first name", () => {
        const customer = {firstName: "Sophie"};
        const component = <Appointment customer={customer}/>;

        const container = document.createElement("div");
        document.body.replaceChildren(container);

        act(() =>
            ReactDOM.createRoot(container).render(component));

        expect(document.body.textContent).toContain("Sophie");
    });
});