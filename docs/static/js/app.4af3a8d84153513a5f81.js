webpackJsonp([1],[,function(e,t,s){"use strict";var a=s(0),i=s(8);a.a.use(i.a),t.a=new i.a({routes:[{path:"/"}]})},function(e,t,s){function a(e){s(5)}var i=s(6)(s(4),s(7),a,null,null);e.exports=i.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(0),i=s(2),n=s.n(i),c=s(1);a.a.config.productionTip=!1,new a.a({el:"#app",router:c.a,template:"<App/>",components:{App:n.a}})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tasks:[{text:"test hogehoge.",isChecked:!1},{text:"buy books.",isChecked:!1},{text:"run 2km in the park.",isChecked:!1}],newTask:""}},methods:{addTask:function(){var e=this.newTask&&this.newTask.trim();e&&(this.tasks.push({text:e,isChecked:!1}),this.newTask="")},removeTask:function(){for(var e=this.tasks.length-1;e>=0;e--)console.log(e),this.tasks[e].isChecked&&this.tasks.splice(e,1),console.log(this.tasks)}}}},function(e,t){},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("h1",[e._v("Vue Todo App")]),e._v(" "),s("form",[s("p",[e._v("\n      task:\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newTask,expression:"newTask"}],attrs:{type:"text"},domProps:{value:e.newTask},on:{input:function(t){t.target.composing||(e.newTask=t.target.value)}}}),e._v(" "),s("button",{on:{click:function(t){e.addTask()}}},[e._v("ADD")])])]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"task-list-operator"},[s("button",{staticClass:"task-list-operator__btn",on:{click:function(t){e.removeTask()}}},[e._v("Delete finished tasks")])]),e._v(" "),s("div",{staticClass:"task-list"},e._l(e.tasks,function(t){return s("label",{staticClass:"task-list__item",class:{"task-list__item--checked":t.isChecked}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isChecked,expression:"task.isChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isChecked)?e._i(t.isChecked,null)>-1:t.isChecked},on:{__c:function(s){var a=t.isChecked,i=s.target,n=!!i.checked;if(Array.isArray(a)){var c=e._i(a,null);n?c<0&&(t.isChecked=a.concat(null)):c>-1&&(t.isChecked=a.slice(0,c).concat(a.slice(c+1)))}else t.isChecked=n}}}),e._v("\n      "+e._s(t.isChecked)+":"+e._s(t.text)+"\n    ")])}))])},staticRenderFns:[]}}],[3]);
//# sourceMappingURL=app.4af3a8d84153513a5f81.js.map