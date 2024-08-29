import {configDefaults, defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        setupFiles: ["./test/vitest.setup.ts"],
        environment: "jsdom",
        env: {
            NODE_OPTIONS: "--disable-warning=DEP0040"
        },
        globals: true,
        exclude: ["**/ts-build/**", ...configDefaults.exclude]
    }
})