# Quest 07. node.js의 기초

## Introduction

- 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics

- node.js
- npm
- CommonJS와 ES Modules

## Resources

- [About node.js](https://nodejs.org/ko/about/)
- [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
- [npm](https://docs.npmjs.com/about-npm)
- [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
- [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
- [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist

- node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?  
  비동기 이벤트 주도 javascript 런타임

- npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?  
  npm이란 node.js로 만들어진 모듈을 관리해주는 툴이며, package.json 필드 구성요소는 name, version, description, main 등으로 구성되어 있다.

- npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?  
  npx란 npm을 좀 더 편하게 사용하기 위해서 npm에서 제공해주는 하나의 도구이다.  
  -g의 옵션을 추가하면 전역적으로 저장하는 것이 되며, 옵션을 별도로 추가하지 않을 경우에는 지역적으로 저장된다.

- 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?

1. 스크립트 태그(src 속성 사용) 2) XMLHttpRequest 사용 (비동기적으로 서버에서 자바스크립트 파일을 불러옴) 3) RequireJS 사용(비동기적으로 로드) 4) CommonJS 사용(node.js 에서 사용되는 모듈 시스템으로, require 함수와 module.exports객체 이용)  
   CommonJS는 브라우저 환경에서 동작하지 않으며, 동기적으로 모듈을 로드하기 때문에 성능에 문제가 발생할 수 있다. ES Modules가 등장한 이유는 브라우저와 Node.js 환경에서 모두 사용할 수 있으며, 비동기적으로 모듈을 로드할 수 있으며, 코드의 가독성과 유지보수성을 높일 수 있기 때문입니다.

- ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?  
  차이점에는 모듈 로딩 방식(require()는 동기적으로 모둘을 로드하며, ES Modules는 비동기적으로 모듈을 로드), 모듈 범위(require()는 모듈을 로드하면 해당 모듈의 전체 범위를 가져온다. ES Modules는 모듈 내에서 export 키워드로 명시한 변수나 함수만을 다른 모듈에서 사용할 수 있다. 이를 통해 같은 모듈을 여러 번 로드해도 같은 인스턴스를 공유), 실행 시점(require()는 모듈을 실행하는 시점에 모듈 코드를 가져온다. ES Modules는 모듈 코드가 로드될 때만 실행)  
  ES Modules가 할 수 없는 일에는 동적 모듈 로딩, 이름 변경, 서버 사이드에서의 사용이다.

- node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?  
  CJS인 경우 'require(), module.exports'를 사용하며, ESM은 'import(), export'를 사용한다.(ESM에서 CJ를 서로 호출 할 수 있으나 귀찮은 일)

## Quest

- 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  - `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  - `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
- 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced

- node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?
