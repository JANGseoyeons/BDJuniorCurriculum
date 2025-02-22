# Quest 05. OOP 특훈

## Introduction

- 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍을 조금 더 훈련해 보겠습니다.

## Topics

- Separation of Concerns
- 객체지향의 설계 원칙
  - SOLID 원칙
- Local Storage

## Resources

- [Separation of concerns](https://jonbellah.com/articles/separation-of-concerns/)
- [SOLID](https://en.wikipedia.org/wiki/SOLID)
- [객체지향 설계 5원칙](https://webdoli.tistory.com/210)
- [MDN - Local Storage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

## Checklist

- 관심사의 분리 원칙이란 무엇인가요? 웹에서는 이러한 원칙이 어떻게 적용되나요?  
  관심사의 분리라는 말은 "관심이 같다면 모으고, 관심이 다르면 분리시켜 서로에게 영향을 끼치지 않도록 하는 것"을 말한다.  
  관심사의 분리 원칙은 하나의 모듈(혹은 함수)에서 여러가지의 관심사를 가지고 처리하려면 복잡성이 높으니 관심사를 여러개로 분리하여 하나의 관심사는 하나의 기능(역할만) 가지도록 하는 원칙이 적용됩니다.

- 객체지향의 SOLID 원칙이란 무엇인가요? 이 원칙을 구체적인 예를 들어 설명할 수 있나요?  
  SOLID란 로버트 마틴이 2000년대 초에 명명한 객체 지향 프로그래밍의 다섯 가지 기본 원칙을 말한다.  
  SOLID은 마이클 페더스가 원칙의 앞 글자를 딴 것으로 단일 책임 원칙(SRP), 개방 폐쇄 원칙(OPC), 리스코프 치환 원칙(LSP), 인터페이스 분리 원칙(ISP), 의존관계 역전 원칙(DIP)를 말한다.

- 로컬 스토리지란 무엇인가요? 로컬 스토리지의 내용을 개발자 도구를 이용해 확인하려면 어떻게 해야 할까요?  
  사용자의 로컬에 존재하는 저장소이며, 이 저장소에 특정 데이터를 저장하거나 수정하거나 삭제할 수 있으며 유효기간이 존재하지 않는다.  
  애플리케이션 탭에 가서 확인한다.

## Quest

- 외부 라이브러리나 프레임워크를 사용하지 않고, 자바스크립트를 이용하여 간단한 웹브라우저 기반의 텍스트 에디터를 만들어 보겠습니다.
  - 기본적으로 VSCode와 같이 탭을 이용해 여러 개의 파일을 동시에 편집할 수 있습니다.
  - 탭을 눌러 열려 있는 다른 파일을 편집할 수 있으며 탭을 언제든지 닫을 수 있습니다.
  - VSCode와 같이 새 파일, 로드, 저장, 다른 이름으로 저장 등의 기능을 가집니다. 저장은 웹 브라우저의 로컬 스토리지를 이용합니다.
  - VSCode와 같이 탭이 수정되었는데 저장되기 이전일 경우 이를 알려주는 인디케이터가 작동합니다.
  - 같은 이름의 파일을 저장할 경우 에러를 표시해야 합니다.
- 이번 퀘스트의 결과물은 앞으로의 많은 퀘스트에서 재사용되게 되니, 주의깊게 코드를 작성해 보세요!

## Advanced

- (선택사항) 웹 프론트엔드 개발에서 이러한 방식의 패턴을 더 일반화해서 정리할 수 있을까요? 이 퀘스트에서 각각의 클래스들이 공통적으로 수행하게 되는 일들에는 무엇이 있을까요?
