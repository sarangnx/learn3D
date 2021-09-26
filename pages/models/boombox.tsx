import { useEffect, useRef } from 'react';
import { BoomBoxModel } from '@models/boombox';

export default function BoomBox() {
  const canvas = useRef();

  useEffect(() => {
    BoomBoxModel(canvas.current);
  }, []);

  return (
    <div className="h-screen w-full">
      <canvas ref={canvas} className="w-full h-full block"></canvas>
    </div>
  );
}
