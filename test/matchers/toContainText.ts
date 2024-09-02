import {matcherHint, printExpected, printReceived} from "jest-matcher-utils";

export function toContainText(received: { textContent: string }, expected: string) {
    const sourceHint = () => matcherHint(
        "toContainText",
        "element",
        printExpected(expected),
        {isNot: this.isNot}
    );

    const actualHint = () => `Actual text: ${printReceived(received.textContent)}`;

    return {
        pass: received.textContent.includes(expected),
        message: () => [sourceHint(), actualHint()].join("\n\n"),
    };
}