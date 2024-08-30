import {expect} from "vitest";

import {toContainText} from "./matchers/toContainText";
import {toHaveClass} from "./matchers/toHaveClass";

global.IS_REACT_ACT_ENVIRONMENT = true;

expect.extend({toContainText, toHaveClass});