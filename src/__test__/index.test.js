/* @flow */
import test from "ava";
import { makePizza } from "index";

test("make pizza", t => {
  t.is(makePizza(), "🍕");
});
