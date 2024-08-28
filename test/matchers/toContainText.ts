export function toContainText(received: { textContent: string }, expectedText: string) {
    const message = `${received.textContent} is ${this ? 'not' : ''} ${expectedText}`;
    return {
        pass: received.textContent.includes(expectedText),
        message: () => message
    }
}