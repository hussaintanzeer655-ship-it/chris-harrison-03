// Simple search filter for mock posts
(function(){
  const posts=[
    {t:'Intro to HTML',b:'A quick look at semantic tags.'},
    {t:'CSS for Layout',b:'Flex and Grid in practice.'},
    {t:'JS in the Browser',b:'DOM and events.'}
  ];
  const out=document.getElementById('list');
  function render(q=''){ out.innerHTML=''; const f=posts.filter(p=>p.t.toLowerCase().includes(q)||p.b.toLowerCase().includes(q)); f.forEach(p=>{ const div=document.createElement('div'); div.className='card'; div.innerHTML='<strong>'+p.t+'</strong><div>'+p.b+'</div>'; out.appendChild(div);}); }
  render();
  document.getElementById('q').addEventListener('input',e=>render(e.target.value.toLowerCase()));
})();