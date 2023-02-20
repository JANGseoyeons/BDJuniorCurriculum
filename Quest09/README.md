# Quest 09. 서버와 클라이언트의 대화

## Introduction

- 이번 퀘스트에서는 서버와 클라이언트의 연동, 그리고 웹 API의 설계 방법론 중 하나인 REST에 대해 알아보겠습니다.

## Topics

- expressJS, fastify
- AJAX, `XMLHttpRequest`, `fetch()`
- REST, CRUD
- CORS

## Resources

- [Express Framework](http://expressjs.com/)
- [Fastify Framework](https://www.fastify.io/)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [REST API Tutorial](https://restfulapi.net/)
- [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
- [MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Checklist

- 비동기 프로그래밍이란 무엇인가요?  
  현재 작업의 응답이 끝나지 않은 상태에서 다음 작업이 요청되는 프로그래밍이다.
  - 콜백을 통해 비동기적 작업을 할 때의 불편한 점은 무엇인가요? 콜백지옥이란 무엇인가요?  
    함수의 인자를 전달받을 때 변수가 아님 함수를 전달받는 경우를 말하며, 콜백지옥이란 단 처리순서를 보장하기 위해 무수히 많은 callback을 사용한다면 코드가 지나치게 길어져 가독성이 떨어지는 것을 말한다.
  - 자바스크립트의 Promise는 어떤 객체이고 어떤 일을 하나요?  
    promise는 말 그대로 약속한다는 객체이며, 사용자가 비동기 처리를 반드시 해야하는 상황이 올 때 logic의 순차적인 실행을 보장(=약속)받기 위해 사용하는 가장 대표적인 비동기처리 함수이다. (promise 내부적인 logic을 오류없이 완료하면 resolve, 오류발생 시 reject를 반환한다.)
  - 자바스크립트의 `async`와 `await` 키워드는 어떤 역할을 하며 그 정체는 무엇일까요?  
    async함수는 function 앞에 위치, 항상 프라미스를 반환한다. 프로미스가 아닌 값을 반환하더라도 이향 상태의 프로미스로 값을 감싸 이행된 프로미스가 반환되도록한다.  
    await함수는 await 키워드를 만나면 프로미스가 처리될 때까지 기다린다.
- 브라우저 내 스크립트에서 외부 리소스를 가져오려면 어떻게 해야 할까요?  
  http 프로토콜에서 req 인자에 외부 resource, data를 전달할 수 있다.
  - 브라우저의 `XMLHttpRequest` 객체는 무엇이고 어떻게 동작하나요?  
    데이터를 받아올 수 있는 객체이며, 해당 사이트 혹은 get/post method를 통해 전달받는 resource들을 XMLHttpReuest를 통해 얻을 수 있다.
  - `fetch` API는 무엇이고 어떻게 동작하나요?  
    axios나 REST API처럼 데이터 확보 및 생성 등을 위해 사용하는 도구 중 하나이며, 특히 axios의 경우 서버와의 상호작용이 성공적으로 완료되면 res인자를 반환, fetch 역시 동일한 logic이다.(data상호작용이 완료되었을 때 res반환)
- REST는 무엇인가요?  
  http 프로토콜에서 활용하는 pattern이나 client와 server의 요청 및 응답 API과 같은 의미이다.
  - REST API는 어떤 목적을 달성하기 위해 나왔고 어떤 장점을 가지고 있나요?  
    균일한 인터페이스, client/server decoupling, Stateless, caching, 계층 구조 아키텍처, on demand가 있다.
  - RESTful한 API 설계의 단점은 무엇인가요?  
    사전적으로 RESTful API가 휠씬 제한적이고 범위가 좁다.
- CORS란 무엇인가요? 이러한 기능이 왜 필요할까요? CORS는 어떻게 구현될까요?  
  Cross-Ogigin Resource Sharing는 request을 발생한 자읜의 출처가 다를 경우, application이 모든 자원에 접근할 수 있도록 권한을 부여하는 체제이다.

## Quest

- 이번 퀘스트는 Midterm에 해당하는 과제입니다. 분량이 제법 많으니 한 번 기능별로 세부 일정을 정해 보고, 과제 완수 후에 그 일정이 얼마나 지켜졌는지 스스로 한 번 돌아보세요.
  - 이번 퀘스트부터는 skeleton을 제공하지 않습니다!
- Quest 05에서 만든 메모장 시스템을 서버와 연동하는 어플리케이션으로 만들어 보겠습니다.
  - 클라이언트는 `fetch` API를 통해 서버와 통신합니다.
  - 서버는 8000번 포트에 REST API를 엔드포인트로 제공하여, 클라이언트의 요청에 응답합니다.
  - 클라이언트로부터 온 새 파일 저장, 삭제, 다른 이름으로 저장 등의 요청을 받아 서버의 로컬 파일시스템을 통해 저장되어야 합니다.
    - 서버에 어떤 식으로 저장하는 것이 좋을까요?
  - API 서버 외에, 클라이언트를 띄우기 위한 서버가 3000번 포트로 따로 떠서 API 서버와 서로 통신할 수 있어야 합니다.
  - Express나 Fastify 등의 프레임워크를 사용해도 무방합니다.
- 클라이언트 프로젝트와 서버 프로젝트 모두 `npm i`만으로 디펜던시를 설치하고 바로 실행될 수 있게 제출되어야 합니다.
- 이번 퀘스트부터는 앞의 퀘스트의 결과물에 의존적인 경우가 많습니다. 제출 폴더를 직접 만들어 제출해 보세요!

## Advanced

* (선택사항) `fetch` API는 구현할 수 없지만 `XMLHttpRequest`로는 구현할 수 있는 기능이 있을까요?
* REST 이전에는 HTTP API에 어떤 패러다임들이 있었을까요? REST의 대안으로는 어떤 것들이 제시되고 있을까요?
