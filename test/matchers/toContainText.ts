export const toContainText = (received: { textContent: string }, expectedText: string) => {
    const message = `${received} is ${this ? 'not' : ''} ${expectedText}`;
    return {
        pass: received.textContent === expectedText,
        message: () => message
    }
}