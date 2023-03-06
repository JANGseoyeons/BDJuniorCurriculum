# Quest 18-F. 프로그레시브 웹앱

## Introduction

- 이번 퀘스트에서는 2021년 현재 웹 프론트엔드의 많은 최신 기술 중 프로그레시브 웹앱에 관해 알아보겠습니다.

## Topics

- Progressive Web App(PWA)
- Service Worker
- Cache & CacheStorage API
- Web Manifest

## Resources

- [MDN - Progressive web apps (PWAs)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [MDN - Progressive web app Introduction](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/Introduction)
- [MDN - Service Worker API](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API)
- [web.dev - Progressive Web Apps](https://web.dev/progressive-web-apps/)

## Checklist

- 웹 어플리케이션을 프로그레시브 웹앱 형태로 만들면 어떤 이점을 가질까요?  
  오프라인 사용, 빠른 성능, 웹스토어 없이 배포 가능, 플랫폼 독립적, 알림 기능, 보안성
- 서비스 워커란 무엇인가요? 웹 워커와의 차이는 무엇인가요?  
  서비스 워커는 브라우저의 백그라운더에서 실행되는 javascript 파일입니다. 서비스워커는 웹 애플리케이션에서 네트워크 요청을 가로채고, 캐시를 이용하여 응답을 처리하거나, 서버로부터 데이터를 받아와 캐시를 저장할 수 있다. 웹 워커는 둘 다 백그라운더에서 javascript코드를 실행하는 기술입니다. 그러나 서비스 워커는 웹 애플리케이션의 네트워크 요청을 가로채는 등의 기능을 수행하는 데에 중점을 둔 기술이며, 웹 워커는 병렬 처리 등의 일반적인 백그라운드 작업에 사용된다. 또한 서비스 워커는 웹 애플리케이션의 오프라인 기능을 구현하는데에 사용되며, 웹 워커는 주로 성능 향상을 위한 작업에 사용.
- PWA의 성능을 높이기 위한 방법론에는 어떤 것들이 있고, 어떤 식으로 적용할 수 있을까요?  
  PWA는 캐싱을 이용하여 오프라인 상태에서도 사용자에게 콘텐츠를 제공할 수 있다. 따라서 빠른 로딩 속도를 위해 적극적으로 캐싱을 사용하는 것이 좋다.  
  다양한 리소스를 미리 다운로드하여 빠른 로딩을 제공할 수 있다. 이를 위해 필요한 리소스를 사전에 로딩하여 저장하는 프리로딩 기능을 사용하는 것이 좋다.  
  javascript 코드가 많이 사용되므로 코드 최적화가 중요하다. 코드를 최적화하고 크기를 줄이는 것은 빠른 로딩을 위해 필수적이다.  
  이미지는 웹페이지에서 가장 무거운 리소스 중 하나이벼, 이미지 최적화를 통해 이미지 파일의 크기를 줄이고 빠른 로딩 속도를 제공한다.  
  모든 리소스를 한꺼번에 로딩하면 페이지 로딩 속도가 느려질 수 있다. 따라서 필요한 리소스만 로딩하고, 나머지 리소스는 지연 로딩을 사용하여 필요할 때 로딩하는 것이 좋다.

## (선택사항) Quest

- 텍스트 에디터 프로그램을 PWA 형태로 만들어 보세요.
  - 필요한 에셋을 적절히 캐싱하되, 버전업이 되었을 때 캐싱을 해제할 수 있는 형태가 되어야 합니다.
  - 해당 PWA를 데스크탑에 인스톨 가능하도록 만들어 보세요.
  - 오프라인인 경우에는 임시저장 기능을 만들어, 온라인인 경우를 감지하여 자동으로 서버에 반영되도록 만들어 보세요.

## Advanced

- 본 퀘스트의 주제로 고려되었으나 분량상 선정되지 않은 주제들은 다음과 같습니다. 시간날 때 한 번 찾아 보세요!
  - Search Engine Optimization(SEO)
  - CSS-in-JS와 Styled Component
  - Server-Side Rendering(SSR)
