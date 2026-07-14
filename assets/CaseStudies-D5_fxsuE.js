import{a as e}from"./chunk-BEqpzyXh.js";import{$t as t,B as n,Bt as r,D as i,F as a,Gt as o,Ht as ee,I as s,It as c,J as l,P as te,R as u,Yt as ne,_n as d,et as f,ft as re,it as p,jt as ie,mn as ae,n as m,o as oe,p as h,vn as g}from"./lucide-react-BevQcNqK.js";import{t as _}from"./proxy-CBlOnRQc.js";import{t as v}from"./AnimatePresence-B-bU8G2D.js";import{a as y,i as b,n as x}from"./index.esm-clTF9h4V.js";import{C as S,S as C,_ as se,g as w,i as ce,n as T,p as le,u as ue,v as E,x as de}from"./firebase-BovyM1uT.js";var D=e(g(),1),O=d(),fe=({onBack:e,theme:d})=>{let[g,fe]=(0,D.useState)([]),[k,A]=(0,D.useState)(null),[j,M]=(0,D.useState)(``),[N,P]=(0,D.useState)(``),[F,I]=(0,D.useState)(``),[L,R]=(0,D.useState)([]),[z,B]=(0,D.useState)(!1),[V,H]=(0,D.useState)(null),[U,pe]=(0,D.useState)(``),[me,W]=(0,D.useState)(null),[G,he]=(0,D.useState)(``),[K,ge]=(0,D.useState)([]),[q,_e]=(0,D.useState)([]),[ve,ye]=(0,D.useState)(!0),[J,Y]=(0,D.useState)(!1),[X,Z]=(0,D.useState)([]),[be,Q]=(0,D.useState)(null),[xe,$]=(0,D.useState)(``);(0,D.useEffect)(()=>{let e=le(C(T,`estudos_caso`),e=>{let t=e.docs.map(e=>({id:e.id,...e.data()}));t.sort((e,t)=>(t.criadoEm||0)-(e.criadoEm||0)),fe(t),A(e=>e&&(t.find(t=>t.id===e.id)||null))});return()=>e()},[]);let Se=async e=>{if(e.preventDefault(),j.trim())try{await se(S(C(T,`estudos_caso`)),{titulo:j.trim(),criadoEm:Date.now(),emPauta:!1,ideias:[]}),M(``)}catch(e){console.error(e),alert(`Erro ao criar tópico.`)}},Ce=async(e,t)=>{if(e.stopPropagation(),window.confirm(`Tem certeza que deseja apagar este módulo e todas as suas ideias?`))try{await ue(S(T,`estudos_caso`,t))}catch(e){console.error(e)}},we=async(e,t)=>{if(e.stopPropagation(),U.trim())try{await E(S(T,`estudos_caso`,t),{titulo:U.trim()}),H(null)}catch(e){console.error(e),alert(`Erro ao atualizar tópico.`)}},Te=async(e,t,n)=>{e.stopPropagation();try{await E(S(T,`estudos_caso`,t),{emPauta:!n})}catch(e){console.error(e)}},Ee=e=>{e.target.files&&R(Array.from(e.target.files))},De=async e=>{if(e.preventDefault(),!(!N.trim()||!k)){B(!0);try{let e=[];for(let t of L){let n=b(ce,`ideias_images/${Date.now()}_${t.name.replace(/[^a-zA-Z0-9.]/g,`_`)}`);await y(n,t);let r=await x(n);e.push({url:r,nome:t.name})}let t={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),texto:N.trim(),autor:F.trim(),imagens:e,finalizado:!1,emPauta:!1,inviavel:!1,viavel:!1,obsDesenvolvimento:``,criadoEm:Date.now()};await E(S(T,`estudos_caso`,k.id),{ideias:de(t)}),P(``),I(``),R([]),document.getElementById(`idea-images-input`).value=``}catch(e){console.error(e),alert(`Erro ao adicionar ideia ou enviar imagens.`)}finally{B(!1)}}},Oe=async(e,t,n)=>{e.preventDefault(),e.stopPropagation();try{let e=await fetch(t);if(!e.ok)throw Error(`Erro na requisição da imagem`);let r=await e.blob(),i=window.URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=n||`anexo_ideia.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(i)}catch(e){console.error(`Download direto falhou por CORS, abrindo em nova guia`,e);let r=document.createElement(`a`);r.href=t,r.target=`_blank`,r.download=n||`anexo_ideia.png`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}},ke=async e=>{if(k)try{let t=S(T,`estudos_caso`,k.id);await w(T,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,finalizado:!t.finalizado}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Ae=async e=>{if(k)try{let t=S(T,`estudos_caso`,k.id);await w(T,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,emPauta:!t.emPauta}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},je=async e=>{if(k&&window.confirm(`Remover esta ideia?`))try{let t=S(T,`estudos_caso`,k.id);await w(T,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).filter(t=>t.id!==e);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Me=async e=>{if(!(!k||!G.trim())){B(!0);try{let t=[];for(let e of q){let n=b(ce,`ideias_images/${Date.now()}_${e.name.replace(/[^a-zA-Z0-9.]/g,`_`)}`);await y(n,e);let r=await x(n);t.push({url:r,nome:e.name})}let n=[...K,...t],r=S(T,`estudos_caso`,k.id);await w(T,async t=>{let i=await t.get(r);if(!i.exists())throw`Módulo não encontrado.`;let a=(i.data().ideias||[]).map(t=>t.id===e?{...t,texto:G.trim(),imagens:n}:t);t.update(r,{ideias:a})}),W(null)}catch(e){console.error(e),alert(`Erro ao salvar edição da ideia.`)}finally{B(!1)}}},Ne=async e=>{if(k)try{let t=S(T,`estudos_caso`,k.id);await w(T,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,inviavel:!t.inviavel,viavel:!1,finalizado:!1}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Pe=async e=>{if(k)try{let t=S(T,`estudos_caso`,k.id);await w(T,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,viavel:!t.viavel,inviavel:!1}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Fe=async e=>{if(k)try{let t=S(T,`estudos_caso`,k.id);await w(T,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,obsDesenvolvimento:xe}:t);n.update(t,{ideias:i})}),Q(null)}catch(e){console.error(e)}},Ie=e=>{Z(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Le=async()=>{if(!(!k||X.length<2))try{let e=S(T,`estudos_caso`,k.id);await w(T,async t=>{let n=await t.get(e);if(!n.exists())throw`Módulo não encontrado.`;let r=n.data().ideias||[],i=r.filter(e=>X.includes(e.id)),a=i.map(e=>e.texto).join(`

---

`),o=i.map(e=>e.autor).filter(Boolean),ee=[...new Set(o)].join(` & `),s=[];i.forEach(e=>{e.imagens&&(s=[...s,...e.imagens])});let c={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),texto:a,autor:ee||`Autores Mesclados`,imagens:s,finalizado:!1,emPauta:!1,inviavel:!1,criadoEm:Date.now()},l=r.filter(e=>!X.includes(e.id));l.push(c),t.update(e,{ideias:l})}),Y(!1),Z([])}catch(e){console.error(e),alert(`Erro ao mesclar ideias.`)}},Re=()=>{if(!k)return;let e=document.getElementById(`print-iframe`);e||(e=document.createElement(`iframe`),e.id=`print-iframe`,e.style.position=`absolute`,e.style.width=`0px`,e.style.height=`0px`,e.style.border=`none`,document.body.appendChild(e));let t=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Relatório - Módulo: ${k.titulo}</title>
          <style>
            body { font-family: Arial, sans-serif; color: black; background: white; padding: 20px; }
            .print-header { text-align: center; border-bottom: 2px solid #ccc; padding-bottom: 10px; margin-bottom: 20px; }
            .idea-item { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px dotted #ccc; page-break-inside: avoid; }
            .idea-text { font-size: 15px; line-height: 1.5; margin-bottom: 8px; }
            .idea-meta { font-size: 12px; color: #555; }
            .status { font-weight: bold; }
            .status.finalizado { color: green; }
            .status.inviavel { color: red; text-decoration: line-through; }
            .images-container { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
            .images-container img { max-height: 200px; border: 1px solid #ddd; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="print-header">
            <h2>Relatório - Módulo: ${k.titulo}</h2>
            <p>Gerado em ${new Date().toLocaleDateString(`pt-BR`)}</p>
          </div>
          ${k.ideias&&k.ideias.filter(e=>!e.inviavel).length>0?`
            <div>
              ${k.ideias.filter(e=>!e.inviavel).map(e=>`
                <div class="idea-item">
                  <div class="idea-text status ${e.finalizado?`finalizado`:``}">
                    <strong>${e.emPauta?`[Em Pauta] `:``}</strong>
                    ${e.viavel?`<strong style="color: #10b981;">[VIÁVEL] </strong>`:``}
                    ${e.texto}
                    ${e.finalizado?` (Finalizado)`:``}
                  </div>
                  ${e.obsDesenvolvimento?`
                    <div style="background: #ecfdf5; padding: 6px 10px; border-left: 3px solid #10b981; margin-top: 6px; font-size: 0.88em; color: #065f46;">
                      <strong>💻 Obs. Dev:</strong> ${e.obsDesenvolvimento}
                    </div>
                  `:``}
                  ${e.imagens&&e.imagens.length>0?`
                    <div class="images-container">
                      ${e.imagens.map(e=>`<img src="${e.url}" alt="${e.nome}" />`).join(``)}
                    </div>
                  `:``}
                  <div class="idea-meta">
                    Autor: ${e.autor||`Desconhecido`} - Data: ${new Date(e.criadoEm).toLocaleDateString(`pt-BR`)}
                  </div>
                </div>
              `).join(``)}
            </div>
          `:`<p>Nenhuma ideia cadastrada neste módulo.</p>`}
        </body>
      </html>
    `,n=e.contentWindow.document;n.open(),n.write(t),n.close(),setTimeout(()=>{e.contentWindow.focus(),e.contentWindow.print()},500)};return(0,O.jsxs)(_.div,{className:`case-studies-container ${d}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[(0,O.jsxs)(`div`,{className:`cs-header no-print`,children:[(0,O.jsxs)(`h1`,{children:[(0,O.jsx)(p,{className:`cs-icon`,size:32}),`Banco de Ideias (Módulos)`]}),(0,O.jsxs)(`div`,{className:`header-actions`,children:[!k&&(0,O.jsxs)(`button`,{className:`print-btn`,onClick:()=>{let e=document.getElementById(`print-iframe`);e||(e=document.createElement(`iframe`),e.id=`print-iframe`,e.style.position=`absolute`,e.style.width=`0px`,e.style.height=`0px`,e.style.border=`none`,document.body.appendChild(e));let t=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Relatório - Banco de Ideias</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: black;
              background: white;
              padding: 20px;
            }
            .print-header {
              text-align: center;
              border-bottom: 2px solid #ccc;
              padding-bottom: 10px;
              margin-bottom: 20px;
            }
            .print-module {
              margin-bottom: 30px;
              page-break-inside: auto;
            }
            .print-module h3 {
              background: #f0f0f0;
              padding: 10px;
              border-radius: 4px;
              font-size: 18px;
              border: 1px solid #ddd;
              margin-bottom: 10px;
              color: #000;
            }
            ul {
              list-style-type: disc;
              padding-left: 30px;
              margin: 0;
            }
            li {
              margin-bottom: 15px;
              padding-bottom: 10px;
              border-bottom: 1px dotted #ccc;
              page-break-inside: avoid;
            }
            .idea-text {
              font-size: 15px;
              line-height: 1.5;
              color: #000;
            }
            .idea-meta {
              font-size: 12px;
              color: #555;
              margin-top: 5px;
            }
            .no-ideas {
              color: #666;
              font-style: italic;
            }
          </style>
        </head>
        <body>
          <div class="print-header">
            <h2>Relatório - Banco de Ideias</h2>
            <p>Gerado em ${new Date().toLocaleDateString(`pt-BR`)}</p>
          </div>
          ${g.map(e=>`
            <div class="print-module">
              <h3>Módulo: ${e.titulo}</h3>
              ${e.ideias&&e.ideias.filter(e=>!e.inviavel).length>0?`
                <ul>
                  ${e.ideias.filter(e=>!e.inviavel).map(e=>`
                    <li>
                      <div class="idea-text">
                        <strong>${e.emPauta?`[Em Pauta] `:``}</strong>
                        ${e.viavel?`<strong style="color: #10b981;">[VIÁVEL] </strong>`:``}
                        ${e.texto}
                        ${e.finalizado?` (Finalizado)`:``}
                      </div>
                      ${e.obsDesenvolvimento?`
                        <div style="background: #ecfdf5; padding: 6px 10px; border-left: 3px solid #10b981; margin-top: 6px; font-size: 0.88em; color: #065f46;">
                          <strong>💻 Obs. Dev:</strong> ${e.obsDesenvolvimento}
                        </div>
                      `:``}
                      <div class="idea-meta">
                        Autor: ${e.autor||`Desconhecido`} - Data: ${new Date(e.criadoEm).toLocaleDateString(`pt-BR`)}
                      </div>
                    </li>
                  `).join(``)}
                </ul>
              `:`
                <p class="no-ideas">Nenhuma ideia cadastrada neste módulo.</p>
              `}
            </div>
          `).join(``)}
        </body>
      </html>
    `,n=e.contentWindow.document;n.open(),n.write(t),n.close(),setTimeout(()=>{e.contentWindow.focus(),e.contentWindow.print()},250)},title:`Imprimir Relatório em PDF`,children:[(0,O.jsx)(te,{size:18}),` Imprimir Relatório`]}),(0,O.jsxs)(`button`,{className:`back-btn`,onClick:e,children:[(0,O.jsx)(ae,{size:18}),` Voltar ao Dashboard`]})]})]}),(0,O.jsx)(`div`,{className:`cs-content no-print`,children:(0,O.jsx)(v,{mode:`wait`,children:k?(()=>{if(!k)return null;let e=[...ve?k.ideias||[]:(k.ideias||[]).filter(e=>!e.finalizado)].sort((e,t)=>{let n=e.finalizado||e.inviavel;return n===(t.finalizado||t.inviavel)?!n&&e.emPauta!==t.emPauta?e.emPauta?-1:1:t.criadoEm-e.criadoEm:n?1:-1});return(0,O.jsxs)(_.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:`details-view`,children:[(0,O.jsxs)(`div`,{className:`details-header-bar`,style:{justifyContent:`space-between`},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`20px`},children:[(0,O.jsxs)(`button`,{className:`btn-back-topic`,onClick:()=>A(null),children:[(0,O.jsx)(ae,{size:18}),` Voltar para Módulos`]}),(0,O.jsx)(`h2`,{style:{margin:0},children:k.titulo})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,O.jsxs)(`button`,{className:`print-btn`,onClick:()=>Y(!J),title:`Mesclar Ideias Similares`,style:{borderColor:J?`var(--neon-cyan)`:``,color:J?`var(--neon-cyan)`:``},children:[(0,O.jsx)(c,{size:18}),` `,J?`Cancelar Mesclagem`:`Mesclar Ideias`]}),(0,O.jsxs)(`button`,{className:`print-btn`,onClick:Re,title:`Imprimir Ideias deste Módulo`,children:[(0,O.jsx)(te,{size:18}),` Imprimir Módulo`]})]})]}),(0,O.jsxs)(`div`,{className:`idea-form-container`,children:[(0,O.jsx)(`h3`,{children:`Sugerir Melhoria`}),(0,O.jsxs)(`form`,{onSubmit:De,className:`idea-form`,children:[(0,O.jsx)(`textarea`,{placeholder:`Descreva a melhoria ou ideia para este módulo...`,value:N,onChange:e=>P(e.target.value),required:!0,rows:3}),(0,O.jsxs)(`div`,{className:`idea-form-footer`,children:[(0,O.jsxs)(`div`,{className:`input-with-icon file-upload-wrapper`,children:[(0,O.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:Ee,id:`idea-images-input`,style:{display:`none`},disabled:z}),(0,O.jsxs)(`label`,{htmlFor:`idea-images-input`,className:`btn-icon`,style:{cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,O.jsx)(re,{size:18}),L.length>0?`${L.length} img(s)`:`Anexar Imagens`]})]}),(0,O.jsxs)(`div`,{className:`input-with-icon`,children:[(0,O.jsx)(oe,{size:16}),(0,O.jsx)(`input`,{type:`text`,placeholder:`Seu nome`,value:F,onChange:e=>I(e.target.value),required:!0,disabled:z})]}),(0,O.jsxs)(`button`,{type:`submit`,className:`btn-primary`,disabled:z,children:[z?(0,O.jsx)(f,{size:18,className:`spin-icon`}):(0,O.jsx)(p,{size:18}),z?`Enviando...`:`Adicionar Ideia`]})]})]})]}),(0,O.jsxs)(`div`,{className:`ideas-list-container`,children:[(0,O.jsxs)(`div`,{className:`ideas-list-header`,children:[(0,O.jsx)(`h3`,{children:`Lista de Ideias`}),(0,O.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[J&&(0,O.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`,background:`var(--surface-hover)`,padding:`6px 12px`,borderRadius:`8px`},children:[(0,O.jsxs)(`span`,{style:{fontSize:`0.85rem`,color:`var(--text-primary)`,fontWeight:`bold`},children:[X.length,` marcadas`]}),X.length>=2&&(0,O.jsx)(`button`,{className:`btn-primary small`,onClick:Le,style:{padding:`4px 10px`,fontSize:`0.8rem`},children:`Mesclar`}),(0,O.jsx)(`button`,{className:`btn-icon small`,onClick:()=>{Y(!1),Z([])},children:(0,O.jsx)(m,{size:14})})]}),(0,O.jsxs)(`label`,{className:`toggle-completed`,children:[(0,O.jsx)(`input`,{type:`checkbox`,checked:ve,onChange:e=>ye(e.target.checked)}),`Mostrar finalizadas`]})]})]}),(0,O.jsxs)(`div`,{className:`ideas-list`,children:[(0,O.jsx)(v,{children:e.map(e=>(0,O.jsxs)(_.div,{className:`idea-card ${e.finalizado?`finalizada`:``} ${e.inviavel?`inviavel`:``} ${e.viavel?`viavel`:``} ${J&&X.includes(e.id)?`selected-merge`:``}`,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},layout:!0,onClick:()=>{J&&Ie(e.id)},style:{cursor:J?`pointer`:`default`},children:[J&&(0,O.jsx)(`div`,{className:`merge-checkbox`,style:{display:`flex`,alignItems:`center`,marginRight:`16px`},children:(0,O.jsx)(`input`,{type:`checkbox`,checked:X.includes(e.id),readOnly:!0,style:{width:`20px`,height:`20px`,cursor:`pointer`}})}),!J&&(0,O.jsx)(`button`,{className:`status-toggle`,onClick:()=>ke(e.id),title:e.finalizado?`Marcar como pendente`:`Marcar como finalizado`,children:e.finalizado?(0,O.jsx)(o,{size:24,className:`icon-success`}):(0,O.jsx)(ee,{size:24,className:`icon-pending`})}),(0,O.jsx)(`div`,{className:`idea-content`,children:me===e.id?(0,O.jsxs)(`div`,{className:`idea-edit-mode`,children:[(0,O.jsx)(`textarea`,{value:G,onChange:e=>he(e.target.value),rows:3,autoFocus:!0,disabled:z}),(0,O.jsxs)(`div`,{className:`edit-images-section`,style:{marginTop:`10px`},children:[K.length>0&&(0,O.jsx)(`div`,{className:`idea-images-grid`,style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,marginBottom:`10px`},children:K.map((e,t)=>(0,O.jsxs)(`div`,{style:{position:`relative`,width:`60px`,height:`60px`,borderRadius:`6px`,overflow:`hidden`,border:`1px solid var(--border-light)`},children:[(0,O.jsx)(`img`,{src:e.url,alt:e.nome,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,O.jsx)(`button`,{className:`remove-image-btn`,onClick:()=>ge(e=>e.filter((e,n)=>n!==t)),disabled:z,style:{position:`absolute`,top:2,right:2,background:`rgba(239,68,68,0.9)`,border:`none`,borderRadius:`50%`,width:`20px`,height:`20px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,cursor:`pointer`},title:`Remover imagem`,children:(0,O.jsx)(m,{size:12})})]},t))}),q.length>0&&(0,O.jsxs)(`div`,{style:{fontSize:`0.85rem`,color:`var(--neon-cyan)`,marginBottom:`10px`},children:[`+ `,q.length,` novo(s) arquivo(s) selecionado(s)`]})]}),(0,O.jsxs)(`div`,{className:`idea-edit-actions`,style:{display:`flex`,justifyContent:`space-between`,marginTop:`10px`},children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:e=>{e.target.files&&_e(Array.from(e.target.files))},id:`edit-images-input-${e.id}`,style:{display:`none`},disabled:z}),(0,O.jsxs)(`label`,{htmlFor:`edit-images-input-${e.id}`,className:`btn-icon small`,style:{cursor:`pointer`,background:`var(--surface-hover)`,padding:`6px 12px`},children:[(0,O.jsx)(re,{size:14,style:{marginRight:`6px`}}),` Anexar`]})]}),(0,O.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,O.jsxs)(`button`,{className:`btn-primary small`,onClick:()=>Me(e.id),disabled:z,children:[z?(0,O.jsx)(f,{size:14,className:`spin-icon`}):(0,O.jsx)(i,{size:14}),` `,z?`Salvando...`:`Salvar`]}),(0,O.jsx)(`button`,{className:`btn-icon small`,onClick:()=>W(null),disabled:z,children:`Cancelar`})]})]})]}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`8px`,flexWrap:`wrap`},children:[e.emPauta&&!e.finalizado&&(0,O.jsx)(`span`,{className:`badge-pauta`,children:`Em Pauta`}),e.viavel&&(0,O.jsx)(`span`,{className:`badge-viavel`,style:{background:`rgba(16, 185, 129, 0.15)`,color:`#10b981`,border:`1px solid rgba(16, 185, 129, 0.3)`,padding:`3px 10px`,borderRadius:`12px`,fontSize:`0.78rem`,fontWeight:600,display:`inline-flex`,alignItems:`center`,gap:`5px`},children:`✅ VIÁVEL — Providenciar dados para solicitação`}),e.inviavel&&(0,O.jsx)(`span`,{className:`badge-inviavel`,style:{background:`rgba(239, 68, 68, 0.15)`,color:`#ef4444`,border:`1px solid rgba(239, 68, 68, 0.3)`,padding:`3px 10px`,borderRadius:`12px`,fontSize:`0.78rem`,fontWeight:600},children:`🚫 INVIÁVEL`})]}),(0,O.jsx)(`p`,{className:`idea-text`,children:e.texto}),e.imagens&&e.imagens.length>0&&(0,O.jsx)(`div`,{className:`idea-images-grid`,style:{display:`flex`,gap:`10px`,marginTop:`10px`,flexWrap:`wrap`},children:e.imagens.map((e,t)=>(0,O.jsxs)(`a`,{href:e.url,onClick:t=>Oe(t,e.url,e.nome),className:`idea-image-link`,title:`Ver/Baixar: ${e.nome}`,style:{position:`relative`,width:`80px`,height:`80px`,borderRadius:`8px`,overflow:`hidden`,border:`1px solid var(--border-light)`,display:`block`},children:[(0,O.jsx)(`img`,{src:e.url,alt:e.nome,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,O.jsx)(`div`,{className:`idea-image-overlay`,style:{position:`absolute`,top:0,left:0,right:0,bottom:0,background:`rgba(0,0,0,0.5)`,display:`flex`,alignItems:`center`,justifyContent:`center`,opacity:0,transition:`opacity 0.2s ease`,color:`white`},children:(0,O.jsx)(ie,{size:20})})]},t))}),(0,O.jsxs)(`div`,{className:`idea-meta`,children:[(0,O.jsxs)(`span`,{className:`author`,children:[(0,O.jsx)(oe,{size:12}),` `,e.autor]}),(0,O.jsxs)(`span`,{className:`date`,children:[(0,O.jsx)(r,{size:12}),` `,new Date(e.criadoEm).toLocaleDateString(`pt-BR`)]})]}),be===e.id?(0,O.jsxs)(`div`,{className:`obs-dev-editor`,style:{marginTop:`14px`,padding:`12px`,background:`rgba(6, 182, 212, 0.08)`,border:`1px solid rgba(6, 182, 212, 0.35)`,borderRadius:`8px`,width:`100%`},onClick:e=>e.stopPropagation(),children:[(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,color:`#06b6d4`,fontWeight:600,fontSize:`0.82rem`,marginBottom:`8px`},children:[(0,O.jsx)(l,{size:16}),` OBSERVAÇÃO DESENVOLVIMENTO:`]}),(0,O.jsx)(`textarea`,{value:xe,onChange:e=>$(e.target.value),placeholder:`Digite o comentário ou observação do desenvolvimento sobre esta ideia...`,rows:3,style:{width:`100%`,padding:`8px 10px`,borderRadius:`6px`,border:`1px solid var(--border-light)`,background:`var(--bg-primary)`,color:`var(--text-primary)`,fontSize:`0.88rem`,fontFamily:`inherit`},autoFocus:!0}),(0,O.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`,marginTop:`10px`},children:[(0,O.jsxs)(`button`,{className:`btn-primary small`,onClick:t=>{t.stopPropagation(),Fe(e.id)},children:[(0,O.jsx)(i,{size:14}),` Salvar Observação`]}),(0,O.jsx)(`button`,{className:`btn-icon small`,onClick:e=>{e.stopPropagation(),Q(null)},children:`Cancelar`})]})]}):e.obsDesenvolvimento&&(0,O.jsxs)(`div`,{className:`obs-dev-box`,style:{marginTop:`14px`,padding:`10px 14px`,background:`rgba(6, 182, 212, 0.08)`,borderLeft:`3px solid #06b6d4`,borderRadius:`6px`,fontSize:`0.88rem`,width:`100%`},children:[(0,O.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`4px`},children:[(0,O.jsxs)(`strong`,{style:{color:`#06b6d4`,fontSize:`0.78rem`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,O.jsx)(l,{size:14}),` OBSERVAÇÃO DESENVOLVIMENTO:`]}),(0,O.jsx)(`button`,{onClick:t=>{t.stopPropagation(),Q(e.id),$(e.obsDesenvolvimento||``)},style:{background:`transparent`,border:`none`,color:`var(--text-secondary)`,cursor:`pointer`,padding:`2px`},title:`Editar observação do desenvolvimento`,children:(0,O.jsx)(u,{size:13})})]}),(0,O.jsx)(`p`,{style:{margin:0,color:`var(--text-primary)`,whiteSpace:`pre-wrap`,lineHeight:1.4},children:e.obsDesenvolvimento})]})]})}),me!==e.id&&(0,O.jsxs)(`div`,{className:`idea-actions`,children:[(0,O.jsx)(`button`,{className:`btn-icon ${e.obsDesenvolvimento?`active-pin`:``}`,onClick:t=>{t.stopPropagation(),Q(e.id),$(e.obsDesenvolvimento||``)},title:`Observação Desenvolvimento`,style:e.obsDesenvolvimento?{background:`rgba(6, 182, 212, 0.15)`,color:`#06b6d4`,borderColor:`rgba(6, 182, 212, 0.4)`}:void 0,children:(0,O.jsx)(l,{size:16})}),(0,O.jsx)(`button`,{className:`btn-icon ${e.viavel?`success`:``}`,onClick:t=>{t.stopPropagation(),Pe(e.id)},title:e.viavel?`Remover viável`:`Marcar como Viável`,style:e.viavel?{color:`#10b981`,borderColor:`#10b981`,background:`rgba(16, 185, 129, 0.15)`}:void 0,children:(0,O.jsx)(t,{size:16})}),(0,O.jsx)(`button`,{className:`btn-icon ${e.emPauta?`active-pin`:``}`,onClick:t=>{t.stopPropagation(),Ae(e.id)},title:e.emPauta?`Remover de pauta`:`Marcar como pauta principal`,children:(0,O.jsx)(s,{size:16})}),(0,O.jsx)(`button`,{className:`btn-icon ${e.inviavel?`danger`:``}`,onClick:t=>{t.stopPropagation(),Ne(e.id)},title:e.inviavel?`Remover inviável`:`Marcar como Inviável`,children:(0,O.jsx)(n,{size:16})}),(0,O.jsx)(`button`,{className:`btn-icon edit-idea`,onClick:t=>{t.stopPropagation(),W(e.id),he(e.texto),ge(e.imagens||[]),_e([])},title:`Editar Ideia`,children:(0,O.jsx)(u,{size:16})}),(0,O.jsx)(`button`,{className:`btn-icon danger delete-idea`,onClick:t=>{t.stopPropagation(),je(e.id)},title:`Apagar Ideia`,children:(0,O.jsx)(h,{size:16})})]})]},e.id))}),e.length===0&&(0,O.jsx)(`div`,{className:`empty-state`,children:`Nenhuma ideia para exibir.`})]})]})]},`topic-details`)})():(()=>{let e=[...g].sort((e,t)=>e.emPauta===t.emPauta?(t.criadoEm||0)-(e.criadoEm||0):e.emPauta?-1:1);return(0,O.jsxs)(_.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},className:`topics-view`,children:[(0,O.jsxs)(`div`,{className:`module-form-container`,children:[(0,O.jsx)(`h2`,{children:`Criar Novo Módulo`}),(0,O.jsxs)(`form`,{onSubmit:Se,className:`module-form`,children:[(0,O.jsx)(`input`,{type:`text`,placeholder:`Ex: DFE, Devolução de Compra...`,value:j,onChange:e=>M(e.target.value),required:!0}),(0,O.jsxs)(`button`,{type:`submit`,className:`btn-primary`,children:[(0,O.jsx)(a,{size:18}),` Adicionar`]})]})]}),(0,O.jsxs)(`div`,{className:`topics-grid`,children:[(0,O.jsx)(v,{children:e.map(e=>(0,O.jsxs)(_.div,{className:`topic-card ${e.emPauta?`topic-pauta`:``}`,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},layout:!0,onClick:()=>{V!==e.id&&A(e)},children:[(0,O.jsx)(`div`,{className:`topic-card-header ${V===e.id?`is-editing`:``}`,children:V===e.id?(0,O.jsxs)(`div`,{className:`topic-edit-mode`,onClick:e=>e.stopPropagation(),children:[(0,O.jsx)(`input`,{type:`text`,value:U,onChange:e=>pe(e.target.value),autoFocus:!0}),(0,O.jsxs)(`div`,{className:`topic-edit-actions`,children:[(0,O.jsxs)(`button`,{className:`btn-primary small`,onClick:t=>we(t,e.id),children:[(0,O.jsx)(i,{size:14}),` Salvar`]}),(0,O.jsxs)(`button`,{className:`btn-icon`,onClick:()=>H(null),children:[(0,O.jsx)(m,{size:14}),` Cancelar`]})]})]}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[e.emPauta&&(0,O.jsx)(`span`,{className:`badge-pauta`,style:{alignSelf:`flex-start`,marginBottom:`4px`},children:`Em Pauta`}),(0,O.jsx)(`h3`,{children:e.titulo})]}),(0,O.jsxs)(`div`,{className:`topic-actions`,onClick:e=>e.stopPropagation(),children:[(0,O.jsx)(`button`,{className:`btn-icon ${e.emPauta?`active-pin`:``}`,onClick:t=>Te(t,e.id,e.emPauta),title:e.emPauta?`Remover de pauta`:`Marcar módulo em pauta`,children:(0,O.jsx)(s,{size:16})}),(0,O.jsx)(`button`,{className:`btn-icon`,onClick:t=>{t.stopPropagation(),H(e.id),pe(e.titulo)},title:`Editar Módulo`,children:(0,O.jsx)(u,{size:16})}),(0,O.jsx)(`button`,{className:`btn-icon danger`,onClick:t=>Ce(t,e.id),title:`Apagar Módulo`,children:(0,O.jsx)(h,{size:16})})]})]})}),(0,O.jsxs)(`div`,{className:`topic-card-stats`,children:[(0,O.jsxs)(`span`,{className:`stat-badge`,children:[(0,O.jsx)(p,{size:14}),(e.ideias||[]).length,` Ideias`]}),(0,O.jsxs)(`span`,{className:`stat-badge success`,children:[(0,O.jsx)(o,{size:14}),(e.ideias||[]).filter(e=>e.finalizado).length,` Resolvidas`]})]}),(0,O.jsxs)(`div`,{className:`topic-card-arrow`,children:[`Acessar Módulo `,(0,O.jsx)(ne,{size:18})]})]},e.id))}),e.length===0&&(0,O.jsx)(`div`,{className:`empty-state`,children:`Nenhum módulo cadastrado ainda.`})]})]},`topics-list`)})()})})]})};export{fe as default};