// ===========================================================
// FB VEÍCULOS — estoque (dados de demonstração)
//
// Pra adicionar uma FOTO real a um veículo: coloque o arquivo de
// imagem dentro da pasta /fotos e escreva o nome do arquivo no
// campo foto (ex: foto:"onix-lt-1.jpg"). Sem foto, o card
// continua mostrando o ícone ilustrado da categoria normalmente.
//
// slug = usado para gerar a página/imagem de compartilhamento
// (arquivo veiculo-<slug>.html). Não precisa mexer nisso.
// ===========================================================

const ESTOQUE_PADRAO = {

  hatches: { label:"Hatches", icon:"ic-hatch", items:[
    { nome:"Chevrolet Onix LT 1.0", slug:"chevrolet-onix-lt", foto:null, preco:74900, ano:"2021/2022", km:38000, cambio:"Manual", combustivel:"Flex", cor:"Prata", opcionais:["Ar-condicionado","Direção elétrica","Multimídia"], destaque:true, desc:"Único dono, revisado, manual e chave reserva." },
    { nome:"Volkswagen Gol 1.6 MSI", slug:"volkswagen-gol-msi", foto:null, preco:58900, ano:"2019/2020", km:61000, cambio:"Manual", combustivel:"Flex", cor:"Branco", opcionais:["Ar-condicionado","Vidro elétrico"], destaque:false, desc:"Econômico, ideal para o dia a dia na cidade." },
    { nome:"Fiat Argo Drive 1.3", slug:"fiat-argo-drive", foto:null, preco:69900, ano:"2020/2021", km:45000, cambio:"Manual", combustivel:"Flex", cor:"Vermelho", opcionais:["Multimídia","Câmera de ré","Sensor de estacionamento"], destaque:true, desc:"Design moderno, ótimo custo-benefício." },
    { nome:"Hyundai HB20 Comfort 1.0", slug:"hyundai-hb20-comfort", foto:null, preco:71900, ano:"2021/2021", km:42000, cambio:"Manual", combustivel:"Flex", cor:"Cinza", opcionais:["Ar-condicionado","Direção elétrica","Central multimídia"], destaque:false, desc:"Revisões em dia, pneus novos, pronto pra rodar." }
  ]},

  sedas: { label:"Sedãs", icon:"ic-sedan", items:[
    { nome:"Toyota Corolla XEi 2.0", slug:"toyota-corolla-xei", foto:null, preco:139900, ano:"2020/2021", km:52000, cambio:"Automático", combustivel:"Flex", cor:"Prata", opcionais:["Bancos em couro","Teto solar","Câmera 360°"], destaque:true, desc:"Top de linha, impecável, todas as revisões na concessionária." },
    { nome:"Honda Civic EXL 2.0", slug:"honda-civic-exl", foto:null, preco:118900, ano:"2018/2019", km:68000, cambio:"Automático", combustivel:"Flex", cor:"Preto", opcionais:["Bancos em couro","Piloto automático","Multimídia"], destaque:false, desc:"Conforto e economia em um dos sedãs mais procurados do mercado." },
    { nome:"Chevrolet Cruze LT 1.4 Turbo", slug:"chevrolet-cruze-lt", foto:null, preco:94900, ano:"2019/2020", km:57000, cambio:"Automático", combustivel:"Flex", cor:"Branco", opcionais:["Central multimídia","Ar digital"], destaque:false, desc:"Motor turbo, ótimo desempenho e economia." },
    { nome:"Nissan Versa Sense 1.6", slug:"nissan-versa-sense", foto:null, preco:76900, ano:"2021/2022", km:33000, cambio:"Manual", combustivel:"Flex", cor:"Prata", opcionais:["Ar-condicionado","Vidro elétrico","Trava elétrica"], destaque:true, desc:"Baixa quilometragem, único dono, todo revisado." }
  ]},

  suvs: { label:"SUVs", icon:"ic-suv", items:[
    { nome:"Jeep Compass Longitude 1.3 T", slug:"jeep-compass-longitude", foto:null, preco:154900, ano:"2021/2022", km:41000, cambio:"Automático", combustivel:"Flex", cor:"Cinza", opcionais:["Teto solar","Bancos em couro","Central 8.4\""], destaque:true, desc:"SUV completo, revisado na concessionária, garantia de fábrica." },
    { nome:"Hyundai Creta Prestige 2.0", slug:"hyundai-creta-prestige", foto:null, preco:129900, ano:"2020/2021", km:47000, cambio:"Automático", combustivel:"Flex", cor:"Branco", opcionais:["Câmera de ré","Central multimídia","Sensor de estacionamento"], destaque:true, desc:"Completo, pneus novos, impecável por dentro e por fora." },
    { nome:"Volkswagen T-Cross 200 TSI", slug:"volkswagen-tcross-tsi", foto:null, preco:119900, ano:"2020/2020", km:53000, cambio:"Automático", combustivel:"Flex", cor:"Vermelho", opcionais:["Multimídia","Ar digital","Piloto automático"], destaque:false, desc:"Motor turbo 1.0, ágil e econômico." },
    { nome:"Chevrolet Tracker LT 1.0 Turbo", slug:"chevrolet-tracker-lt", foto:null, preco:112900, ano:"2022/2022", km:24000, cambio:"Automático", combustivel:"Flex", cor:"Preto", opcionais:["Central multimídia","Câmera de ré"], destaque:false, desc:"Baixíssima km, praticamente novo, único dono." }
  ]},

  picapes: { label:"Picapes", icon:"ic-picape", items:[
    { nome:"Fiat Toro Freedom 1.8", slug:"fiat-toro-freedom", foto:null, preco:129900, ano:"2020/2021", km:56000, cambio:"Automático", combustivel:"Flex", cor:"Branco", opcionais:["Central multimídia","Câmera de ré","Rack de teto"], destaque:true, desc:"Robusta e versátil, ideal pra trabalho e lazer." },
    { nome:"Chevrolet S10 LTZ 2.8 Diesel", slug:"chevrolet-s10-ltz", foto:null, preco:189900, ano:"2019/2020", km:72000, cambio:"Automático", combustivel:"Diesel", cor:"Prata", opcionais:["4x4","Bancos em couro","Teto solar"], destaque:true, desc:"Tração 4x4, motor diesel, revisões em dia." },
    { nome:"Volkswagen Saveiro Trendline 1.6", slug:"volkswagen-saveiro-trendline", foto:null, preco:82900, ano:"2021/2021", km:39000, cambio:"Manual", combustivel:"Flex", cor:"Prata", opcionais:["Ar-condicionado","Direção elétrica"], destaque:false, desc:"Cabine simples, ótima pra transporte de carga leve." },
    { nome:"Toyota Hilux SRV 2.8 Diesel", slug:"toyota-hilux-srv", foto:null, preco:249900, ano:"2019/2019", km:81000, cambio:"Automático", combustivel:"Diesel", cor:"Preto", opcionais:["4x4","Bancos em couro","Central multimídia"], destaque:false, desc:"A picape mais desejada do Brasil, toda revisada." }
  ]},

  utilitarios: { label:"Utilitários", icon:"ic-utilitario", items:[
    { nome:"Fiat Fiorino Furgão 1.4", slug:"fiat-fiorino-furgao", foto:null, preco:69900, ano:"2020/2021", km:64000, cambio:"Manual", combustivel:"Flex", cor:"Branco", opcionais:["Ar-condicionado","Direção hidráulica"], destaque:false, desc:"Ideal para pequenos comércios e entregas." },
    { nome:"Renault Kangoo Express 1.6", slug:"renault-kangoo-express", foto:null, preco:64900, ano:"2018/2019", km:75000, cambio:"Manual", combustivel:"Flex", cor:"Branco", opcionais:["Porta lateral dupla","Ar-condicionado"], destaque:false, desc:"Amplo espaço de carga, bem conservada." },
    { nome:"Peugeot Partner Furgão 1.6", slug:"peugeot-partner-furgao", foto:null, preco:71900, ano:"2019/2020", km:58000, cambio:"Manual", combustivel:"Flex", cor:"Prata", opcionais:["Ar-condicionado","Vidro elétrico"], destaque:false, desc:"Ótimo custo-benefício para uso comercial." },
    { nome:"Fiat Doblô Cargo 1.4", slug:"fiat-doblo-cargo", foto:null, preco:66900, ano:"2018/2018", km:80000, cambio:"Manual", combustivel:"Flex", cor:"Branco", opcionais:["Direção hidráulica"], destaque:false, desc:"Espaçosa e resistente, pronta para o trabalho." }
  ]},

  motos: { label:"Motos", icon:"ic-moto", items:[
    { nome:"Honda CG 160 Titan", slug:"honda-cg-160-titan", foto:null, preco:15900, ano:"2021/2022", km:18000, cambio:"Manual", combustivel:"Flex", cor:"Vermelho", opcionais:["Partida elétrica","Freio CBS"], destaque:true, desc:"A moto mais vendida do Brasil, revisada e pronta pra uso." },
    { nome:"Yamaha Factor 125", slug:"yamaha-factor-125", foto:null, preco:11900, ano:"2020/2020", km:22000, cambio:"Manual", combustivel:"Flex", cor:"Azul", opcionais:["Partida elétrica"], destaque:false, desc:"Econômica e leve, ótima para o dia a dia." },
    { nome:"Honda Biz 125", slug:"honda-biz-125", foto:null, preco:12900, ano:"2021/2021", km:19000, cambio:"Automático", combustivel:"Flex", cor:"Prata", opcionais:["Partida elétrica","Freio CBS"], destaque:true, desc:"Baixo consumo, ideal para cidade, único dono." },
    { nome:"Yamaha Fazer 250", slug:"yamaha-fazer-250", foto:null, preco:19900, ano:"2019/2020", km:31000, cambio:"Manual", combustivel:"Flex", cor:"Preto", opcionais:["Freio ABS","Painel digital"], destaque:false, desc:"Potente e confortável, ótima para viagens." }
  ]}
};

