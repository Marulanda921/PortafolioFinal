import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';


const MiComponente = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/yWZo-oaPycwlJ17E/scene.splinecode');
  }, []);

  return (
    <div className=' h-3/4 items-center md:w-full md:h-screen transition-all'>
      <canvas id="canvas3d" />
    </div>
  );
};

export default MiComponente;



