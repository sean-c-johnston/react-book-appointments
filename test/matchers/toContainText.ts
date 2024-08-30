import {matcherHint, printExpected} from "jest-matcher-utils";

export function toContainText(received: { textContent: string }, expected: string) {
    const sourceHint = matcherHint(
        "toContainText",
        "element",
        printExpected(expected),
        {isNot: this.isNot}
    );

    return {
        pass: received.textContent.includes(expected),
        message: () => sourceHint,
        expected: expected,
        actual: received.textContent
    };
}