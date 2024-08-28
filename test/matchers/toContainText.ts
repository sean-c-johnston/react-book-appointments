export function toContainText(received: { textContent: string }, expectedText: string) {
    const {isNot} = this;

    const message1 = `expect(element)${isNot ? ".not" : ""}.toContainText("${expectedText}")`;
    const message2 = `Actual text: "${received.textContent}"`;

    const message = [message1, message2].join("\n\n");

    return {
        pass: received.textContent.includes(expectedText),
        message: () => message
    }
}