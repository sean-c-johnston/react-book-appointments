import 'vitest';

interface CustomMatchers<R = unknown> {
    toContainText: (received: { textContent: string }, expectedText: string) => R;
}

declare module 'vitest' {
    namespace jest {
        interface Assertion<T = any> extends CustomMatchers<T> {}
        interface AsymmetricMatchersContaining extends CustomMatchers {}
    }
}