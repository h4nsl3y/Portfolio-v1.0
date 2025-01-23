import { useEffect, useRef, useState } from 'react';

const CircleVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const size = Math.min(window.innerWidth, window.innerHeight);
  const difference = size / 12;
  const borderSize = difference / 4;

  useEffect(() => {
    const initAudio = async () => {
      try {
        const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const context = new AudioContext();
        const micSource = context.createMediaStreamSource(micStream);
        const destination = context.createMediaStreamDestination();
        micSource.connect(destination);
        const analyserNode = context.createAnalyser();
        analyserNode.fftSize = 512;
        const combinedStream = context.createMediaStreamSource(destination.stream);
        combinedStream.connect(analyserNode);

        setAudioContext(context);
        setAnalyser(analyserNode);
      } catch (err) {
        console.error('Error accessing audio sources:', err);
      }
    };

    initAudio();
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !analyser) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frequencyRanges = [
      { start: 0, end: 200, color: 'rgba(80, 80, 168, 0.25)' },
      { start: 200, end: 400, color: 'rgba(80, 80, 168, 0.25)' },
      { start: 400, end: 800, color: 'rgba(80, 80, 168, 0.25)' },
      { start: 800, end: 1600, color: 'rgba(80, 80, 168, 0.25)' },
      { start: 1600, end: 3200, color: 'rgba(80, 80, 168, 0.25)' },
      { start: 3200, end: 6400, color: 'rgba(80, 80, 168, 0.25)' },
    ];

    const circlePositions = [
      { x: canvas.width / 2, y: canvas.height / 2 },
      { x: canvas.width / 2, y: canvas.height / 2 },
      { x: canvas.width / 2, y: canvas.height / 2 },
      { x: canvas.width / 2, y: canvas.height / 2 },
      { x: canvas.width / 2, y: canvas.height / 2 },
      { x: canvas.width / 2, y: canvas.height / 2 },
      { x: canvas.width / 2, y: canvas.height / 2 },
    ];

    const animate = () => {
      if (!analyser) return;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      frequencyRanges.forEach((range, index) => {
        const startBin = Math.floor((range.start / audioContext!.sampleRate) * analyser.fftSize);
        const endBin = Math.floor((range.end / audioContext!.sampleRate) * analyser.fftSize);
        const subDataArray = dataArray.slice(startBin, endBin);
        const averageAmplitude = subDataArray.reduce((acc, val) => acc + val, 0) / subDataArray.length;
        const circleSize = averageAmplitude / 255 * 200;

        const position = circlePositions[index];
        ctx.beginPath();
        ctx.arc(position.x, position.y, 20 + circleSize, 0, Math.PI * 2);
        ctx.lineWidth = borderSize * 2;
        ctx.strokeStyle = range.color;
        ctx.fillStyle = 'transparent';
        ctx.fill();
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [analyser, audioContext]);

  return (
    <div className="h-full w-full flex items-center justify-center glass">
      <canvas ref={canvasRef} className="h-4/5 w-4/5 glass" />
    </div>
  );
};

export default CircleVisualizer;
