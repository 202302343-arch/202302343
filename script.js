const projects={
  book:{title:'냉장고 속 요정',label:'01 / PICTURE BOOK & BOOK TRAILER',description:'그림책 속 캐릭터와 장면을 만들고, 북 트레일러로 이야기를 확장한 프로젝트입니다.',pages:[1,2,3,4,5,6],alts:['그림책 표지와 펼친 책 목업','그림책 캐릭터와 소개','그림책의 주요 장면','북 트레일러 화면','스토리보드 구성','북 트레일러의 주요 장면']},
  illustration:{title:'축! 딱풀리는 수학 1주년',label:'02 / ILLUSTRATION · CLIENT WORK',description:'캐릭터와 케이크, 풍선으로 1주년의 축하하는 마음을 담은 일러스트레이션입니다.',pages:[7,8],alts:['딱풀리는 수학 1주년 기념 일러스트레이션','클라이언트 일러스트레이션 적용 목업']},
  ux:{title:'나여기',label:'03 / UI·UX · APP REDESIGN',description:'여행을 기록하는 앱의 화면과 사용 흐름을 다시 구성한 UI/UX 리디자인 프로젝트입니다.',pages:[9,10,11,12,13,14,15],alts:['나여기 UI UX 리디자인 표지','리디자인 방향과 주요 화면','기존 사용 흐름 분석','앱의 홈 화면과 브랜드 요소','여행 기록 화면 구성','여행 기록의 상세 흐름','리디자인 최종 화면 모음']}
};
document.querySelector('.ai-question-form').addEventListener('submit',event=>{
  event.preventDefault();
  const input=document.querySelector('#portfolio-question');
  if(!input.value.trim()){input.value='';input.reportValidity();return}
  const status=document.querySelector('.ai-question-status');
  status.hidden=false;
  status.textContent='AI 답변 기능을 준비하고 있습니다. 아래 프로젝트에서 작업 내용을 확인해 주세요.';
});
const menu=document.querySelector('#menu');const toggle=document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{menu.showModal();toggle.setAttribute('aria-expanded','true')});
document.querySelector('.menu-close').addEventListener('click',()=>menu.close());
menu.addEventListener('close',()=>toggle.setAttribute('aria-expanded','false'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.close()));
const detail=document.querySelector('#project-dialog');let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
  const p=projects[button.dataset.project];lastTrigger=button;
  document.querySelector('#detail-title').textContent=p.title;
  document.querySelector('#detail-description').textContent=p.description;
  document.querySelector('.detail-label').textContent=p.label;
  document.querySelector('.detail-count').textContent=`${String(p.pages.length).padStart(2,'0')} PAGES / ORIGINAL PORTFOLIO`;
  const images=document.querySelector('.detail-images');images.replaceChildren();
  p.pages.forEach((page,i)=>{const fig=document.createElement('figure');const img=document.createElement('img');img.src=`assets/portfolio-${String(page).padStart(2,'0')}.webp`;img.alt=p.alts[i];img.width=2339;img.height=1315;if(i>0)img.loading='lazy';const caption=document.createElement('figcaption');caption.textContent=`${String(i+1).padStart(2,'0')} / ${String(p.pages.length).padStart(2,'0')}`;fig.append(img,caption);images.append(fig)});
  detail.showModal();detail.scrollTop=0;
}));
document.querySelectorAll('.detail-close').forEach(button=>button.addEventListener('click',()=>detail.close()));
detail.addEventListener('close',()=>lastTrigger?.focus());
function filterWorks(type){document.querySelectorAll('.archive-list [data-type]').forEach(row=>row.hidden=type!=='all'&&row.dataset.type!==type);document.querySelectorAll('[data-filter]').forEach(button=>{const active=button.dataset.filter===type;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))})}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>filterWorks(button.dataset.filter)));
document.querySelectorAll('[data-category]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();filterWorks(link.dataset.category);document.querySelector('#archive').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}));
