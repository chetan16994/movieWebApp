(this.webpackJsonptempp2=this.webpackJsonptempp2||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={form:"Checkout_form__3JbY7",control:"Checkout_control__1emV5",actions:"Checkout_actions__3VS0e",submit:"Checkout_submit__1XJY6",invalid:"Checkout_invalid__1UFuO"}},function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c=n(11),a=Object(c.b)({name:"movie",initialState:{movies:[]},reducers:{setMovies:function(e,t){e.movies=t.payload.movies,console.log(e.movies)},increaseCapacity:function(e,t){var n=t.payload;for(var c in e.movies)console.log(c,e.movies[c].id),n===e.movies[c].id&&(e.movies[c].capacity+=1)},decreaseCapacity:function(e,t){var n=t.payload;for(var c in console.log(n),e.movies)console.log(c,e.movies[c].id),n===e.movies[c].id&&(e.movies[c].capacity-=1)}}}),i=a.actions;t.a=a},function(e,t,n){e.exports={"movie-showing":"MovieShowing_movie-showing__t6XUC","movie-showing__control":"MovieShowing_movie-showing__control__1cfXm"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__BFwii",total:"Cart_total__O-r7s",actions:"Cart_actions__1OSxu","button--alt":"Cart_button--alt__2TDfG",button:"Cart_button__2GbNZ"}},,,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2WNkr",summary:"CartItem_summary__1ljEL",price:"CartItem_price__1l3qH",amount:"CartItem_amount__1I61l",actions:"CartItem_actions__2nqkd"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__NFxcb",icon:"HeaderCartButton_icon__2DLn-",badge:"HeaderCartButton_badge__1vUeI",bump:"HeaderCartButton_bump__3h6Kc"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3iHpp",modal:"Modal_modal__2oc6d","slide-down":"Modal_slide-down__2SvUl"}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var c=n(7),a=n.n(c),i=n(14),o=n(11),r=Object(o.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(e){e.cartIsVisible=!e.cartIsVisible},showNotification:function(e,t){e.notification={status:t.payload.status,title:t.payload.title,message:t.payload.message}}}}),s=(r.actions,n(9)),l=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-e96e8-default-rtdb.firebaseio.com/movie.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch movie data!");case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,n();case 4:c=e.sent,console.log(c," inside axtion"),t(s.b.setMovies({movies:c})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://movie-e96e8-default-rtdb.firebaseio.com/movie.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:if(t.sent.ok){t.next=5;break}throw new Error("Sending movie data failed.");case 5:window.location.reload();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,c();case 4:t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(1),new Error(" Sending movie data failed. ");case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()}},,function(e,t,n){e.exports={form:"MovieForm_form__3qdSB"}},function(e,t,n){e.exports={input:"Input_input__3JElO"}},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(13),o=n.n(i),r=(n(34),n(3)),s=(n(35),n(2)),l=a.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=n(0),d=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=n(20),b=n.n(u),h=n(6),m=function(e){var t=Object(h.c)((function(e){return e.cart})),n=Object(c.useState)(!1),a=Object(r.a)(n,2),i=a[0],o=a[1],s=(Object(c.useContext)(l),t.items),u=t.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(b.a.button," ").concat(i?b.a.bump:"");return Object(c.useEffect)((function(){if(0!==s.length){o(!0);var e=setTimeout((function(){o(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(j.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(j.jsx)("span",{className:b.a.icon,children:Object(j.jsx)(d,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:b.a.badge,children:u})]})},O=n(16),x=function(e){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{id:"header",className:"header-fixed",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{className:"selected",to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(O.b,{className:"selected",to:"/search-movies",children:"Search Movies"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("a",{href:"movies.html",children:"Movies"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Now Showing"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Coming Soon"})})]})]}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"login.html",children:"Login"})})]}),Object(j.jsx)(m,{onClick:e.onShowCart})]})})})})},p=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{id:"footer",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Quick Links"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"index.html",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"ticket-info.html",children:"Ticket Info"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"movies.html",children:"Now Showing"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"rentals.html",children:"Rentals"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"about.html",children:"Contact"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"movies.html",children:"Comming Soon"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"about.html",children:"The Company"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"blog.html",children:"Blog"})})]})]}),Object(j.jsxs)("div",{className:"section",children:[Object(j.jsx)("span",{children:"Recent Tweets"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"Sed id mattis tellus. Proin egestas velit vel neque placerat sed interdum neque porta."})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"Praesent at urna ac urna congue convallis."})})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Sign Up For Our Mailing List"}),Object(j.jsx)("p",{children:"Praesent at urna ac urna congue convallis. Maecenas sed placerat turpis. Duis in dolor ut nibh molestie faucibus."}),Object(j.jsx)("form",{action:"about.html",children:Object(j.jsx)("input",{type:"submit",value:""})})]}),Object(j.jsx)("p",{children:"\xa9 2023 Cinema Theatre"}),Object(j.jsxs)("div",{className:"connect",children:[Object(j.jsx)("span",{children:"Stay Connected: "})," ",Object(j.jsx)("a",{href:"http://freewebsitetemplates.com/go/facebook/",id:"facebook",children:"facebook"})," ",Object(j.jsx)("a",{href:"http://freewebsitetemplates.com/go/twitter/",id:"twitter",children:"twitter"})," ",Object(j.jsx)("a",{href:"http://freewebsitetemplates.com/go/googleplus/",id:"googleplus",children:"google+"})]})]})})})},f=n(7),v=n.n(f),g=n(14),C=n(12),y=n.n(C),w=n(21),_=n.n(w),S=function(e){return Object(j.jsx)("div",{className:_.a.backdrop,onClick:e.onClose})},N=function(e){return Object(j.jsx)("div",{className:_.a.modal,children:Object(j.jsx)("div",{className:_.a.content,children:e.children})})},k=document.getElementById("overlays"),F=function(e){return Object(j.jsxs)(c.Fragment,{children:[o.a.createPortal(Object(j.jsx)(S,{onClose:e.onClose}),k),o.a.createPortal(Object(j.jsx)(N,{children:e.children}),k)]})},A=n(18),I=n.n(A),T=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:I.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("h4",{children:["Show Time : ",e.timing]}),Object(j.jsxs)("h4",{children:["Screen : ",e.theater]}),Object(j.jsxs)("h4",{children:["capacity : ",e.capacity]}),Object(j.jsxs)("div",{className:I.a.summary,children:[Object(j.jsx)("span",{className:I.a.price,children:t}),Object(j.jsxs)("span",{className:I.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:I.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},D=function(e){return Object(j.jsxs)(F,{children:[Object(j.jsx)("h1",{style:{color:"red"},children:"no more tickets"}),Object(j.jsx)("button",{onClick:e.onClose,children:"Close"})]})},H=n(8),M=n.n(H),P=function(e){return""===e.trim()},B=function(e){var t=Object(c.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(c.useRef)(),s=Object(c.useRef)(),l=Object(c.useRef)(),d=Object(c.useRef)(),u="".concat(M.a.control," ").concat(a.name?"":M.a.invalid),b="".concat(M.a.control," ").concat(a.street?"":M.a.invalid),h="".concat(M.a.control," ").concat(a.postalCode?"":M.a.invalid),m="".concat(M.a.control," ").concat(a.city?"":M.a.invalid);return Object(j.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,c=s.current.value,a=l.current.value,r=d.current.value,j=!P(n),u=!P(c),b=!P(r),h=5===a.trim().length;i({name:j,street:u,city:b,postalCode:h}),j&&u&&b&&h&&e.onConfirm({name:n,street:c,city:r,postalCode:a})},children:[Object(j.jsxs)("div",{className:u,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(j.jsx)("input",{type:"text",id:"name",ref:o}),!a.name&&Object(j.jsx)("p",{children:"Please enter a valid name!"})]}),Object(j.jsxs)("div",{className:b,children:[Object(j.jsx)("label",{htmlFor:"street",children:"Street"}),Object(j.jsx)("input",{type:"text",id:"street",ref:s}),!a.street&&Object(j.jsx)("p",{children:"Please enter a valid street!"})]}),Object(j.jsxs)("div",{className:h,children:[Object(j.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(j.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(j.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",id:"city",ref:d}),!a.city&&Object(j.jsx)("p",{children:"Please enter a valid city!"})]}),Object(j.jsxs)("div",{className:M.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{className:M.a.submit,children:"Confirm"})]})]})},R=n(11),E=Object(R.b)({name:"cart",initialState:{totalQuantity:0,items:[],totalAmount:0},reducers:{replaceCart:function(e,t){e.totalQuantity=0,e.totalAmount=0,e.items=[]},addItemToCart:function(e,t){var n=t.payload,c=e.items.find((function(e){return e.id===n.id}));console.log(e),e.totalAmount=e.totalAmount+n.price,c?(c.amount=c.amount+1,c.capacity=c.capacity-1,e.totalQuantity=e.totalQuantity+n.amount):(e.items.push({id:n.id,name:n.name,timing:n.timing,theater:n.theater,capacity:n.capacity-n.amount,amount:n.amount,price:n.price}),e.totalQuantity=e.totalQuantity+n.amount)},removeItemFromCart:function(e,t){var n=t.payload,c=e.items.find((function(e){return e.id===n}));console.log(c),e.totalQuantity--,c.capacity++,e.totalAmount=e.totalAmount-c.price,1===c.amount?e.items=e.items.filter((function(e){return e.id!==n})):c.amount--}}}),U=E.actions,L=E,Q=n(9),J=function(e){var t=Object(h.b)(),n=Object(c.useState)(!1),a=Object(r.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)(!1),d=Object(r.a)(s,2),u=d[0],b=d[1],m=Object(c.useState)(!1),O=Object(r.a)(m,2),x=O[0],p=O[1],f=(Object(c.useContext)(l),Object(h.c)((function(e){return e.cart}))),C=Object(c.useState)(!0),w=Object(r.a)(C,2),_=w[0],S=w[1],N=Object(c.useState)(!0),k=Object(r.a)(N,2),A=k[0],I=k[1],H="$".concat(f.totalAmount.toFixed(2)),M=f.items.length>0,P=function(e){t(U.removeItemFromCart(e.id)),t(Q.b.increaseCapacity(e.id)),console.log(f," cartData redux"),console.log(e)},R=function(e){e.capacity>0?(t(Q.b.decreaseCapacity(e.id)),t(U.addItemToCart(e))):(I(!0),S(!1))},E=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://movie-e96e8-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:f})});case 3:b(!1),p(!0),U.replaceCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=Object(j.jsx)("ul",{className:y.a["cart-items"],children:f.items.map((function(e){return Object(j.jsx)(T,{name:e.name,timing:e.timing,theater:e.theater,capacity:e.capacity,amount:e.amount,price:e.price,onRemove:P.bind(null,e),onAdd:R.bind(null,e)},e.id)}))}),J=Object(j.jsxs)("div",{className:y.a.actions,children:[Object(j.jsx)("button",{className:y.a["button--alt"],onClick:e.onClose,children:"Close"}),M&&Object(j.jsx)("button",{className:y.a.button,onClick:function(){o(!0)},children:"Order"})]}),q=Object(j.jsxs)(c.Fragment,{children:[!_&&A&&Object(j.jsx)(D,{onClose:function(){I(!1)}}),Object(j.jsxs)(F,{onClose:e.onClose,children:[L,Object(j.jsxs)("div",{className:y.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:H})]}),i&&Object(j.jsx)(B,{onConfirm:E,onCancel:e.onClose}),!i&&J]})]}),V=Object(j.jsx)("p",{children:"Sending order data..."}),z=Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)("p",{children:"Successfully sent the order!"}),Object(j.jsx)("div",{className:y.a.actions,children:Object(j.jsx)("button",{className:y.a.button,onClick:e.onClose,children:"Close"})})]});return Object(j.jsxs)(F,{onClose:e.onClose,children:[!u&&!x&&q,u&&V,!u&&x&&z]})},q=n(28),V=n.n(q),z=(n(15),n(29),function(e){return Object(j.jsx)("form",{className:V.a.form,onSubmit:function(t){t.preventDefault(),e.onAddToCart(1)},children:Object(j.jsx)("button",{style:{marginBottom:"15px",marginTop:"7px"},children:"+ Add"})})}),Y=function(e){var t=Object(h.b)(),n=(Object(h.c)((function(e){return e.cart})),Object(c.useContext)(l),Object(c.useState)(!0)),a=Object(r.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)(!0),d=Object(r.a)(s,2),u=d[0],b=d[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("li",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"test",children:e.name}),Object(j.jsx)("span",{children:e.tagline}),Object(j.jsx)("a",{className:"test1",href:"movies.html",children:Object(j.jsx)("img",{className:"testimage",src:e.image,alt:""})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:"Overview"}),Object(j.jsx)("textarea",{value:e.plot,rows:"7"}),Object(j.jsx)("span",{children:Object(j.jsxs)("strong",{className:"r-bg",children:["Rating: ",e.rating]})}),Object(j.jsxs)("span",{children:["Duration: ",e.duration]}),"now showing"===e.nowShowing&&Object(j.jsxs)("span",{children:["Show timimg: ",e.timing]}),"now showing"===e.nowShowing&&Object(j.jsxs)("span",{children:["Price: ",e.price," $"]}),"now showing"===e.nowShowing&&Object(j.jsxs)("span",{children:["Capacity: ",e.capacity]}),"now showing"===e.nowShowing&&Object(j.jsxs)("span",{children:["Screen: ",e.theater]}),Object(j.jsxs)("span",{children:["Release Date : ",e.releaseDate]}),Object(j.jsx)("span",{children:"Category:  "}),0!==e.category.length?e.category.map((function(e){return Object(j.jsxs)("span",{children:[e,", "]})})):"","now showing"===e.nowShowing&&Object(j.jsx)(z,{id:e.id,onAddToCart:function(){var n={id:e.id,name:e.name,amount:1,price:e.price,theater:e.theater,capacity:e.capacity,timing:e.timing};e.capacity>0?(t(U.addItemToCart(n)),t(Q.b.decreaseCapacity(n.id))):(b(!0),o(!1))}}),Object(j.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"})]}),!i&&u&&Object(j.jsx)(D,{onClose:function(){b(!1)}})]})},X=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{id:"body",className:"home",children:Object(j.jsx)("div",{children:Object(j.jsx)("ul",{children:e.data.map((function(t){return Object(j.jsx)(Y,{name:t.name,releaseDate:t.releaseDate,id:t.id,category:t.category,rating:t.rating,image:t.image,timing:t.timing,plot:t.plot,duration:t.duration,tagline:t.tagline,theater:t.theater,capacity:t.capacity,price:t.price,nowShowing:t.nowShowing,onUpdateCartCapacity:e.onUpdateCartCapacity})}))})})})})},$=n(10),G=n.n($),K=function(e){return Object(j.jsx)("div",{className:G.a["movie-showing"],children:Object(j.jsxs)("div",{className:G.a["movie-showing__control"],children:[Object(j.jsx)("label",{children:"Category "}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(j.jsx)("option",{value:"",children:"Select a category"}),Object(j.jsx)("option",{value:"All",children:"All Category"}),Object(j.jsx)("option",{value:"Action",children:"Action"}),Object(j.jsx)("option",{value:"Thriller",children:"Thriller"}),Object(j.jsx)("option",{value:"Animation",children:"Animation"}),Object(j.jsx)("option",{value:"Comedy",children:"Comedy"}),Object(j.jsx)("option",{value:"Sci-Fi",children:"Sci-Fi"}),Object(j.jsx)("option",{value:"Drama",children:"Drama"}),Object(j.jsx)("option",{value:"Horror",children:"Horror"})]})]})})},W=function(e){return Object(j.jsx)("div",{className:G.a["movie-showing"],children:Object(j.jsxs)("div",{className:G.a["movie-showing__control"],children:[Object(j.jsx)("label",{children:"Sort "}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeSort(t.target.value)},children:[Object(j.jsx)("option",{value:"",children:"Select a category"}),Object(j.jsx)("option",{value:"rating",children:"Ratings"}),Object(j.jsx)("option",{value:"releaseDate",children:"Release Date"})]})]})})},Z=function(e){return Object(j.jsx)("div",{className:G.a["movie-showing"],children:Object(j.jsxs)("div",{className:G.a["movie-showing__control"],children:[Object(j.jsx)("label",{children:"Show Status "}),Object(j.jsxs)("select",{value:e.selectedShowingStatus,onChange:function(t){e.onChangeStatus(t.target.value)},children:[Object(j.jsx)("option",{value:"",children:"Select a category"}),Object(j.jsx)("option",{value:"",children:"ALL"}),Object(j.jsx)("option",{value:"now showing",children:"Now Showing"}),Object(j.jsx)("option",{value:"coming soon",children:"Coming Soon"})]})]})})},ee=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(""),s=Object(r.a)(o,2),l=s[0],d=s[1],u=Object(c.useState)(""),b=Object(r.a)(u,2),h=b[0],m=b[1],O=e.data.filter((function(t){if(0===a.length||"All"===a)return e.data;if(0!==t.category.length)for(var n=0;n<t.category.length;n++)if(t.category[n]===a)return t.category[n]===a})).filter((function(t){return"now showing"===h?"now showing"===t.nowShowing:"coming soon"===h?"coming soon"===t.nowShowing:e.data})).sort((function(e,t){return"releaseDate"===l?new Date(t[l])-new Date(e[l]):t[l]-e[l]}));return Object(j.jsxs)("div",{className:"align-movieBox",children:[Object(j.jsx)(Z,{selectedShowingStatus:h,onChangeStatus:function(e){m(e)}}),Object(j.jsx)(K,{selected:a,onChangeFilter:function(e){i(e)}}),Object(j.jsx)(W,{selectedSort:l,onChangeSort:function(e){d(e)}}),Object(j.jsx)(X,{data:O,onUpdateCartCapacity:e.onUpdateCartCapacity})]})},te=(n(24),n(26)),ne=c.React.lazy((function(){return n.e(3).then(n.bind(null,47))}));var ce=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.movies.movies})),n=Object(c.useState)(),a=Object(r.a)(n,2),i=a[0],o=(a[1],Object(c.useState)([])),l=Object(r.a)(o,2),d=l[0],u=l[1],b=Object(c.useState)(!1),m=Object(r.a)(b,2),O=m[0],f=m[1];return Object(c.useEffect)((function(){e(Object(te.a)())}),[e]),Object(c.useEffect)((function(){var e=[],n=function(n){var c=[];t[n].genres.map((function(e){c.push(e.value)})),e.push({id:t[n].id,name:t[n].name,image:t[n].image,price:"none"!=t[n].price?parseInt(t[n].price):"none",plot:t[n].plot,rating:t[n].rating,capacity:t[n].capacity,duration:t[n].duration,releaseDate:t[n].releaseDate,nowShowing:t[n].showingStatus,tagline:t[n].tagline,theater:t[n].theater,timing:t[n].timing,category:c})};for(var c in t)n(c);u(e)}),[t]),i?Object(j.jsx)("section",{style:{color:"red"},children:Object(j.jsx)("p",{children:i})}):Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(x,{onShowCart:function(){f(!0)}}),O&&Object(j.jsx)(J,{onClose:function(){f(!1)}}),Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",element:Object(j.jsx)(ee,{data:d,onUpdateCartCapacity:function(e){var t=d.map((function(t){return t.id===e&&(t.capacity=t.capacity-1),t}));u(t)}})}),Object(j.jsx)(s.a,{path:"/search-movies",element:Object(j.jsx)(ne,{})})]}),Object(j.jsx)(p,{})]})},ae=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))},ie=Object(R.a)({reducer:{cart:L.reducer,movies:Q.a.reducer}});o.a.render(Object(j.jsx)(h.a,{store:ie,children:Object(j.jsx)(O.a,{children:Object(j.jsx)(ce,{})})}),document.getElementById("root")),ae()}],[[44,1,2]]]);
//# sourceMappingURL=main.cbca1a66.chunk.js.map