// ===========================================================
// FB VEÍCULOS — configuração da loja
// Troque os valores abaixo pelos reais da loja
// ===========================================================
window.LOJA = {
  // <-- SUBSTITUA pelo número/link direto do WhatsApp da FB Veículos.
  // Pode ser "5581900000000" (código do país + DDD + número) ou o link
  // "message/XXXXXXX" do Instagram, igual está de exemplo abaixo.
  whatsapp: '558182334990',
  nome: 'FB Veículos',

  // <-- SUBSTITUA pelo domínio real do site DEPOIS de publicar.
  // É esse endereço que entra no link enviado ao WhatsApp, e é ele que
  // o WhatsApp acessa pra montar a prévia do veículo na conversa.
  siteUrl: 'https://fbveiculos.com.br',

  // <-- COLE AQUI a "Project URL" e a chave "anon public" do seu projeto
  // Supabase (Project Settings → API), depois de rodar o supabase-setup.sql.
  // Preenchendo isso, o site passa a usar o banco de dados como fonte
  // principal do estoque.
  supabaseUrl: 'https://xiylqenkffyefggglwkr.supabase.co',
  supabaseAnonKey: 'sb_publishable_SMbnX_CiNU4g5cJbQdqtLw_x9pf0zj_',

  // <-- COLE AQUI o link "Publicar na web" (formato CSV) de uma planilha
  // de veículos, se preferir usar planilha em vez do banco de dados.
  // Deixe em branco ('') pra usar só o estoque padrão embutido no site.
  planilhaUrl: ''
};

function whatsLink(mensagem){
  const msg = encodeURIComponent(mensagem);
  const alvo = /^message\//.test(window.LOJA.whatsapp) ? window.LOJA.whatsapp : window.LOJA.whatsapp.replace(/\D/g,'');
  return `https://wa.me/${alvo}?text=${msg}`;
}

// URL pública da página do veículo (usada na mensagem do WhatsApp para
// gerar a prévia com a imagem do carro na conversa)
function veiculoLink(slug){
  return `${window.LOJA.siteUrl}/veiculo-${slug}.html`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Botões de CTA genéricos: <a data-whats="Mensagem">
  document.querySelectorAll('[data-whats]').forEach(el => {
    el.href = whatsLink(el.getAttribute('data-whats'));
    el.target = '_blank';
    el.rel = 'noopener';
  });

  // Scroll reveal
  const items = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && items.length){
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    }, {threshold:.15});
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('in'));
  }
});
