import {matcherHint, printExpected, printReceived} from "jest-matcher-utils";

export function toHaveClass(received: { className: string }, expected: string) {
    const sourceHint = () => matcherHint(
        "toHaveClass",
        "element",
        printExpected(expected),
        {isNot: this.isNot}
    );

    const actualTextHint = () => `Actual className: ${printReceived(received.className)}`;

    return {
        pass: received.className.split(" ").includes(expected),
        message: () => [sourceHint(), actualTextHint()].join("\n\n"),
    };
}