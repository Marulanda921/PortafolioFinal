import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';


const Spline2 = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas4d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/HDAkkKuL34bKBJIR/scene.splinecode');
  }, []);

  return (
    <div className=' h-full w-full rounded-2xl'>
      <canvas className='z-0' id="canvas4d" />
    </div>
  );
};

export default Spline2;