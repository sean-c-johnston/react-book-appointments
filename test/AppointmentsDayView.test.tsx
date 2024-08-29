import React from 'react';
import {beforeEach, describe, expect, it} from 'vitest';

import {Appointment, AppointmentsDayView} from '../src/appointmentsDayView/AppointmentsDayView'
import {click, element, elements, initializeReactContainer, render, textOf, typesOf} from "./reactTestExtensions";

describe("Appointment", () => {
    beforeEach(() => {
        initializeReactContainer();
    })

    it("renders the customer's first name", () => {
        const customer = customerWith({firstName: "Ashley"});
        render(<Appointment
            customer={customer}
            startsAt={new Date().setHours(0, 0)}
            service={""}
            stylist={""}
            notes={""}
        />);
        expect(document.body).toContainText("Ashley");
    });

    it("renders a different customer's first name", () => {
        const customer = customerWith({firstName: "Jordan"});
        render(<Appointment
            customer={customer}
            startsAt={new Date().setHours(0, 0)}
            service={""}
            stylist={""}
            notes={""}
        />);

        expect(document.body).toContainText("Jordan");
    });

    it("renders the customer's last name", () => {
        const customer = customerWith({lastName: "Smith"});
        render(<Appointment
            customer={customer}
            startsAt={new Date().setHours(0, 0)}
            service={""}
            stylist={""}
            notes={""}
        />);
        expect(document.body).toContainText("Smith");
    });

    it("renders the customer's last name", () => {
        const customer = customerWith({lastName: "Smithy"});
        render(<Appointment
            customer={customer}
            startsAt={new Date().setHours(0, 0)}
            service={""}
            stylist={""}
            notes={""}
        />);
        expect(document.body).toContainText("Smithy");
    });

    it("renders the customer's phone number", () => {
        const customer = customerWith({phoneNumber: "+441234567890"});
        render(<Appointment
            customer={customer}
            startsAt={new Date().setHours(0, 0)}
            service={""}
            stylist={""}
            notes={""}
        />);
        expect(document.body).toContainText("+441234567890");
    });

    it("renders another customer's phone number", () => {
        const customer = customerWith({phoneNumber: "+441234567891"});
        render(<Appointment
            customer={customer}
            startsAt={new Date().setHours(0, 0)}
            service={""}
            stylist={""}
            notes={""}
        />);
        expect(document.body).toContainText("+441234567891");
    });

    it('renders a header showing the appointment time', () => {
        const today = new Date();
        render(<Appointment
            customer={blankCustomer()}
            startsAt={today.setHours(11, 0)}
            service={""}
            stylist={""}
            notes={""}
        />);

        const header = element('h1');
        expect(header).not.toBeNull();
        expect(header).toContainText("11:00");
    });

    it('renders a header showing another appointment time', () => {
        const today = new Date();
        render(<Appointment
            customer={blankCustomer()}
            startsAt={today.setHours(16, 0)}
            service={""}
            stylist={""}
            notes={""}
        />);

        const header = element('h1');
        expect(header).not.toBeNull();
        expect(header).toContainText("16:00");
    });

    it('renders the appointment service', () => {
        render(<Appointment
            customer={blankCustomer()}
            startsAt={new Date().setHours(0, 0)}
            service="Cut & Beard"
            stylist={""}
            notes={""}
        />);

        expect(document.body).toContainText("Cut & Beard");
    });

    it('renders another appointment service', () => {
        render(<Appointment
            customer={blankCustomer()}
            startsAt={new Date().setHours(0, 0)}
            service="Blow-Dry"
            stylist={""}
            notes={""}
        />);

        expect(document.body).toContainText("Blow-Dry");
    });

    it('renders the stylist', () => {
        render(<Appointment
            customer={blankCustomer()}
            startsAt={new Date().setHours(0, 0)}
            service=""
            stylist="Sean"
            notes={""}
        />);

        expect(document.body).toContainText("Sean");
    });

    it('renders another stylist', () => {
        render(<Appointment
            customer={blankCustomer()}
            startsAt={new Date().setHours(0, 0)}
            service=""
            stylist="Joe"
            notes={""}
        />);

        expect(document.body).toContainText("Joe");
    });

    it('renders the appointment notes', () => {
        render(<Appointment
            customer={blankCustomer()}
            startsAt={new Date().setHours(0, 0)}
            service=""
            stylist=""
            notes="note 1"
        />);

        expect(document.body).toContainText("note 1");
    });

    it('renders different appointment notes', () => {
        render(<Appointment
            customer={blankCustomer()}
            startsAt={new Date().setHours(0, 0)}
            service=""
            stylist=""
            notes="note 2"
        />);

        expect(document.body).toContainText("note 2");
    });

    const blankCustomer = () => customerWith({});

    const customerWith = (customer: {}) => {
        return {firstName: "", lastName: "", phoneNumber: "", ...customer};
    }
});

describe("AppointmentsDayView", () => {
    const today = new Date();
    const twoAppointments = [{
        startsAt: today.setHours(12, 0),
        customer: {
            firstName: "Ashley",
            lastName: '',
            phoneNumber: ''
        },
        service: '',
        stylist: '',
        notes: ''
    }, {
        startsAt: today.setHours(13, 0),
        customer: {
            firstName: "Jordan",
            lastName: '',
            phoneNumber: ''
        },
        service: '',
        stylist: '',
        notes: ''
    }];

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

        expect(typesOf(buttons)).toEqual(["BUTTON", "BUTTON"]);
    });

    it('renders a different appointment when selected', () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        click(secondButton());

        expect(document.body).toContainText("Jordan");
    });

    it("adds toggled class to button when selected", () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        click(secondButton());

        expect(secondButton().className).toContain("toggled");
    });

    it("does not add toggled class to button when not selected", () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        expect(secondButton().className).not.toContain("toggled");
    });

    const secondButton = () => elements<HTMLButtonElement>("li > button")[1];
})
