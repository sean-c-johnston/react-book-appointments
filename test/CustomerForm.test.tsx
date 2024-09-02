import React from "react";
import { CustomerForm } from "../src/CustomerForm";
import { element, initializeReactContainer, render } from "./helpers/reactTestExtensions";
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
        const button = element("input[type=submit]");
        expect(button).not.toBeNull();
    });

    const form = () => element<HTMLFormElement>("form") as HTMLFormElement;

    const formField = (name: string) => form().elements[name];
});