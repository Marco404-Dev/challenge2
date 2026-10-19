(function (root) {
  'use strict';
  const data = [{age:3,cycle:50},{age:6,cycle:60},{age:12,cycle:70}];
  const meanX = data.reduce((s,p)=>s+p.age,0)/data.length;
  const meanY = data.reduce((s,p)=>s+p.cycle,0)/data.length;
  const slope = data.reduce((s,p)=>s+(p.age-meanX)*(p.cycle-meanY),0)/data.reduce((s,p)=>s+(p.age-meanX)**2,0);
  const intercept = meanY-slope*meanX;
  function compare(age) {
    if(typeof age !== 'number' || !Number.isFinite(age) || age<3 || age>12) throw new RangeError('Ingresa una edad entre 3 y 12 meses.');
    const nearest = data.reduce((best,p)=>Math.abs(p.age-age)<Math.abs(best.age-age)?p:best);
    const prediction = slope*age+intercept;
    return {age,nearest,prediction,difference:Math.abs(nearest.cycle-prediction)};
  }
  const api={data,slope,intercept,compare};
  if(typeof module!=='undefined' && module.exports) module.exports=api;
  else root.SleepModel=api;
})(typeof globalThis!=='undefined'?globalThis:this);
