import {configDefaults, defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        setupFiles: ["./test/vitest.setup.ts"],
        environment: "jsdom",
        globals: true,
        exclude: ["**/ts-build/**", ...configDefaults.exclude]
    }
})