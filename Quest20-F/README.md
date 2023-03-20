# Quest 20-F. Web Audio API의 기초

## Introduction

- 이번 퀘스트에서는 웹 상에서 오디오를 처리하고 재생하는 API에 대해서 알아보도록 하겠습니다.

## Topics

- Web Audio API
- Javascript
- Web Worker

## Resources

- [MDN - Web Audio API의 개념과 사용법](https://developer.mozilla.org/ko/docs/Web/API/Web_Audio_API)
- [MDN - Web Audio API 사용하기](https://developer.mozilla.org/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

## Checklist

- 웹 오디오란 어떤 기술인가요?  
  오디오 신호 생성 및 재생, 오디오 처리, 실시간 오디오 처리, 오디오 시각화
- 웹 오디오는 어떤 구조로 동작하나요?
  1. Audio Context(오디오 처리에 필요한 모든 리소스 관리하며, 노드들을 연결하여 실제 오디오 처리 수행 메인 객체)
  2. Audio Nodes(실제로 오디오 처리를 수행하는 객체, 오디오 노드들은 여러 종류가 있다. 각 노드는 입력 오디오 신호를 받아 처리, 출력 신호 생성)
  3. Audio Sources(오디오 파일, 마이크 입력, 실시간 생성 등 다양한 입력 소스를 나타내는 객체, 오디오 소스는 오디오 노드의 입력으로 사용)
  4. Audio Destinations(처리된 오디오를 실제로 출력하는 객체입니다. 일반적으로는 스피커나 헤드폰 등이 오디오 출력으로 사용)
- 웹 오디오가 지원하는 노드는 무엇이 있고, 그것들은 어떤 기능을 하나요?
  1. AudioContext: 오디오 처리를 위한 컨텍스트트 나타내는 노드. AudioContext는 audio 노드 생성 및 연결, audio 데이터 전달 등의 역할
  2. AudioBufferSourceNode: 오디오 버퍼를 소스로 사용하여 오디오 신호를 생성하는 노드입니다. 이 노드는 오디오 파일이나 마이크로부터 입력된 신호 등을 버퍼로 변환하여 출력
  3. ScriptProcessorNode: 자바스크립트로 오디오 처리를 수행하는 노드입니다. 이 노드를 사용하여 오디오 데이터를 분석하거나, 프로세싱하는 등의 작업
  4. BiquadFilterNode: 오디오 신호에 필터링을 적용하는 노드입니다. BiquadFilterNode는 로우 패스 필터, 하이 패스 필터, 밴드 패스 필터 등 다양한 필터링을 지원
  5. DynamicsCompressorNode: 오디오 신호의 다이나믹 범위를 제한하는 노드입니다. 이 노드를 사용하여 오디오의 볼륨을 일정한 수준으로 유지
- ScriptProcessorNode 와 AudioWorkletNode는 어떤 기능을 하고 둘의 차이점은 무엇인가요?  
  ScriptProcessorNode는 오디오 효과 처리, 실시간 분석, 스펙트럼 분석등에 사용된다.
  AudioWorkletNode는 Web Audio API와 별도의 작업 스레드에서 실행되며, C++등의 저수준 언어로 구현된 오디오 프로세싱 코드를 사용하여 오디오 신호를 처리, 실시간 오디오 처리, 오디오 합셩에 사용된다.  
  둘의 차이점은 ScriptProcessorNode는 비교적 덜 복잡하고 간단한 오디오 처리에 적합하며, AudioWorkletNode는 더 복잡하고 높은 성능이 필요한 오디오 처리에 적합하다.ㅇ

## Quest

- 버튼을 누르면 노이즈가 합성된 오디오가 재생되는 간단한 웹 페이지를 Web Audio API를 통해 만들어봅시다.
  - 노이즈 오디오는 랜덤 값을 통해 생성해냅니다.
  - 오디오 처리에는 AudioWorkletNode를 사용해봅시다.

## Advanced

- 웹 오디오를 사용할 때 주의해야하는 사항이 어떤 것들이 있을까요?
