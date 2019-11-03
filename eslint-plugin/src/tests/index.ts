
import { RuleTester } from "eslint";
import { plugin } from "../index";

const ruleTester: RuleTester = new RuleTester({
  env: {
    es6: true
  }
});
ruleTester.run("tsdoc-comments", plugin.rules["tsdoc-comments"], {
  valid: [
    "/**\nA great function!\n */\nfunction foobar() {}\n",
    "/**\nA great class!\n */\nclass FooBar {}\n"
  ],
  invalid: [{
    code: "/**\n * This `is wrong\n */\nfunction foobar() {}\n",
    errors: [{
      messageId: "tsdoc-code-span-missing-delimiter"
    }]
  }, {
    code: "/**\n * This `is wrong\n */\nclass FooBar {}\n",
    errors: [{
      messageId: "tsdoc-code-span-missing-delimiter"
    }]
  }]
});
