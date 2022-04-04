function minimunlength<Type extends { length: number }>(
  obj: Type,
  minimun: number
): Type|{ length: number } {
  return obj.length >= minimun ? obj : { length: minimun };
}

const arr = minimunlength([1, 2, 3], 6);
