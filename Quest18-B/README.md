# Quest 18-B. 서비스의 운영: 로깅과 모니터링

## Introduction

- 이번 퀘스트에서는 서비스의 운영을 위해 로그를 스트리밍하는 법에 대해 다루겠습니다.

## Topics

- ElasticSearch
- AWS ElasticSearch Service
- Grafana

## Resources

- [ElasticSearch](https://www.elastic.co/kr/what-is/elasticsearch)
- [ElasticSearch 101](https://www.elastic.co/kr/webinars/getting-started-elasticsearch)
- [Grafana Panels](https://grafana.com/docs/grafana/latest/panels/)

## Checklist

- ElasticSearch는 어떤 DB인가요? 기존의 RDB와 어떻게 다르고 어떤 장단점을 가지고 있나요?  
  분산 검색 엔진 및 분산 문서 저장소로 분류되는 NoSQL 데이터베이스입니다. 기존의 관계형 데이터베이스와는 다르게 스키마가 고정되어 있지 않으며, 데이터를 검색 및 분석하는데 최적화되어 있습니다.  
  장점은 검색속도가 빠르며, 대용량의 데이터도 처리 가능, 문서 중심적인 데이터 저장 방식, 스키마가 고정되어 있지 않아 유연성이 높습니다. 분산 검색 엔진으로 데이터가 여러 서버에서 분산 저장되므로 가용성과 확장성이 뛰어나며, RESTful API를 제공, 검색 쿼리의 다양한 기능 및 집계 기능등 제공  
  단점은 분산 환경에서 데이터 무결성과 일관성을 보장하기 위해선 추가적인 작업 필요, 데이터 변경 및 삭제가 상대적으로 느리고, 일부 RDB에서 지원하는 기능 지원하지 않는다. join 연산을 지원하지 않아 데이터 모델링이 어렵다. 검색 및 분석 기능에 최적화되어 있기 때문에, 데이터의 일관성이나 ACID 특성 등을 제공하지 않는다.
- (선택사항) AWS의 ElasticSearch Service는 어떤 서비스인가요? ElasticSearch를 직접 설치하거나 elastic.co에서 직접 제공하는 클라우드 서비스와 비교하여 어떤 장단점이 있을까요?
- Grafana의 Panel 형식에는 어떤 것이 있을까요? 로그를 보기에 적합한 판넬은 어떤 형태일까요?  
  Graph Panel: 그래프 형태로 데이터를 표시하는 패널  
  Singlestat Panel : 단일 값을 표시하는 패널  
  Table Panel : 테이블 형태로 테이터를 표시하는 패널  
  Text Panel : 단순한 텍스트 형태로 데이터를 표시하는 패널  
  로그를 보기에 적합한 패널에는 Log Panel, Alert List Panel이 있다.

## Advanced

- (선택사항) ElasticSearch와 Grafana는 어떤 라이센스로 배포되고 있을까요? AWS와 같은 클라우드 제공자들이 이러한 오픈소스를 서비스화 하는 것을 둘러싼 논란은 어떤 논점일까요?
