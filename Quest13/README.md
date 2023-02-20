# Quest 13. 웹 API의 응용과 GraphQL

## Introduction

- 이번 퀘스트에서는 차세대 웹 API의 대세로 각광받고 있는 GraphQL에 대해 알아보겠습니다.

## Topics

- GraphQL
  - Schema
  - Resolver
  - DataLoader
- Apollo

## Resources

- [GraphQL](https://graphql.org/)
- [GraphQL.js](http://graphql.org/graphql-js/)
- [DataLoader](https://github.com/facebook/dataloader)
- [Apollo](https://www.apollographql.com/)

## Checklist

- GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?
  GraphQL API는 쿼리 언어이며 타입 시스템을 사용하여 쿼리를 실행하는 서버사이드 런타임이다.  
  REST API의 경우 속한 데이터를 가져오는데에 응답마다 다양한 엔드포인트를 가지게 된다. GraphQL 경우 하나의 엔트포인트에 다른 쿼리로 요청함으로써 다른 응답을 받을 수 있다.
- GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?  
  스키마란 데이터 타입의 집합이며 API 문서와 같은 역할을 하며, 프론트개발자와 백개발자가 많은 의사소통에 비용을 줄이고, 빠른 개발을 할 수 있다는 장점이 있다. GraphQL API의 형식 시스템을 정의한다. 클라이언트가 엑세스할 수 있는 가능한 데이터의 전체 집합을 설명한다.
- GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?  
  리졸버의 역할은 메소드에 따른 결과인 데이터를 가져오는 구체적인 과정을 담당한다. 리졸버는 obj, args, context, info의 네 개의 인수를 받아 정의됩니다.
  - GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?  
    DataLoader란 GraphQL에서 ORM을 사용할 때 처럼 N + 1 문제가 발생할 수 있습니다. 이러한 문제를 해결할 수 있습니다. DataLoader는 자바스크립트의 Event-Loop를 이용하며 주요 기능으로 batching을 사용하는데, 이것은 Event-Loop에서 하나의 tick에 실행된 데이터 fetch에 대한 요청을 하나의 요청으로 모아서 실행하고, 그 결과를 다시 분배합니다.
- 클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?  
  클라이언트 상에서 요처을 보내기 위해서는 Apollo Client 라이브러리를 사용해야 합니다.
  - Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?  
    데이터 관리 및 유지보수 능력이 좋습니다. 모든 상태를 전역으로 관리할 필요도 없으며, 쿼리 형식 그대로 데이터를 가져올 수 있습니다.
  - Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?  
    fetch, axios과 같은 데이터 전달 module 및 rest api등 data를 확보할 수 있는 별도 모듈을 사용해야한다.
- GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?  
  요청처리 성공은 200, GraphQL server / apollo server initialization 실패처리 / rest api 실패처리 / resolver가 정의되어있지 않는 변수/객체를 반환하는 오류 등으로 구별하는 것이 좋다.

## (선택사항) Quest

- 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.

## Advanced

- GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?
- GraphQL의 경쟁자에는 어떤 것이 있을까요?
