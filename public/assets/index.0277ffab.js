var E=Object.defineProperty,O=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var T=(a,t,n)=>t in a?E(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,h=(a,t)=>{for(var n in t||(t={}))_.call(t,n)&&T(a,n,t[n]);if(R)for(var n of R(t))F.call(t,n)&&T(a,n,t[n]);return a},p=(a,t)=>O(a,L(t));import{r as i,j as S,u as y,L as k,N as U,a as q,B as $,R as B,b as v,c as j,d as P}from"./vendor.f01e59db.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};H();const x=i.exports.createContext(),e=S.exports.jsx,l=S.exports.jsxs,G=S.exports.Fragment,D=()=>{const a=i.exports.useContext(x),{login:t,autenticado:n}=a,c=y();i.exports.useEffect(()=>{n&&c("/")},[n]);const[o,r]=i.exports.useState({email:"",password:""}),d=f=>{r(p(h({},o),{[f.target.name]:f.target.value}))};return e("div",{className:"container mt-5 mx-auto",children:l("form",{onSubmit:f=>{f.preventDefault(),t(o)},children:[l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"E-mail"}),e("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",name:"email",onChange:d})]}),l("div",{className:"mb-3",children:[e("label",{className:"form-label",children:"Contrasena"}),e("input",{type:"password",className:"form-control",name:"password",onChange:d})]}),e("div",{className:"d-flex flex-row-reverse",children:e("button",{type:"submit",className:"btn btn-primary",children:"Conectar"})})]})})},w=()=>{const a=i.exports.useContext(x),{cerrarSesion:t}=a;return e("nav",{className:"navbar navbar-dark bg-primary",children:l("div",{className:"container-fluid",children:[e(k,{className:"navbar-brand",to:"/",children:"Bienvenido Dr Felipe Castillo"}),e("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:e("span",{className:"navbar-toggler-icon"})}),e("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:l("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[e("li",{className:"nav-item",children:e(k,{to:"/",className:"nav-link",children:"Inicio"})}),e("li",{className:"nav-item",children:e(k,{to:"/crear-cita",className:"nav-link",children:"Crear Cita"})}),e("li",{className:"nav-item",children:e("button",{className:"btn btn-danger",onClick:()=>{console.log("cerrando sesion"),t()},children:"Cerrar Sesion"})})]})})]})})},C=i.exports.createContext(),M=({cita:a})=>{const t=i.exports.useContext(C),{obtenerCita:n}=t,c=y(),o=async()=>{await n(a._id),c(`/cita/${a._id}`)};return e("div",{className:"card my-2 border-primary",children:l("div",{className:"card-body",children:[l("h5",{className:"card-title",children:["Hospital: ",a?a.hospital:""]}),l("p",{className:"card-text",children:["Hora : ",a?a.hora:""," hrs"]}),l("p",{className:"card-text",children:["Fecha: ",a?`${a.fecha}`.substring(0,10):""]}),l("p",{className:"card-text",children:["Paciente: ",a?a.nombre:""," "]}),e("div",{className:"d-flex justify-content-end",children:e("a",{onClick:o,className:"btn btn-primary",children:"Ver"})})]})})},z=()=>{const a=i.exports.useContext(C),{citas:t,obtenerCitas:n,citasFecha:c}=a,o=r=>{c(r.target.value)};return i.exports.useEffect(async()=>{await n()},[]),l(G,{children:[e(w,{}),l("div",{className:"container mx-auto mt-5 row",children:[e("input",{type:"date",className:"form-control",placeholder:"Fecha",onChange:o}),t.length?t.map(r=>e(M,{cita:r},r._id)):e("p",{className:" text-center p-5 disponibles",children:"No hay citas"})]})]})},K=()=>{const a=i.exports.useContext(C),{eliminarCita:t,cita:n,actualizarCita:c}=a,o=y(),[r,d]=i.exports.useState({}),s=N=>{d(p(h({},r),{[N.target.name]:N.target.value}))},f=N=>{N.preventDefault(),c(r),o("/")};return i.exports.useEffect(()=>{n&&d(n)},[]),l(i.exports.Fragment,{children:[e(w,{}),l("form",{className:"row g-3 container mx-auto mt-3",onSubmit:f,children:[l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Nombre del Paciente"}),e("input",{type:"text",name:"nombre",className:"form-control",value:r.nombre,onChange:s,required:!0})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Telefono de Contacto"}),e("input",{type:"number",className:"form-control",name:"numero",value:r.numero,onChange:s,required:!0})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Telfono de Contacto 2 (opcional)"}),e("input",{type:"number",name:"numero2",className:"form-control",value:r.numero2,onChange:s})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Correo (opcional)"}),e("input",{type:"email",className:"form-control",name:"email",value:r.email,onChange:s})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Fecha"}),e("input",{type:"date",name:"fecha",className:"form-control",value:`${r.fecha}`.substring(0,10),onChange:s,required:!0})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Hora"}),e("input",{type:"time",className:"form-control",name:"hora",value:r.hora,onChange:s,required:!0})]}),l("div",{className:"",children:[e("label",{className:"form-label",children:"Hospital"}),e("input",{type:"text",className:"form-control",name:"hospital",value:r.hospital,onChange:s,required:!0})]}),l("div",{className:"form-group",children:[e("label",{className:"center",children:"Informacion Adicional (opcional)"}),e("textarea",{className:"form-control",rows:"4",name:"informacion",value:r.informacion,onChange:s})]}),l("div",{className:"col-12 d-flex flex-row-reverse",children:[e("button",{type:"submit",className:"btn btn-primary",children:"Guardar"}),e("button",{type:"button",className:"btn btn-danger mx-2",onClick:()=>{t(r._id),o("/")},children:"Eliminar"})]})]})]})},V=()=>{const a=i.exports.useContext(C),{crearCita:t}=a,[n,c]=i.exports.useState({}),o=y(),r=s=>{c(p(h({},n),{[s.target.name]:s.target.value}))},d=s=>{s.preventDefault(),t(n),o("/")};return l(i.exports.Fragment,{children:[e(w,{}),l("form",{className:"row g-3 container mx-auto mt-3",onSubmit:d,children:[l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Nombre del Paciente"}),e("input",{type:"text",name:"nombre",className:"form-control",onChange:r,required:!0})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Telefono de Contacto"}),e("input",{type:"number",className:"form-control",name:"numero",onChange:r,required:!0})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Telfono de Contacto 2 (opcional)"}),e("input",{type:"number",name:"numero2",className:"form-control",onChange:r})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Correo (opcional)"}),e("input",{type:"email",className:"form-control",name:"email",onChange:r})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Fecha"}),e("input",{type:"date",name:"fecha",className:"form-control",onChange:r,required:!0})]}),l("div",{className:"col-md-6",children:[e("label",{className:"form-label",children:"Hora"}),e("input",{type:"time",className:"form-control",name:"hora",required:!0,onChange:r})]}),l("div",{className:"",children:[e("label",{className:"form-label",children:"Hospital"}),e("input",{type:"text",className:"form-control",name:"hospital",onChange:r,required:!0})]}),l("div",{className:"form-group",children:[e("label",{className:"center",children:"Informacion Adicional (opcional)"}),e("textarea",{className:"form-control",rows:"4",name:"informacion",onChange:r})]}),e("div",{className:"col-12 d-flex flex-row-reverse",children:e("button",{type:"submit",className:"btn btn-primary",children:"Guardar"})})]})]})},I=({children:a})=>{const t=i.exports.useContext(x),{autenticado:n,obtenerUsuario:c,usuario:o}=t;return i.exports.useEffect(async()=>{o||await c()},[n]),n?a:e(U,{to:"/login"})},b=q.create({baseURL:window.location.origin}),A=a=>{a?b.defaults.headers.common["x-token"]=a:delete b.defaults.headers.common["x-token"]};var Z=(a,t)=>{switch(t.type){case"OBTENER_CITAS":return p(h({},a),{citas:t.payload,cita:null});case"OBTENER_CITA":return p(h({},a),{cita:t.payload});case"CREAR_CITA":return p(h({},a),{citas:[...a.citas,t.payload],cita:null});case"ELIMINAR_CITA":return p(h({},a),{citas:a.citas.filter(n=>n.id!==t.payload)});case"ACTUALIZAR_CITA":return p(h({},a),{citas:a.citas.map(n=>n.id===t.payload.id?t.payload:n),cita:null});case"CITA_NULL":return p(h({},a),{cita:null});default:return a}};const J=a=>{const t={citas:[],cita:{}},[n,c]=i.exports.useReducer(Z,t),o=async()=>{try{const u=(await b.get("/citas")).data;c({type:"OBTENER_CITAS",payload:u})}catch(m){console.log(m.response)}},r=async m=>{try{const g=(await b.get(`/citas/fecha/${m}`)).data;c({type:"OBTENER_CITAS",payload:g})}catch(u){console.log(u.response)}},d=async m=>{try{const g=(await b.get(`/citas/${m}`)).data;return console.log(g),c({type:"OBTENER_CITA",payload:g}),g}catch(u){console.log(u.response)}},s=async m=>{try{await b.post("/citas",m),alert("Se ha creado la cita correctamente"),o()}catch(u){console.log(u.response)}},f=async m=>{try{await b.delete(`/citas/${m}`),o(),alert("Se ha eliminado la cita correctamente")}catch(u){console.log(u)}},N=async m=>{try{const u=await b.put(`/citas/${m._id}`,m);alert("Se ha actualizado la cita correctamente"),o()}catch(u){console.log(u)}};return e(C.Provider,{value:{citas:n.citas,cita:n.cita,fecha:n.fecha,obtenerCitas:o,obtenerCita:d,crearCita:s,eliminarCita:f,actualizarCita:N,citasFecha:r},children:a.children})};var Q=(a,t)=>{switch(t.type){case"LOGIN":return localStorage.setItem("x-token",t.payload.token),p(h({},a),{usuario:t.payload.usuario,autenticado:!0,token:t.payload.token});case"LOGOUT":return p(h({},a),{usuario:null,autenticado:!1,token:null});case"USUARIO":return localStorage.setItem("x-token",t.payload.token),p(h({},a),{usuario:t.payload,autenticado:!0,token:t.payload.token});default:return a}};const W=a=>{const t={token:localStorage.getItem("x-token"),autenticado:null,usuario:null,cargando:!0},[n,c]=i.exports.useReducer(Q,t),o=async s=>{try{const f=await b.post("/auth/singin",s),{token:N,usuario:m}=f.data;c({type:"LOGIN",payload:{token:N,usuario:m}}),A(N)}catch(f){alert("No se pudo iniciar sesion, intentalo de nuevo"),console.log(f)}},r=()=>{delete b.defaults.headers.common["user-token"],localStorage.removeItem("x-token"),c({type:"LOGOUT"})},d=async()=>{try{A(localStorage.getItem("x-token"));const s=await b.get("/auth/usuario");c({type:"USUARIO",payload:s.data}),localStorage.setItem("x-token",s.data.token),A(s.data.token)}catch(s){console.log(s.response)}};return e(x.Provider,{value:{usuario:n.usuario,cargando:n.cargando,autenticado:n.autenticado,token:n.token,login:o,cerrarSesion:r,obtenerUsuario:d},children:a.children})};function X(){return e(W,{children:e(J,{children:e($,{children:l(B,{children:[e(v,{path:"/login",element:e(D,{})}),e(v,{path:"/",element:e(I,{children:e(z,{})})}),e(v,{path:"/crear-cita",element:e(I,{children:e(V,{})})}),e(v,{path:"/cita/:id",element:e(I,{children:e(K,{})})})]})})})})}j.render(e(P.StrictMode,{children:e(X,{})}),document.getElementById("root"));
