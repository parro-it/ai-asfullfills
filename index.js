export default async function* aiAsfullfills(data) {
  for (const item of data) {
    yield item;
  }
}
