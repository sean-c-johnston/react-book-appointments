import React from 'react';

import {Appointment, AppointmentsDayView} from '../src/AppointmentsDayView'
import {click, element, elements, initializeReactContainer, render, textOf, typesOf} from "./reactTestExtensions";

describe("Appointment", () => {
    const blankCustomer = {firstName: "", lastName: "", email: ""};

    beforeEach(() => {
        initializeReactContainer();
    })

    const appointmentComponent = (customer) => {
        return <Appointment
            customer={customer}
            startsAt={new Date()}
            service={""}
            stylist={""}
            notes={""}
        />;
    };

    it("renders the customer's first name", () => {
        const customer = {firstName: "Ashley"};
        render(appointmentComponent(customer));
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
        render(<Appointment customer={blankCustomer}
                            startsAt={today.setHours(11, 0)}/>);

        const header = element('h1');
        expect(header).not.toBeNull();
        expect(header).toContainText("11:00");
    });

    it('renders a header showing another appointment time', () => {
        const today = new Date();
        render(<Appointment customer={blankCustomer}
                            startsAt={today.setHours(16, 0)}/>);

        const header = element('h1');
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

        const listItems = elements("ol > li");
        expect(listItems.length).toBe(2);
    });

    it('renders the time for each appointment', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        let listItems = elements("ol > li");
        expect(textOf(listItems)).toEqual(["12:00", "13:00"]);
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

        const buttons = elements("li > button");

        expect(typesOf(buttons)).toEqual(["button", "button"]);
    });

    it('renders a different appointment when selected', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        const secondButton = elements("li > button")[1];
        click(secondButton);

        expect(document.body).toContainText("Jordan");
    });

    it("adds toggled class to button when selected", () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        const button = elements("li > button")[1];
        click(button);

        expect(button.className).toContain("toggled");
    });

    it("adds toggled class to button when selected", () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        const button = elements("li > button")[1];

        expect(button.className).not.toContain("toggled");
    });
})
