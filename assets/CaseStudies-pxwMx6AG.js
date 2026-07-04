import{a as e}from"./chunk-BEqpzyXh.js";import{$ as t,B as n,D as r,Dt as i,F as a,Gt as o,I as s,It as c,Mt as l,P as u,R as ee,Rt as te,Vt as ne,ct as d,fn as f,ln as p,n as m,nt as h,o as re,p as ie,pn as g}from"./lucide-react-HzNp0MMT.js";import{t as _}from"./proxy-D8h-WaUR.js";import{t as v}from"./AnimatePresence-CORr-Qdz.js";import{a as y,i as b,n as x}from"./index.esm-clTF9h4V.js";import{C as S,S as C,_ as ae,g as w,i as T,n as E,p as oe,u as se,v as D,x as ce}from"./firebase-BovyM1uT.js";var O=e(g(),1),k=f(),le=({onBack:e,theme:f})=>{let[g,le]=(0,O.useState)([]),[A,j]=(0,O.useState)(null),[M,N]=(0,O.useState)(``),[P,F]=(0,O.useState)(``),[I,L]=(0,O.useState)(``),[R,z]=(0,O.useState)([]),[B,V]=(0,O.useState)(!1),[H,U]=(0,O.useState)(null),[W,G]=(0,O.useState)(``),[ue,K]=(0,O.useState)(null),[q,de]=(0,O.useState)(``),[J,fe]=(0,O.useState)([]),[Y,pe]=(0,O.useState)([]),[me,he]=(0,O.useState)(!0),[X,Z]=(0,O.useState)(!1),[Q,$]=(0,O.useState)([]);(0,O.useEffect)(()=>{let e=oe(C(E,`estudos_caso`),e=>{let t=e.docs.map(e=>({id:e.id,...e.data()}));t.sort((e,t)=>(t.criadoEm||0)-(e.criadoEm||0)),le(t),j(e=>e&&(t.find(t=>t.id===e.id)||null))});return()=>e()},[]);let ge=async e=>{if(e.preventDefault(),M.trim())try{await ae(S(C(E,`estudos_caso`)),{titulo:M.trim(),criadoEm:Date.now(),emPauta:!1,ideias:[]}),N(``)}catch(e){console.error(e),alert(`Erro ao criar tópico.`)}},_e=async(e,t)=>{if(e.stopPropagation(),window.confirm(`Tem certeza que deseja apagar este módulo e todas as suas ideias?`))try{await se(S(E,`estudos_caso`,t))}catch(e){console.error(e)}},ve=async(e,t)=>{if(e.stopPropagation(),W.trim())try{await D(S(E,`estudos_caso`,t),{titulo:W.trim()}),U(null)}catch(e){console.error(e),alert(`Erro ao atualizar tópico.`)}},ye=async(e,t,n)=>{e.stopPropagation();try{await D(S(E,`estudos_caso`,t),{emPauta:!n})}catch(e){console.error(e)}},be=e=>{e.target.files&&z(Array.from(e.target.files))},xe=async e=>{if(e.preventDefault(),!(!P.trim()||!A)){V(!0);try{let e=[];for(let t of R){let n=b(T,`ideias_images/${Date.now()}_${t.name.replace(/[^a-zA-Z0-9.]/g,`_`)}`);await y(n,t);let r=await x(n);e.push({url:r,nome:t.name})}let t={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),texto:P.trim(),autor:I.trim(),imagens:e,finalizado:!1,emPauta:!1,criadoEm:Date.now()};await D(S(E,`estudos_caso`,A.id),{ideias:ce(t)}),F(``),L(``),z([]),document.getElementById(`idea-images-input`).value=``}catch(e){console.error(e),alert(`Erro ao adicionar ideia ou enviar imagens.`)}finally{V(!1)}}},Se=async(e,t,n)=>{e.preventDefault(),e.stopPropagation();try{let e=await fetch(t);if(!e.ok)throw Error(`Erro na requisição da imagem`);let r=await e.blob(),i=window.URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=n||`anexo_ideia.png`,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(i)}catch(e){console.error(`Download direto falhou por CORS, abrindo em nova guia`,e);let r=document.createElement(`a`);r.href=t,r.target=`_blank`,r.download=n||`anexo_ideia.png`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}},Ce=async e=>{if(A)try{let t=S(E,`estudos_caso`,A.id);await w(E,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,finalizado:!t.finalizado}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},we=async e=>{if(A)try{let t=S(E,`estudos_caso`,A.id);await w(E,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,emPauta:!t.emPauta}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Te=async e=>{if(A&&window.confirm(`Remover esta ideia?`))try{let t=S(E,`estudos_caso`,A.id);await w(E,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).filter(t=>t.id!==e);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Ee=async e=>{if(!(!A||!q.trim())){V(!0);try{let t=[];for(let e of Y){let n=b(T,`ideias_images/${Date.now()}_${e.name.replace(/[^a-zA-Z0-9.]/g,`_`)}`);await y(n,e);let r=await x(n);t.push({url:r,nome:e.name})}let n=[...J,...t],r=S(E,`estudos_caso`,A.id);await w(E,async t=>{let i=await t.get(r);if(!i.exists())throw`Módulo não encontrado.`;let a=(i.data().ideias||[]).map(t=>t.id===e?{...t,texto:q.trim(),imagens:n}:t);t.update(r,{ideias:a})}),K(null)}catch(e){console.error(e),alert(`Erro ao salvar edição da ideia.`)}finally{V(!1)}}},De=async e=>{if(A)try{let t=S(E,`estudos_caso`,A.id);await w(E,async n=>{let r=await n.get(t);if(!r.exists())throw`Módulo não encontrado.`;let i=(r.data().ideias||[]).map(t=>t.id===e?{...t,inviavel:!t.inviavel,finalizado:!1}:t);n.update(t,{ideias:i})})}catch(e){console.error(e)}},Oe=e=>{$(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},ke=async()=>{if(!(!A||Q.length<2))try{let e=S(E,`estudos_caso`,A.id);await w(E,async t=>{let n=await t.get(e);if(!n.exists())throw`Módulo não encontrado.`;let r=n.data().ideias||[],i=r.filter(e=>Q.includes(e.id)),a=i.map(e=>e.texto).join(`

---

`),o=i.map(e=>e.autor).filter(Boolean),s=[...new Set(o)].join(` & `),c=[];i.forEach(e=>{e.imagens&&(c=[...c,...e.imagens])});let l={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),texto:a,autor:s||`Autores Mesclados`,imagens:c,finalizado:!1,emPauta:!1,inviavel:!1,criadoEm:Date.now()},u=r.filter(e=>!Q.includes(e.id));u.push(l),t.update(e,{ideias:u})}),Z(!1),$([])}catch(e){console.error(e),alert(`Erro ao mesclar ideias.`)}},Ae=()=>{if(!A)return;let e=document.getElementById(`print-iframe`);e||(e=document.createElement(`iframe`),e.id=`print-iframe`,e.style.position=`absolute`,e.style.width=`0px`,e.style.height=`0px`,e.style.border=`none`,document.body.appendChild(e));let t=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Relatório - Módulo: ${A.titulo}</title>
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
            <h2>Relatório - Módulo: ${A.titulo}</h2>
            <p>Gerado em ${new Date().toLocaleDateString(`pt-BR`)}</p>
          </div>
          ${A.ideias&&A.ideias.filter(e=>!e.inviavel).length>0?`
            <div>
              ${A.ideias.filter(e=>!e.inviavel).map(e=>`
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
    `,n=e.contentWindow.document;n.open(),n.write(t),n.close(),setTimeout(()=>{e.contentWindow.focus(),e.contentWindow.print()},500)};return(0,k.jsxs)(_.div,{className:`case-studies-container ${f}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},children:[(0,k.jsxs)(`div`,{className:`cs-header no-print`,children:[(0,k.jsxs)(`h1`,{children:[(0,k.jsx)(h,{className:`cs-icon`,size:32}),`Banco de Ideias (Módulos)`]}),(0,k.jsxs)(`div`,{className:`header-actions`,children:[!A&&(0,k.jsxs)(`button`,{className:`print-btn`,onClick:()=>{let e=document.getElementById(`print-iframe`);e||(e=document.createElement(`iframe`),e.id=`print-iframe`,e.style.position=`absolute`,e.style.width=`0px`,e.style.height=`0px`,e.style.border=`none`,document.body.appendChild(e));let t=`
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
    `,n=e.contentWindow.document;n.open(),n.write(t),n.close(),setTimeout(()=>{e.contentWindow.focus(),e.contentWindow.print()},250)},title:`Imprimir Relatório em PDF`,children:[(0,k.jsx)(u,{size:18}),` Imprimir Relatório`]}),(0,k.jsxs)(`button`,{className:`back-btn`,onClick:e,children:[(0,k.jsx)(p,{size:18}),` Voltar ao Dashboard`]})]})]}),(0,k.jsx)(`div`,{className:`cs-content no-print`,children:(0,k.jsx)(v,{mode:`wait`,children:A?(()=>{if(!A)return null;let e=[...me?A.ideias||[]:(A.ideias||[]).filter(e=>!e.finalizado)].sort((e,t)=>{let n=e.finalizado||e.inviavel;return n===(t.finalizado||t.inviavel)?!n&&e.emPauta!==t.emPauta?e.emPauta?-1:1:t.criadoEm-e.criadoEm:n?1:-1});return(0,k.jsxs)(_.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},className:`details-view`,children:[(0,k.jsxs)(`div`,{className:`details-header-bar`,style:{justifyContent:`space-between`},children:[(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`20px`},children:[(0,k.jsxs)(`button`,{className:`btn-back-topic`,onClick:()=>j(null),children:[(0,k.jsx)(p,{size:18}),` Voltar para Módulos`]}),(0,k.jsx)(`h2`,{style:{margin:0},children:A.titulo})]}),(0,k.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,k.jsxs)(`button`,{className:`print-btn`,onClick:()=>Z(!X),title:`Mesclar Ideias Similares`,style:{borderColor:X?`var(--neon-cyan)`:``,color:X?`var(--neon-cyan)`:``},children:[(0,k.jsx)(l,{size:18}),` `,X?`Cancelar Mesclagem`:`Mesclar Ideias`]}),(0,k.jsxs)(`button`,{className:`print-btn`,onClick:Ae,title:`Imprimir Ideias deste Módulo`,children:[(0,k.jsx)(u,{size:18}),` Imprimir Módulo`]})]})]}),(0,k.jsxs)(`div`,{className:`idea-form-container`,children:[(0,k.jsx)(`h3`,{children:`Sugerir Melhoria`}),(0,k.jsxs)(`form`,{onSubmit:xe,className:`idea-form`,children:[(0,k.jsx)(`textarea`,{placeholder:`Descreva a melhoria ou ideia para este módulo...`,value:P,onChange:e=>F(e.target.value),required:!0,rows:3}),(0,k.jsxs)(`div`,{className:`idea-form-footer`,children:[(0,k.jsxs)(`div`,{className:`input-with-icon file-upload-wrapper`,children:[(0,k.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:be,id:`idea-images-input`,style:{display:`none`},disabled:B}),(0,k.jsxs)(`label`,{htmlFor:`idea-images-input`,className:`btn-icon`,style:{cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,k.jsx)(d,{size:18}),R.length>0?`${R.length} img(s)`:`Anexar Imagens`]})]}),(0,k.jsxs)(`div`,{className:`input-with-icon`,children:[(0,k.jsx)(re,{size:16}),(0,k.jsx)(`input`,{type:`text`,placeholder:`Seu nome`,value:I,onChange:e=>L(e.target.value),required:!0,disabled:B})]}),(0,k.jsxs)(`button`,{type:`submit`,className:`btn-primary`,disabled:B,children:[B?(0,k.jsx)(t,{size:18,className:`spin-icon`}):(0,k.jsx)(h,{size:18}),B?`Enviando...`:`Adicionar Ideia`]})]})]})]}),(0,k.jsxs)(`div`,{className:`ideas-list-container`,children:[(0,k.jsxs)(`div`,{className:`ideas-list-header`,children:[(0,k.jsx)(`h3`,{children:`Lista de Ideias`}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[X&&(0,k.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`,background:`var(--surface-hover)`,padding:`6px 12px`,borderRadius:`8px`},children:[(0,k.jsxs)(`span`,{style:{fontSize:`0.85rem`,color:`var(--text-primary)`,fontWeight:`bold`},children:[Q.length,` marcadas`]}),Q.length>=2&&(0,k.jsx)(`button`,{className:`btn-primary small`,onClick:ke,style:{padding:`4px 10px`,fontSize:`0.8rem`},children:`Mesclar`}),(0,k.jsx)(`button`,{className:`btn-icon small`,onClick:()=>{Z(!1),$([])},children:(0,k.jsx)(m,{size:14})})]}),(0,k.jsxs)(`label`,{className:`toggle-completed`,children:[(0,k.jsx)(`input`,{type:`checkbox`,checked:me,onChange:e=>he(e.target.checked)}),`Mostrar finalizadas`]})]})]}),(0,k.jsxs)(`div`,{className:`ideas-list`,children:[(0,k.jsx)(v,{children:e.map(e=>(0,k.jsxs)(_.div,{className:`idea-card ${e.finalizado?`finalizada`:``} ${e.inviavel?`inviavel`:``} ${X&&Q.includes(e.id)?`selected-merge`:``}`,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},layout:!0,onClick:()=>{X&&Oe(e.id)},style:{cursor:X?`pointer`:`default`},children:[X&&(0,k.jsx)(`div`,{className:`merge-checkbox`,style:{display:`flex`,alignItems:`center`,marginRight:`16px`},children:(0,k.jsx)(`input`,{type:`checkbox`,checked:Q.includes(e.id),readOnly:!0,style:{width:`20px`,height:`20px`,cursor:`pointer`}})}),!X&&(0,k.jsx)(`button`,{className:`status-toggle`,onClick:()=>Ce(e.id),title:e.finalizado?`Marcar como pendente`:`Marcar como finalizado`,children:e.finalizado?(0,k.jsx)(ne,{size:24,className:`icon-success`}):(0,k.jsx)(te,{size:24,className:`icon-pending`})}),(0,k.jsx)(`div`,{className:`idea-content`,children:ue===e.id?(0,k.jsxs)(`div`,{className:`idea-edit-mode`,children:[(0,k.jsx)(`textarea`,{value:q,onChange:e=>de(e.target.value),rows:3,autoFocus:!0,disabled:B}),(0,k.jsxs)(`div`,{className:`edit-images-section`,style:{marginTop:`10px`},children:[J.length>0&&(0,k.jsx)(`div`,{className:`idea-images-grid`,style:{display:`flex`,gap:`10px`,flexWrap:`wrap`,marginBottom:`10px`},children:J.map((e,t)=>(0,k.jsxs)(`div`,{style:{position:`relative`,width:`60px`,height:`60px`,borderRadius:`6px`,overflow:`hidden`,border:`1px solid var(--border-light)`},children:[(0,k.jsx)(`img`,{src:e.url,alt:e.nome,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,k.jsx)(`button`,{className:`remove-image-btn`,onClick:()=>fe(e=>e.filter((e,n)=>n!==t)),disabled:B,style:{position:`absolute`,top:2,right:2,background:`rgba(239,68,68,0.9)`,border:`none`,borderRadius:`50%`,width:`20px`,height:`20px`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,cursor:`pointer`},title:`Remover imagem`,children:(0,k.jsx)(m,{size:12})})]},t))}),Y.length>0&&(0,k.jsxs)(`div`,{style:{fontSize:`0.85rem`,color:`var(--neon-cyan)`,marginBottom:`10px`},children:[`+ `,Y.length,` novo(s) arquivo(s) selecionado(s)`]})]}),(0,k.jsxs)(`div`,{className:`idea-edit-actions`,style:{display:`flex`,justifyContent:`space-between`,marginTop:`10px`},children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:e=>{e.target.files&&pe(Array.from(e.target.files))},id:`edit-images-input-${e.id}`,style:{display:`none`},disabled:B}),(0,k.jsxs)(`label`,{htmlFor:`edit-images-input-${e.id}`,className:`btn-icon small`,style:{cursor:`pointer`,background:`var(--surface-hover)`,padding:`6px 12px`},children:[(0,k.jsx)(d,{size:14,style:{marginRight:`6px`}}),` Anexar`]})]}),(0,k.jsxs)(`div`,{style:{display:`flex`,gap:`8px`},children:[(0,k.jsxs)(`button`,{className:`btn-primary small`,onClick:()=>Ee(e.id),disabled:B,children:[B?(0,k.jsx)(t,{size:14,className:`spin-icon`}):(0,k.jsx)(r,{size:14}),` `,B?`Salvando...`:`Salvar`]}),(0,k.jsx)(`button`,{className:`btn-icon small`,onClick:()=>K(null),disabled:B,children:`Cancelar`})]})]})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`8px`},children:e.emPauta&&!e.finalizado&&(0,k.jsx)(`span`,{className:`badge-pauta`,children:`Em Pauta`})}),(0,k.jsx)(`p`,{className:`idea-text`,children:e.texto}),e.imagens&&e.imagens.length>0&&(0,k.jsx)(`div`,{className:`idea-images-grid`,style:{display:`flex`,gap:`10px`,marginTop:`10px`,flexWrap:`wrap`},children:e.imagens.map((e,t)=>(0,k.jsxs)(`a`,{href:e.url,onClick:t=>Se(t,e.url,e.nome),className:`idea-image-link`,title:`Ver/Baixar: ${e.nome}`,style:{position:`relative`,width:`80px`,height:`80px`,borderRadius:`8px`,overflow:`hidden`,border:`1px solid var(--border-light)`,display:`block`},children:[(0,k.jsx)(`img`,{src:e.url,alt:e.nome,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,k.jsx)(`div`,{className:`idea-image-overlay`,style:{position:`absolute`,top:0,left:0,right:0,bottom:0,background:`rgba(0,0,0,0.5)`,display:`flex`,alignItems:`center`,justifyContent:`center`,opacity:0,transition:`opacity 0.2s ease`,color:`white`},children:(0,k.jsx)(i,{size:20})})]},t))}),(0,k.jsxs)(`div`,{className:`idea-meta`,children:[(0,k.jsxs)(`span`,{className:`author`,children:[(0,k.jsx)(re,{size:12}),` `,e.autor]}),(0,k.jsxs)(`span`,{className:`date`,children:[(0,k.jsx)(c,{size:12}),` `,new Date(e.criadoEm).toLocaleDateString(`pt-BR`)]})]})]})}),ue!==e.id&&(0,k.jsxs)(`div`,{className:`idea-actions`,children:[(0,k.jsx)(`button`,{className:`btn-icon ${e.emPauta?`active-pin`:``}`,onClick:t=>{t.stopPropagation(),we(e.id)},title:e.emPauta?`Remover de pauta`:`Marcar como pauta principal`,children:(0,k.jsx)(s,{size:16})}),(0,k.jsx)(`button`,{className:`btn-icon ${e.inviavel?`danger`:``}`,onClick:t=>{t.stopPropagation(),De(e.id)},title:e.inviavel?`Remover inviável`:`Marcar como Inviável`,children:(0,k.jsx)(n,{size:16})}),(0,k.jsx)(`button`,{className:`btn-icon edit-idea`,onClick:t=>{t.stopPropagation(),K(e.id),de(e.texto),fe(e.imagens||[]),pe([])},title:`Editar Ideia`,children:(0,k.jsx)(ee,{size:16})}),(0,k.jsx)(`button`,{className:`btn-icon danger delete-idea`,onClick:t=>{t.stopPropagation(),Te(e.id)},title:`Apagar Ideia`,children:(0,k.jsx)(ie,{size:16})})]})]},e.id))}),e.length===0&&(0,k.jsx)(`div`,{className:`empty-state`,children:`Nenhuma ideia para exibir.`})]})]})]},`topic-details`)})():(()=>{let e=[...g].sort((e,t)=>e.emPauta===t.emPauta?(t.criadoEm||0)-(e.criadoEm||0):e.emPauta?-1:1);return(0,k.jsxs)(_.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},className:`topics-view`,children:[(0,k.jsxs)(`div`,{className:`module-form-container`,children:[(0,k.jsx)(`h2`,{children:`Criar Novo Módulo`}),(0,k.jsxs)(`form`,{onSubmit:ge,className:`module-form`,children:[(0,k.jsx)(`input`,{type:`text`,placeholder:`Ex: DFE, Devolução de Compra...`,value:M,onChange:e=>N(e.target.value),required:!0}),(0,k.jsxs)(`button`,{type:`submit`,className:`btn-primary`,children:[(0,k.jsx)(a,{size:18}),` Adicionar`]})]})]}),(0,k.jsxs)(`div`,{className:`topics-grid`,children:[(0,k.jsx)(v,{children:e.map(e=>(0,k.jsxs)(_.div,{className:`topic-card ${e.emPauta?`topic-pauta`:``}`,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},layout:!0,onClick:()=>{H!==e.id&&j(e)},children:[(0,k.jsx)(`div`,{className:`topic-card-header ${H===e.id?`is-editing`:``}`,children:H===e.id?(0,k.jsxs)(`div`,{className:`topic-edit-mode`,onClick:e=>e.stopPropagation(),children:[(0,k.jsx)(`input`,{type:`text`,value:W,onChange:e=>G(e.target.value),autoFocus:!0}),(0,k.jsxs)(`div`,{className:`topic-edit-actions`,children:[(0,k.jsxs)(`button`,{className:`btn-primary small`,onClick:t=>ve(t,e.id),children:[(0,k.jsx)(r,{size:14}),` Salvar`]}),(0,k.jsxs)(`button`,{className:`btn-icon`,onClick:()=>U(null),children:[(0,k.jsx)(m,{size:14}),` Cancelar`]})]})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[e.emPauta&&(0,k.jsx)(`span`,{className:`badge-pauta`,style:{alignSelf:`flex-start`,marginBottom:`4px`},children:`Em Pauta`}),(0,k.jsx)(`h3`,{children:e.titulo})]}),(0,k.jsxs)(`div`,{className:`topic-actions`,onClick:e=>e.stopPropagation(),children:[(0,k.jsx)(`button`,{className:`btn-icon ${e.emPauta?`active-pin`:``}`,onClick:t=>ye(t,e.id,e.emPauta),title:e.emPauta?`Remover de pauta`:`Marcar módulo em pauta`,children:(0,k.jsx)(s,{size:16})}),(0,k.jsx)(`button`,{className:`btn-icon`,onClick:t=>{t.stopPropagation(),U(e.id),G(e.titulo)},title:`Editar Módulo`,children:(0,k.jsx)(ee,{size:16})}),(0,k.jsx)(`button`,{className:`btn-icon danger`,onClick:t=>_e(t,e.id),title:`Apagar Módulo`,children:(0,k.jsx)(ie,{size:16})})]})]})}),(0,k.jsxs)(`div`,{className:`topic-card-stats`,children:[(0,k.jsxs)(`span`,{className:`stat-badge`,children:[(0,k.jsx)(h,{size:14}),(e.ideias||[]).length,` Ideias`]}),(0,k.jsxs)(`span`,{className:`stat-badge success`,children:[(0,k.jsx)(ne,{size:14}),(e.ideias||[]).filter(e=>e.finalizado).length,` Resolvidas`]})]}),(0,k.jsxs)(`div`,{className:`topic-card-arrow`,children:[`Acessar Módulo `,(0,k.jsx)(o,{size:18})]})]},e.id))}),e.length===0&&(0,k.jsx)(`div`,{className:`empty-state`,children:`Nenhum módulo cadastrado ainda.`})]})]},`topics-list`)})()})})]})};export{le as default};