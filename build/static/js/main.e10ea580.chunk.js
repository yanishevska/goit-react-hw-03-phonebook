(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__1iY1o",title:"Container_title__BRiLZ"}},12:function(t,e,n){t.exports={filterLabel:"Filter_filterLabel__39v8l",formInput:"Filter_formInput__1MgWE"}},15:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},2:function(t,e,n){t.exports={form:"ContactForm_form__10hCA",labelForm:"ContactForm_labelForm__e2sbu",formInput:"ContactForm_formInput__2nLBt",btnAdd:"ContactForm_btnAdd__q8FMN"}},21:function(t,e,n){},22:function(t,e,n){},3:function(t,e,n){t.exports={svgBtnDelete:"ContactList_svgBtnDelete__1yasK",btnDelete:"ContactList_btnDelete__3l98e",contactItem:"ContactList_contactItem__2q_UK",nameForm:"ContactList_nameForm__lj7A1",numberForm:"ContactList_numberForm__2F43e"}},32:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(13),o=n.n(c),s=(n(21),n(16)),i=n(6),l=n(7),u=n(9),m=n(8),b=(n(22),n(14)),d=n(4),h=n.n(d),f=n(2),j=n.n(f),p=n(0),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(b.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.form,children:[Object(p.jsx)("label",{htmlFor:this.nameInputId,className:j.a.labelForm,children:"Name"}),Object(p.jsx)("input",{className:j.a.formInput,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",id:this.nameInputId,required:!0}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{htmlFor:this.numberInputId,className:j.a.labelForm,children:[" ","Number"]}),Object(p.jsx)("input",{className:j.a.formInput,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",id:this.numberInputId,required:!0}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:j.a.btnAdd,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=_,O=n(3),x=n.n(O);function v(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(p.jsxs)("li",{className:x.a.contactItem,children:[Object(p.jsxs)("span",{className:x.a.nameForm,children:[a,":"]}),Object(p.jsx)("span",{className:x.a.numberForm,children:r}),Object(p.jsx)("button",{className:x.a.btnDelete,type:"button",onClick:function(){return n(e)},children:Object(p.jsx)("img",{className:x.a.svgBtnDelete,src:"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-lineal-color-kiranshastry.png",alt:"delete button"})})]},e)}))})}v.defaultProps={name:"Name Surname",number:"123 456 789"};var g=v,F=n(11),I=n.n(F);var N=function(t){var e=t.title,n=t.children;return Object(p.jsxs)("div",{className:I.a.container,children:[Object(p.jsx)("h2",{className:I.a.title,children:e}),n]})},y=n(15),S=n(12),A=n.n(S),L=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:A.a.filterLabel,children:["Find contacts by name",Object(p.jsx)("input",{className:A.a.formInput,type:"text",value:e,onChange:n})]})},k=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:y,filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,r=t.state.contacts,c={id:h.a.generate(),name:n,number:a};r.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):r.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)})).sort((function(t,e){return t.name.localeCompare(e.name)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.filterContacts(),e=this.state.filter;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(N,{title:"Phonebook",children:Object(p.jsx)(C,{onSubmit:this.formSubmitHandler})}),Object(p.jsxs)(N,{title:"Contacts",children:[Object(p.jsx)(L,{value:e,onChange:this.changeFilter}),Object(p.jsx)(g,{contacts:t,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),D=k;o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e10ea580.chunk.js.map