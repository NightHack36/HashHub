(this.webpackJsonphash_hub=this.webpackJsonphash_hub||[]).push([[8],{28:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),a=Object(c.createContext)(null)},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),a=Object(c.createContext)(null)},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(23),o=n.n(a),s=(n(54),n(11)),l=n(13),r=(n(55),n(3)),i=n(28),j=n(36),b=(n(56),n(1));var u=function(){return Object(b.jsxs)("div",{className:"preloader",children:[Object(b.jsx)("h1",{children:"Hash/Hub"}),Object(b.jsxs)("div",{className:"loader",children:[Object(b.jsx)("div",{class:"line line-1"}),Object(b.jsx)("div",{class:"line line-2"}),Object(b.jsx)("div",{class:"line line-3"}),Object(b.jsx)("div",{class:"line line-4"}),Object(b.jsx)("div",{class:"line line-5"})]})]})},x=n(43),h=n.n(x),O=n(45),p=n.n(O),m=n(46),d=n.n(m),g=n(40),f=n.n(g),v=n(39),y=n.n(v),_=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(2),n.e(6),n.e(11)]).then(n.bind(null,201))})),k=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(2),n.e(6)]).then(n.bind(null,188))})),z=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(25)]).then(n.bind(null,102))})),P=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,107))})),S=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,194))})),B=Object(c.lazy)((function(){return n.e(24).then(n.bind(null,195))})),C=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(19)]).then(n.bind(null,204))})),E=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(16)]).then(n.bind(null,205))})),H=Object(c.lazy)((function(){return n.e(20).then(n.bind(null,206))})),I=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(3),n.e(12)]).then(n.bind(null,202))})),w=Object(c.lazy)((function(){return n.e(13).then(n.bind(null,94))})),N=Object(c.lazy)((function(){return n.e(14).then(n.bind(null,196))})),R=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(15)]).then(n.bind(null,197))})),J=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(4),n.e(7),n.e(21)]).then(n.bind(null,198))})),L=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(4),n.e(7),n.e(22)]).then(n.bind(null,199))})),F=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(23)]).then(n.bind(null,200))}));var W=function(){var e=Object(r.f)(),t=Object(c.useState)("home"),n=Object(l.a)(t,2),a=n[0],o=n[1],x=Object(c.useState)(!1),O=Object(l.a)(x,2),m=O[0],g=O[1],v=Object(c.useState)([]),W=Object(l.a)(v,2),q=W[0],A=W[1],D=Object(c.useState)([]),G=Object(l.a)(D,2),K=G[0],M=G[1];return Object(c.useEffect)((function(){localStorage.getItem("user")&&A(JSON.parse(localStorage.getItem("user"))),"true"===localStorage.getItem("userexist")?g(!0):g(!1)}),[localStorage.getItem("user")]),Object(b.jsx)(b.Fragment,{children:!0===m?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(c.Suspense,{fallback:Object(b.jsx)(u,{}),children:[Object(b.jsxs)("div",{id:"main-nav-bar",children:[Object(b.jsx)(s.b,{to:"",children:"Hash/Hub"}),Object(b.jsxs)("nav",{id:"nav-menu",children:[Object(b.jsxs)(s.b,{className:"home"===a?"active":"",onClick:function(){return o("home")},to:"/",children:[" ",Object(b.jsx)(h.a,{style:{marginRight:"5px"}})," Home"]}),Object(b.jsxs)(s.b,{className:"Explore"===a?"active":"",onClick:function(){return o("Explore")},to:"/Explore",children:[" ",Object(b.jsx)(p.a,{style:{marginRight:"5px"}})," Explore"]}),Object(b.jsxs)(s.b,{className:"Blogs"===a?"active":"",onClick:function(){return o("Blogs")},to:"/Blogs",children:[Object(b.jsx)(d.a,{style:{marginRight:"5px"}})," Blogs"]}),Object(b.jsxs)("a",{href:"https://github.com/vedant-jain03/HashHub",children:[" ",Object(b.jsx)(y.a,{style:{marginRight:"5px"}})," Contribute"]})]}),!0===m?Object(b.jsxs)("div",{style:{display:"flex",alignItems:"center"},onClick:function(){return e.push("/userprofile")},children:[Object(b.jsx)(f.a,{style:{cursor:"pointer",color:"white"}}),Object(b.jsx)("span",{style:{fontWeight:"600",color:"white"},children:q.name}),Object(b.jsx)("button",{id:"login_logout_tackle",onClick:function(){localStorage.setItem("userexist","false"),g(!1)},style:{marginLeft:"1rem"},children:"Logout"})]}):Object(b.jsx)("button",{id:"login_logout_tackle",onClick:function(){e.push("/")},children:"Login"})]}),Object(b.jsx)(s.a,{children:Object(b.jsx)(r.c,{children:Object(b.jsxs)(i.a.Provider,{value:{user:q,setuser:A,userexist:m,setuserexist:g},children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:_}),Object(b.jsx)(r.a,{exact:!0,path:"/Explore",component:k}),Object(b.jsx)(r.a,{exact:!0,path:"/Opensource",component:z}),Object(b.jsx)(r.a,{exact:!0,path:"/ai",component:P}),Object(b.jsx)(r.a,{exact:!0,path:"/ml",component:S}),Object(b.jsx)(r.a,{exact:!0,path:"/github_profile_readme",component:B}),Object(b.jsx)(r.a,{exact:!0,path:"/certificate_generator",component:C}),Object(b.jsx)(r.a,{exact:!0,path:"/Smart_pdf",component:E}),Object(b.jsx)(r.a,{exact:!0,path:"/markdown_generator",component:H}),Object(b.jsx)(r.a,{exact:!0,path:"/resume_maker",component:I}),Object(b.jsx)(r.a,{exact:!0,path:"/login",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/register",component:N}),Object(b.jsxs)(j.a.Provider,{value:{currentindexblog:K,setcurrentblog:M},children:[Object(b.jsx)(r.a,{exact:!0,path:"/Blogs",component:R}),Object(b.jsx)(r.a,{exact:!0,path:"/CreateBlog",component:J}),Object(b.jsx)(r.a,{exact:!0,path:"/Blogpage",component:L}),Object(b.jsx)(r.a,{exact:!0,path:"/userprofile",component:F})]})]})})})]})}):Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(u,{}),children:Object(b.jsx)(s.a,{children:Object(b.jsx)(r.c,{children:Object(b.jsxs)(i.a.Provider,{value:{user:q,setuser:A,userexist:m,setuserexist:g},children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/login",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/register",component:N}),Object(b.jsx)(r.a,{exact:!0,path:"/Explore",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/Opensource",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/ai",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/ml",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/github_profile_readme",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/certificate_generator",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/Smart_pdf",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/markdown_generator",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/resume_maker",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/Blogs",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/CreateBlog",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/Blogpage",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/userprofile",component:w})]})})})})})};o.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(W,{})}),document.getElementById("root"))}},[[67,9,10]]]);
//# sourceMappingURL=main.ec85986c.chunk.js.map