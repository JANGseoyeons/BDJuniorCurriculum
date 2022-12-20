# Quest 20-F. Web Audio API의 기초

## Introduction

* 이번 퀘스트에서는 웹 상에서 오디오를 처리하고 재생하는 API에 대해서 알아보도록 하겠습니다.

## Topics

* Web Audio API
* Javascript
* Web Worker

## Resources

* [MDN - Web Audio API의 개념과 사용법](https://developer.mozilla.org/ko/docs/Web/API/Web_Audio_API)
* [MDN - Web Audio API 사용하기](https://developer.mozilla.org/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

## Checklist

* 웹 오디오란 어떤 기술인가요?
* 웹 오디오는 어떤 구조로 동작하나요?
* 웹 오디오가 지원하는 노드는 무엇이 있고, 그것들은 어떤 기능을 하나요?
* ScriptProcessorNode 와 AudioWorkletNode는 어떤 기능을 하고 둘의 차이점은 무엇인가요?

## Quest

* 버튼을 누르면 노이즈가 합성된 오디오가 재생되는 간단한 웹 페이지를 Web Audio API를 통해 만들어봅시다.
  * 노이즈 오디오는 랜덤 값을 통해 생성해냅니다.
  * 오디오 처리에는 AudioWorkletNode를 사용해봅시다.

## Advanced

* 웹 오디오를 사용할 때 주의해야하는 사항이 어떤 것들이 있을까요?
