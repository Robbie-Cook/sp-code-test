// A handy stack implementation I found so I don't have to reimplement it :).
const { Stack } = require("mnemonist");

/**
 * A simple parsing function that takes a restricted XML implementation and
 * determines whether it's valid.
 */
function parse(input) {
  const openingTagStack = new Stack();

  for (let tag of input.match(/<[A-Z/]+>/g) ?? []) {
    // If tag is a closing tag, compare with opening tag stack
    if (tag.charAt(1) === "/") {
      const tagName = tag.slice(2, -1);
      const openTag = openingTagStack.pop()?.slice(1, -1);

      if (openTag !== tagName) {
        return `Expected ${
          openTag ? `</${openTag}>` : "#"
        } found </${tagName}>`;
      }
    } else {
      openingTagStack.push(tag);
    }
  }

  return openingTagStack.size === 0
    ? "Correctly tagged paragraph"
    : `Expected </${openingTagStack.pop().slice(1, -1)}> found #`;
}

// Would move to ES6 but this is easier on the command line
module.exports = { parse };
