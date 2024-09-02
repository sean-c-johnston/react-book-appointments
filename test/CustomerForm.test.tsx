import React from "react";
import { CustomerForm } from "../src/CustomerForm";
import { change, click, element, initializeReactContainer, render, submit } from "./helpers/reactTestExtensions";
import { blankCustomer, customerWith } from "./helpers/builders";
import { expect } from "vitest";


describe("CustomerForm", () => {
    beforeEach(() => {
        initializeReactContainer();
    });

    it("renders a form", () => {
        render(<CustomerForm original={blankCustomer()}/>);

        expect(form()).not.toBeNull();
    });

    it("renders the first name in a text box", () => {
        render(<CustomerForm original={blankCustomer()}/>);

        expect(formField("firstName")).not.toBeNull();
        expect(formField("firstName").tagName).toEqual("INPUT");
        expect(formField("firstName").type).toEqual("text");
    });

    it("includes the existing first name value", () => {
        const customer = customerWith({ firstName: "Ashley" });

        render(<CustomerForm original={customer}/>);

        expect(formField("firstName").value).toEqual("Ashley");
    });

    it("renders a label for the first name field", () => {
        render(<CustomerForm original={blankCustomer()}/>);

        const label = element("label[for=firstName]");

        expect(label).not.toBeNull();
        expect(label).toContainText("First Name");
    });

    it("gives the firstName input an ID to attach it to the label", () => {
        render(<CustomerForm original={blankCustomer()}/>);

        expect(formField("firstName").id).toEqual("firstName");
    });

    it("has a submit button", () => {
        render(<CustomerForm original={blankCustomer()}/>);

        expect(submitButton()).not.toBeNull();
    });

    it("saves existing first name when submitted", () => {
        render(<CustomerForm
                original={customerWith({ firstName: "Ashley" })}
                onSubmit={({ firstName }) => {expect(firstName).toEqual("Ashley");}}/>);

        click(submitButton());

        expect.hasAssertions();
    });

    it("prevents the default action when submitting the form", () => {
        render(<CustomerForm
                original={customerWith({ firstName: "Ashley" })}
                onSubmit={() => {}}/>);

        const event = submit(form());

        expect(event.defaultPrevented).toBeTruthy();
    });

    it("saves the new fist name when submitted", () => {
        const func = ({ firstName }) => {
            console.log(`first name: ${firstName}`);
            expect(firstName).toEqual("Jamie");
        };

        render(<CustomerForm
                original={blankCustomer()}
                onSubmit={func}/>);

        change(formField("firstName"), "Jamie");
        click(submitButton());

        expect.hasAssertions();
    });

    const submitButton = () => element("input[type=submit]");

    const form = () => element<HTMLFormElement>("form") as HTMLFormElement;

    const formField = (name: string) => form().elements[name];
});