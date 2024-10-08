import {toContainText} from "../toContainText";
import {describe, it, expect} from 'vitest';

describe("toContainText matcher", () => {
    it("matches when text is present in the DOM element", () => {
        const domElement = {textContent: "text to match"};

        const result = toContainText(domElement, "text to match");

        expect(result.pass).toBe(true);
    });

    it("doesn't match when text is not present in the DOM element", () => {
        const domElement = {textContent: "other text that does not match"};

        const result = toContainText(domElement, "text to match");

        expect(result.pass).toBe(false);
    });

    it("provides a message if there is no match", () => {
        const domElement = {textContent: ""};

        const result = toContainText(domElement, "text to match");

        expect(stripTerminalColor(result.message()))
            .toContain(`expect(element).toContainText("text to match")`);
    });

    test("provides a message if there is a negated match", () => {
        const domElement = {textContent: "text to match"};

        const fakeContext = {
            isNot: true,
            toContainText,
        }
        const result = fakeContext.toContainText(domElement, "text to match");

        expect(stripTerminalColor(result.message()))
            .toContain(`expect(element).not.toContainText("text to match")`);
    });

    it("include the actual found value if there is no match", () => {
        const domElement = {textContent: "text in the element"};

        const result = toContainText(domElement, "text to match");

        expect(stripTerminalColor(result.message()))
            .toContain("text in the element");
    });

    it("include the expected value if there is no match", () => {
        const domElement = {textContent: "text in the element"};

        const result = toContainText(domElement, "text to match");

        expect(stripTerminalColor(result.message()))
            .toContain("text to match");
    });

    const stripTerminalColor = (text: string) => text.replace(/\x1B\[\d+m/g, "");
});
