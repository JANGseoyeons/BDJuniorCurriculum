# Quest 17-B. 배포 파이프라인

## Introduction

- 이번 퀘스트에서는 CI/CD 파이프라인이 왜 필요한지에 대해 다룹니다.

## Topics

- Continuous Integration

- Continuous Delivery

## Resources

- [AWS: Continuous Integration](https://aws.amazon.com/ko/devops/continuous-integration/)
- [AWS: Continuous Delivery](https://aws.amazon.com/ko/devops/continuous-delivery/)

## Checklist

- CI/CD는 무엇일까요? CI/CD 시스템을 구축하면 어떤 장점이 있을까요?  
  CI/CD는 지속적 통합 및 지속적 배포 약어로, 소프트웨어 제품을 효율적으로 개발하고 배포하는 방식이며, 장점에는 빠른 반영과 배포(CI/CD 시스템을 사용하면 소스 코드 변경 사항이 자동으로 통합되고 테스트 및 배포되므로, 변경 사항이 적용되는 속도가 빨라집니다.), 품질 향상, 재현 가능한 빌드, 작업 흐름 간소화, 팀 협업 강화, 배포 비용 절감이 있습니다.
- CI 시스템인 Travis CI, Jenkins, Circle CI, Github Actions, AWS Codebuild 의 차이점과 장단점은 무엇일까요?  
  Travis CI  
  장점 : 다양한 플러그인과 유연한 환경 설정으로 인해 매우 유연합니다. 대규모 프로젝트에서 매우 안정  
  단점 : 초기 설정이 복잡, 서버를 별도로 구축해야 하므로 유지 보수 비용이 증가  
  Circle CI  
  장점 : 빌드 시간이 빠름, 사용자 친화적인 UI 제공, 유연한 환경 설정 및 파이프라인 구성 가능  
  단점 : 무료 버전에서는 일부 제한, 대규모 프로젝트에서는 유료 버전이 필요  
  Github Actions  
  장점 : Github에서 바로 사용할 수 있음, Github과의 연동이 용이, 무료 사용 가능, 유연한 워크플로우를 지원  
  단점: 초기 설정 복잡, 실행 속도가 느림  
  AWS CodeBuild  
  장점 : AWS와의 연동이 강력, AWS 환경에서 구축된 소프트웨어를 빌드하는데 적합, AWS CodePipeline과 함께 사용하면 손쉽게 CI/CD 파이프라인를 구축  
  단점 : 사용자 인터페이스가 복잡, 비용이 비싸거나 예상치 못한 추가 비용 발생

## Advanced

- 빅테크 회사들이 코드를 빌드하고 배포하는 시스템은 어떻게 설계되고 운영되고 있을까요?
