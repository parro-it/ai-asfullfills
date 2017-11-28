import AsyncIterable from "asynciterable";

export default function aiAsfullfills(data) {
  return new AsyncIterable((write, end, error) => {
    const allPromises = data.map(p => p.then(write).catch(error));
    Promise.all(allPromises).then(() => end());
  });
}
