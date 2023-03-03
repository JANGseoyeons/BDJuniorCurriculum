# Quest 17-F. 번들링과 빌드 시스템

## Introduction

- 이번 퀘스트에서는 현대적 웹 클라이언트 개발에 핵심적인 번들러와 빌드 시스템의 구조와 사용 방법에 대해 알아보겠습니다.

## Topics

- Webpack
- Bundling
  - Data URL
- Transpiling
  - Source Map
- Hot Module Replacement

## Resources

- [Webpack](https://webpack.js.org/)
- [Webpack 101: An introduction to Webpack](https://medium.com/hootsuite-engineering/webpack-101-an-introduction-to-webpack-3f59d21edeba)

## Checklist

- 여러 개로 나뉘어진 자바스크립트나 이미지, 컴포넌트 파일 등을 하나로 합치는 작업을 하는 것은 성능상에서 어떤 이점이 있을까요?  
  중복된 이름으로 인한 충돌, 위험성을 줄일 수 있으며, 파일 전송 속도 문제점을 감소시킬 수 있습니다.
  - 이미지를 Data URL로 바꾸어 번들링하는 것은 어떤 장점과 단점이 있을까요?  
    장점: http요청 수 감소(이미지를 서버에서 다운로드하는 대신 번들 파일에 포함시켜 클라이언트에서 불러옴), 파일 관리 용이(이미지 파일을 따로 관리할 필요가 없음),이미지 용량 제한 우회
    단점 : 번들 파일 용량 증가, 캐싱 효율 감소, 다른 모듈과 충돌 가능성
- Source Map이란 무엇인가요? Source Map을 생성하는 것은 어떤 장점이 있을까요?  
  Source Map은 압축되거나 변환된 코드와 원본 코드 사이의 매핑 정보를 제공하는 파일이다.
  장점: 디버깅 용이성 향상, 성능 개선, 보안 개선, 유지 보수 용이성 향상
- Webpack의 필수적인 설정은 어떤 식으로 이루어져 있을까요?
  Entry Point, Output, Loaders, Plugins,Mode
  - Webpack의 플러그인과 모듈은 어떤 역할들을 하나요?  
    모듈은 웹 애플리케이션에서 사용되는 모든 자원을 의미하며, 각 모듈은 고유한 식별자를 가지며, 이 식별자는 모듈간의 의존성 관리 사용
    플러그인은 빌드 과정에서 추가적인 작업을 수행하며, 번들링된 애플리케이션의 동작을 변경하거나 최적화하는 데 사용된다.
  - Webpack을 이용하여 HMR(Hot Module Replacement) 기능을 설정하려면 어떻게 해야 하나요?  
    1 webpack-dev-server 설치 2. webpack.config.js 파일 설정 3. HMR을 적용할 모듈에 대한 코드 작성 4.webpack-dev-server 실행

## (선택사항) Quest

- 직전 퀘스트의 소스만 남기고, Vue의 Boilerplating 기능을 쓰지 않고 Webpack 관련한 설정을 원점에서 다시 시작해 보세요.
  - 필요한 번들링과 Source Map, HMR 등의 기능이 모두 잘 작동해야 합니다.

## Advanced

- Webpack 이전과 이후에는 어떤 번들러가 있었을까요? 각각의 장단점은 무엇일까요?
