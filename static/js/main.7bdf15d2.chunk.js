(this.webpackJsonpzotmatch=this.webpackJsonpzotmatch||[]).push([[0],{114:function(e,t,s){},201:function(e,t,s){},613:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(19),i=s.n(n),r=(s(201),s(114),s(107)),l=s.n(r),o=s(190),d=s(57),j=s(20),u=s(112),b=s(56),m=s(109),h=s.n(m),x=s(26),O=s(2),v=function(e){var t=e.label,s=Object(u.a)(e,["label"]),c=Object(b.c)(s),a=Object(j.a)(c,2),n=a[0],i=a[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("label",{htmlFor:s.id||s.name,children:t}),Object(O.jsx)("input",Object(d.a)(Object(d.a)({className:"text-input"},n),s)),i.touched&&i.error?Object(O.jsx)("div",{className:"error",children:i.error}):null]})};function p(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(j.a)(n,2),r=i[0],d=(i[1],function(e,t){return e.toLowerCase()+t.toLowerCase()});return Object(O.jsx)(b.b,{initialValues:{firstName:"",lastName:"",email:"",major:"",studentOne:"",studentTwo:"",studentThree:""},validationSchema:x.a({firstName:x.b().required("required"),lastName:x.b().required("required"),email:x.b().email("Invalid Email").required("required"),major:x.b().required("required"),studentOne:x.b().required("required"),studentTwo:x.b(),studentThree:x.b()}),onSubmit:function(e,t){var s=t.setSubmitting,c=t.resetForm;setTimeout(Object(o.a)(l.a.mark((function t(){var n,i,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d(e.firstName,e.lastName),i=(i=[e.studentOne,e.studentTwo,e.studentThree].map((function(e){var t=e.split(" "),s=t[0],c=t.length>1?t[1]:"";return d(s,c)}))).filter((function(e){return e!==n})),r=Array.from(new Set(i)),o={id:n,likes:r,email:e.email,name:e.firstName+" "+e.lastName,major:e.major},t.next=7,h.a.post("https://ov7mtcvxm5.execute-api.us-east-1.amazonaws.com/dev/users",o);case 7:return c(),s(!1),a(!0),t.next=12,h.a.post("https://ov7mtcvxm5.execute-api.us-east-1.amazonaws.com/dev/match",o);case 12:case"end":return t.stop()}}),t)}))),500)},children:function(e){return Object(O.jsxs)(b.a,{class:"form",children:[Object(O.jsx)("div",{class:"row",children:Object(O.jsxs)("div",{class:"name",children:[Object(O.jsxs)("div",{class:"column input",children:[Object(O.jsx)("div",{class:"label",children:"First"}),Object(O.jsx)(v,{name:"firstName",type:"text",placeholder:"peter"})]}),Object(O.jsxs)("div",{class:"column input",children:[Object(O.jsx)("div",{class:"label",children:"Last"}),Object(O.jsx)(v,{name:"lastName",type:"text",placeholder:"anteater"})]})]})}),Object(O.jsx)("div",{class:"row",children:Object(O.jsxs)("div",{class:"column input",children:[Object(O.jsx)("div",{class:"label",children:"Email"}),Object(O.jsx)(v,{name:"email",type:"email",placeholder:"anteater@uci.edu"})]})}),Object(O.jsx)("div",{class:"row",children:Object(O.jsxs)("div",{class:"column input",children:[Object(O.jsx)("div",{class:"label",children:"Major"}),Object(O.jsx)(v,{name:"major",type:"text",placeholder:"wumbology"})]})}),Object(O.jsx)("div",{class:"row",children:Object(O.jsxs)("div",{class:"column input",children:[Object(O.jsx)("div",{class:"label",children:"Enter Full Names"}),Object(O.jsx)(v,{name:"studentOne",type:"text",placeholder:"sarah anteater"})]})}),Object(O.jsx)("div",{class:"row",children:Object(O.jsx)("div",{class:"column input",children:Object(O.jsx)(v,{name:"studentTwo",type:"text",placeholder:"oski bear"})})}),Object(O.jsx)("div",{class:"row",children:Object(O.jsx)("div",{class:"column input",children:Object(O.jsx)(v,{name:"studentThree",type:"text",placeholder:"sammy slug"})})}),Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)("div",{class:"column side"}),Object(O.jsx)("div",{class:"column middle",children:Object(O.jsx)("div",{class:"submitButton",children:Object(O.jsx)("button",{type:"submit",class:"button",children:"submit"})})})]}),r?Object(O.jsx)("div",{children:Object(O.jsx)("p",{class:"submitSuccess",children:"Your submission has been updated."})}):"",s?Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{class:"submitSuccess",children:"Thanks for your submission! \ud83c\udf89"}),"Please monitor your email for any potential matches. In the meantime, feel free to invite your friends to try our site!"]}):""]})}})}s(320);var f=function(){var e=Object(O.jsx)("img",{src:"https://zotmatch-assets.s3.amazonaws.com/logo.png",style:{width:"50%",height:"50%"}});return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)("div",{class:"column side"}),Object(O.jsx)("div",{class:"body",children:Object(O.jsx)("div",{class:"column middle",children:Object(O.jsxs)("div",{class:"box",children:[e,Object(O.jsx)("h1",{children:"ZotMatch \ud83d\udc99 \ud83d\udc9b"}),Object(O.jsx)("p",{class:"desc",children:"Hi there! We built ZotMatch to help anteaters find love or friendship during quarantine. Enter the full names of 3 UCI students you'd like to get to know better, and if they like you back you'll be matched via email! Good luck and shoot your zot! \ud83e\udd7a"}),Object(O.jsx)(p,{})]})})})]}),Object(O.jsxs)("div",{class:"footer",children:["Made with \u2764\ufe0f in Irvine, CA |"," ",Object(O.jsx)("a",{href:"https://zotmatch-assets.s3.amazonaws.com/about.html",children:"About"})," | ",Object(O.jsx)("a",{href:"https://zotmatch-assets.s3.amazonaws.com/privacy.html",children:"Privacy Policy"})]})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,614)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),w()}},[[613,1,2]]]);
//# sourceMappingURL=main.7bdf15d2.chunk.js.map