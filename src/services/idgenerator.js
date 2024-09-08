function* generateId() {
    let id = 0;
    while (true) {
      yield id++;
    }
  }
  const idGenerator = generateId();

  export default idGenerator
  