import {matcherHint, printExpected} from "jest-matcher-utils";

export function toContainText(received: { textContent: string }, expectedText: string) {
    const sourceHint = matcherHint(
        "toContainText",
        "element",
        printExpected(expectedText),
        {isNot: this.isNot}
    );

    return {
        pass: received.textContent.includes(expectedText),
        message: () => sourceHint,
        expected: expectedText,
        actual: received.textContent
    };
}