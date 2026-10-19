const {test}=require('node:test');const assert=require('node:assert/strict');const m=require('../model.js');
test('ajuste de mínimos cuadrados y ejemplo del notebook',()=>{assert.ok(Math.abs(m.slope-15/7)<1e-12);assert.ok(Math.abs(m.intercept-45)<1e-12);assert.ok(Math.abs(m.compare(8).prediction-435/7)<1e-12);assert.equal(m.compare(8).nearest.cycle,60);});
test('límites y empate coinciden con argmin del notebook',()=>{assert.equal(m.compare(3).nearest.cycle,50);assert.equal(m.compare(12).nearest.cycle,70);assert.equal(m.compare(4.5).nearest.age,3);assert.equal(m.compare(9).nearest.age,6);});
test('rechaza edades inválidas',()=>{for(const v of [NaN,Infinity,-1,0,2.9,12.1,'8',null,undefined])assert.throws(()=>m.compare(v),RangeError);});
