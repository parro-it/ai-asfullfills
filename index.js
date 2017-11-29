import AsyncIterable from "asynciterable";
import isPromise from "is-promise";

export default function aiAsfullfills(data) {
  return new AsyncIterable(async (write, end, error) => {
    if (isPromise(data)) {
      data = await data;
    }
    const allPromises = data.map(p => p.then(write).catch(error));
    Promise.all(allPromises).then(() => end());
  });
}
