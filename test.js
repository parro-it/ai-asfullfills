import test from "tape-async";
import delay from "delay";
import asFullfills from ".";
import concat from "ai-concat";

test("emit promise values in the oprder they are fullfilled", async t => {
  const iterable = [3, 1, 2, 6, 5].map(v => delay(v * 10).then(() => v));
  const result = await concat.obj(asFullfills(iterable));
  t.deepEqual([1, 2, 3, 5, 6], result);
});

test("accept a promise of an iterable", async t => {
  const iterable = [3, 1, 2, 6, 5].map(v => delay(v * 10).then(() => v));
  const result = await concat.obj(asFullfills(Promise.resolve(iterable)));
  t.deepEqual([1, 2, 3, 5, 6], result);
});
