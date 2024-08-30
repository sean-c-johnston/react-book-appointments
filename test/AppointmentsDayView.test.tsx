import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Appointment, AppointmentsDayView } from "../src/appointmentsDayView/AppointmentsDayView";
import { click, element, elements, initializeReactContainer, render, textOf, typesOf } from "./reactTestExtensions";

describe("Appointment", () => {
    beforeEach(() => {
        initializeReactContainer();
    });

    it("renders the customer's first name", () => {
        const ashley = customerWith({ firstName: "Ashley" });

        render(<Appointment
                {...appointmentWith({ customer: ashley })}
        />);

        expect(document.body).toContainText("Ashley");
    });

    it("renders a different customer's first name", () => {
        const jordan = customerWith({ firstName: "Jordan" });

        render(<Appointment
                {...appointmentWith({ customer: jordan })}
        />);

        expect(document.body).toContainText("Jordan");
    });

    it("renders the customer's last name", () => {
        const mrSmith = customerWith({ lastName: "Smith" });

        render(<Appointment
                {...appointmentWith({ customer: mrSmith })}
        />);

        expect(document.body).toContainText("Smith");
    });

    it("renders the customer's last name", () => {
        const mrJones = customerWith({ lastName: "Jones" });

        render(<Appointment
                {...appointmentWith({ customer: mrJones })}
        />);

        expect(document.body).toContainText("Jones");
    });

    it("renders the customer's phone number", () => {
        const customer = customerWith({ phoneNumber: "+441234567890" });

        render(<Appointment
                {...appointmentWith({ customer: customer })}
        />);

        expect(document.body).toContainText("+441234567890");
    });

    it("renders another customer's phone number", () => {
        const customer = customerWith({ phoneNumber: "+441234567891" });

        render(<Appointment
                {...appointmentWith({ customer: customer })}
        />);

        expect(document.body).toContainText("+441234567891");
    });

    it("renders a header showing the appointment time", () => {
        const elevenAM = new Date().setHours(11, 0);

        render(<Appointment
                {...appointmentWith({ startsAt: elevenAM })}
        />);

        expect(element("h1")).not.toBeNull();
        expect(element("h1")).toContainText("11:00");
    });

    it("renders a header showing another appointment time", () => {
        const fourPM = new Date().setHours(16, 0);

        render(<Appointment
                {...appointmentWith({ startsAt: fourPM })}
        />);

        expect(element("h1")).not.toBeNull();
        expect(element("h1")).toContainText("16:00");
    });

    it("renders the appointment service", () => {
        render(<Appointment
                {...appointmentWith({ service: "Cut & Beard" })}
        />);

        expect(document.body).toContainText("Cut & Beard");
    });

    it("renders another appointment service", () => {
        render(<Appointment
                {...appointmentWith({ service: "Blow-Dry" })}
        />);

        expect(document.body).toContainText("Blow-Dry");
    });

    it("renders the stylist", () => {
        render(<Appointment
                {...appointmentWith({ stylist: "Sean" })}
        />);

        expect(document.body).toContainText("Sean");
    });

    it("renders another stylist", () => {
        render(<Appointment
                {...appointmentWith({ stylist: "Joe" })}
        />);

        expect(document.body).toContainText("Joe");
    });

    it("renders the appointment notes", () => {
        render(<Appointment
                {...appointmentWith({ notes: "note 1" })}
        />);

        expect(document.body).toContainText("note 1");
    });

    it("renders different appointment notes", () => {
        render(<Appointment
                {...appointmentWith({ notes: "note 2" })}
        />);

        expect(document.body).toContainText("note 2");
    });
});

describe("AppointmentsDayView", () => {
    const today = new Date();
    const twoAppointments = [
        appointmentWith({ startsAt: today.setHours(12, 0), customer: customerWith({ firstName: "Ashley" }) }),
        appointmentWith({ startsAt: today.setHours(13, 0), customer: customerWith({ firstName: "Jordan" }) }),
    ];

    beforeEach(() => {
        initializeReactContainer();
    });

    it("renders a div with the correct ID", () => {
        render(<AppointmentsDayView appointments={[]}/>);

        expect(document.querySelector("div#appointmentsDayView"))
                .not.toBeNull();
    });

    it("renders an ol to display appointments", () => {
        render(<AppointmentsDayView appointments={[]}/>);

        expect(document.querySelector("ol")).not.toBeNull();
    });

    it("renders an li for each appointment", () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        expect(elements("ol > li").length).toBe(2);
    });

    it("renders the time for each appointment", () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        expect(textOf(elements("ol > li")))
                .toEqual(["12:00", "13:00"]);
    });

    it("displays a message if there are no appointments today", () => {
        render(<AppointmentsDayView appointments={[]}/>);

        expect(document.body).toContainText("There are no appointments today.");
    });

    it("initially selects the first appointment of the day", () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        expect(document.body).toContainText("Ashley");
        expect(document.body)
                .not.toContainText("There are no appointments today.");
    });

    it("has a button in each li", () => {
        render(<AppointmentsDayView appointments={twoAppointments}/>);

        expect(typesOf(elements("li > button")))
                .toEqual(["BUTTON", "BUTTON"]);
    });

    it("renders a different appointment when selected", () => {
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
});

const blankCustomer = () => customerWith({});

const customerWith = (customer: {}) => ({ firstName: "", lastName: "", phoneNumber: "", ...customer });

const appointmentWith = (values: {
    customer?: Customer,
    startsAt?: number,
    stylist?: string,
    service?: string,
    notes?: string
}) => ({
    customer: blankCustomer(),
    startsAt: new Date().setHours(0, 0),
    stylist: "",
    service: "",
    notes: "",
    ...values
});