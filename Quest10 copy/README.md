# Quest 10. 인증의 이해

## Introduction

- 이번 퀘스트에서는 웹에서의 인증에 관해 알아보겠습니다.

## Topics

- Cookie
- Session
- JWT

## Resources

- [MDN - HTTP 쿠키](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
- [Cookies and Sessions](https://web.stanford.edu/~ouster/cgi-bin/cs142-fall10/lecture.php?topic=cookie)
- [JWT](https://jwt.io/)

## Checklist

- 쿠키란 무엇일까요?  
  client local에 저장되어 있는 토큰파일이며, 통신이 1회성인 Http의 단점을 보완하기 위해 고안된 개념이다.
  - 쿠키는 어떤 식으로 동작하나요?  
    Response Header에 Cookie 설정을 하여 생성할 수 있고, Request 정보에 유저 정보가 담긴 Cookie를 보낸다면 server가 이를 파악하는 원리로 진행한다.
  - 쿠키는 어떤 식으로 서버와 클라이언트 사이에 정보를 주고받나요?  
    기본적으로 HTTP request/response는 일회성으로 client와 server간의 요청-응답이 종료되면 연결이 끊어지는 반면, 쿠키정보는 지속적인 데이터 교환을 위해 server로 계속 전송된다.
- 웹 어플리케이션의 세션이란 무엇일까요?  
   쿠키와 마찬가지로 사용자 정보 저장 및 인증 등에 활용하기 위해 key, value로 이루어진 문자열 데이터이다.
  - 세션의 ID와 내용은 각각 어디에 저장되고 어떻게 서버와 교환되나요?  
    session 정보는 브라우저를 닫으면 사라지고, 사용자는 그 전까지 자신의 session id를 cookie에 담아 보내면서 상태정보를 유지한다.
- JWT란 무엇인가요?  
  Json Web Token, 사용자의 속성과 정보를 Header/Payload/Signature로 분할하여 암호화한 토큰이다.
  - JWT 토큰은 어디에 저장되고 어떻게 서버와 교환되나요?  
    보통 client 측의 local/session storage에 저장되며, client가 server에 request를 보낼 때 HTTP header에 token이 같이 전달된다.
- 세션에 비해 JWT가 가지는 장점은 무엇인가요? 또 JWT에 비해 세션이 가지는 장점은 무엇인가요?  
  구현이 상대적으로 쉽다. JWT은 client 측에 저장하는 데이터로 server측에서 별도의 저장 공간을 필요로 하지 않는다.

## Quest

- 이번에는 메모장 시스템에 로그인 기능을 넣고자 합니다.
  - 사용자는 딱 세 명만 존재한다고 가정하고, 아이디와 비밀번호, 사용자의 닉네임은 하드코딩해도 무방합니다. ✔️
  - 로그인했을 때 해당 사용자가 이전에 작업했던 탭들과 마지막으로 활성화된 탭 등의 상태가 로딩 되어야 합니다.
  - 세션을 이용한 버전과, JWT를 이용한 버전 두 가지를 만들어 보세요!
    - 세션을 이용할 경우 세션은 서버의 메모리나 파일에 저장하면 됩니다.

## Advanced

- Web Authentication API(WebAuthn)은 무엇인가요?
