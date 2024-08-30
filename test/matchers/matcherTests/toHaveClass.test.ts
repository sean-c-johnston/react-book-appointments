import {describe, expect} from "vitest";
import {toHaveClass} from "../toHaveClass";

describe("toHaveClass", () => {
    it('passes if the given element has a class name which matches', () => {
        const domElement = {className: "classToMatch"};

        let result = toHaveClass(domElement, "classToMatch");

        expect(result.pass).toBeTruthy();
    });

    it('passes if the given element has multiple classes and there is a match', () => {
        const domElement = {className: "class1 class2"};

        let result = toHaveClass(domElement, "class1");

        expect(result.pass).toBeTruthy();
    });

    it('fails if the given element does not have a class name', () => {
        const domElement = {className: ""};

        let result = toHaveClass(domElement, "classToMatch");

        expect(result.pass).toBeFalsy();
    });

    it('fails if the given element includes only a partial class name match', () => {
        const domElement = {className: "class1 class2"};

        let result = toHaveClass(domElement, "class");

        expect(result.pass).toBeFalsy();
    });
});