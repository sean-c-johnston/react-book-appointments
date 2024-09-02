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

    const form = () => element<HTMLFormElement>("form");

    const formField = (name: string) => form().elements[name];
});