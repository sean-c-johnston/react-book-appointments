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

        const field = form().elements["firstName"];

        expect(field).not.toBeNull();
        expect(field.tagName).toEqual("INPUT");
        expect(field.type).toEqual("text");
    });

    it("includes the existing first name value", () => {
        const customer = customerWith({ firstName: "Ashley" });
        render(<CustomerForm original={customer}/>);

        const field = form().elements["firstName"];

        expect(field.value).toEqual("Ashley");
    });

    const form = () => element<HTMLFormElement>("form");
});