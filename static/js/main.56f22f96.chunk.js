(this["webpackJsonptask-no-3"]=this["webpackJsonptask-no-3"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),u=a(1),o=a(4),s=a(5),i=a(7),d=a(6);var m=function(e){var t=e.addNewRowFunc;return l.a.createElement("button",{className:"addBtn",onClick:function(){return t()}},"Add New Row")};var p=function(e){var t=e.inputsValidationFunc,a=e.disabled;return l.a.createElement("button",{className:"".concat(a?"sendBtn sendBtn--disabled":"sendBtn"),onClick:function(){return t()}},"Send Form")};var E=function(e){var t=e.vatInputChange;return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"table__headEle"},"Produkt"),l.a.createElement("th",{className:"table__headEle"},"Ilo\u015b\u0107"),l.a.createElement("th",{className:"table__headEle"},"Cena Netto"),l.a.createElement("th",{className:"table__headEle"},"VAT"),l.a.createElement("th",{className:"table__headEle"},"Cena Brutto"))),l.a.createElement("tbody",{className:"table__tableBody"},l.a.createElement("tr",{className:"table__trBody default"},l.a.createElement("th",{className:"table__bodyEle"},l.a.createElement("input",{className:"table__inputEle"})),l.a.createElement("th",{className:"table__bodyEle"},l.a.createElement("input",{className:"table__inputEle"})),l.a.createElement("th",{className:"table__bodyEle"},l.a.createElement("input",{className:"table__inputEle"})),l.a.createElement("th",{className:"table__bodyEle"},l.a.createElement("select",{className:"table__inputEle table__selectEle",onChange:function(e){return t(e)}},l.a.createElement("option",{value:"0",defaultValue:!0}),l.a.createElement("option",{value:"8"},"8%"),l.a.createElement("option",{value:"23"},"23%"),l.a.createElement("option",{value:"32"},"32%"))),l.a.createElement("th",{className:"table__bodyEle"},l.a.createElement("input",{className:"table__inputEle",disabled:!0})))))},v=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={sendFormResult:"",everyInputComplete:!1},e.inputsValidationFunc=function(){var t=document.querySelector(".sendResult"),a=document.querySelectorAll(".table__inputEle"),n=Object(u.a)(a);e.setState({sendFormResult:"Form has been sent successfully"}),n.forEach((function(e){return e.value=""})),t.classList.add("sendResult--success")},e.addNewRowFunc=function(){var t=document.querySelector(".table__tableBody"),a=document.querySelector(".default").cloneNode(!0);Object(u.a)(a.children).forEach((function(e){e.children[0].value=""})),a.children[3].children[0].addEventListener("click",(function(t){return e.vatInputChange(t)})),t.appendChild(a),e.isEveryInputCompleteFunc()},e.vatInputChange=function(t){var a=t.target.parentNode.parentNode.children[2].children[0].value;t.target.parentNode.parentNode.children[4].children[0].value=Number(a)+t.target.value/100*a,e.isEveryInputCompleteFunc()},e.isEveryInputCompleteFunc=function(){var t=document.querySelectorAll(".table__inputEle");Object(u.a)(t).some((function(e){return""===e.value}))?e.setState({everyInputComplete:!1}):e.setState({everyInputComplete:!0})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keyup",(function(){return e.isEveryInputCompleteFunc()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("keyup",(function(){return e.isEveryInputCompleteFunc()}))}},{key:"render",value:function(){var e=this.state,t=e.sendFormResult,a=e.everyInputComplete;return l.a.createElement("div",{className:"main"},l.a.createElement(E,{vatInputChange:this.vatInputChange,isEveryInputCompleteFunc:this.isEveryInputCompleteFunc}),l.a.createElement(m,{addNewRowFunc:this.addNewRowFunc}),l.a.createElement(p,{inputsValidationFunc:this.inputsValidationFunc,disabled:!a}),l.a.createElement("h2",{className:"sendResult"},t))}}]),a}(n.Component);a(13);var b=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(v,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.56f22f96.chunk.js.map