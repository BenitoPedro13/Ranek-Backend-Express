(function(t){function e(e){for(var o,s,u=e[0],i=e[1],c=e[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(o=!1)}o&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var o={},a={app:0},n=[];function s(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=o,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"099b":function(t,e,r){"use strict";r("80a8")},"16ef":function(t,e,r){},"2c7b":function(t,e,r){"use strict";r("5312")},"2d4d":function(t,e,r){"use strict";r("4f55")},"2d96":function(t,e,r){},"377d":function(t,e,r){},"3cf3":function(t,e,r){"use strict";r("89c5")},"3ec5":function(t,e,r){"use strict";r("5248")},"3fdb":function(t,e,r){"use strict";r("fb9a")},"47fe":function(t,e,r){"use strict";r("6c03")},"4f55":function(t,e,r){},5248:function(t,e,r){},5312:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4"),r("a9e3");var o=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("the-header"),r("main",[r("transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1),r("the-footer")],1)},n=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("nav",[o("router-link",{staticClass:"logo",attrs:{to:"/"}},[o("img",{attrs:{src:r("b9aa"),alt:"Ranek"}})]),t.$store.state.login?o("router-link",{staticClass:"btn",attrs:{to:"/usuario"}},[t._v(" "+t._s(t.nome)+" ")]):o("router-link",{staticClass:"btn",attrs:{to:"/login"}},[t._v(" Vender / Login ")])],1)])},u=[],i=(r("ac1f"),r("5319"),{name:"TheHeader",computed:{nome:function(){return this.$store.state.usuario.nome.replace(/ .*/,"")}}}),c=i,l=(r("099b"),r("2877")),d=Object(l["a"])(c,s,u,!1,null,"eef2bf6a",null),p=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("p",[t._v("Ranek. Alguns direitos reservados")])])}],v={name:"TheFooter"},h=v,g=(r("2c7b"),Object(l["a"])(h,m,f,!1,null,"31254627",null)),b=g.exports,_={components:{TheHeader:p,TheFooter:b}},w=_,x=(r("034f"),Object(l["a"])(w,a,n,!1,null,null,null)),P=x.exports,O=r("8c4f"),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h1",[t._v("👍 Compre ou venda 👎")]),r("produtos-buscar"),r("produtos-lista")],1)},$=[],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.busca,expression:"busca"}],attrs:{type:"text",name:"busca",id:"busca",placeholder:"Buscar..."},domProps:{value:t.busca},on:{input:function(e){e.target.composing||(t.busca=e.target.value)}}}),r("input",{attrs:{type:"submit",id:"lupa",value:"Buscar"},on:{click:function(e){return e.preventDefault(),t.buscarProdutos.apply(null,arguments)}}})])},j=[],k={name:"ProdutosBuscar",data:function(){return{busca:""}},methods:{buscarProdutos:function(){this.$router.push({query:{q:this.busca,_page:1}})}}},U=k,R=(r("c072"),Object(l["a"])(U,y,j,!1,null,"5e51e912",null)),A=R.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"produtos-container"},[r("transition",{attrs:{mode:"out-in"}},[t.produtos&&t.produtos.length>0?r("div",{key:"produtos",staticClass:"produtos"},[t._l(t.produtos,(function(e){return r("div",{key:e.id,staticClass:"produto"},[r("router-link",{attrs:{to:{name:"produto",params:{id:e.id}}}},[e.fotos[0]?r("img",{attrs:{src:e.fotos[0],alt:e.fotos[0].titulo}}):t._e(),r("h2",{staticClass:"titulo"},[t._v(t._s(e.nome))]),r("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(e.preco)))])])],1)})),r("produtos-paginar",{attrs:{produtosTotal:t.produtosTotal,produtosPorPagina:t.produtosPorPagina}})],2):t.produtos&&0===t.produtos.length?r("div",{key:"sem-resultados",staticClass:"sem-resultados"},[r("p",[t._v("Busca sem resultados, tente buscar outro termo.")])]):r("pagina-carregando",{key:"carregando"})],1)],1)},T=[],D=r("1da1"),N=(r("96cf"),r("99af"),r("bc3a")),S=r.n(N),I=S.a.create({baseURL:"https://www.quantic.digital/"}),L={get:function(t){return I.get(t)},post:function(t,e){return I.post(t,e)},put:function(t,e){return I.put(t,e)},delete:function(t){return I.delete(t)}};function q(t){return S.a.get("https://viacep.com.br/ws/".concat(t,"/json/"))}var z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.paginasTotal>1?r("ul",[r("router-link",{attrs:{to:{query:t.query(1)}}},[t._v("Inicio")]),t._l(t.paginas,(function(e){return r("li",{key:e},[r("router-link",{attrs:{to:{query:t.query(e)}}},[t._v(t._s(e))])],1)})),r("router-link",{attrs:{to:{query:t.query(t.paginasTotal)}}},[t._v("Final")])],2):t._e()},F=[],V=r("5530"),B=(r("a434"),{name:"ProdutosPaginar",props:{produtosPorPagina:{type:Number,default:1},produtosTotal:{type:Number,default:1}},methods:{query:function(t){return Object(V["a"])(Object(V["a"])({},this.$route.query),{},{_page:t})}},computed:{paginas:function(){for(var t=Number(this.$route.query._page),e=9,r=Math.ceil(e/2),o=this.paginasTotal,a=[],n=1;n<=o;n++)a.push(n);return a.splice(0,t-r),a.splice(e,o),a},paginasTotal:function(){var t=this.produtosTotal/this.produtosPorPagina;return t!==1/0?Math.ceil(t):0}}}),M=B,H=(r("3ec5"),Object(l["a"])(M,z,F,!1,null,"5f97edd0",null)),G=H.exports,J=r("ade3");function K(t){var e="";for(var r in t)e+="&".concat(r,"=").concat(t[r]);return e}function Q(t){for(var e={},r=function(r){var o=[t.fields[r]];e[o]={get:function(){return this.$store.state[t.base][o]},set:function(e){this.$store.commit(t.mutation,Object(J["a"])({},o,e))}}},o=0;o<t.fields.length;o++)r(o);return e}var W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"},[r("span"),r("span"),r("span"),r("span")])}],Y={name:"PaginaCarregando"},Z=Y,tt=(r("a5d4"),Object(l["a"])(Z,W,X,!1,null,"ee2a55d0",null)),et=tt.exports,rt={name:"ProdutosLista",components:{ProdutosPaginar:G,PaginaCarregando:et},data:function(){return{produtos:null,produtosPorPagina:9,produtosTotal:0}},methods:{getProdutos:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.produtos=null,r=t.url,e.next=4,L.get(r);case 4:o=e.sent,t.produtosTotal=Number(o.headers["x-total-count"]),t.produtos=o.data;case 7:case"end":return e.stop()}}),e)})))()}},computed:{url:function(){var t=K(this.$route.query);return"/produto?_limit=".concat(this.produtosPorPagina).concat(t)}},watch:{url:function(){this.getProdutos()}},created:function(){this.getProdutos()}},ot=rt,at=(r("47fe"),Object(l["a"])(ot,E,T,!1,null,"0ef79a5a",null)),nt=at.exports,st={name:"Home",components:{ProdutosBuscar:A,ProdutosLista:nt}},ut=st,it=(r("b28e"),Object(l["a"])(ut,C,$,!1,null,"9164eef8",null)),ct=it.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[t.produto?r("div",{staticClass:"produto"},[t.produto.fotos?r("ul",{staticClass:"fotos"},t._l(t.produto.fotos,(function(e,o){return r("li",{key:o},[r("img",{attrs:{src:e.src,alt:t.produto.titulo}})])})),0):t._e(),r("div",{staticClass:"info"},[r("h1",[t._v(t._s(t.produto.nome))]),r("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(t.produto.preco)))]),r("p",{staticClass:"descricao"},[t._v(t._s(t.produto.descricao))]),"false"===t.produto.vendido?r("transition",{attrs:{mode:"out-in"}},[t.finalizar?r("finalizar-compra",{attrs:{mensagem:t.mensagem,produto:t.produto}}):r("button",{staticClass:"btn",on:{click:t.comprar}},[t._v("Comprar")])],1):r("button",{staticClass:"btn",attrs:{disabled:""}},[t._v("Produto Vendido")])],1)]):r("pagina-carregando")],1)},dt=[],pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("Endereço de Envio")]),r("usuario-form",[r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.finalizarCompra.apply(null,arguments)}}},[t._v("Finalizar Compra")])])],1)},mt=[],ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[t.mostrarDadosLogin?r("div",{staticClass:"usuario"},[r("label",{attrs:{for:"nome"}},[t._v("Nome")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],attrs:{type:"text",name:"nome",id:"nome"},domProps:{value:t.nome},on:{input:function(e){e.target.composing||(t.nome=e.target.value)}}}),r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),r("label",{attrs:{for:"senha"}},[t._v("Senha")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.senha,expression:"senha"}],attrs:{type:"password",name:"senha",id:"senha"},domProps:{value:t.senha},on:{input:function(e){e.target.composing||(t.senha=e.target.value)}}})]):t._e(),r("label",{attrs:{for:"cep"}},[t._v("Cep")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cep,expression:"cep"}],attrs:{type:"text",name:"cep",id:"cep"},domProps:{value:t.cep},on:{keyup:t.preencherCep,input:function(e){e.target.composing||(t.cep=e.target.value)}}}),r("label",{attrs:{for:"rua"}},[t._v("Rua")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.rua,expression:"rua"}],attrs:{type:"text",name:"rua",id:"rua"},domProps:{value:t.rua},on:{input:function(e){e.target.composing||(t.rua=e.target.value)}}}),r("label",{attrs:{for:"numero"}},[t._v("Numero")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.numero,expression:"numero"}],attrs:{type:"number",name:"numero",id:"numero"},domProps:{value:t.numero},on:{input:function(e){e.target.composing||(t.numero=e.target.value)}}}),r("label",{attrs:{for:"bairro"}},[t._v("Bairro")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.bairro,expression:"bairro"}],attrs:{type:"text",name:"bairro",id:"bairro"},domProps:{value:t.bairro},on:{input:function(e){e.target.composing||(t.bairro=e.target.value)}}}),r("label",{attrs:{for:"nome"}},[t._v("Cidade")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cidade,expression:"cidade"}],attrs:{type:"text",name:"cidade",id:"cidade"},domProps:{value:t.cidade},on:{input:function(e){e.target.composing||(t.cidade=e.target.value)}}}),r("label",{attrs:{for:"nome"}},[t._v("Estado")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.estado,expression:"estado"}],attrs:{type:"text",name:"estado",id:"estado"},domProps:{value:t.estado},on:{input:function(e){e.target.composing||(t.estado=e.target.value)}}}),r("div",{staticClass:"button"},[t._t("default")],2)])},vt=[],ht=(r("b0c0"),{name:"UsuarioForm",computed:Object(V["a"])(Object(V["a"])({},Q({fields:["id","nome","email","senha","cep","rua","numero","bairro","cidade","estado"],base:"usuario",mutation:"UPDATE_USUARIO"})),{},{mostrarDadosLogin:function(){return!this.$store.state.login||"usuario-editar"===this.$route.name}}),methods:{preencherCep:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.cep.replace(/\D/g,""),8!==r.length){e.next=9;break}return e.next=4,q(r);case 4:o=e.sent,t.rua=o.data.logradouro,t.bairro=o.data.bairro,t.estado=o.data.uf,t.cidade=o.data.localidade;case 9:case"end":return e.stop()}}),e)})))()}}}),gt=ht,bt=(r("aa38"),Object(l["a"])(gt,ft,vt,!1,null,"277b583e",null)),_t=bt.exports,wt=r("2f62"),xt={name:"FinalizarCompra",components:{UsuarioForm:_t},props:["produto","mensagem"],computed:Object(V["a"])(Object(V["a"])({},Object(wt["c"])(["usuario"])),{},{compra:function(){return{comprador_id:this.usuario.id,vendedor_id:this.produto.usuario_id,produto:this.produto,endereco:{cep:this.usuario.cep,rua:this.usuario.rua,numero:this.usuario.numero,bairro:this.usuario.bairro,cidade:this.usuario.cidade,estado:this.usuario.estado}}}}),methods:{criarTransacao:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.post("/transacao",t.compra);case 2:return r=e.sent,t.$router.push({name:"compras"}),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},criarUsuario:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("criarUsuario",t.$store.state.usuario);case 3:return e.next=5,t.$store.dispatch("getUsuario",t.$store.state.usuario.email);case 5:return e.next=7,t.criarTransacao();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},finalizarCompra:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$store.state.login){e.next=5;break}return e.next=3,t.criarTransacao();case 3:e.next=7;break;case 5:return e.next=7,t.criarUsuario();case 7:case"end":return e.stop()}}),e)})))()},redirect:function(t){var e=arguments,r=this;return Object(D["a"])(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return a=e.length>1&&void 0!==e[1]?e[1]:"_blank",o.next=3,r.finalizarCompra();case 3:window.open(t,a);case 4:case"end":return o.stop()}}),o)})))()}}},Pt=xt,Ot=(r("2d4d"),Object(l["a"])(Pt,pt,mt,!1,null,"ce04b5b4",null)),Ct=Ot.exports,$t={name:"Produto",components:{PaginaCarregando:et,FinalizarCompra:Ct},data:function(){return{id:this.$route.params.id,produto:null,finalizar:!1,mensagem:""}},methods:{getProdutos:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.get("/produto/".concat(t.id));case 2:r=e.sent,t.produto=r.data;case 4:case"end":return e.stop()}}),e)})))()},comprar:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.finalizar=!0,t.mensagem="Ola, gostaria de fazer um pedido:%0A%2A1x%2A ".concat(t.produto.nome," - ").concat(window.location.href,"%0AR$ ").concat(t.produto.preco,"%0A%0A%2ATaxa de entrega:%2A Retirar no local%0A%0A%2ATotal:%2A R$ ").concat(t.produto.preco,"%0A%0A%0A----------%0A%0A%2ADados do comprador:%2A%0A").concat(t.$store.state.usuario.nome,"%0A").concat(t.$store.state.usuario.email,"%0A%0A%2AEndereço:%2A%0A").concat(t.$store.state.usuario.rua,", ").concat(t.$store.state.usuario.numero,", ").concat(t.$store.state.usuario.bairro,", ").concat(t.$store.state.usuario.cidade,", ").concat(t.$store.state.usuario.estado,"%0A").concat(t.$store.state.usuario.cep);case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getProdutos()}},yt=$t,jt=(r("acfe"),Object(l["a"])(yt,lt,dt,!1,null,"682abd17",null)),kt=jt.exports,Ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("h1",[t._v("Login")]),r("form",{attrs:{action:""}},[r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}}),r("label",{attrs:{for:"senha"}},[t._v("Senha")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.login.senha,expression:"login.senha"}],attrs:{type:"password",name:"senha",id:"senha"},domProps:{value:t.login.senha},on:{input:function(e){e.target.composing||t.$set(t.login,"senha",e.target.value)}}}),r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.logar.apply(null,arguments)}}},[t._v("Logar")])]),t._m(0),r("login-criar")],1)},Rt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"perdeu"},[r("a",{attrs:{href:"/",target:"_blank"}},[t._v("perdeu a senha? Clique aqui.")])])}],At=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("Crie a Sua Conta")]),r("transition",{attrs:{mode:"out-in"}},[t.criar?r("usuario-form",[r("button",{staticClass:"btn btn-form",on:{click:function(e){return e.preventDefault(),t.criarUsuario.apply(null,arguments)}}},[t._v("Criar Usuario")])]):r("button",{staticClass:"btn",on:{click:function(e){t.criar=!0}}},[t._v("Criar Conta")])],1)],1)},Et=[],Tt={name:"LoginCriar",components:{UsuarioForm:_t},data:function(){return{criar:!1}},methods:{criarUsuario:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("criarUsuario",t.$store.state.usuario);case 3:return e.next=5,t.$store.dispatch("getUsuario",t.$store.state.usuario.email);case 5:t.$router.push({name:"usuario"}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},Dt=Tt,Nt=(r("3cf3"),Object(l["a"])(Dt,At,Et,!1,null,"5426a84b",null)),St=Nt.exports,It={name:"Login",components:{LoginCriar:St},data:function(){return{login:{email:"",senha:""}}},methods:{logar:function(){this.$store.dispatch("getUsuario",this.login.email),this.$router.push({name:"usuario"})}}},Lt=It,qt=(r("9e30"),Object(l["a"])(Lt,Ut,Rt,!1,null,"2157e4b0",null)),zt=qt.exports,Ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"usuario"},[r("nav",{staticClass:"sidenav"},[r("ul",[r("li",[r("router-link",{attrs:{to:{name:"usuario"}}},[t._v("Produtos")])],1),r("li",[r("router-link",{attrs:{to:{name:"compras"}}},[t._v("Compras")])],1),r("li",[r("router-link",{attrs:{to:{name:"vendas"}}},[t._v("Vendas")])],1),r("li",[r("router-link",{attrs:{to:{name:"usuario-editar"}}},[t._v("Editar Usuario")])],1),r("li",[r("button",{on:{click:t.deslogar}},[t._v("Deslogar")])])])]),r("transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1)},Vt=[],Bt={name:"Usuario",methods:{deslogar:function(){this.$store.dispatch("deslogarUsuario"),this.$router.push("/login")}}},Mt=Bt,Ht=(r("f6f3c"),Object(l["a"])(Mt,Ft,Vt,!1,null,"7e9ef536",null)),Gt=Ht.exports,Jt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("Adicionar Produtos")]),r("produtos-adicionar"),r("h2",[t._v("Seus Produtos")]),t.usuario_produtos?r("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.usuario_produtos,(function(e){return r("li",{key:e.id},[r("produtos-item",{attrs:{produto:e}},[r("p",{staticClass:"descricao"},[t._v(t._s(e.descricao))]),r("button",{staticClass:"deletar",on:{click:function(r){return t.deletarProduto(e.id)}}},[t._v("Deletar")])])],1)})),0):t._e()],1)},Kt=[],Qt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"adicionar-produto"},[r("label",{attrs:{for:"nome"}},[t._v("Nome")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.produto.nome,expression:"produto.nome"}],attrs:{type:"text",name:"nome",id:"nome"},domProps:{value:t.produto.nome},on:{input:function(e){e.target.composing||t.$set(t.produto,"nome",e.target.value)}}}),r("label",{attrs:{for:"preco"}},[t._v("Preço (R$)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.produto.preco,expression:"produto.preco"}],attrs:{type:"number",name:"preco",id:"preco"},domProps:{value:t.produto.preco},on:{input:function(e){e.target.composing||t.$set(t.produto,"preco",e.target.value)}}}),r("label",{attrs:{for:"fotos"}},[t._v("Fotos")]),r("input",{ref:"fotos",attrs:{type:"file",name:"fotos",id:"fotos"}}),r("label",{attrs:{for:"descricao"}},[t._v("Descriçao")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.produto.descricao,expression:"produto.descricao"}],attrs:{name:"descricao",id:"descricao",cols:"30",rows:"10"},domProps:{value:t.produto.descricao},on:{input:function(e){e.target.composing||t.$set(t.produto,"descricao",e.target.value)}}}),r("input",{staticClass:"btn",attrs:{type:"button",value:"Adicionar Produto"},on:{click:function(e){return e.preventDefault(),t.adicionarProduto.apply(null,arguments)}}})])},Wt=[],Xt={name:"ProdutosAdicionar",data:function(){return{produto:{nome:"",preco:"",descricao:"",fotos:null,vendido:"false"}}},methods:{formatarProduto:function(){this.produto.usuario_id=this.$store.state.usuario.id},adicionarProduto:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.formatarProduto(),e.next=3,L.post("/produto",t.produto);case 3:t.$store.dispatch("getUsuarioProdutos");case 4:case"end":return e.stop()}}),e)})))()}}},Yt=Xt,Zt=(r("90ea"),Object(l["a"])(Yt,Qt,Wt,!1,null,"55cac3c2",null)),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.produto?r("div",{staticClass:"produto"},[r("router-link",{staticClass:"produto-img",attrs:{to:{name:"produto",params:{id:t.produto.id}}}},[t.produto.fotos.length>0?r("img",{attrs:{src:t.produto.fotos[0].src,alt:t.produto.fotos[0].titulo}}):t._e(),r("p",[t._v("Ver Produto")])]),r("div",{staticClass:"info"},[r("p",{staticClass:"preco"},[t._v(t._s(t._f("numeroPreco")(t.produto.preco)))]),r("h2",{staticClass:"titulo"},[t._v(t._s(t.produto.nome))]),t._t("default")],2)],1):t._e()},re=[],oe={name:"ProdutosItem",props:["produto"]},ae=oe,ne=(r("b27b"),Object(l["a"])(ae,ee,re,!1,null,"5de232fb",null)),se=ne.exports,ue={name:"UsuarioProdutos",components:{ProdutosAdicionar:te,ProdutosItem:se},methods:Object(V["a"])(Object(V["a"])({},Object(wt["b"])(["getUsuarioProdutos"])),{},{deletarProduto:function(t){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,o=window.confirm("Deseja remover este produto?"),!o){r.next=6;break}return r.next=5,L.delete("/produto/".concat(t));case 5:e.getUsuarioProdutos();case 6:r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.error(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}}),computed:Object(V["a"])({},Object(wt["c"])(["login","usuario","usuario_produtos"])),watch:{login:function(){this.getUsuarioProdutos()}},created:function(){this.login&&this.getUsuarioProdutos()}},ie=ue,ce=(r("7895"),Object(l["a"])(ie,Jt,Kt,!1,null,"4bcfed7e",null)),le=ce.exports,de=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.compras?r("div",[r("h2",[t._v("Compras")]),t._l(t.compras,(function(e,o){return r("div",{key:o,staticClass:"produtos-wrapper"},[e.produto?r("produtos-item",{attrs:{produto:e.produto}},[r("p",{staticClass:"vendedor"},[r("span",[t._v("Vendedor: ")]),t._v(" "+t._s(e.email)+" ")])]):t._e()],1)}))],2):t._e()},pe=[],me={name:"UsuarioCompras",data:function(){return{compras:null}},components:{ProdutosItem:se},methods:{getCompras:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.get("/transacao?comprador_id=".concat(t.usuario.id));case 2:r=e.sent,t.compras=r.data;case 4:case"end":return e.stop()}}),e)})))()},created:function(){this.getCompras()}},computed:Object(V["a"])({},Object(wt["c"])(["usuario","login"])),watch:{login:function(){this.getCompras()}},created:function(){this.login&&this.getCompras()}},fe=me,ve=(r("3fdb"),Object(l["a"])(fe,de,pe,!1,null,"74b6686f",null)),he=ve.exports,ge=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.vendas?r("div",[r("h2",[t._v("Vendas")]),t._l(t.vendas,(function(e,o){return r("div",{key:o,staticClass:"produtos-wrapper"},[e.produto?r("produtos-item",{attrs:{produto:e.produto}},[r("p",{staticClass:"comprador"},[r("span",[t._v("Comprador: ")]),t._v(" "+t._s(e.email)+" ")])]):t._e(),r("div",{staticClass:"entrega"},[r("h3",[t._v("Entrega:")]),e.endereco?r("ul",t._l(e.endereco,(function(e,o){return r("li",{key:o},[t._v(" "+t._s(o)+": "+t._s(e)+" ")])})),0):t._e()])],1)}))],2):t._e()},be=[],_e={name:"UsuarioVendas",data:function(){return{vendas:null}},components:{ProdutosItem:se},methods:{getVendas:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.get("/transacao?vendedor_id=".concat(t.usuario.id));case 2:r=e.sent,t.vendas=r.data;case 4:case"end":return e.stop()}}),e)})))()}},computed:Object(V["a"])({},Object(wt["c"])(["usuario","login"])),watch:{login:function(){this.getVendas()}},created:function(){this.login&&this.getVendas()}},we=_e,xe=(r("5f3d"),Object(l["a"])(we,ge,be,!1,null,"2cfd2020",null)),Pe=xe.exports,Oe=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h2",[t._v("Editar Usuario")]),r("usuario-form",[r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.atualizarUsuario.apply(null,arguments)}}},[t._v("Atualizar Usuario")])])],1)},Ce=[],$e={name:"UsuarioEditar",components:{UsuarioForm:_t},methods:{atualizarUsuario:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.put("/usuario/".concat(t.$store.state.usuario.id),t.$store.state.usuario);case 3:return e.next=5,t.$store.dispatch("getUsuario");case 5:t.$router.push({name:"usuario"}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},ye=$e,je=(r("a8a6"),Object(l["a"])(ye,Oe,Ce,!1,null,"6d72d336",null)),ke=je.exports;o["a"].use(O["a"]);var Ue=[{path:"/",name:"Home",component:ct},{path:"/produto/:id",name:"produto",component:kt,props:!0},{path:"/login",name:"login",component:zt},{path:"/usuario",component:Gt,children:[{path:"",name:"usuario",component:le},{path:"compras",name:"compras",component:he},{path:"vendas",name:"vendas",component:Pe},{path:"editar",name:"usuario-editar",component:ke}]}],Re=new O["a"]({mode:"history",base:"/",routes:Ue,scrollBehavior:function(){return window.scrollTo({top:0,behavior:"smooth"})}}),Ae=Re;o["a"].use(wt["a"]);var Ee=new wt["a"].Store({strict:!0,state:{login:!1,usuario:{id:"",nome:"",email:"",senha:"",cep:"",rua:"",numero:"",bairro:"",cidade:"",estado:""},usuario_produtos:null},getters:{},mutations:{UPDATE_LOGIN:function(t,e){t.login=e},UPDATE_USUARIO:function(t,e){t.usuario=Object.assign(t.usuario,e);var r=t.usuario.id;t.usuario.id=e.id?e.email:r},UPDATE_USUARIO_PRODUTOS:function(t,e){t.usuario_produtos=e},ADD_USUARIO_PRODUTOS:function(t,e){t.usuario_produtos.unshift(e)}},actions:{getUsuarioProdutos:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L.get("/produto?usuario_id=".concat(t.state.usuario.id));case 2:r=e.sent,t.commit("UPDATE_USUARIO_PRODUTOS",r.data);case 4:case"end":return e.stop()}}),e)})))()},getUsuario:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,L.get("/usuario/".concat(e));case 2:return o=r.sent,t.commit("UPDATE_USUARIO",o.data),t.commit("UPDATE_LOGIN",!0),r.abrupt("return",o);case 6:case"end":return r.stop()}}),r)})))()},criarUsuario:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.commit("UPDATE_USUARIO",{id:e.email}),r.next=3,L.post("/usuario",e);case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})))()},deslogarUsuario:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r={id:"",nome:"",email:"",senha:"",cep:"",rua:"",numero:"",bairro:"",cidade:"",estado:""},t.commit("UPDATE_USUARIO",r),t.commit("UPDATE_LOGIN",!1);case 3:case"end":return e.stop()}}),e)})))()}},modules:{}});o["a"].config.productionTip=!1,o["a"].component("PaginaCarregando",et),o["a"].filter("numeroPreco",(function(t){return t=Number(t),isNaN(t)?"":t.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})})),new o["a"]({router:Ae,store:Ee,render:function(t){return t(P)}}).$mount("#app")},"5f3d":function(t,e,r){"use strict";r("f6f3")},"6c03":function(t,e,r){},7895:function(t,e,r){"use strict";r("8757")},"7a59":function(t,e,r){},"7cc5":function(t,e,r){},"7f39":function(t,e,r){},"80a8":function(t,e,r){},"83f3":function(t,e,r){},"85ec":function(t,e,r){},8757:function(t,e,r){},"89c5":function(t,e,r){},"904c":function(t,e,r){},"90ea":function(t,e,r){"use strict";r("16ef")},"9e30":function(t,e,r){"use strict";r("904c")},a5d4:function(t,e,r){"use strict";r("377d")},a8a6:function(t,e,r){"use strict";r("83f3")},aa38:function(t,e,r){"use strict";r("bc84")},acfe:function(t,e,r){"use strict";r("7f39")},b27b:function(t,e,r){"use strict";r("7cc5")},b28e:function(t,e,r){"use strict";r("e4b3")},b9aa:function(t,e,r){t.exports=r.p+"img/ranek.e7a4871b.svg"},bc84:function(t,e,r){},c072:function(t,e,r){"use strict";r("2d96")},e4b3:function(t,e,r){},f6f3:function(t,e,r){},f6f3c:function(t,e,r){"use strict";r("7a59")},fb9a:function(t,e,r){}});
//# sourceMappingURL=app.c8e91c30.js.map