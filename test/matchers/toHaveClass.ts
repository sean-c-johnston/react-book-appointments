import {matcherHint, printExpected} from "jest-matcher-utils";

export function toHaveClass(received: { className: string }, expected: string) {
    let pass = received.className.split(" ").includes(expected);

    const sourceHint = matcherHint(
        "toHaveClass",
        "element",
        printExpected(expected),
        {isNot: pass}
    );

    return {
        pass: pass,
        message: () => sourceHint + "\n\n" + "actual:",
        expected: expected,
        actual: received.className
    };
}