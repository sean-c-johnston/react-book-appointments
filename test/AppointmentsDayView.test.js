import React from 'react';

import {Appointment, AppointmentsDayView} from '../src/AppointmentsDayView'
import {initializeReactContainer, render, click} from "./reactTestExtensions";

describe("Appointment", () => {
    const blankCustomer = {firstName: "", lastName: "", email: ""};

    beforeEach(() => {
        initializeReactContainer();
    })

    it("renders the customer's first name", () => {
        const customer = {firstName: "Ashley"};
        render(<Appointment customer={customer}/>);
        expect(document.body).toContainText("Ashley");
    });

    it("renders a different customer's first name", () => {
        const customer = {firstName: "Jordan"};
        render(<Appointment customer={customer}/>);
        expect(document.body).toContainText("Jordan");
    });

    it("renders the customer's last name", () => {
        const customer = {lastName: "Smith"};
        render(<Appointment customer={customer}/>);
        expect(document.body).toContainText("Smith");
    });

    it("renders the customer's last name", () => {
        const customer = {lastName: "Smithy"};
        render(<Appointment customer={customer}/>);
        expect(document.body).toContainText("Smithy");
    });

    it("renders the customer's phone number", () => {
        const customer = {phoneNumber: "+441234567890"};
        render(<Appointment customer={customer}/>);
        expect(document.body).toContainText("+441234567890");
    });

    it("renders another customer's phone number", () => {
        const customer = {phoneNumber: "+441234567891"};
        render(<Appointment customer={customer}/>);
        expect(document.body).toContainText("+441234567891");
    });

    it('renders a header showing the appointment time', () => {
        const today = new Date();
        render(<Appointment customer={blankCustomer} startsAt={today.setHours(11, 0)}/>);

        const header = document.body.querySelector('h1');
        expect(header).not.toBeNull();
        expect(header).toContainText("11:00");
    });

    it('renders a header showing another appointment time', () => {
        const today = new Date();
        render(<Appointment customer={blankCustomer} startsAt={today.setHours(16, 0)}/>);

        const header = document.body.querySelector('h1');
        expect(header).not.toBeNull();
        expect(header).toContainText("16:00");
    });

    it('renders the appointment service', () => {
        render(<Appointment
            customer={blankCustomer}
            service="Cut & Beard"
        />);

        expect(document.body).toContainText("Cut & Beard");
    });

    it('renders another appointment service', () => {
        render(<Appointment
            customer={blankCustomer}
            service="Blow-Dry"
        />);

        expect(document.body).toContainText("Blow-Dry");
    });

    it('renders the stylist', () => {
        render(<Appointment
            customer={blankCustomer}
            stylist="Sean"
        />);

        expect(document.body).toContainText("Sean");
    });

    it('renders another stylist', () => {
        render(<Appointment
            customer={blankCustomer}
            stylist="Joe"
        />);

        expect(document.body).toContainText("Joe");
    });

    it('renders the appointment notes', () => {
        render(<Appointment
            customer={blankCustomer}
            notes="note 1"
        />);

        expect(document.body).toContainText("note 1");
    });

    it('renders different appointment notes', () => {
        render(<Appointment
            customer={blankCustomer}
            notes="note 2"
        />);

        expect(document.body).toContainText("note 2");
    });
});

describe("AppointmentsDayView", () => {
    const today = new Date();
    const twoAppointments = [{
        startsAt: today.setHours(12, 0), customer: {firstName: "Ashley"},
    }, {startsAt: today.setHours(13, 0), customer: {firstName: "Jordan"}}];

    beforeEach(() => {
        initializeReactContainer();
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
        expect(listItems[0]).toContainText("12:00");
        expect(listItems[1]).toContainText("13:00");
    });

    it('displays a message if there are no appointments today', () => {
        render(<AppointmentsDayView appointments={[]}/>);
        expect(document.body)
            .toContainText("There are no appointments today.");
    });

    it('initially selects the first appointment of the day', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        expect(document.body).toContainText("Ashley");
        expect(document.body)
            .not.toContainText("There are no appointments today.");
    });

    it('has a button in each li', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        const buttons = document.querySelectorAll("li > button");

        expect(buttons.length).toBe(2);
        expect(buttons[0].type).toBe("button");
    });

    it('renders a different appointment when selected', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        const button = document.querySelectorAll("li > button")[1];
        click(button);

        expect(document.body).toContainText("Jordan");
    });
})
