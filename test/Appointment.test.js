import React, {act} from 'react';
import ReactDOM from 'react-dom/client';

import {Appointment, AppointmentsDayView} from '../src/Appointment'

describe("Appointment", () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.replaceChildren(container);
    })

    it("renders the customer's first name", () => {
        const customer = {firstName: "Sean"};

        render(<Appointment customer={customer}/>);

        expect(document.body.textContent).toContain("Sean");
    });

    it("renders a different customer's first name", () => {
        const customer = {firstName: "Sophie"};

        render(<Appointment customer={customer}/>);

        expect(document.body.textContent).toContain("Sophie");
    });

    const render = component => act(() => ReactDOM.createRoot(container)
        .render(component));
});

describe("AppointmentsDayView", () => {
    it('renders a div with the correct ID', () => {
        const container = document.createElement("div");
        document.body.replaceChildren(container);

        const component = <AppointmentsDayView appointments={[]}/>;
        act(() => ReactDOM.createRoot(container).render(component));

        expect(document.querySelector('div#appointmentsDayView')).not.toBeNull();
    });

    it('renders an ol element to display appointments', () => {
        const container = document.createElement("div");
        document.body.replaceChildren(container);

        const component = <AppointmentsDayView appointments={[]}/>;
        act(() => ReactDOM.createRoot(container).render(component));

        expect(document.querySelector("ol")).not.toBeNull();
    });
})
