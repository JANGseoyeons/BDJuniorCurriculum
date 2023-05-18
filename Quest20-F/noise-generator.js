/**
 * A noise generator with a gain AudioParam.
 *
 * @class NoiseGenerator
 * @extends AudioWorkletProcessor
 */

// AudioWorkletProcessor상속함으로서 NoiseGenerator 클래스는 오디오 처리를 위한 process() 메서드를 구현이 가능
class NoiseGenerator extends AudioWorkletProcessor {
  // 노드에서 사용할 AudioParam(노이즈 크기 조절) 객체들의 목록을 정의를 함
  static get parameterDescriptors() {
    return [
      { name: "amplitude", defaultValue: 0.25, minValue: 0, maxValue: 1 },
    ];
  }

  // 오디오 처리를 수행
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    const amplitude = parameters.amplitude;
    const isAmplitudeConstant = amplitude.length === 1;

    for (let channel = 0; channel < output.length; ++channel) {
      const outputChannel = output[channel];
      for (let i = 0; i < outputChannel.length; ++i) {
        outputChannel[i] =
          2 *
          (Math.random() - 0.5) *
          (isAmplitudeConstant ? amplitude[0] : amplitude[i]);
      }
    }

    return true;
  }
}

registerProcessor("noise-generator", NoiseGenerator);
