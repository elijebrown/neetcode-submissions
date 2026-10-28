class Solution {
encode(strs: string[]): string {
  return strs.map((str) => `${str.length}#${str}`).join("");
}

 decode(str: string): string[] {
  const arr: string[] = [];
  let pos = 0;
  while (pos < str.length) {
    const hash = str.indexOf("#", pos);
    const len = Number(str.substring(pos, hash));
    const start = hash + 1;
    const end = start + len;
    arr.push(str.substring(start, end));
    pos = end;
  }
  return arr;
}
}
