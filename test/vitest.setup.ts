import {toContainText} from "./matchers/toContainText";
import {expect} from "vitest";

global.IS_REACT_ACT_ENVIRONMENT = true;

expect.extend({toContainText});