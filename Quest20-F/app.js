const audioContext = new AudioContext();

const playButton = document.getElementById("play-btn");
const noise = document.getElementById("noise");

playButton.addEventListener("click", () => {
  const bufferSize = 4096;
  const buffer = audioContext.createBuffer(
    1,
    bufferSize,
    audioContext.sampleRate
  );
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
});
