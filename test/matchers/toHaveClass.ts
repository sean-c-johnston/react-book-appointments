import {matcherHint, printExpected} from "jest-matcher-utils";

export function toHaveClass(received: { className: string }, expected: string) {
    const sourceHint = matcherHint(
        "toHaveClass",
        "element",
        printExpected(expected),
        {isNot: this.isNot}
    );

    return {
        pass: received.className.split(" ").includes(expected),
        message: () => sourceHint,
        expected: expected,
        actual: received.className
    };
}