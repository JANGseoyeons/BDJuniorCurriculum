# Quest 12. 보안의 기초

## Introduction

- 이번 퀘스트에서는 가장 기초적인 웹 서비스 보안에 대해 알아보겠습니다.

## Topics

- XSS, CSRF, SQL Injection
- HTTPS, TLS

## Resources

- [The Basics of Web Application Security](https://martinfowler.com/articles/web-security-basics.html)
- [Website Security 101](https://spyrestudios.com/web-security-101/)
- [Web Security Fundamentals](https://www.shopify.com.ng/partners/blog/web-security-2018)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Wikipedia - TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)

## Checklist

- 입력 데이터의 Validation을 웹 프론트엔드에서 했더라도 서버에서 또 해야 할까요? 그 이유는 무엇일까요?
  - 서버로부터 받은 HTML 내용을 그대로 검증 없이 프론트엔드에 innerHTML 등을 통해 적용하면 어떤 문제점이 있을까요?
    1. Cross-site scripting(XSS) 공격
    2. HTML 인젝션 공격
    3. 렌더링 성능 저하
  - XSS(Cross-site scripting)이란 어떤 공격기법일까요?  
    서버로부터 받은 HTML 내용에 악의적인 스크립트가 포함될 수 있다. 이 경우, 해당 스크립트는 사용자 브라우저에서 실행되어 세션 정보나 쿠키등의 중요한 정보를 탈취하거나 조작할 수 있는 공격기법입니다.
  - CSRF(Cross-site request forgery)이란 어떤 공격기법일까요?  
    웹 어플리케이션 취약점 중 하나로, 인증된 사용자의 권한을 이용하여 악성 요청을 전송하는 공격 기법입니다.
  - SQL Injection이란 어떤 공격기법일까요?  
    웹 어플리케이션에서 발생하는 취약점 중 하나로, 악의적인 SQL 쿼리문을 삽입하여 데이터베이스를 조작하는 공격 기법입니다.
- 대부분의 최신 브라우저에서는 HTTP 대신 HTTPS가 권장됩니다. 이유가 무엇일까요?  
  HTTPS는 보안이 강화된 http 프로토콜이며, 데이터의 암호화와 무결성 보호, 인증 드을 제공하여 데이터를 안전하게 전송할 수 있도록하여 권장합니다.
  - HTTPS와 TLS는 어떤 식으로 동작하나요? HTTPS는 어떤 역사를 가지고 있나요?  
    HTTPS는 HTTP프로토콜에 SSL 또는 TLS 프로토콜을 결합한 것 입니다. SSL과 TLS는 웹 브라우저와 서버 간의 통신을 암호화하여, 데이터의 안전한 전송을 보장합니다. HTTPS의 역사는 1994년에 SSL 프로토콜이 개발된 이후로 거술러 올라갑니다. SSL 2.0은 매우 취약하다는 것이 밝혀지면서 SSL 3.0이 개발되었고, 이후 TLS가 SSL의 후속 프로토콜로 등장했습니다. HTTPS는 보안이 강화된 HTTP 프로토콜로, 인터넷 사용자들의 개인 정보와 중요한 데이터를 보호하며, 안전한 웹 서핑 환경을 제공합니다.
  - HTTPS의 서비스 과정에서 인증서는 어떤 역할을 할까요? 인증서는 어떤 체계로 되어 있을까요?  
    HTTPS는 HTTP 프로토콜에 보안 계층을 추가한 것으로, 통신 과정에서 암호화를 통해 정보를 보호하는 프로토콜입니다. HTTPS의 인증서는 인터넷에서 통신하는 웹사이트나 서버의 신뢰성을 검증하는데 사용됩니다.

## Quest

- 메모장의 서버와 클라이언트에 대해, 로컬에서 발행한 인증서를 통해 HTTPS 서비스를 해 보세요.

## Advanced

* TLS의 인증서에 쓰이는 암호화 알고리즘은 어떤 종류가 있을까요?
* (선택사항) HTTP/3은 기존 버전과 어떻게 다를까요? HTTP의 버전 3이 나오게 된 이유는 무엇일까요?
