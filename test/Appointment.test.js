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
    const today = new Date();
    const twoAppointments = [{
        startsAt: today.setHours(12, 0), customer: {firstName: "Sean"},
    }, {startsAt: today.setHours(13, 0), customer: {firstName: "Sophie"}}];

    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.replaceChildren(container);

    })

    it('renders a div with the correct ID', () => {
        const component = <AppointmentsDayView appointments={[]}/>;
        render(component);
        expect(document.querySelector('div#appointmentsDayView')).not
            .toBeNull();
    });

    it('renders an ol to display appointments', () => {
        const component = <AppointmentsDayView appointments={[]}/>;
        render(component);
        expect(document.querySelector("ol")).not.toBeNull();
    });

    it('renders an li for each appointment', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        const listItems = document.querySelectorAll("ol > li");
        expect(listItems.length).toBe(2);
    });

    it('renders the time for each appointment', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        const listItems = document.querySelectorAll("ol > li");
        expect(listItems[0].textContent).toBe("12:00");
        expect(listItems[1].textContent).toBe("13:00");
    });

    it('displays a message if there are no appointments today', () => {
        render(<AppointmentsDayView appointments={[]}/>);
        expect(document.body.textContent)
            .toContain("There are no appointments today.");
    });

    it('initially selects the first appointment of the day', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        expect(document.body.textContent).toContain("Sean");
        expect(document.body.textContent)
            .not.toContain("There are no appointments today.");
    });

    it('has a button in each li', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        const buttons = document.querySelectorAll("li > button");

        expect(buttons.length).toBe(2);
        expect(buttons[0].type).toBe("button");
    });

    it.skip('renders a different appointment when selected', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);
        const button = document.querySelectorAll("li > button")[1];

        act(() => button.click());

        expect(document.body.textContent).toContain("Sophie");
    });

    const render = component => act(() => ReactDOM.createRoot(container)
        .render(component));
})
