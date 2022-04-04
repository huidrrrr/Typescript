class Ctor {
  s: string;
  constructor(s: string) {
    this.s = s;
  }
}

type SomeConstructor = {
  new (s: string): Ctor;
};

function fn(ctor: SomeConstructor,s:string) {
  return new ctor(s);
}
const str='hello world'
const f = fn(Ctor,str);
console.log(f);


let ct=new Ctor(str)
console.log(ct);