function fmtPreco(v){
  return v.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
}
function fmtKm(v){
  return (v || 0).toLocaleString('pt-BR') + ' km';
}
// Evita que texto digitado num veículo (nome, descrição, cor...) seja
// interpretado como HTML/código ao ser exibido no site — proteção contra
// injeção de conteúdo malicioso via painel/planilha/banco de dados.
function escapeHTML(str){
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
}

// O campo "foto" guarda uma ou mais imagens separadas por ";" (mesmo padrão
// usado em opcionais). Aceita tanto URL completa (Storage do Supabase)
// quanto nome de arquivo local antigo (pasta /fotos).
function fotosDoVeiculo(v){
  if(!v.foto) return [];
  return String(v.foto).split(';').map(f => f.trim()).filter(Boolean)
    .map(f => /^https?:\/\//i.test(f) ? f : `fotos/${f}`);
}

// ===========================================================
// VEÍCULOS VINDOS DE UMA PLANILHA DO GOOGLE (opcional)
//
// Se window.LOJA.planilhaUrl estiver preenchido (em main.js), o site
// busca os veículos direto da planilha a cada carregamento de página —
// a lojista adiciona/edita/remove linhas na planilha e o site atualiza
// sozinho, sem precisar mexer em código.
//
// Sem planilha configurada (ou se a busca falhar), o site usa o
// estoque padrão acima normalmente. Nada quebra.
// ===========================================================

let ESTOQUE = ESTOQUE_PADRAO;

// nomes/ícones de cada categoria, extraídos do estoque padrão (fonte única)
const CATEGORIA_INFO = {};
Object.entries(ESTOQUE_PADRAO).forEach(([key, cat]) => {
  CATEGORIA_INFO[key] = { label: cat.label, icon: cat.icon };
});

// slugs que já têm página própria (veiculo-<slug>.html) gerada — os veículos-semente
const PAGINAS_PRONTAS = new Set();
Object.values(ESTOQUE_PADRAO).forEach(cat => cat.items.forEach(v => PAGINAS_PRONTAS.add(v.slug)));

function normalizaTexto(s){
  return (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function slugify(s){
  let out = normalizaTexto(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return out || 'veiculo';
}

// mapa "sedas"/"Sedãs"/"SEDAS " -> chave oficial da categoria
const CATEGORIA_POR_TEXTO = {};
Object.entries(CATEGORIA_INFO).forEach(([key, info]) => {
  CATEGORIA_POR_TEXTO[normalizaTexto(key)] = key;
  CATEGORIA_POR_TEXTO[normalizaTexto(info.label)] = key;
});
function resolveCategoria(valor){
  return CATEGORIA_POR_TEXTO[normalizaTexto(valor)] || null;
}

function textoParaBool(v, padrao){
  const t = normalizaTexto(v);
  if(['sim','s','true','1','verdadeiro','yes'].includes(t)) return true;
  if(['nao','não','n','false','0','falso','no'].includes(t)) return false;
  return padrao;
}

// parser de CSV simples (aceita campos entre aspas com vírgula/quebra de linha dentro)
function parseCSV(text){
  const rows = [];
  let row = [], field = '', dentroAspas = false;
  for(let i = 0; i < text.length; i++){
    const c = text[i], next = text[i+1];
    if(dentroAspas){
      if(c === '"' && next === '"'){ field += '"'; i++; }
      else if(c === '"'){ dentroAspas = false; }
      else field += c;
    } else {
      if(c === '"') dentroAspas = true;
      else if(c === ','){ row.push(field); field = ''; }
      else if(c === '\n'){ row.push(field); rows.push(row); row = []; field = ''; }
      else if(c === '\r'){ /* ignora */ }
      else field += c;
    }
  }
  if(field.length || row.length){ row.push(field); rows.push(row); }
  return rows.filter(r => r.some(c => c.trim() !== ''));
}

function precoParaNumero(txt){
  let t = (txt || '0').trim().replace(/[^\d.,]/g, '');
  if(t.includes(',') && !t.includes('.')) t = t.replace(',', '.');
  else t = t.replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.');
  return parseFloat(t) || 0;
}

// transforma as linhas da planilha (CSV) no mesmo formato do ESTOQUE_PADRAO
function parseEstoqueCSV(csvText){
  const rows = parseCSV(csvText);
  if(rows.length < 2) return null;

  const header = rows[0].map(h => normalizaTexto(h));
  const idx = campo => header.indexOf(campo);
  const iCat = idx('categoria'), iNome = idx('nome'), iPreco = idx('preco'),
        iAno = idx('ano'), iKm = idx('km'), iCambio = idx('cambio'), iComb = idx('combustivel'),
        iCor = idx('cor'), iOpc = idx('opcionais'), iDestaque = idx('destaque'),
        iDesc = idx('descricao'), iFoto = idx('foto'), iAtivo = idx('ativo');

  if(iCat === -1 || iNome === -1 || iPreco === -1) return null;

  const estoque = {};
  const slugsUsados = {};

  for(let r = 1; r < rows.length; r++){
    const linha = rows[r];
    if(!linha || !linha[iNome] || !linha[iNome].trim()) continue;

    const ativo = iAtivo > -1 ? textoParaBool(linha[iAtivo], true) : true;
    if(!ativo) continue;

    const catKey = resolveCategoria(linha[iCat]);
    if(!catKey){ console.warn('Categoria não reconhecida na planilha:', linha[iCat]); continue; }

    const nome = linha[iNome].trim();
    const preco = precoParaNumero(linha[iPreco]);
    const ano = iAno > -1 ? (linha[iAno]||'').trim() : '';
    const km = iKm > -1 ? parseInt((linha[iKm]||'0').replace(/\D/g,'')) || 0 : 0;
    const cambio = iCambio > -1 ? (linha[iCambio]||'').trim() : '';
    const combustivel = iComb > -1 ? (linha[iComb]||'').trim() : '';
    const cor = iCor > -1 ? (linha[iCor]||'').trim() : '';
    const opcionais = iOpc > -1 ? (linha[iOpc]||'').split(/[;,]/).map(s=>s.trim()).filter(Boolean) : [];
    const destaque = iDestaque > -1 ? textoParaBool(linha[iDestaque], false) : false;
    const desc = iDesc > -1 ? (linha[iDesc]||'').trim() : '';
    const foto = iFoto > -1 ? (linha[iFoto]||'').trim() || null : null;

    let baseSlug = slugify(nome), slug = baseSlug, n = 2;
    while(slugsUsados[slug]){ slug = `${baseSlug}-${n}`; n++; }
    slugsUsados[slug] = true;

    if(!estoque[catKey]) estoque[catKey] = { label: CATEGORIA_INFO[catKey].label, icon: CATEGORIA_INFO[catKey].icon, items: [] };
    estoque[catKey].items.push({ nome, slug, foto, preco, ano, km, cambio, combustivel, cor, opcionais, destaque, desc });
  }

  return Object.keys(estoque).length ? estoque : null;
}

// transforma as linhas vindas do Supabase no mesmo formato do ESTOQUE_PADRAO
function parseEstoqueSupabase(linhas){
  const estoque = {};
  linhas.forEach(row => {
    if(row.ativo === false) return;
    const catKey = resolveCategoria(row.categoria);
    if(!catKey){ console.warn('Categoria não reconhecida no banco:', row.categoria); return; }

    const opcionais = (row.opcionais || '').split(/[;,]/).map(s => s.trim()).filter(Boolean);

    if(!estoque[catKey]) estoque[catKey] = { label: CATEGORIA_INFO[catKey].label, icon: CATEGORIA_INFO[catKey].icon, items: [] };
    estoque[catKey].items.push({
      id: row.id,
      nome: row.nome,
      slug: row.slug || slugify(row.nome),
      foto: row.foto || null,
      preco: parseFloat(row.preco) || 0,
      ano: row.ano || '',
      km: parseInt(row.km) || 0,
      cambio: row.cambio || '',
      combustivel: row.combustivel || '',
      cor: row.cor || '',
      opcionais,
      destaque: !!row.destaque,
      desc: row.descricao || ''
    });
  });
  return Object.keys(estoque).length ? estoque : null;
}

async function carregarEstoqueSupabase(){
  const url = window.LOJA && window.LOJA.supabaseUrl;
  const key = window.LOJA && window.LOJA.supabaseAnonKey;
  if(!url || !key) return null;
  try{
    const res = await fetch(`${url}/rest/v1/veiculos?select=*`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: 'no-store'
    });
    if(!res.ok) throw new Error('falha ao buscar veículos no banco');
    const linhas = await res.json();
    const parsed = parseEstoqueSupabase(linhas);
    if(!parsed) throw new Error('banco sem veículos ativos');
    return parsed;
  }catch(err){
    console.warn('Não foi possível carregar veículos do banco de dados.', err);
    return null;
  }
}

let _estoqueCarregado = null;
async function carregarEstoque(){
  if(_estoqueCarregado) return _estoqueCarregado;

  // 1) tenta o banco de dados (Supabase), se configurado
  const doBanco = await carregarEstoqueSupabase();
  if(doBanco){ _estoqueCarregado = doBanco; ESTOQUE = doBanco; return doBanco; }

  // 2) tenta a planilha do Google, se configurada
  const url = window.LOJA && window.LOJA.planilhaUrl;
  if(url){
    try{
      const res = await fetch(url, { cache: 'no-store' });
      if(!res.ok) throw new Error('falha ao buscar a planilha');
      const texto = await res.text();
      const parsed = parseEstoqueCSV(texto);
      if(!parsed) throw new Error('planilha vazia ou em formato inesperado');
      _estoqueCarregado = parsed;
      ESTOQUE = parsed;
      return parsed;
    }catch(err){
      console.warn('Não foi possível carregar a planilha de veículos.', err);
    }
  }
  // 3) usa o estoque padrão embutido no site
  _estoqueCarregado = ESTOQUE_PADRAO;
  ESTOQUE = ESTOQUE_PADRAO;
  return ESTOQUE_PADRAO;
}

function vehicleCardHTML(catKey, v){
  const icon = CATEGORIA_INFO[catKey] ? CATEGORIA_INFO[catKey].icon : 'ic-selo';
  const temPagina = PAGINAS_PRONTAS.has(v.slug);
  const linkVeiculo = temPagina ? `veiculo-${v.slug}.html` : `veiculo.html?slug=${encodeURIComponent(v.slug)}`;
  const nomeSeguro = escapeHTML(v.nome);
  const descSeguro = escapeHTML(v.desc);
  const opcionais = Array.isArray(v.opcionais) ? v.opcionais : [];
  const specsHTML = `<span>${escapeHTML(v.ano||'—')}</span><span>${fmtKm(v.km)}</span><span>${escapeHTML(v.cambio||'—')}</span><span>${escapeHTML(v.combustivel||'—')}</span>`;
  const tagsHTML = opcionais.slice(0,3).map(o => `<span>${escapeHTML(o)}</span>`).join('');
  const linkCompleto = temPagina ? veiculoLink(v.slug) : `${window.LOJA.siteUrl}/${linkVeiculo}`;
  const msg = `Olá! Tenho interesse neste veículo da FB Veículos:\n${v.nome} - ${v.ano||''} - ${fmtPreco(v.preco)}\n${linkCompleto}\n\nAinda está disponível?`;
  const msgSegura = escapeHTML(msg);
  const fotos = fotosDoVeiculo(v);
  const midia = fotos.length
    ? `<img src="${fotos[0]}" alt="${nomeSeguro}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
       <svg class="media-fallback" style="display:none;width:46%;color:var(--verde-600)"><use href="icons.svg#${icon}"></use></svg>`
    : `<svg><use href="icons.svg#${icon}"></use></svg>`;
  return `
  <article class="vehicle-card reveal" data-cambio="${escapeHTML(v.cambio||'')}" data-combustivel="${escapeHTML(v.combustivel||'')}">
    <a class="vehicle-media" href="${linkVeiculo}">
      ${v.destaque ? '<span class="tag-destaque">Destaque</span>' : ''}
      <span class="tag-km">${fmtKm(v.km)}</span>
      ${midia}
    </a>
    <div class="vehicle-body">
      <a href="${linkVeiculo}" class="vehicle-name-link"><h3 class="vehicle-name">${nomeSeguro}</h3></a>
      <p class="vehicle-desc">${descSeguro}</p>
      <div class="vehicle-specs">${specsHTML}</div>
      <div class="vehicle-tags">${tagsHTML}</div>
      <div class="vehicle-price">${fmtPreco(v.preco)}</div>
      <a class="btn-buy" data-whats="${msgSegura}">
        <svg><use href="icons.svg#ic-whats"></use></svg>
        Falar sobre este veículo
      </a>
    </div>
  </article>`;
}

function renderGrid(containerId, catKey, list){
  const el = document.getElementById(containerId);
  if(!el) return;
  const items = list || (ESTOQUE[catKey] && ESTOQUE[catKey].items) || [];
  el.innerHTML = items.length
    ? items.map(v => vehicleCardHTML(catKey, v)).join('')
    : `<div class="empty-state">Nenhum veículo encontrado com esse filtro. <br>Tente outra combinação de câmbio/combustível.</div>`;

  el.querySelectorAll('[data-whats]').forEach(a => {
    a.href = whatsLink(a.getAttribute('data-whats'));
    a.target = '_blank'; a.rel = 'noopener';
  });
  el.querySelectorAll('.reveal').forEach(card => card.classList.add('in'));
}

async function initTodasPage(gridId){
  document.getElementById(gridId).innerHTML = `<div class="empty-state">Carregando estoque…</div>`;
  const estoque = await carregarEstoque();

  const all = [];
  Object.keys(estoque).forEach(key => {
    estoque[key].items.forEach(v => all.push({cat:key, v}));
  });

  function draw(list){
    const el = document.getElementById(gridId);
    el.innerHTML = list.length
      ? list.map(d => vehicleCardHTML(d.cat, d.v)).join('')
      : `<div class="empty-state">Nenhum veículo encontrado nessa categoria.</div>`;
    el.querySelectorAll('[data-whats]').forEach(a => { a.href = whatsLink(a.getAttribute('data-whats')); a.target='_blank'; a.rel='noopener'; });
    el.querySelectorAll('.reveal').forEach(c => c.classList.add('in'));
  }
  draw(all);

  const catButtons = document.querySelectorAll('[data-filter-cat]');
  let activeCat = null;
  catButtons.forEach(btn => btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-filter-cat');
    activeCat = (activeCat === val) ? null : val;
    catButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-cat') === activeCat));
    draw(activeCat ? all.filter(d => d.cat === activeCat) : all);
  }));
}

async function initCategoryPage(catKey, gridId){
  document.getElementById(gridId).innerHTML = `<div class="empty-state">Carregando estoque…</div>`;
  await carregarEstoque();
  renderGrid(gridId, catKey);

  const cambioButtons = document.querySelectorAll('[data-filter-cambio]');
  const combButtons = document.querySelectorAll('[data-filter-combustivel]');
  let activeCambio = null, activeComb = null;

  function apply(){
    const all = (ESTOQUE[catKey] && ESTOQUE[catKey].items) || [];
    const filtered = all.filter(v =>
      (!activeCambio || v.cambio === activeCambio) &&
      (!activeComb || v.combustivel === activeComb)
    );
    renderGrid(gridId, catKey, filtered);
  }

  cambioButtons.forEach(btn => btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-filter-cambio');
    activeCambio = (activeCambio === val) ? null : val;
    cambioButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-cambio') === activeCambio));
    apply();
  }));

  combButtons.forEach(btn => btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-filter-combustivel');
    activeComb = (activeComb === val) ? null : val;
    combButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter-combustivel') === activeComb));
    apply();
  }));
}
