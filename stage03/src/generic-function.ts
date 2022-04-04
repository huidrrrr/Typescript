function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

let y = firstElement(["a", "b", "c"]);

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

let lst=['1','2','3']
let rs= map(lst,(n)=>parseInt(n))

let rs_lst=lst.map(x=>parseInt(x))


console.log(rs);
console.log(rs_lst);
