function getFirstElement<P>(arr: P[]): P {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3])); // 1
console.log(getFirstElement<string>(["a", "b", "c"])); // "a"
console.log(getFirstElement<boolean>([true, false, true])); // true

// console.log(getFirstElement<string | number | boolean>([1, "a", true]));
