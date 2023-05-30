const deepClone = (input) => {
  if (input instanceof Date) return new Date(input);
  if (input === null || typeof input !== "object") {
    return input;
  }

  const initialResult = Array.isArray(input) ? [] : {};
  return Object.keys(input).reduce((acc, key) => {
    acc[key] = deepClone(input[key]);
    return acc;
  }, initialResult);
};
// {name: 'test', age: 30,address: {street: 'dummy street'} }

const obj1 = {
  name: "test",
  age: 30,
  address: {
    street: "dummy street",
  },
};
// const obj2 = obj1;
//const obj2 = {...obj1};
// const obj2 = Object.assign({}, obj1);
// const obj2 = JSON.parse(JSON.stringify(obj1))
// const obj2 = _.cloneDeep(obj1)
const obj2 = deepClone(obj1);

obj2.address.city = "test city";

console.log("obj1 - ", obj1);
console.log("obj2 - ", obj2);
