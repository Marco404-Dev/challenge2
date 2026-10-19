'use strict';
const model=SleepModel;
const $=id=>document.getElementById(id);
const fmt=(n,d=2)=>n.toLocaleString('es-PE',{minimumFractionDigits:d,maximumFractionDigits:d});
const x=a=>60+(a-3)/9*560,y=c=>310-(c-45)/30*260;
let current=model.compare(8);
function draw(r){
 let content='<title id="chart-title">Comparación de métodos</title><desc id="chart-desc">A '+r.age+' meses, el registro más cercano es '+r.nearest.cycle+' minutos y la estimación lineal es '+fmt(r.prediction)+' minutos.</desc>';
 for(let c=45;c<=75;c+=5) content+=`<line x1="60" y1="${y(c)}" x2="620" y2="${y(c)}" stroke="#e8ebe3"/><text x="45" y="${y(c)+4}" text-anchor="end" fill="#69776d" font-size="11">${c}</text>`;
 for(let a=3;a<=12;a++)content+=`<text x="${x(a)}" y="335" text-anchor="middle" fill="#69776d" font-size="11">${a}</text>`;
 content+=`<text x="60" y="25" fill="#69776d" font-size="11">Duración (min)</text><text x="340" y="370" fill="#69776d" font-size="11" text-anchor="middle">Edad (meses)</text><path d="M ${x(3)} ${y(model.slope*3+model.intercept)} L ${x(12)} ${y(model.slope*12+model.intercept)}" stroke="#7c9272" stroke-width="2.5" fill="none"/><line x1="${x(r.age)}" y1="50" x2="${x(r.age)}" y2="310" stroke="#a99bb7" stroke-dasharray="4 5"/>`;
 for(const p of model.data)content+=`<circle cx="${x(p.age)}" cy="${y(p.cycle)}" r="6" fill="#263b38"/><text x="${x(p.age)}" y="${y(p.cycle)-15}" text-anchor="middle" fill="#263b38" font-size="11">${p.cycle} min</text>`;
 content+=`<circle cx="${x(r.nearest.age)}" cy="${y(r.nearest.cycle)}" r="10" fill="none" stroke="#ba713c" stroke-width="3"/><circle cx="${x(r.age)}" cy="${y(r.prediction)}" r="7" fill="#7b63a1" stroke="white" stroke-width="2"/>`;
 $('chart').innerHTML=content;
}
function update(value){
 try{if(String(value).trim()==='')throw new Error('Ingresa una edad entre 3 y 12 meses.');const r=model.compare(Number(value));current=r;$('error').textContent='';$('age').removeAttribute('aria-invalid');$('export').disabled=false;$('slider').value=r.age;$('nearest').innerHTML=`${r.nearest.cycle} <small>min</small>`;$('nearest-detail').textContent=`Dato original a los ${r.nearest.age} meses`;$('prediction').innerHTML=`${fmt(r.prediction)} <small>min</small>`;$('difference').textContent=fmt(r.difference)+' min';draw(r);}catch(e){$('error').textContent=e.message;$('age').setAttribute('aria-invalid','true');$('export').disabled=true;}
}
$('slider').addEventListener('input',e=>{$('age').value=e.target.value;update(e.target.value);});
$('age').addEventListener('input',e=>update(e.target.value));
$('export').addEventListener('click',()=>{const r=current;const csv='edad_meses,registro_edad_meses,registro_minutos,prediccion_minutos,diferencia_minutos\r\n'+[r.age,r.nearest.age,r.nearest.cycle,r.prediction.toFixed(4),r.difference.toFixed(4)].join(',')+'\r\n';const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='comparacion-ciclo-sueno.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
update(8);
