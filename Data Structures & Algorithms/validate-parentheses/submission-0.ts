class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s: string): boolean {
    const st: string[] = [];

    const CLOSING = [")", "]", "}"];
    const isValid = (input: ")" | "]" | "}") => {
      switch (input) {
        case ")":
          return st.at(-1) === "(";
        case "]":
          return st.at(-1) === "[";
        case "}":
          return st.at(-1) === "{";
      }
    };
    for (const c of s) {
      if (c === "{" || c === "[" || c === "(") {
        st.push(c);
      } else if (
        !isValid(c as ")" | "]" | "}") ||
        (!st.length && CLOSING.includes(c))
      ) {
        return false;
      } else {
        st.pop();
      }
    }
    if (st.length) {
      return false;
    }
    return true;
  }
}
