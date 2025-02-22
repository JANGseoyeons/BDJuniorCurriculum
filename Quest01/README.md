# Quest 01. HTML과 웹의 기초

## Introduction

- HTML은 HyperText Markup Language의 약자로, 웹 브라우저에 내용을 표시하기 위한 가장 기본적인 언어입니다. 이번 퀘스트를 통해 HTML에 관한 기초적인 사항들을 알아볼 예정입니다.

## Topics

- HTML의 역사
  - HTML 4.01, XHTML 1.0, XHTML 1.1
  - XHTML 2.0과 HTML5의 대립
  - HTML5와 현재
- 브라우저의 역사
  - Mosaic와 Netscape
  - Internet Explorer의 독점시대
  - Firefox와 Chrome의 등장
  - iOS Safari와 모바일 환경의 브라우저
  - Edge와 Whale 등의 최근의 Chromium 계열 브라우저
- HTML 문서의 구조
  - `<html>`, `<head>`와 `<body>` 등의 HTML 문서의 기본 구조
  - 시맨틱 엘리먼트
  - 블록 엘리먼트와 인라인 엘리먼트의 차이

## Resources

- [MDN - HTML](https://developer.mozilla.org/ko/docs/Web/HTML)
- [HTML For Beginners](https://html.com/)
- [History of the web browser](https://en.wikipedia.org/wiki/History_of_the_web_browser)
- [History of HTML](https://en.wikipedia.org/wiki/HTML)
- [StatCounter](https://gs.statcounter.com/)

## Checklist

- HTML 표준의 역사는 어떻게 될까요?  
  HTML 1.0: 1993년, 최초의 HTML 표준. 기초적인 마크업 언어로 웹 문서의 구조를 표현하는 역할을 합니다.  
  HTML 2.0: 1995년, 폼(Form)과 이미지 맵(Image Map) 등의 기능이 추가되었습니다.  
  HTML 3.2: 1997년, 자바스크립트(JavaScript)와 스타일 시트(Style Sheet) 등의 기능이 추가되었습니다.  
  HTML 4.0: 1997년, 프레임(Frame), 표(Table) 등의 기능이 추가되었습니다. 또한, 웹 접근성(Web Accessibility)을 고려한 마크업 방법이 도입되었습니다  
  XHTML 1.0: 2000년, HTML을 XML 형식으로 재정의한 표준. 엄격한 문법 규칙과 웹 접근성을 강조하는 특징을 가지고 있습니다.  
  HTML5: 2014년, 오디오(Audio), 비디오(Video), 캔버스(Canvas), 웹 스토리지(Web Storage) 등의 기능이 추가되었습니다. 또한, 모바일 기기와의 호환성을 고려한 반응형 웹(Responsive Web) 디자인이 강조되었습니다.

  - HTML 표준을 지키는 것은 왜 중요할까요?

    - 상호간의 호환성이 있으므로 개발과 제작물을 만들어 내는 경제적인 효과가 나타납니다.

  - XHTML 2.0은 왜 세상에 나오지 못하게 되었을까요?

    - xml과 html를 합친 언어인 xhtml은 xml의 버전과 버전사이의 하위 호환성을 지원하지 않으며, 엄격한 문법을 가지고 있기 때문이다.

  - HTML5 표준은 어떤 과정을 통해 정해질까요?
    - WHATWG에서 정의한 표준을 따라 정해진다.

- 브라우저의 역사는 어떻게 될까요?

  - Internet Explorer가 브라우저 시장을 독점하면서 어떤 문제가 일어났고, 이 문제는 어떻게 해결되었을까요?
  - 현재 시점에 브라우저별 점유율은 어떻게 될까요? 이 브라우저별 점유율을 알아보는 것은 왜 중요할까요?
  - 브라우저 엔진(렌더링 엔진)이란 무엇일까요? 어떤 브라우저들이 어떤 엔진을 쓸까요?
  - 모바일 시대 이후, 최근에 출시된 브라우저들은 어떤 특징을 가지고 있을까요?

- HTML 문서는 어떤 구조로 이루어져 있나요?

  - `<!DOCTYPE html>`,`<html>`,`<head>`,`<body>`의 구조로 이루어져 있다.

  - `<head>`에 자주 들어가는 엘리먼트들은 어떤 것이 있고, 어떤 역할을 할까요?

    - head 안에는 기계가 식별할 수 있는 정보(메타정보)를 담는다. head 안에는 들어가는 요소는 title,base,link,style,meta,script,noscript,template등이 들어간다.

  - 시맨틱 태그는 무엇일까요?

    - 의미있는 태그를 말한다. 시맨틱 태그의 종류는 header, nav, section, article, aside, footer 태그가 있다.

    - 시맨틱 엘리먼트를 사용하면 어떤 점이 좋을까요?
    - 검색엔진최적화, 시각장애인에게 도움, 재사용등의 장점을 가지고 있다.

    - `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?
    - section, header, footer, article 태그는 div와 다르게 시맨틱 태그이다.

  - 블록 레벨 엘리먼트와 인라인 엘리먼트는 어떤 차이가 있을까요?
    - 블록 레벨 엘리먼트는 블록단위로 세로배치, 인라인 엘리먼트는 인라인단위로 가로배치(콘텐츠의 흐름을 끊지 않고, 요소를 구성하는 태그)

## Quest

- [이 화면](screen.png)의 정보를 HTML 문서로 표현해 보세요. 다만 CSS를 전혀 사용하지 않고, 문서의 구조가 어떻게 되어 있는지를 파악하여 구현해 보세요.
  - [CSS Naked Day](https://css-naked-day.github.io/)는 매년 4월 9일에 CSS 없는 웹 페이지를 공개하여 내용과 마크업에 집중한 HTML 구조의 중요성을 강조하는 행사입니다.
- 폴더에 있는 `skeleton.html` 파일을 바탕으로 작업해 보시면 됩니다.
  - 정확하게 구현할 필요는 없습니다. 구조를 파악하는데 집중해봅시다.
  - 화면을 구성하는 큰 요소들을 어떻게 처리하면 좋을까요?
  - ## HTML 문서상에서 같은 층위에 비슷한 요소들이 반복될 때는 어떤 식으로 처리하는 것이 좋을까요?

## Advanced

- (선택사항) XML은 어떤 표준일까요? 어떤 식으로 발전해 왔을까요?
  - xml은 W3C XML 표준이다. html언어를 표준화하는 과정에서 발전해왔다.
- YML, Markdown 등 다른 마크업 언어들은 어떤 특징을 가지고 있고, 어떤 용도로 쓰일까요?
  - 쉽고 빠르게 쓸 수 있는 용도로 쓰인다.
