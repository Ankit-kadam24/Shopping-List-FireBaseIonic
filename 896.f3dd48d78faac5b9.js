"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[896],{896:(P,g,r)=>{r.r(g),r.d(g,{EditItemPageModule:()=>C});var u=r(1368),c=r(4716),i=r(2112),d=r(4196),e=r(4496),I=r(3831),h=r(304);const p=[{path:"",component:(()=>{var t;class l{constructor(a,o,s){this.route=a,this.shoppingListService=o,this.navCtrl=s,this.currentItem={},this.itemId=this.route.snapshot.paramMap.get("id"),this.shoppingListService.getShoppingList().then(n=>{this.currentItem=n.find(M=>M.id===this.itemId)}).catch(n=>{console.error("Error fetching item for editing:",n)})}editItem(){this.shoppingListService.editItem(this.currentItem).then(()=>{console.log("Item edited successfully")}).catch(a=>{console.error("Error editing item:",a)})}onBackPage(){this.navCtrl.back()}}return(t=l).\u0275fac=function(a){return new(a||t)(e.GI1(d.gV),e.GI1(I.a),e.GI1(h.wX))},t.\u0275cmp=e.In1({type:t,selectors:[["app-edit-item"]],decls:21,vars:3,consts:[["color","primary"],["slot","start","name","chevron-back-outline","size","large",3,"click"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["type","number",3,"ngModel","ngModelChange"],["expand","full",3,"click"]],template:function(a,o){1&a&&(e.I0R(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-icon",1),e.qCj("click",function(){return o.onBackPage()}),e.C$Y(),e.I0R(3,"ion-title"),e.OEk(4," Edit Item "),e.C$Y()()(),e.I0R(5,"ion-content")(6,"ion-list")(7,"ion-item")(8,"ion-label",2),e.OEk(9,"Name"),e.C$Y(),e.I0R(10,"ion-input",3),e.iHE("ngModelChange",function(n){return e.kNx(o.currentItem.name,n)||(o.currentItem.name=n),n}),e.C$Y()(),e.I0R(11,"ion-item")(12,"ion-label",2),e.OEk(13,"Modal Name/Number"),e.C$Y(),e.I0R(14,"ion-input",3),e.iHE("ngModelChange",function(n){return e.kNx(o.currentItem.itemName,n)||(o.currentItem.itemName=n),n}),e.C$Y()(),e.I0R(15,"ion-item")(16,"ion-label",2),e.OEk(17,"Price"),e.C$Y(),e.I0R(18,"ion-input",4),e.iHE("ngModelChange",function(n){return e.kNx(o.currentItem.itemPrice,n)||(o.currentItem.itemPrice=n),n}),e.C$Y()()(),e.I0R(19,"ion-button",5),e.qCj("click",function(){return o.editItem()}),e.OEk(20,"Save Changes"),e.C$Y()()),2&a&&(e.yG2(10),e.OKB("ngModel",o.currentItem.name),e.yG2(4),e.OKB("ngModel",o.currentItem.itemName),e.yG2(4),e.OKB("ngModel",o.currentItem.itemPrice))},dependencies:[c.ue,c._G,i.sn,i._i,i.wB,i.Ko,i.A5,i.Yb,i.QR,i.OC,i.tM,i.Md,i.Ch,i.qG],styles:["ion-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),l})()}];let E=(()=>{var t;class l{}return(t=l).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[d.qQ.forChild(p),d.qQ]}),l})(),C=(()=>{var t;class l{}return(t=l).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[u.MD,c.y,i.wZ,E]}),l})()}}]);