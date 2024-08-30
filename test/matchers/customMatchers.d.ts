// noinspection JSUnusedGlobalSymbols

import 'vitest';

interface CustomMatchers<R = unknown> {
    toContainText: (expectedText: string) => R;
    toHaveClass: (expectedText: string) => R;
}

declare module 'vitest' {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}