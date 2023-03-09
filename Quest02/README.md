# Quest 02. CSS의 기초와 응용

## Introduction

- CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics

- CSS의 기초 문법과 적용 방법
  - Inline, `<style>`, `<link rel="stylesheet" href="...">`
- CSS 규칙의 우선순위
- 박스 모델과 레이아웃 요소
  - 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  - `position`, `left`, `top`, `display`
  - CSS Flexbox와 Grid
- CSS 표준의 역사
- 브라우저별 Developer tools

## Resources

- [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
- [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
- [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist

- CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?

1. 내부 스타일 시트(HTML문서 내의 script 태그를 사용하여 css 스타일을 정의하는 방법)
2. 외부 스타일 시트(css 스타일을 별도의 .css파일로 저장하고, HTML 문서에서 이를 불러와 적용하는 방법)
3. 인라인 스타일(HTML 요소의 style 속성을 사용하여 해당 요소에 대한 스타일을 직접 정의하는 방법)

- 세 가지 방법 각각의 장단점은 무엇일까요?  
  내부 스타일 시트의 장점은 유지보수가 쉽다. HTML파일 안에 있기 때문에 로드 시간이 빠르다. 단점은 HTML 코드와 스타일 코드가 같은 파일에 있어서 가독성이 떨어지고, 중복이 발생할 수 있다.  
  외부 스타일 시트의 장점은 유지보수가 쉽다. 중복을 제거할 수 있으며, 단점은 스타일 시트 파일을 별도로 로드해야 하기 때문에 초기 로드 시간이 다소 길어질 수 있다.  
  인라인 스타일의 장점은 각각의 HTML 요소에 대해 스타일을 적용할 수 있으며, 단점은 가독성이 떨어지며, 유지 보수가 어렵고, 코드 중복이 발생할 수 있다.
- CSS 규칙의 우선순위는 어떻게 결정될까요?

1. 중요도(!important 키워드가 지정된 속성은 다른 모든 우선순위보다 우선합니다) 2) 명시도 3) 소스 순서로 결정된다.

- CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?  
  HTML 요소를 박스 모양으로 처리하는 방식을 의미한다. 박스모델은 각 요소가 컨텐츠, 패딩, 테두리, 여백으로 구성된 박스로 표현되는 방식이다.  
  요소의 크기는 요소의 너비 = 가용한 가로 공간 - (왼쪽 패딩 + 왼쪽 테두리 + 왼쪽 여백 + 오른쪽 패딩 + 오른쪽 테두리 + 오른쪽 여백), 요소의 높이 = 가용한 세로 공간 - (위쪽 패딩 + 위쪽 테두리 + 위쪽 여백 + 아래쪽 패딩 + 아래쪽 테두리 + 아래쪽 여백) 이러한 공식을 통해 결정된다.
- `float` 속성은 왜 좋지 않을까요?  
  레이아웃을 깨질 수 있으며, 높이를 자동으로 계산하지 않고 반응형 디자인 구현이 어렵고, HTML 구조를 파괴할 수 있는 문제점이 발생한다.
- Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?  
  flex는 1차원 레이아웃 시스템(수직, 수평중 택1), grid는 2차원 레이아웃 시스템(수직, 수평 둘 다 가능)으로 분류됨! → 복잡한 레이아웃 설계가 필요할 때 grid를 사용하면 효율적이다.
- CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?  
  서로 비슷한 성격을 가진 요소들을 묶어서 정리하면 코드의 가독성과 유지보수성을 향상시킬 수 있습니다. (레이아웃과 위치, 텍스트 스타일링, 색상과 배경, 애니메이션과 전환)

## Quest

- Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
- **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced

- 왜 CSS는 어려울까요?
- CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
- CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
- (선택사항) 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?
