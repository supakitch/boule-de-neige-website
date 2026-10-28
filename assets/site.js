(function(){
  var slopes = Array.prototype.slice.call(document.querySelectorAll('[data-slope]'));
  if(!slopes.length) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function clamp(v,a,b){ return v<a?a:(v>b?b:v); }
  function smooth(a,b,v){ var t=clamp((v-a)/(b-a||1e-6),0,1); return t*t*(3-2*t); }

  var items = slopes.map(function(el){
    return {
      el: el,
      ball: el.querySelector('[data-ball]'),
      cat: el.querySelector('[data-catch]'),
      cp: parseFloat(getComputedStyle(el).getPropertyValue('--catch')) || 0.6
    };
  });

  function place(it, t){
    var h = it.el.offsetHeight;
    var w = it.el.offsetWidth;
    var grow = 1 + 0.22 * smooth(it.cp - 0.01, it.cp + 0.09, t);
    var x = t * w, y = t * h;
    it.ball.style.transform =
      'translate(' + (x) + 'px,' + (y) + 'px) translate(-50%,-100%) rotate(' + (t * 760) + 'deg) scale(' + grow.toFixed(3) + ')';
    if(it.cat){
      var cx = it.cp * w, cy = it.cp * h;
      var gone = smooth(it.cp - 0.07, it.cp, t);
      it.cat.style.transform =
        'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-160%) scale(' + (1 - 0.7 * gone).toFixed(3) + ')';
      it.cat.style.opacity = (1 - gone).toFixed(3);
    }
  }

  if(reduce){
    window.__slopes = function(){ items.forEach(function(it){ place(it, 0.5); }); };
    window.__slopes();
    return;
  }

  var ticking = false;
  function update(){
    ticking = false;
    var vh = window.innerHeight || 800;
    for(var i=0;i<items.length;i++){
      var it = items[i];
      var r = it.el.getBoundingClientRect();
      if(r.bottom < -260 || r.top > vh + 260) continue;
      var p = (vh - r.top) / (vh + r.height);
      var t = -0.09 + clamp(p,0,1) * 1.18;
      place(it, t);
    }
  }
  function onScroll(){
    if(!ticking){ ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  window.__slopes = update;
  update();
})();

/* Bouton vivant : le centre du dégradé suit le curseur (repris du site actuel) */
(function(){
  var btns = document.querySelectorAll('.btn--live');
  Array.prototype.forEach.call(btns, function(b){
    b.addEventListener('pointermove', function(e){
      var r = b.getBoundingClientRect();
      b.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1));
      b.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1));
    });
    b.addEventListener('pointerleave', function(){
      b.style.setProperty('--mx', 50);
      b.style.setProperty('--my', 50);
    });
  });
})();

/* Menu mobile et sous-menu Problèmes */
(function(){
  var nav=document.getElementById('nav'), toggle=document.querySelector('.navtoggle');
  if(toggle&&nav){toggle.addEventListener('click',function(){
    var open=nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded',open?'true':'false');});}
  document.querySelectorAll('.subbtn').forEach(function(b){
    b.addEventListener('click',function(){
      var li=b.parentElement; li.classList.toggle('is-open');
      var sub=li.querySelector('.sub');
      if(sub) sub.style.display=li.classList.contains('is-open')?'block':'';});});
  setInterval(function(){
    var box=document.getElementById('my-cal-inline'), fb=document.getElementById('cal-fallback');
    if(box&&fb) fb.hidden=box.children.length>0;},1200);
})();
