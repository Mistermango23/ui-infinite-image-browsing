import{d as Y,u as se,g as j,_ as he,c as a,a as ne,P as X,D as Ie,f as Se,w as Ge,b as Ke,e as Qe,h as Ce,M as ae,i as We,j as He,F as oe,k as Je,l as Xe,o as c,m as E,n as l,p,q as b,r as e,s as z,t as Ye,v as _,x as V,y as P,z as ee,A as te,B as Ze,C as et,E as tt,S as ge,G as nt,H as J,I as at,J as ot,K as ye,L as rt,N as st,O as lt,Q as it,R as ut,T as dt,U as ct,V as pt,W as mt,X as vt}from"./index-812384b6.js";import{D as xe,S as L,s as ft,a as kt,f as _t,L as bt,R as Ct,b as gt}from"./fullScreenContextMenu-66f232b0.js";import{F,_ as yt}from"./index-55b4ef00.js";import{u as wt,a as ht,b as It,c as St,d as xt,e as Pt,f as Mt,s as $t,v as Rt,t as At}from"./hook-b7cdbef5.js";/* empty css              *//* empty css              */import"./db-6cb27576.js";var Bt=["class","style"],Nt=function(){return{prefixCls:String,href:String,separator:X.any,overlay:X.any,onClick:Function}};const U=Y({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Nt(),slots:["separator","overlay"],setup:function(r,g){var m=g.slots,f=g.attrs,w=se("breadcrumb",r),y=w.prefixCls,S=function(h,u){var s=j(m,r,"overlay");return s?a(xe,{overlay:s,placement:"bottom"},{default:function(){return[a("span",{class:"".concat(u,"-overlay-link")},[h,a(Ie,null,null)])]}}):h};return function(){var x,h=(x=j(m,r,"separator"))!==null&&x!==void 0?x:"/",u=j(m,r),s=f.class,k=f.style,v=he(f,Bt),d;return r.href!==void 0?d=a("a",ne({class:"".concat(y.value,"-link"),onClick:r.onClick},v),[u]):d=a("span",ne({class:"".concat(y.value,"-link"),onClick:r.onClick},v),[u]),d=S(d,y.value),u?a("span",{class:s,style:k},[d,h&&a("span",{class:"".concat(y.value,"-separator")},[h])]):null}}});var Dt=function(){return{prefixCls:String,routes:{type:Array},params:X.any,separator:X.any,itemRender:{type:Function}}};function Et(o,r){if(!o.breadcrumbName)return null;var g=Object.keys(r).join("|"),m=o.breadcrumbName.replace(new RegExp(":(".concat(g,")"),"g"),function(f,w){return r[w]||f});return m}function we(o){var r=o.route,g=o.params,m=o.routes,f=o.paths,w=m.indexOf(r)===m.length-1,y=Et(r,g);return w?a("span",null,[y]):a("a",{href:"#/".concat(f.join("/"))},[y])}const T=Y({compatConfig:{MODE:3},name:"ABreadcrumb",props:Dt(),slots:["separator","itemRender"],setup:function(r,g){var m=g.slots,f=se("breadcrumb",r),w=f.prefixCls,y=f.direction,S=function(s,k){return s=(s||"").replace(/^\//,""),Object.keys(k).forEach(function(v){s=s.replace(":".concat(v),k[v])}),s},x=function(s,k,v){var d=We(s),I=S(k||"",v);return I&&d.push(I),d},h=function(s){var k=s.routes,v=k===void 0?[]:k,d=s.params,I=d===void 0?{}:d,M=s.separator,R=s.itemRender,A=R===void 0?we:R,B=[];return v.map(function(C){var N=S(C.path,I);N&&B.push(N);var q=[].concat(B),G=null;return C.children&&C.children.length&&(G=a(ae,null,{default:function(){return[C.children.map(function($){return a(ae.Item,{key:$.path||$.breadcrumbName},{default:function(){return[A({route:$,params:I,routes:v,paths:x(q,$.path,I)})]}})})]}})),a(U,{overlay:G,separator:M,key:N||C.breadcrumbName},{default:function(){return[A({route:C,params:I,routes:v,paths:q})]}})})};return function(){var u,s,k,v=r.routes,d=r.params,I=d===void 0?{}:d,M=Se(j(m,r)),R=(u=j(m,r,"separator"))!==null&&u!==void 0?u:"/",A=r.itemRender||m.itemRender||we;v&&v.length>0?k=h({routes:v,params:I,separator:R,itemRender:A}):M.length&&(k=M.map(function(C,N){return Ge(Ke(C.type)==="object"&&(C.type.__ANT_BREADCRUMB_ITEM||C.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Qe(C,{separator:R,key:N})}));var B=(s={},Ce(s,w.value,!0),Ce(s,"".concat(w.value,"-rtl"),y.value==="rtl"),s);return a("div",{class:B},[k])}}});var Ft=["separator","class"],zt=function(){return{prefixCls:String}};const re=Y({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:zt(),setup:function(r,g){var m=g.slots,f=g.attrs,w=se("breadcrumb",r),y=w.prefixCls;return function(){var S;f.separator;var x=f.class,h=he(f,Ft),u=Se((S=m.default)===null||S===void 0?void 0:S.call(m));return a("span",ne({class:["".concat(y.value,"-separator"),x]},h),[u.length>0?u:"/"])}}});T.Item=U;T.Separator=re;T.install=function(o){return o.component(T.name,T),o.component(U.name,U),o.component(re.name,re),o};F.useInjectFormItemContext=He;F.ItemRest=oe;F.install=function(o){return o.component(F.name,F),o.component(F.Item.name,F.Item),o.component(oe.name,oe),o};L.setDefaultIndicator=ft;L.install=function(o){return o.component(L.name,L),o};const Tt=o=>(pt("data-v-cd16cffa"),o=o(),mt(),o),Ot={class:"hint"},Vt={class:"location-bar"},jt={key:0},Lt=["onClick"],Ut={key:3,style:{"margin-left":"8px"}},qt=Tt(()=>p("span",{style:{margin:"0 4px"}},"/",-1)),Gt={class:"actions"},Kt=["onClick"],Qt={style:{width:"512px",background:"var(--zp-primary-background)",padding:"16px","border-radius":"4px","box-shadow":"0 0 4px var(--zp-secondary-background)",border:"1px solid var(--zp-secondary-background)"}},Wt={style:{padding:"4px"}},Ht={style:{padding:"4px"}},Jt={key:0,class:"view"},Xt={key:0,class:"preview-switch"},Yt=Y({__name:"stackView",props:{tabIdx:{},paneIdx:{},path:{},walkModePath:{},stackKey:{}},setup(o){const r=o,g=Je(),{scroller:m,stackViewEl:f,props:w,multiSelectedIdxs:y,spinning:S}=wt().toRefs(),{currLocation:x,currPage:h,refresh:u,copyLocation:s,back:k,openNext:v,stack:d,quickMoveTo:I,addToSearchScanPathAndQuickMove:M,searchPathInfo:R,locInputValue:A,isLocationEditing:B,onLocEditEnter:C,onEditBtnClick:N}=ht(r),{gridItems:q,sortMethodConv:G,moreActionsDropdownShow:O,sortedFiles:$,sortMethod:K,viewMode:Q,itemSize:le,loadNextDir:Pe,loadNextDirLoading:Me,canLoadNext:$e,onScroll:Re}=It(r),{onDrop:Ae,onFileDragStart:Be}=St(),{onFileItemClick:Ne,onContextMenuClick:ie,showGenInfo:W,imageGenInfo:ue,q:De}=xt(r,{openNext:v}),{previewIdx:H,onPreviewVisibleChange:Ee,previewing:de,previewImgMove:ce,canPreview:pe}=Pt(r),{showMenuIdx:Z}=Mt();return Xe(()=>r,()=>{w.value=r;const i=$t.get(r.stackKey??"");i&&(d.value=i.slice())},{immediate:!0}),(i,t)=>{const Fe=rt,ze=st,Te=lt,me=U,ve=T,Oe=it,Ve=ut,fe=dt,je=ct,Le=ae,ke=xe,_e=yt,Ue=F,qe=L;return c(),E(qe,{spinning:e(S),size:"large"},{default:l(()=>[a(Fe,{style:{display:"none"}}),p("div",{ref_key:"stackViewEl",ref:f,onDragover:t[21]||(t[21]=b(()=>{},["prevent"])),onDrop:t[22]||(t[22]=b(n=>e(Ae)(n),["prevent"])),class:"container"},[a(Te,{visible:e(W),"onUpdate:visible":t[1]||(t[1]=n=>z(W)?W.value=n:null),width:"70vw","mask-closable":"",onOk:t[2]||(t[2]=n=>W.value=!1)},{cancelText:l(()=>[]),default:l(()=>[a(ze,{active:"",loading:!e(De).isIdle},{default:l(()=>[p("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto","z-index":"9999"},onDblclick:t[0]||(t[0]=n=>e(Ye)(e(ue)))},[p("div",Ot,_(i.$t("doubleClickToCopy")),1),V(" "+_(e(ue)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),p("div",Vt,[r.walkModePath?(c(),P("div",jt,[a(Oe,null,{title:l(()=>[V(_(i.$t("walk-mode-move-message")),1)]),default:l(()=>[a(ve,{style:{flex:"1"}},{default:l(()=>[(c(!0),P(ee,null,te(e(d),(n,D)=>(c(),E(me,{key:D},{default:l(()=>[p("span",null,_(n.curr==="/"?i.$t("root"):n.curr.replace(/:\/$/,i.$t("drive"))),1)]),_:2},1024))),128))]),_:1})]),_:1})])):(c(),P("div",{key:1,class:"breadcrumb",style:Ze({flex:e(B)?1:""})},[e(B)?(c(),E(Ve,{key:0,style:{flex:"1"},value:e(A),"onUpdate:value":t[3]||(t[3]=n=>z(A)?A.value=n:null),onClick:t[4]||(t[4]=b(()=>{},["stop"])),onPressEnter:e(C)},null,8,["value","onPressEnter"])):(c(),E(ve,{key:1,style:{flex:"1"}},{default:l(()=>[(c(!0),P(ee,null,te(e(d),(n,D)=>(c(),E(me,{key:D},{default:l(()=>[p("a",{onClick:b(be=>e(k)(D),["prevent"])},_(n.curr==="/"?i.$t("root"):n.curr.replace(/:\/$/,i.$t("drive"))),9,Lt)]),_:2},1024))),128))]),_:1})),e(B)?(c(),E(fe,{key:2,size:"small",onClick:e(C),type:"primary"},{default:l(()=>[V(_(i.$t("go")),1)]),_:1},8,["onClick"])):(c(),P("div",Ut,[p("a",{onClick:t[5]||(t[5]=b((...n)=>e(s)&&e(s)(...n),["prevent"]))},_(i.$t("copy")),1),qt,p("a",{onClick:t[6]||(t[6]=b((...n)=>e(N)&&e(N)(...n),["prevent","stop"]))},_(i.$t("edit")),1)]))],4)),p("div",Gt,[p("a",{class:"opt",onClick:t[7]||(t[7]=b((...n)=>e(u)&&e(u)(...n),["prevent"]))},_(i.$t("refresh")),1),a(ke,null,{overlay:l(()=>[a(Le,null,{default:l(()=>[(c(!0),P(ee,null,te(e(g).quickMovePaths,n=>(c(),E(je,{key:n.dir},{default:l(()=>[p("a",{onClick:b(D=>e(I)(n.dir),["prevent"])},_(n.zh),9,Kt)]),_:2},1024))),128))]),_:1})]),default:l(()=>[p("a",{class:"opt",onClick:t[8]||(t[8]=b(()=>{},["prevent"]))},[V(_(i.$t("quickMove"))+" ",1),a(e(Ie))])]),_:1}),a(ke,{trigger:["click"],visible:e(O),"onUpdate:visible":t[17]||(t[17]=n=>z(O)?O.value=n:null),placement:"bottomLeft",getPopupContainer:n=>n.parentNode},{overlay:l(()=>[p("div",Qt,[a(Ue,et(tt({labelCol:{span:6},wrapperCol:{span:18}})),{default:l(()=>[a(_e,{label:i.$t("viewMode")},{default:l(()=>[a(e(ge),{value:e(Q),"onUpdate:value":t[10]||(t[10]=n=>z(Q)?Q.value=n:null),onClick:t[11]||(t[11]=b(()=>{},["stop"])),conv:{value:n=>n,text:n=>i.$t(n)},options:e(Rt)},null,8,["value","conv","options"])]),_:1},8,["label"]),a(_e,{label:i.$t("sortingMethod")},{default:l(()=>[a(e(ge),{value:e(K),"onUpdate:value":t[12]||(t[12]=n=>z(K)?K.value=n:null),onClick:t[13]||(t[13]=b(()=>{},["stop"])),conv:e(G),options:e(nt)},null,8,["value","conv","options"])]),_:1},8,["label"]),p("div",Wt,[e(R)?e(R).can_delete?(c(),P("a",{key:1,onClick:t[15]||(t[15]=b((...n)=>e(M)&&e(M)(...n),["prevent"]))},_(i.$t("removeFromSearchScanPathAndQuickMove")),1)):J("",!0):(c(),P("a",{key:0,onClick:t[14]||(t[14]=b((...n)=>e(M)&&e(M)(...n),["prevent"]))},_(i.$t("addToSearchScanPathAndQuickMove")),1))]),p("div",Ht,[p("a",{onClick:t[16]||(t[16]=b(n=>e(at)(e(x)+"/"),["prevent"]))},_(i.$t("openWithLocalFileBrowser")),1)])]),_:1},16)])]),default:l(()=>[p("a",{class:"opt",onClick:t[9]||(t[9]=b(()=>{},["prevent"]))},_(i.$t("more")),1)]),_:1},8,["visible","getPopupContainer"])])]),e(h)?(c(),P("div",Jt,[a(e(kt),{class:"file-list",items:e($),ref_key:"scroller",ref:m,onScroll:e(Re),"item-size":e(le).first,"key-field":"fullpath","item-secondary-size":e(le).second,gridItems:e(q)},ot({default:l(({item:n,index:D})=>[a(_t,{idx:D,file:n,"full-screen-preview-image-url":e($)[e(H)]?e(At)(e($)[e(H)]):"","show-menu-idx":e(Z),"onUpdate:showMenuIdx":t[18]||(t[18]=be=>z(Z)?Z.value=be:null),selected:e(y).includes(D),"view-mode":e(Q),onFileItemClick:e(Ne),onDragstart:e(Be),onPreviewVisibleChange:e(Ee),onContextMenuClick:e(ie)},null,8,["idx","file","full-screen-preview-image-url","show-menu-idx","selected","view-mode","onFileItemClick","onDragstart","onPreviewVisibleChange","onContextMenuClick"])]),_:2},[r.walkModePath?{name:"after",fn:l(()=>[a(fe,{onClick:e(Pe),loading:e(Me),block:"",type:"primary",disabled:!e($e),ghost:""},{default:l(()=>[V(_(i.$t("loadNextPage")),1)]),_:1},8,["onClick","loading","disabled"])]),key:"0"}:void 0]),1032,["items","onScroll","item-size","item-secondary-size","gridItems"]),e(de)?(c(),P("div",Xt,[a(e(bt),{onClick:t[19]||(t[19]=n=>e(ce)("prev")),class:ye({disable:!e(pe)("prev")})},null,8,["class"]),a(e(Ct),{onClick:t[20]||(t[20]=n=>e(ce)("next")),class:ye({disable:!e(pe)("next")})},null,8,["class"])])):J("",!0)])):J("",!0)],544),e(de)?(c(),E(gt,{key:0,file:e($)[e(H)],idx:e(H),onContextMenuClick:e(ie)},null,8,["file","idx","onContextMenuClick"])):J("",!0)]),_:1},8,["spinning"])}}});const sn=vt(Yt,[["__scopeId","data-v-cd16cffa"]]);export{sn as default};