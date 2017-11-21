import test from "tape-async";
import aiAsfullfills from ".";

test("exports a function", async t => {
  t.is(typeof aiAsfullfills, "function");
});
