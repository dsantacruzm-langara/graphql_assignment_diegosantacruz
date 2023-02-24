function findOne(array, id) {
  return array.find((e) => e.id === id);
}

function findManyCars(array, id) {
    return array.filter((e) => e.personId === id);
  }

export { findOne, findManyCars };
