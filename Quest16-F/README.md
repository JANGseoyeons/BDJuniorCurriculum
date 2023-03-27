# Quest 16-F. 컴포넌트 기반 개발

## Introduction

- 이번 퀘스트에서는 Vue.js 프레임워크를 통해 컴포넌트 기반의 웹 클라이언트 개발 방법론을 더 자세히 알아보겠습니다.

## Topics

- Vue.js framework
- vuex
- Virtual DOM

## Resources

- [Vue.js](https://vuejs.org)
  - [Lifecycle Hooks](https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html)
  - [State Management](https://v3.vuejs.org/guide/state-management.html)
  - [Virtual DOM](https://v3.vuejs.org/guide/optimizations.html#virtual-dom)

## Checklist

- Vue.js는 어떤 특징을 가지고 있는 웹 프레임워크인가요?

  1. UI 화면단 라이브러리: 화면의 요소를 제어하는 코드와 데이터 제어 로직으 분리해 코드를 직관적으로 이해, 유지보수 편리함이 높다.
  2. 컴포넌트 기반 프레임워크: 화면을 여러개의 작은 단위로 쪼개어 개발하며 재사용성이 높고, 구현속도가 높고, 코드 가독성이 높다.
  3. React.js와 Angular.js의 장점을 가지고 있다.

  - Vue.js는 내부적으로 어떤 식으로 동작하나요?

- Vue.js에서의 컴포넌트란 무엇인가요?  
  컴포넌트는 vue의 가장 강력한 기능 중 하나이다. 기본 HTML엘리먼트를 확장하여 재사용 가능한 코드를 캡슐화하는 데 도움이 된다. Vue 인스턴스이기도 한다.
  - Vue 컴포넌트의 라이프사이클은 어떤 식으로 호출되나요?  
    beforeCreate(인스턴스 초기화 된 직후, 데이터 관찰 및 이벤트/감시자 설정 전에 동기적으로 호출)  
    created(인스턴스가 생성된 후 동기적으로 호출)  
    beforeMount (마운트가 시작되기 직전에 호출, render()함수가 처음으로 호출)  
    mounted (el 속성에서 지정한 화면 요소에 인스턴스가 부착된 후 호출)  
    beforeUpdate (초기 렌더링만 서버특에서 수행되기 때문에, 서버 측 렌더링 중 호출되지 않음)  
    update (데이터가 변경되어 가상 DOM이 다시 렌더링 되고 패치된 후에 호출)  
    beforeUmmount (컴포넌트 인스턴스가 마운트 해제 되기 직전에 호출, 아직 인스턴스는 완전하게 동작)  
    unmounted (컴포넌트 인스턴스가 마운트 해제된 후 호출)
- 컴포넌트 간에 데이터를 주고받을 때 단방향 바인딩과 양방향 바인딩 방식이 어떻게 다르고, 어떤 장단점을 가지고 있나요?  
  양방향 데이터 바인딩 : 장점(코드의 사용면에서 코드량을 크게 줄여줌), 단점(변화에 따라 DOM 객체 전체를 렌더링해주거나 데이터를 바꿔주므로, 성능이 감소되는 경우가 있음)  
  단방향 데이터 바인딩 : 장점(데이터 변화에 따른 성능 저하 없이 DOM 객체 갱신 가능, 단점(변화를 감지하고 화면을 업데이트 하는 코드를 매번 작성해야 함)
- Vue.js 기반의 웹 어플리케이션을 위한 상태관리 라이브러리에는 어떤 것이 있을까요? 이러한 상태관리 툴을 사용하는 것에는 어떤 장단점이 있을까요?  
  Vuex , Vue-Redux, Vue-apollo 등이 있다.  
  장점 : 코드 구조의 개선, 중앙 집중화된 상태 관리, 성능 개선  
  단점 : 학습 곡선(익히는 데 시간이 소요, 높은 수준의 이해가 필요). 파일 크기(상태 관리 툴을 사용하면 더 많은 파일 다운로드가 필요하게 됩니다.), 상태가 적은 작은 애플리케이션에서는 필요하지 않을 수 있다.

## Quest

- Vue.js를 통해 메모장 시스템을 다시 한 번 만들어 보세요.
  - 어떤 컴포넌트가 필요한지 생각해 보세요.
  - 각 컴포넌트별로 해당하는 CSS와 자바스크립트를 어떤 식으로 붙여야 할까요?
  - Vue.js 시스템에 타입스크립트는 어떤 식으로 적용할 수 있을까요?
  - 컴포넌트간에 데이터를 주고받으려면 어떤 식으로 하는 것이 좋을까요?
  - `vue-cli`와 같은 Vue의 Boilerplating 기능을 이용하셔서 세팅하시면 됩니다.

## Advanced

- React와 Angular는 어떤 프레임워크이고 어떤 특징을 가지고 있을까요? Vue와는 어떤 점이 다를까요?
- Web Component는 어떤 개념인가요? 이 개념이 Vue나 React를 대체하게 될까요?
- Reactive Programming이란 무엇일까요?
