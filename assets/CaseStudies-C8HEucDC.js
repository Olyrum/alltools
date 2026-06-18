import{a as e}from"./chunk-BEqpzyXh.js";import{$ as t,An as n,B as r,Bt as i,D as a,Et as o,F as s,Ft as c,I as l,Lt as u,P as ee,R as te,Wt as ne,ct as d,jt as re,kn as f,n as p,nt as m,o as h,p as ie,sn as ae,un as g}from"./lucide-react-CRk0K1r4.js";import{t as _}from"./AnimatePresence-BYPrUxgc.js";import{a as oe,i as v,n as y}from"./index.esm-CZqcxXGe.js";import{C as b,S as x,_ as se,g as S,i as C,n as w,p as ce,u as le,v as T,x as ue}from"./firebase-BW3o8N8K.js";var E=e(n(),1),D=f(),O=({onBack:e,theme:n})=>{let[f,O]=(0,E.useState)([]),[k,A]=(0,E.useState)(null),[j,M]=(0,E.useState)(``),[N,P]=(0,E.useState)(``),[F,I]=(0,E.useState)(``),[L,R]=(0,E.useState)([]),[z,B]=(0,E.useState)(!1),[V,H]=(0,E.useState)(null),[U,W]=(0,E.useState)(``),[G,K]=(0,E.useState)(null),[q,de]=(0,E.useState)(``),[J,fe]=(0,E.useState)([]),[Y,pe]=(0,E.useState)([]),[me,he]=(0,E.useState)(!0),[X,Z]=(0,E.useState)(!1),[Q,$]=(0,E.useState)([]);(0,E.useEffect)(()=>{let e=ce(x(w,`estudos_caso`),e=>{let t=e.docs.map(e=>({id:e.id,...e.data()}));t.sort((e,t)=>(t.criadoEm||0)-(e.criadoEm||0)),O(t),A(e=>e&&(t.find(t=>t.id===e.id)||null))});return()=>e()},[]);let ge=async e=>{if(e.preventDefault(),j.trim())try{await se(b(x(w,`estudos_caso`)),{titulo:j.trim(),criadoEm:Date.now(),emPauta:!1,ideias:[]}),M(``)}catch(e){console.error(e),alert(`Erro ao criar tópico.`)}},_e=async(e,t)=>{if(e.stopPropagation(),window.confirm(`Tem certeza que deseja apagar este módulo e todas as suas ideias?`))try{await le(b(w,`estudos_caso`,t))}catch(e){console.error(e)}},ve=async(e,t)=>{if(e.stopPropagation(),U.trim())try{await T(b(w,`estudos_caso`,t),{titulo:U.trim()}),H(null)}catch(e){console.error(e),alert(`Erro ao atualizar tópico.`)}},ye=async(e,t,n)=>{e.stopPropagation();try{await T(b(w,`estudos_caso`,t),{emPauta:!n})}catch(e){console.error(e)}},be=e=>{e.target.files&&R(Array.from(e.target.files))},xe=async e=>{if(e.preventDefault(),!(!N.trim()||!k)){B(!0);try{let e=[];for(let t of L){let n=v(C,`ideias_images/${Date.now()}_${t.name.replace(/[^a-zA-Z0-9.]/g,`_`)}`);await oe(n,t);let r=await y(n);e.push({url:r,nome:t.name})}let t={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),texto:N.trim(),autor:F.trim(),imagens:e,finalizado:!1,emPauta:!1,criadoEm:Date.now()};await T(b(w,`estudos_caso`,k.id),{ideias:ue(t)}),P(``),I(``),R([]),document.getElementById(`idea-images-input`).value=``}catch(e){console.error(e),alert(`Erro ao adicionar ideia ou enviar imagens.`)}finally{B(!1)}}},Se=async(e,t,n)=>{e.preventDefault(),e.stopPropagation();try{let e=await fetch(t);if(!e.ok)throw Error(`Erro na requisição da imagem`);let r=await e.blob(),i=window.URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=n||`anexo_ideia.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(i)}catch(e){console.error(`Download direto falhou por CORS, abrindo em nova guia`,e);let r=document.createElement(`a`);r.href=t,r.target=`_blank`,r.download=n||`anexo_ideia.png`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}},Ce=async e=>{if(k)try{let t=b(w,`estudos_caso`,k.id);await S(w,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,finalizado:!t.finalizado}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},we=async e=>{if(k)try{let t=b(w,`estudos_caso`,k.id);await S(w,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,emPauta:!t.emPauta}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Te=async e=>{if(k&&window.confirm(`Remover esta ideia?`))try{let t=b(w,`estudos_caso`,k.id);await S(w,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).filter(t=>t.id!==e);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Ee=async e=>{if(!(!k||!q.trim())){B(!0);try{let t=[];for(let e of Y){let n=v(C,`ideias_images/${Date.now()}_${e.name.replace(/[^a-zA-Z0-9.]/g,`_`)}`);await oe(n,e);let r=await y(n);t.push({url:r,nome:e.name})}let n=[...J,...t],r=b(w,`estudos_caso`,k.id);await S(w,async t=>{let i=await t.get(r);if(!i.exists())throw`Módulo não encontrado.`;let a=(i.data().ideias||[]).map(t=>t.id===e?{...t,texto:q.trim(),imagens:n}:t);t.update(r,{ideias:a})}),K(null)}catch(e){console.error(e),alert(`Erro ao salvar edição da ideia.`)}finally{B(!1)}}},De=async e=>{if(k)try{let t=b(w,`estudos_caso`,k.id);await S(w,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,inviavel:!t.inviavel,finalizado:!1}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Oe=e=>{$(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},ke=async()=>{if(!(!k||Q.length<2))try{let e=b(w,`estudos_caso`,k.id);await S(w,async t=>{let n=await t.get(e);if(!n.exists())throw`Módulo não encontrado.`;let r=n.data().ideias||[],i=r.filter(e=>Q.includes(e.id)),a=i.map(e=>e.texto).join(`

---

`),o=i.map(e=>e.autor).filter(Boolean),s=[...new Set(o)].join(` & `),c=[];i.forEach(e=>{e.imagens&&(c=[...c,...e.imagens])});let l={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),texto:a,autor:s||`Autores Mesclados`,imagens:c,finalizado:!1,emPauta:!1,inviavel:!1,criadoEm:Date.now()},u=r.filter(e=>!Q.includes(e.id));u.push(l),t.update(e,{ideias:u})}),Z(!1),$([])}catch(e){console.error(e),alert(`Erro ao mesclar ideias.`)}},Ae=()=>{if(!k)return;let e=document.getElementById(`print-iframe`);e||(e=document.createElement(`iframe`),e.id=`print-iframe`,e.style.position=`absolute`,e.style.width=`0px`,e.style.height=`0px`,e.style.border=`none`,document.body.appendChild(e));let t=`
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
                    ${e.texto}
                    ${e.finalizado?` (Finalizado)`:``}
                  </div>
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
    `,n=e.contentWindow.document;n.open(),n.write(t),n.close(),setTimeout(()=>{e.contentWindow.focus(),e.contentWindow.print()},500)};return(0,D.jsxs)(g.div,{className:`case-studies-container ${n}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[(0,D.jsxs)(`div`,{className:`cs-header no-print`,children:[(0,D.jsxs)(`h1`,{children:[(0,D.jsx)(m,{className:`cs-icon`,size:32}),`Banco de Ideias (Módulos)`]}),(0,D.jsxs)(`div`,{className:`header-actions`,children:[!k&&(0,D.jsxs)(`button`,{className:`print-btn`,onClick:()=>{let e=document.getElementById(`print-iframe`);e||(e=document.createElement(`iframe`),e.id=`print-iframe`,e.style.position=`absolute`,e.style.width=`0px`,e.style.height=`0px`,e.style.border=`none`,document.body.appendChild(e));let t=`
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
          ${f.map(e=>`
            <div class="print-module">
              <h3>Módulo: ${e.titulo}</h3>
              ${e.ideias&&e.ideias.filter(e=>!e.inviavel).length>0?`
                <ul>
                  ${e.ideias.filter(e=>!e.inviavel).map(e=>`
                    <li>
                      <div class="idea-text">
                        <strong>${e.emPauta?`[Em Pauta] `:``}</strong>
                        ${e.texto}
                        ${e.finalizado?` (Finalizado)`:``}
                      </div>
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
    `,n=e.contentWindow.document;n.open(),n.write(t),n.close(),setTimeout(()=>{e.contentWindow.focus(),e.contentWindow.print()},250)},title:`Imprimir Relatório em PDF`,children:[(0,D.jsx)(ee,{size:18}),` Imprimir Relatório`]}),(0,D.jsxs)(`button`,{className:`back-btn`,onClick:e,children:[(0,D.jsx)(ae,{size:18}),` Voltar ao Dashboard`]})]})]}),(0,D.jsx)(`div`,{className:`cs-content no-print`,children:(0,D.jsx)(_,{mode:`wait`,children:k?(()=>{if(!k)return null;let e=[...me?k.ideias||[]:(k.ideias||[]).filter(e=>!e.finalizado)].sort((e,t)=>{let n=e.finalizado||e.inviavel;return n===(t.finalizado||t.inviavel)?!n&&e.emPauta!==t.emPauta?e.emPauta?-1:1:t.criadoEm-e.criadoEm:n?1:-1});return(0,D.jsxs)(g.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:`details-view`,children:[(0,D.jsxs)(`div`,{className:`details-header-bar`,style:{justifyContent:`space-between`},children:[(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`20px`},children:[(0,D.jsxs)(`button`,{className:`btn-back-topic`,onClick:()=>A(null),children:[(0,D.jsx)(ae,{size:18}),` Voltar para Módulos`]}),(0,D.jsx)(`h2`,{style:{margin:0},children:k.titulo})]}),(0,D.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,D.jsxs)(`button`,{className:`print-btn`,onClick:()=>Z(!X),title:`Mesclar Ideias Similares`,style:{borderColor:X?`var(--neon-cyan)`:``,color:X?`var(--neon-cyan)`:``},children:[(0,D.jsx)(re,{size:18}),` `,X?`Cancelar Mesclagem`:`Mesclar Ideias`]}),(0,D.jsxs)(`button`,{className:`print-btn`,onClick:Ae,title:`Imprimir Ideias deste Módulo`,children:[(0,D.jsx)(ee,{size:18}),` Imprimir Módulo`]})]})]}),(0,D.jsxs)(`div`,{className:`idea-form-container`,children:[(0,D.jsx)(`h3`,{children:`Sugerir Melhoria`}),(0,D.jsxs)(`form`,{onSubmit:xe,className:`idea-form`,children:[(0,D.jsx)(`textarea`,{placeholder:`Descreva a melhoria ou ideia para este módulo...`,value:N,onChange:e=>P(e.target.value),required:!0,rows:3}),(0,D.jsxs)(`div`,{className:`idea-form-footer`,children:[(0,D.jsxs)(`div`,{className:`input-with-icon file-upload-wrapper`,children:[(0,D.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:be,id:`idea-images-input`,style:{display:`none`},disabled:z}),(0,D.jsxs)(`label`,{htmlFor:`idea-images-input`,className:`btn-icon`,style:{cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,D.jsx)(d,{size:18}),L.length>0?`${L.length} img(s)`:`Anexar Imagens`]})]}),(0,D.jsxs)(`div`,{className:`input-with-icon`,children:[(0,D.jsx)(h,{size:16}),(0,D.jsx)(`input`,{type:`text`,placeholder:`Seu nome`,value:F,onChange:e=>I(e.target.value),required:!0,disabled:z})]}),(0,D.jsxs)(`button`,{type:`submit`,className:`btn-primary`,disabled:z,children:[z?(0,D.jsx)(t,{size:18,className:`spin-icon`}):(0,D.jsx)(m,{size:18}),z?`Enviando...`:`Adicionar Ideia`]})]})]})]}),(0,D.jsxs)(`div`,{className:`ideas-list-container`,children:[(0,D.jsxs)(`div`,{className:`ideas-list-header`,children:[(0,D.jsx)(`h3`,{children:`Lista de Ideias`}),(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[X&&(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`,background:`var(--surface-hover)`,padding:`6px 12px`,borderRadius:`8px`},children:[(0,D.jsxs)(`span`,{style:{fontSize:`0.85rem`,color:`var(--text-primary)`,fontWeight:`bold`},children:[Q.length,` marcadas`]}),Q.length>=2&&(0,D.jsx)(`button`,{className:`btn-primary small`,onClick:ke,style:{padding:`4px 10px`,fontSize:`0.8rem`},children:`Mesclar`}),(0,D.jsx)(`button`,{className:`btn-icon small`,onClick:()=>{Z(!1),$([])},children:(0,D.jsx)(p,{size:14})})]}),(0,D.jsxs)(`label`,{className:`toggle-completed`,children:[(0,D.jsx)(`input`,{type:`checkbox`,checked:me,onChange:e=>he(e.target.checked)}),`Mostrar finalizadas`]})]})]}),(0,D.jsxs)(`div`,{className:`ideas-list`,children:[(0,D.jsx)(_,{children:e.map(e=>(0,D.jsxs)(g.div,{className:`idea-card ${e.finalizado?`finalizada`:``} ${e.inviavel?`inviavel`:``} ${X&&Q.includes(e.id)?`selected-merge`:``}`,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},layout:!0,onClick:()=>{X&&Oe(e.id)},style:{cursor:X?`pointer`:`default`},children:[X&&(0,D.jsx)(`div`,{className:`merge-checkbox`,style:{display:`flex`,alignItems:`center`,marginRight:`16px`},children:(0,D.jsx)(`input`,{type:`checkbox`,checked:Q.includes(e.id),readOnly:!0,style:{width:`20px`,height:`20px`,cursor:`pointer`}})}),!X&&(0,D.jsx)(`button`,{className:`status-toggle`,onClick:()=>Ce(e.id),title:e.finalizado?`Marcar como pendente`:`Marcar como finalizado`,children:e.finalizado?(0,D.jsx)(i,{size:24,className:`icon-success`}):(0,D.jsx)(u,{size:24,className:`icon-pending`})}),(0,D.jsx)(`div`,{className:`idea-content`,children:G===e.id?(0,D.jsxs)(`div`,{className:`idea-edit-mode`,children:[(0,D.jsx)(`textarea`,{value:q,onChange:e=>de(e.target.value),rows:3,autoFocus:!0,disabled:z}),(0,D.jsxs)(`div`,{className:`edit-images-section`,style:{marginTop:`10px`},children:[J.length>0&&(0,D.jsx)(`div`,{className:`idea-images-grid`,style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,marginBottom:`10px`},children:J.map((e,t)=>(0,D.jsxs)(`div`,{style:{position:`relative`,width:`60px`,height:`60px`,borderRadius:`6px`,overflow:`hidden`,border:`1px solid var(--border-light)`},children:[(0,D.jsx)(`img`,{src:e.url,alt:e.nome,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,D.jsx)(`button`,{className:`remove-image-btn`,onClick:()=>fe(e=>e.filter((e,n)=>n!==t)),disabled:z,style:{position:`absolute`,top:2,right:2,background:`rgba(239,68,68,0.9)`,border:`none`,borderRadius:`50%`,width:`20px`,height:`20px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,cursor:`pointer`},title:`Remover imagem`,children:(0,D.jsx)(p,{size:12})})]},t))}),Y.length>0&&(0,D.jsxs)(`div`,{style:{fontSize:`0.85rem`,color:`var(--neon-cyan)`,marginBottom:`10px`},children:[`+ `,Y.length,` novo(s) arquivo(s) selecionado(s)`]})]}),(0,D.jsxs)(`div`,{className:`idea-edit-actions`,style:{display:`flex`,justifyContent:`space-between`,marginTop:`10px`},children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:e=>{e.target.files&&pe(Array.from(e.target.files))},id:`edit-images-input-${e.id}`,style:{display:`none`},disabled:z}),(0,D.jsxs)(`label`,{htmlFor:`edit-images-input-${e.id}`,className:`btn-icon small`,style:{cursor:`pointer`,background:`var(--surface-hover)`,padding:`6px 12px`},children:[(0,D.jsx)(d,{size:14,style:{marginRight:`6px`}}),` Anexar`]})]}),(0,D.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,D.jsxs)(`button`,{className:`btn-primary small`,onClick:()=>Ee(e.id),disabled:z,children:[z?(0,D.jsx)(t,{size:14,className:`spin-icon`}):(0,D.jsx)(a,{size:14}),` `,z?`Salvando...`:`Salvar`]}),(0,D.jsx)(`button`,{className:`btn-icon small`,onClick:()=>K(null),disabled:z,children:`Cancelar`})]})]})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`8px`},children:e.emPauta&&!e.finalizado&&(0,D.jsx)(`span`,{className:`badge-pauta`,children:`Em Pauta`})}),(0,D.jsx)(`p`,{className:`idea-text`,children:e.texto}),e.imagens&&e.imagens.length>0&&(0,D.jsx)(`div`,{className:`idea-images-grid`,style:{display:`flex`,gap:`10px`,marginTop:`10px`,flexWrap:`wrap`},children:e.imagens.map((e,t)=>(0,D.jsxs)(`a`,{href:e.url,onClick:t=>Se(t,e.url,e.nome),className:`idea-image-link`,title:`Ver/Baixar: ${e.nome}`,style:{position:`relative`,width:`80px`,height:`80px`,borderRadius:`8px`,overflow:`hidden`,border:`1px solid var(--border-light)`,display:`block`},children:[(0,D.jsx)(`img`,{src:e.url,alt:e.nome,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,D.jsx)(`div`,{className:`idea-image-overlay`,style:{position:`absolute`,top:0,left:0,right:0,bottom:0,background:`rgba(0,0,0,0.5)`,display:`flex`,alignItems:`center`,justifyContent:`center`,opacity:0,transition:`opacity 0.2s ease`,color:`white`},children:(0,D.jsx)(o,{size:20})})]},t))}),(0,D.jsxs)(`div`,{className:`idea-meta`,children:[(0,D.jsxs)(`span`,{className:`author`,children:[(0,D.jsx)(h,{size:12}),` `,e.autor]}),(0,D.jsxs)(`span`,{className:`date`,children:[(0,D.jsx)(c,{size:12}),` `,new Date(e.criadoEm).toLocaleDateString(`pt-BR`)]})]})]})}),G!==e.id&&(0,D.jsxs)(`div`,{className:`idea-actions`,children:[(0,D.jsx)(`button`,{className:`btn-icon ${e.emPauta?`active-pin`:``}`,onClick:t=>{t.stopPropagation(),we(e.id)},title:e.emPauta?`Remover de pauta`:`Marcar como pauta principal`,children:(0,D.jsx)(l,{size:16})}),(0,D.jsx)(`button`,{className:`btn-icon ${e.inviavel?`danger`:``}`,onClick:t=>{t.stopPropagation(),De(e.id)},title:e.inviavel?`Remover inviável`:`Marcar como Inviável`,children:(0,D.jsx)(r,{size:16})}),(0,D.jsx)(`button`,{className:`btn-icon edit-idea`,onClick:t=>{t.stopPropagation(),K(e.id),de(e.texto),fe(e.imagens||[]),pe([])},title:`Editar Ideia`,children:(0,D.jsx)(te,{size:16})}),(0,D.jsx)(`button`,{className:`btn-icon danger delete-idea`,onClick:t=>{t.stopPropagation(),Te(e.id)},title:`Apagar Ideia`,children:(0,D.jsx)(ie,{size:16})})]})]},e.id))}),e.length===0&&(0,D.jsx)(`div`,{className:`empty-state`,children:`Nenhuma ideia para exibir.`})]})]})]},`topic-details`)})():(()=>{let e=[...f].sort((e,t)=>e.emPauta===t.emPauta?(t.criadoEm||0)-(e.criadoEm||0):e.emPauta?-1:1);return(0,D.jsxs)(g.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},className:`topics-view`,children:[(0,D.jsxs)(`div`,{className:`module-form-container`,children:[(0,D.jsx)(`h2`,{children:`Criar Novo Módulo`}),(0,D.jsxs)(`form`,{onSubmit:ge,className:`module-form`,children:[(0,D.jsx)(`input`,{type:`text`,placeholder:`Ex: DFE, Devolução de Compra...`,value:j,onChange:e=>M(e.target.value),required:!0}),(0,D.jsxs)(`button`,{type:`submit`,className:`btn-primary`,children:[(0,D.jsx)(s,{size:18}),` Adicionar`]})]})]}),(0,D.jsxs)(`div`,{className:`topics-grid`,children:[(0,D.jsx)(_,{children:e.map(e=>(0,D.jsxs)(g.div,{className:`topic-card ${e.emPauta?`topic-pauta`:``}`,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},layout:!0,onClick:()=>{V!==e.id&&A(e)},children:[(0,D.jsx)(`div`,{className:`topic-card-header ${V===e.id?`is-editing`:``}`,children:V===e.id?(0,D.jsxs)(`div`,{className:`topic-edit-mode`,onClick:e=>e.stopPropagation(),children:[(0,D.jsx)(`input`,{type:`text`,value:U,onChange:e=>W(e.target.value),autoFocus:!0}),(0,D.jsxs)(`div`,{className:`topic-edit-actions`,children:[(0,D.jsxs)(`button`,{className:`btn-primary small`,onClick:t=>ve(t,e.id),children:[(0,D.jsx)(a,{size:14}),` Salvar`]}),(0,D.jsxs)(`button`,{className:`btn-icon`,onClick:()=>H(null),children:[(0,D.jsx)(p,{size:14}),` Cancelar`]})]})]}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[e.emPauta&&(0,D.jsx)(`span`,{className:`badge-pauta`,style:{alignSelf:`flex-start`,marginBottom:`4px`},children:`Em Pauta`}),(0,D.jsx)(`h3`,{children:e.titulo})]}),(0,D.jsxs)(`div`,{className:`topic-actions`,onClick:e=>e.stopPropagation(),children:[(0,D.jsx)(`button`,{className:`btn-icon ${e.emPauta?`active-pin`:``}`,onClick:t=>ye(t,e.id,e.emPauta),title:e.emPauta?`Remover de pauta`:`Marcar módulo em pauta`,children:(0,D.jsx)(l,{size:16})}),(0,D.jsx)(`button`,{className:`btn-icon`,onClick:t=>{t.stopPropagation(),H(e.id),W(e.titulo)},title:`Editar Módulo`,children:(0,D.jsx)(te,{size:16})}),(0,D.jsx)(`button`,{className:`btn-icon danger`,onClick:t=>_e(t,e.id),title:`Apagar Módulo`,children:(0,D.jsx)(ie,{size:16})})]})]})}),(0,D.jsxs)(`div`,{className:`topic-card-stats`,children:[(0,D.jsxs)(`span`,{className:`stat-badge`,children:[(0,D.jsx)(m,{size:14}),(e.ideias||[]).length,` Ideias`]}),(0,D.jsxs)(`span`,{className:`stat-badge success`,children:[(0,D.jsx)(i,{size:14}),(e.ideias||[]).filter(e=>e.finalizado).length,` Resolvidas`]})]}),(0,D.jsxs)(`div`,{className:`topic-card-arrow`,children:[`Acessar Módulo `,(0,D.jsx)(ne,{size:18})]})]},e.id))}),e.length===0&&(0,D.jsx)(`div`,{className:`empty-state`,children:`Nenhum módulo cadastrado ainda.`})]})]},`topics-list`)})()})})]})};export{O as default};