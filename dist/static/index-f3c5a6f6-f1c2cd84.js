import{s as O,aO as _,f as j,O as B,ct as g,j as a,ay as w,cs as L,e as S,a$ as T,az as z,Q as A,S as D,B as W}from"./sanity-fb6781c5.js";import{P as C}from"./PaneItem-7b9cb213-98d9b89c.js";import{useDeskTool as G}from"./index-2cbd8830-4dc6daa7.js";import"./json-inspector-5dc76863.js";var r;function H(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const E=O.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function U(n){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=n,{features:h}=G(),{collapsed:y}=_(),{defaultLayout:m,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=u,P=c==null?void 0:c.showIcons,k=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return j(B,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[g,a(w,{actions:a(L,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(S,{as:T,"data-as":"a",icon:z,mode:"bleed"}),title:b}),a(A,{overflow:y?void 0:"auto",children:a(D,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(W,{paddingY:1,children:a(E,{})},"divider-".concat(o));const s=!d&&t===e.id,x=d&&t===e.id;return a(C,{icon:k(e)?e.icon:!1,id:e.id,layout:m,pressed:s,schemaType:e.schemaType,selected:x,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{U as default};
