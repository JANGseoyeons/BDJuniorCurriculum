# Quest 08. 웹 API의 기초

## Introduction

- 이번 퀘스트에서는 웹 API 서버의 기초를 알아보겠습니다.

## Topics

- HTTP Method
- node.js `http` module
  - `req`와 `res` 객체

## Resources

- [MDN - Content-Type Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
- [MDN - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN - MIME Type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
- [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)

## Checklist

- HTTP의 GET과 POST 메소드는 어떻게 다른가요?  
  get으로 서버에게 동일한 요청을 여러 번 전송하더라도 동일한 응답이 돌아와햐 한다는 것을 의미하며,  
  post는 서버에게 동일한 요청을 여러 번 전송해도 응답은 항상 다를 수 있습니다.

- 다른 HTTP 메소드에는 무엇이 있나요?  
  HEAD : 메세지 헤더(문서 정보) 취득
  GET : URL 형식으로 웹 서버측 리소스(데이터)를 요청한다.(보안에 취약)
  POST : 특정 리소스를 엔티티를 제출 (내용 전송) -> get메소드보다 보안에 안정
  PUT : 목적 리소스 모든 현재 표시를 요청 palyoad로 바꾼다. -> 내용 갱신 위주(파일 전송 가능)
  PATCH : 리소스의 부분만을 수정하는데 쓰인다.
  DELETE : 파일을 삭제한다.
  OPTIONS : 대상 리소스에 대한 통신 가능 옵션(메소드)을 설명
  CONNECT : 대상 자원으로 식별되는 서버에 대한 터널을 설정
  TRACE : 대상 리소스에 대한 경로를 따라 메시지 루프백 테스트를 수행

- HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?
  GET 방식은 URL에 Parameter를 붙여서 전송한다.(데이터가 담기는 곳 : header)
  POST 방식은 GET 방식과는 달리 body영역에 데이터를 실어 보낸다는 점이다. GET방식과는 달리 데이터를 URL를 통해 볼 수 없어 보안적이다.(데이터가 담기는 곳 : body)

  - HTTP 요청의 `Content-Type` 헤더는 무엇인가요?  
    Content-Type은 보내는 자원의 형태를 명시하는 헤더입니다.  
    content-Type의 종류는 Multipart Related MIME타입, XML Media타입, Application 타입, 오디오 타입, Multipart타입, TEXT타입이 있다.

  - Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?  
    Form Data(양식 데이터) : 양식을 채울 때 입력 한 세부 정보와 같이 양숙 내부의 래핑하는 데이터를 보내는데 사용(Key-Value 쌍)
    x-www-form-urlencoded : url이 x-www-form-urlencoded를 통해 전송 될 때 인코딩된다.(인코딩 : 전송되는 데이터가 다른 문자로 인코딩되어 공격을 받고 있어도 인식할 수 없음을 의미)
    Raw : 본문 메시지가 요청 본문을 나타내는 비트 스트림으로 표시됨을 의미 -> 문자열 서버로 해석됨
    Binary : 수동으로 입력할 수 없는 형식으로 데이터를 전송되도록 설계

- node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때, `req`와 `res` 객체에는 어떤 정보가 담겨있을까요?  
   req : 클라이언트가 서버로 전달해서 서버의 액션이 일어나게끔하는 메시지이다.
  method, path, version of protocol, headers, body
  res : 요청에 대한 서버의 답변이다.
  version of protocol, status code, status message, headers, body

  - GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?  
    기본적으로 get과 post가 참조하는 기반이 다르며, get이 read하기 위한 목적, post는 update한 정보는 create하기 위한 목적이다.

- 만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 `Content-Type` 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?->

  - 그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?

## Quest

* 다음의 동작을 하는 서버를 만들어 보세요.
  * 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력합니다. ✔️
  * 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력합니다. ✔️
  * 서버의 `/foo` URL에 `bar` 키에 임의의 문자열 값을 갖는 JSON 객체를 POST 메소드로 보내면, `Hello, [문자열]`을 출력합니다. ✔️
  * 서버의 `/pic/upload` URL에 그림 파일을 POST 하면 서버에 보안상 적절한 방법으로 파일이 업로드 됩니다.
  * 서버의 `/pic/show` URL을 GET 하면 브라우저에 위에 업로드한 그림이 뜹니다.
  * 서버의 `/pic/download` URL을 GET 하면 브라우저에 위에 업로드한 그림이 `pic.jpg`라는 이름으로 다운로드 됩니다.
* (선택사항) expressJS와 같은 외부 프레임워크를 사용하지 않고, node.js의 기본 모듈만을 사용해서 만들어 보세요.
* 처리하는 요청의 종류에 따라 공통적으로 나타나는 코드를 정리해 보세요.

## Advanced

- 서버가 파일 업로드를 지원할 때 보안상 주의할 점에는 무엇이 있을까요?
