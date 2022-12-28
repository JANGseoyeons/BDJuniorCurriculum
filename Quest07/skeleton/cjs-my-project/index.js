// TODO: cjs-package와 esm-package의 함수와 클래스들을 가져다 쓰고 활용하려면 어떻게 해야 할까요?
const { cjsUtilFunction, CjsUtilClass } = require("../cjs-package/index");
const esm = await import("../esm-package/index.mjs").default;
/* 하나의 변수에 담아오는 로직
const CjsUtilClass = require("../cjs-package/index");
const cjsUtilFunction = require("../cjs-package/index"); 
*/
