import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';


const MiComponente = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/Q7zHYNuJ9qRupRBk/scene.splinecode');
  }, []);

  return (
    <div className=' h-3/4 items-center md:h-screen transition-all shadow-2xl shadow-slate-700'>
      <canvas id="canvas3d" />
    </div>
  );
};

export default MiComponente;



