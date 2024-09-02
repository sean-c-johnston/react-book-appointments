import React from "react";
import { CustomerForm } from "../src/CustomerForm";
import { change, click, element, initializeReactContainer, render, submit } from "./helpers/reactTestExtensions";
import { blankCustomer, customerWith } from "./helpers/builders";
import { describe, expect } from "vitest";


describe("CustomerForm", () => {
    beforeEach(() => {
        initializeReactContainer();
    });

    it("renders a form", () => {
        render(<CustomerForm original={blankCustomer()}/>);

        expect(form()).not.toBeNull();
    });

    it("has a submit button", () => {
        render(<CustomerForm original={blankCustomer()}/>);

        expect(submitButton()).not.toBeNull();
    });

    it("prevents the default action when submitting the form", () => {
        render(<CustomerForm
                original={customerWith({ firstName: "Ashley" })}
                onSubmit={() => {}}/>);

        const event = submit(form());

        expect(event.defaultPrevented).toBeTruthy();
    });

    const describeField = (fieldName: string, labelText: string, originalValue: string, newValue: string) => {
        describe(`${labelText} field`, () => {
            itRendersAsATextBox(fieldName);
            itIncludesTheExistingValue(fieldName, originalValue);
            itRendersALabelForTheField(fieldName, labelText);
            itSubmitsValues(fieldName, originalValue, newValue);
        });
    };

    describeField("firstName", "First Name", "Ashley", "Jamie");


    const itRendersAsATextBox = (fieldName: string) => {
        it("renders as a text box", () => {
            render(<CustomerForm original={blankCustomer()}/>);

            expect(formField(fieldName)).not.toBeNull();
            expect(formField(fieldName).tagName).toEqual("INPUT");
            expect(formField(fieldName).type).toEqual("text");
        });
    };

    const itIncludesTheExistingValue = (fieldName: string, existing: string) => {
        it("includes the existing value", () => {
            const customer = customerWith({ [fieldName]: existing });

            render(<CustomerForm original={customer}/>);

            expect(formField(fieldName).value).toEqual(existing);
        });
    };

    const itRendersALabelForTheField = (fieldName: string, text: string) => {
        it(`renders a label with "${text}" as the content`, () => {
            render(<CustomerForm original={blankCustomer()}/>);

            const label = element(`label[for=${fieldName}]`);

            expect(label).not.toBeNull();
            expect(label).toContainText(text);
        });

        it("gives the input an ID to attach it to the label", () => {
            render(<CustomerForm original={blankCustomer()}/>);

            expect(formField(fieldName).id).toEqual(fieldName);
        });
    };

    const itSubmitsValues = (fieldName: string, originalValue: string, newValue: string) => {


        it("saves existing value when submitted", () => {
            render(<CustomerForm
                    original={customerWith({ firstName: originalValue })}
                    onSubmit={(props) => {expect(props[fieldName]).toEqual(originalValue);}}/>);

            click(submitButton());

            expect.hasAssertions();
        });

        it("saves the new value when submitted", () => {
            render(<CustomerForm
                    original={blankCustomer()}
                    onSubmit={(props) => {
                        expect(props[fieldName]).toEqual("Jamie");
                    }}/>);

            change(formField("firstName"), "Jamie");
            click(submitButton());

            expect.hasAssertions();
        });
    };

    const submitButton = () => element("input[type=submit]");

    const form = () => element<HTMLFormElement>("form") as HTMLFormElement;

    const formField = (name: string) => form().elements[name];
});
