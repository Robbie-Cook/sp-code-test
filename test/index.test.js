import { parse } from "../src/index";

describe("Test HTML string linting program", () => {
  it("should function on basic input", () => {
    expect(
      parse("The following text<C><B>is centred and in boldface</B></C>")
    ).toEqual("Correctly tagged paragraph");
  });

  it("should function on slightly harder input", () => {
    expect(
      parse("<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence")
    ).toEqual("Correctly tagged paragraph");
  });

  it("should throw on wrongly nested tags", () => {
    expect(
      parse(
        "<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>"
      )
    ).toEqual("Expected </C> found </B>");
  });

  it("should throw on wrongly nested tags in the wrong order", () => {
    expect(
      parse(
        "<B>This should be in boldface, but there is an extra closing tag</B></C>"
      )
    ).toEqual("Expected # found </C>");
  });

  it("should throw on not enough closing tags", () => {
    expect(
      parse(
        "<B><C>This should be centred and in boldface, but there is a missing closing tag</C>"
      )
    ).toEqual("Expected </B> found #");
  });
});
