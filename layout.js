// ===========================================================
// FB VEÍCULOS — layout compartilhado (header, footer, painel de categorias)
// Cada página só precisa de <div id="site-header"></div> e <div id="site-footer"></div>
// ===========================================================

const CATEGORIAS_MENU = [
  ['hatches', 'Hatches'],
  ['sedas', 'Sedãs'],
  ['suvs', 'SUVs'],
  ['picapes', 'Picapes'],
  ['utilitarios', 'Utilitários'],
  ['motos', 'Motos']
];

function categoriaHref(key){ return key + '.html'; }

function headerHTML(activeKey){
  const panelLinks = CATEGORIAS_MENU.map(([key, label]) =>
    `<a href="${categoriaHref(key)}" class="${activeKey===key?'is-active':''}">${label}</a>`
  ).join('');

  return `
  <div class="announce">
    <a href="#" data-whats="Olá! Quero saber mais sobre o atendimento da FB Veículos.">🚗 SEMINOVOS DE QUALIDADE &nbsp;|&nbsp; multimarcas com garantia e procedência. <strong>FALAR NO WHATSAPP &gt;</strong></a>
  </div>

  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand">
        <img class="brand-mark" src="logo-crop.png" alt="FB Veículos">
        <span class="brand-name">FB VEÍCULOS<span>Compra · Venda · Troca</span></span>
      </a>

      <nav class="main-nav" id="mainNav">
        <a href="index.html" ${activeKey==='home' ? 'aria-current="page"' : ''}>Início</a>
        <button type="button" class="nav-cat-trigger" id="catTrigger">Categorias <svg><use href="icons.svg#ic-chevron"></use></svg></button>
        <a href="veiculos.html" ${activeKey==='veiculos' ? 'aria-current="page"' : ''}>Estoque completo</a>
        <a href="financiamento.html" ${activeKey==='financiamento' ? 'aria-current="page"' : ''}>Financiamento</a>
        <a href="contato.html" ${activeKey==='contato' ? 'aria-current="page"' : ''}>Contato</a>
      </nav>

      <div class="header-actions">
        <button type="button" class="icon-btn" id="searchTrigger" aria-label="Buscar">
          <svg><use href="icons.svg#ic-search"></use></svg>
        </button>
        <a class="icon-btn icon-btn-text" href="financiamento.html" ${activeKey==='financiamento' ? 'aria-current="page"' : ''}>
          <svg><use href="icons.svg#ic-money"></use></svg>
          <span>Financiamento</span>
        </a>
        <a class="icon-btn" data-whats="Olá! Quero ver meus veículos favoritos na FB Veículos." aria-label="Favoritos">
          <svg><use href="icons.svg#ic-heart"></use></svg>
        </a>
        <a class="btn-whats" data-whats="Olá! Vim do site da FB Veículos e quero falar com um consultor.">
          <svg><use href="icons.svg#ic-whats"></use></svg>
          <span>WhatsApp</span>
        </a>
        <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>

  <div class="search-overlay" id="searchOverlay" aria-hidden="true">
    <form class="search-box" id="searchForm">
      <svg><use href="icons.svg#ic-search"></use></svg>
      <input type="text" id="searchInput" placeholder="O que você busca? Ex: Onix, HB20, Compass..." autocomplete="off">
      <button type="button" class="search-close" id="searchClose" aria-label="Fechar busca"><svg><use href="icons.svg#ic-close"></use></svg></button>
    </form>
  </div>

  <div class="cat-panel-backdrop" id="catBackdrop"></div>
  <aside class="cat-panel" id="catPanel" aria-hidden="true">
    <button class="cat-panel-close" id="catClose" aria-label="Fechar categorias">
      <svg><use href="icons.svg#ic-close"></use></svg>
    </button>
    <nav class="cat-panel-nav">
      <a href="veiculos.html" class="cat-panel-all ${activeKey==='veiculos'?'is-active':''}">Todo o estoque</a>
      ${panelLinks}
    </nav>
  </aside>
  `;
}

function footerHTML(){
  const cols1 = CATEGORIAS_MENU.slice(0,3).map(([key,label]) => `<li><a href="${categoriaHref(key)}">${label}</a></li>`).join('');
  const cols2 = CATEGORIAS_MENU.slice(3).map(([key,label]) => `<li><a href="${categoriaHref(key)}">${label}</a></li>`).join('');
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="brand">
          <img class="brand-mark" src="logo-crop.png" alt="FB Veículos">
          <span class="brand-name" style="color:#fff">FB VEÍCULOS</span>
        </a>
        <p>Seminovos de qualidade e multimarcas. Compra, venda e troca com procedência garantida, em frente ao Posto Maracajá, Surubim-PE.</p>
      </div>
      <div class="footer-col">
        <h5>Categorias</h5>
        <ul>${cols1}</ul>
      </div>
      <div class="footer-col">
        <h5>&nbsp;</h5>
        <ul>${cols2}</ul>
      </div>
      <div class="footer-col">
        <h5>Loja</h5>
        <ul>
          <li><a href="contato.html">Contato</a></li>
          <li><a href="financiamento.html">Financiamento</a></li>
          <li><a href="contato.html#localizacao">Localização</a></li>
          <li><a href="#" data-whats="Olá! Vim do site da FB Veículos.">WhatsApp</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 FB Veículos. Todos os direitos reservados.</span>
      <span>CNPJ 00.000.000/0001-00 · Em frente ao Posto Maracajá, Surubim-PE</span>
    </div>
  </footer>`;
}

function mountLayout(activeKey){
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if(h) h.outerHTML = headerHTML(activeKey);
  if(f) f.outerHTML = footerHTML();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Painel de categorias
  const catTrigger = document.getElementById('catTrigger');
  const catPanel = document.getElementById('catPanel');
  const catBackdrop = document.getElementById('catBackdrop');
  const catClose = document.getElementById('catClose');
  function openCat(){
    catPanel.classList.add('open');
    catBackdrop.classList.add('open');
    catPanel.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeCat(){
    catPanel.classList.remove('open');
    catBackdrop.classList.remove('open');
    catPanel.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  if(catTrigger){
    catTrigger.addEventListener('click', openCat);
    catClose.addEventListener('click', closeCat);
    catBackdrop.addEventListener('click', closeCat);
    document.addEventListener('keydown', e => { if(e.key === 'Escape') closeCat(); });
  }

  // Busca
  const searchTrigger = document.getElementById('searchTrigger');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  if(searchTrigger){
    searchTrigger.addEventListener('click', () => {
      searchOverlay.classList.add('open');
      searchOverlay.setAttribute('aria-hidden','false');
      setTimeout(() => searchInput.focus(), 100);
    });
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('open');
      searchOverlay.setAttribute('aria-hidden','true');
    });
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const termo = searchInput.value.trim();
      if(!termo) return;
      window.open(whatsLink(`Olá! Estou procurando: "${termo}" na FB Veículos. Vocês têm disponível?`), '_blank', 'noopener');
    });
  }

  // Recoloca os data-whats recém-injetados
  document.querySelectorAll('[data-whats]').forEach(el => {
    el.href = whatsLink(el.getAttribute('data-whats'));
    if(!el.target){ el.target = '_blank'; el.rel = 'noopener'; }
  });
}
