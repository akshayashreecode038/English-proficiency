var BANDS={
primary:{name:"Class 1 to 5",levels:["Starter","Basic","Easy"],pre:"Pre-Starter",desc:["Just beginning","Knows simple words","Reads simple sentences"],q:PQ,topics:PTOPICS},
general:{name:"Class 6 and above",levels:["A1","A2","B1","B2"],pre:"Pre-A1",desc:["Beginner","Elementary","Intermediate","Upper-intermediate"],q:GQ,topics:GTOPICS}
};
var SKILLS=["Grammar","Vocabulary","Reading"];
var cfg=BANDS.general,Q=cfg.q;
var st={name:"",band:null,i:0,sel:null,ans:[],view:"student",order:[]};
var app=document.getElementById("app");

function esc(s){return String(s).replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function lab(l){return l<0?cfg.pre:cfg.levels[l]}

function start(){
st.band=null;
app.innerHTML='<h1>English Level Finder</h1><p class="mut">A short placement test that shows a student’s level and gives the teacher a starting point.</p><div class="card"><h2>Before you begin</h2><input type="text" id="nm" placeholder="Student name" maxlength="40"><p class="mut" style="margin:8px 0 0">Which class is the student in?</p><button class="opt" data-b="primary">Class 1 to 5 (very simple test)</button><button class="opt" data-b="general">Class 6 and above</button><button class="btn" id="go" disabled style="margin-top:8px">Start test</button></div>';
var bs=app.querySelectorAll(".opt");
bs.forEach(function(b){b.onclick=function(){bs.forEach(function(x){x.classList.remove("sel")});b.classList.add("sel");st.band=b.dataset.b;document.getElementById("go").disabled=false}});
document.getElementById("go").onclick=function(){
st.name=document.getElementById("nm").value.trim()||"The student";
cfg=BANDS[st.band];Q=cfg.q;Q.forEach(function(q){q.sh=null});
st.i=0;st.ans=[];st.order=shuffle(Q.map(function(_,k){return k}));quiz();
};
}

function quiz(){
var k=st.order[st.i],q=Q[k];
if(!q.sh)q.sh=shuffle(q.o);
st.sel=null;
var h='<h1>English Level Finder</h1><div class="card"><div class="bar"><i style="width:'+(st.i/Q.length*100)+'%"></i></div><span class="tag">'+q.s+'</span><h2 style="margin-top:10px">'+esc(q.q)+'</h2><div>';
q.sh.forEach(function(o,n){h+='<button class="opt" data-n="'+n+'">'+esc(o)+'</button>'});
h+='</div><button class="btn" id="nx" disabled>'+(st.i==Q.length-1?"Finish":"Next")+'</button> <span class="mut">'+(st.i+1)+' / '+Q.length+'</span></div>';
app.innerHTML=h;
var btns=app.querySelectorAll(".opt");
btns.forEach(function(b){b.onclick=function(){btns.forEach(function(x){x.classList.remove("sel")});b.classList.add("sel");st.sel=q.sh[+b.dataset.n];document.getElementById("nx").disabled=false}});
document.getElementById("nx").onclick=function(){st.ans[k]=(st.sel===q.o[0]);st.i++;if(st.i<Q.length)quiz();else{st.view="student";result()}};
}

function analyse(){
var n=cfg.levels.length,skills={};
SKILLS.forEach(function(s){
var lvl=-1,stop=false,detail=[];
for(var l=0;l<n;l++){
var qs=[];Q.forEach(function(q,k){if(q.s==s&&q.l==l)qs.push(k)});
var c=qs.filter(function(k){return st.ans[k]}).length;
var state=c>=Math.ceil(qs.length*0.75)?"ok":(c>0?"part":"no");
detail.push(state);
if(!stop&&state=="ok")lvl=l;else stop=true;
}
skills[s]={lvl:lvl,detail:detail};
});
var vals=SKILLS.map(function(s){return skills[s].lvl});
return{skills:skills,overall:Math.floor(vals.reduce(function(a,b){return a+b},0)/vals.length)};
}

function ladder(d){var h='<div class="ladder">';d.forEach(function(s,l){h+='<span class="'+(s=="ok"?"ok":s=="part"?"part":"")+'">'+cfg.levels[l]+'</span>'});return h+'</div>'}

function result(){
var r=analyse(),n=cfg.levels.length;
var sorted=SKILLS.slice().sort(function(a,b){return r.skills[a].lvl-r.skills[b].lvl});
var weak=sorted[0],strong=sorted[sorted.length-1],nm=esc(st.name);
var h='<h1>Results for '+nm+'</h1><p class="mut">'+cfg.name+'</p><div class="tabs"><button data-v="student" class="'+(st.view=="student"?"on":"")+'">Student view</button><button data-v="teacher" class="'+(st.view=="teacher"?"on":"")+'">Teacher view</button></div>';
h+='<div class="card"><div class="mut">Overall level</div><div class="big">'+lab(r.overall)+'</div><div class="mut">'+(r.overall<0?"Just beginning":cfg.desc[r.overall])+'</div></div>';
h+='<div class="card"><h2>By skill</h2>';
SKILLS.forEach(function(s){var x=r.skills[s];h+='<div class="row"><b>'+s+'</b> <span class="mut">· '+lab(x.lvl)+'</span>'+ladder(x.detail)+'</div>'});
h+='<p class="mut" style="font-size:13px;margin:0">Green: secure (at least three quarters correct). Red outline: partly correct. Grey: not yet secure.</p></div>';
function nextTopic(s){return cfg.topics[s][Math.min(r.skills[s].lvl+1,n-1)][0]}
if(st.view=="student"){
h+='<div class="card"><h2>Your summary</h2><p>You are at about <b>'+lab(r.overall)+'</b> overall. Your strongest area is <b>'+strong+'</b> ('+lab(r.skills[strong].lvl)+'). The area to work on first is <b>'+weak+'</b>.</p><p>Next up in '+weak+': <b>'+nextTopic(weak)+'</b>.</p></div>';
}else{
var plan=SKILLS.slice().sort(function(a,b){return r.skills[a].lvl-r.skills[b].lvl});
h+='<div class="card"><h2>Analysis</h2><p>'+nm+' is working at about <b>'+lab(r.overall)+'</b> overall. '+strong+' is the strongest skill ('+lab(r.skills[strong].lvl)+') and '+weak+' the weakest ('+lab(r.skills[weak].lvl)+').'+(r.skills[strong].lvl-r.skills[weak].lvl>=2?' The gap between skills is large, so teach '+weak+' separately rather than at the level of the strongest skill.':' Skills are fairly even, so one combined course level will work.')+'</p></div>';
h+='<div class="card"><h2>Where to start teaching</h2><ol style="padding-left:20px;margin:6px 0">';
plan.forEach(function(s){var l=Math.min(r.skills[s].lvl+1,n-1);h+='<li><b>'+s+'</b> ('+cfg.levels[l]+'): '+cfg.topics[s][l][0]+'</li>'});
h+='</ol></div>';
var rev=[];
SKILLS.forEach(function(s){r.skills[s].detail.forEach(function(d,l){if(d=="part"&&l<=r.skills[s].lvl+1)rev.push(s+" "+cfg.levels[l]+": "+cfg.topics[s][l][0])})});
if(rev.length){h+='<div class="card"><h2>Quick revision needed</h2><p class="mut">Partly correct at these levels, so check them before moving on.</p><ul>';rev.forEach(function(x){h+='<li>'+esc(x)+'</li>'});h+='</ul></div>'}
h+='<div class="card"><h2>Missed questions</h2><ul>';
var miss=0;Q.forEach(function(q,k){if(st.ans[k]===false){miss++;h+='<li>['+q.s+' '+cfg.levels[q.l]+'] '+esc(q.q)+' <span class="mut">Answer: '+esc(q.o[0])+'</span></li>'}});
if(!miss)h+='<li>None</li>';
h+='</ul></div>';
}
h+='<div class="card"><h2>AI summary</h2><p class="mut" id="aimsg">A written analysis based on these exact answers.</p><button class="btn" id="ai">Generate AI summary</button><div id="aiout" style="white-space:pre-wrap;margin-top:12px"></div></div>';
h+='<div class="card"><button class="btn" id="re">Test another student</button></div>';
app.innerHTML=h;
app.querySelectorAll(".tabs button").forEach(function(b){b.onclick=function(){st.view=b.dataset.v;result()}});
bindAI(r);
document.getElementById("re").onclick=start;
}

function bindAI(r){
var b=document.getElementById("ai"),out=document.getElementById("aiout"),msg=document.getElementById("aimsg");
b.onclick=async function(){
b.disabled=true;msg.textContent="Writing the summary…";out.textContent="";
try{
var sk=SKILLS.map(function(s){return s+": "+lab(r.skills[s].lvl)+" (states by level "+cfg.levels.join("/")+": "+r.skills[s].detail.join(", ")+")"}).join("\n");
var miss=Q.filter(function(q,k){return st.ans[k]===false}).map(function(q){return q.s+" "+cfg.levels[q.l]+": "+q.q}).join("\n");
var t=st.view=="teacher",young=st.band=="primary";
var p="You are an experienced English teacher. A placement test for "+cfg.name+" students gave these results for "+st.name+". Overall level: "+lab(r.overall)+".\nSkills (ok = secure, at least 75% correct; part = some correct; no = none):\n"+sk+"\nQuestions answered wrongly:\n"+(miss||"none")+"\n\n"+(t?"Write for the teacher: a short diagnosis of strengths and gaps, the exact topics to start teaching with and why, and a simple 4-week plan. Under 220 words.":"Write directly to the student in very simple, friendly English"+(young?" for a young child (short sentences, easy words)":"")+": what they do well, what to learn next, and 3 practical study tips. Under 150 words.")+" Plain text only, no markdown symbols.";
var text=await askAI(p,function(x){out.textContent=x});
if(text===null){msg.textContent="The AI summary isn’t set up in this version yet. The summary above still applies.";return}
out.textContent=text;msg.textContent="";
}catch(e){msg.textContent="Couldn’t generate the summary"+(e&&e.code=="not_granted"?" because permission wasn’t given.":". Please try again.")}
finally{b.disabled=false}
};
}

start();
