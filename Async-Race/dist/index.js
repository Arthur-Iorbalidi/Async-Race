(()=>{"use strict";var e=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))},t=function(e,t){var n,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};const n=function(){function n(){this.url="http://127.0.0.1:3000",this.options={garage:"/garage",engine:"/engine",winners:"/winners"}}return n.prototype.getCars=function(n,r){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage,"?_page=").concat(n,"&_limit=").concat(r))];case 1:return[2,e.sent()]}}))}))},n.prototype.getCar=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage,"/").concat(n))];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.createCar=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})];case 1:return[2,e.sent()]}}))}))},n.prototype.updateCar=function(n,r){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage,"/").concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})];case 1:return[2,e.sent()]}}))}))},n.prototype.deleteCar=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage,"/").concat(n),{method:"DELETE"})];case 1:return e.sent(),[2]}}))}))},n.prototype.startEngine=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.engine,"?id=").concat(n,"&status=started"),{method:"PATCH"})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.checkEngine=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.engine,"?id=").concat(n,"&status=drive"),{method:"PATCH"})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.stopEngine=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.engine,"?id=").concat(n,"&status=stopped"),{method:"PATCH"})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.getWinners=function(n,r,a,o){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners,"?_page=").concat(n,"&_limit=").concat(r,"&_sort=").concat(a,"&_order=").concat(o))];case 1:return[2,e.sent()]}}))}))},n.prototype.getWinner=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners,"/").concat(n))];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.createWinner=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.updateWinner=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners,"/").concat(n.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.removeWinner=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners,"/").concat(n),{method:"DELETE"})];case 1:return e.sent(),[2]}}))}))},n}(),r=function(){function e(){var e=this;this.routes={},document.addEventListener("click",(function(t){var n=t.target;n.matches("a")&&(t.preventDefault(),e.navigateTo(n.href))}))}return e.prototype.navigateTo=function(e){window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate",{}))},e.prototype.initRouter=function(e){this.addRoutes(e),window.addEventListener("popstate",this.changePage.bind(this)),this.changePage()},e.prototype.addRoutes=function(e){var t=this;e.forEach((function(e){t.addRoute(e)}))},e.prototype.addRoute=function(e){var t=e.route,n=e.callback,r=e.isDefaultRoute;this.routes[t]=n,r&&(this.routes["/"]=n)},e.prototype.changePage=function(){var e=window.location.pathname;this.routes[e]&&this.routes[e]()},e}(),a=function(){function e(e){this.element=document.createElement(e.tag),e.hasOwnProperty("cssClasses")&&this.setClasses(e.cssClasses),e.hasOwnProperty("attributes")&&this.setAttribute(e.attributes),e.hasOwnProperty("content")&&this.setContent(e.content),e.hasOwnProperty("event")&&this.setEvent(e.event),e.hasOwnProperty("innerHTML")&&this.setinnerHTML(e.innerHTML)}return e.prototype.setClasses=function(e){var t=this;e.forEach((function(e){t.element.classList.add(e)}))},e.prototype.setAttribute=function(e){var t=this;Object.keys(e).forEach((function(n){t.element.setAttribute(n,e[n])}))},e.prototype.setContent=function(e){this.element.textContent=e},e.prototype.setinnerHTML=function(e){this.element.innerHTML=e},e.prototype.setEvent=function(e){this.element.addEventListener(e.type,e.callback)},e.prototype.getElement=function(){return this.element},e}(),o={brands:["Tesla","BMW","Mercedez","Porshe","Volkswagen","Ford","Lamborghini","Audi","Mazda","Nissan","KIA","Renault","Chevrolet","Lexus","Hyundai","Skoda","Volvo","Fiat"],models:["A100","B3","A1","C3","D5","X5","X10","S1","K300","M200","Y5","A5","N3","K2","N100"]};const s=function(){function e(){this.element=this.createBtnToWinners()}return e.prototype.get=function(){return this.element},e.prototype.createBtnToWinners=function(){return new a({tag:"a",content:"To Winners",cssClasses:["btnToWinners"],attributes:{href:"/winners"}}).getElement()},e}(),i=function(){function e(e,t){this.element=this.createChangePageBtns(e,t)}return e.prototype.get=function(){return this.element},e.prototype.createChangePageBtns=function(e,t){var n=new a({tag:"div",cssClasses:["changePageBtns"]}).getElement(),r=new a({tag:"button",content:"Next",cssClasses:["nextPage","btn","inactive"],event:{type:"click",callback:e}}).getElement(),o=new a({tag:"button",content:"Prev",cssClasses:["previousPage","btn","inactive"],event:{type:"click",callback:t}}).getElement();return n.append(o,r),n},e}(),c=function(){function e(e){this.element=this.createContainerGarageHeader(e)}return e.prototype.get=function(){return this.element},e.prototype.createContainerGarageHeader=function(e){var t=new a({tag:"div",cssClasses:["containerGarageHeader"]}).getElement(),n=new a({tag:"h1",content:"Garage ",cssClasses:["headerGarage"]}).getElement(),r=new a({tag:"span",content:"( 0 )",cssClasses:["countCar"]}).getElement(),o=new a({tag:"h2",content:"Page #".concat(e),cssClasses:["pageNumber"]}).getElement();return n.append(r),t.append(n,o),t},e}(),u=function(){function e(e,t,n){this.element=this.controlsBtns(e,t,n)}return e.prototype.get=function(){return this.element},e.prototype.controlsBtns=function(e,t,n){var r=new a({tag:"div",cssClasses:["wrapperBtns"]}).getElement(),o=new a({tag:"button",content:"Race",cssClasses:["btnRace","btn"],event:{type:"click",callback:e}}).getElement(),s=new a({tag:"button",content:"Reset",cssClasses:["btnReset","btn","inactive"],event:{type:"click",callback:t}}).getElement(),i=new a({tag:"button",content:"Generate Cars",cssClasses:["btnGenerate","btn"],event:{type:"click",callback:n}}).getElement();return r.append(o,s,i),r},e}();function l(e){return'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" x="0px" y="0px" viewBox="0 0 122.88 35.03" style="enable-background:new 0 0 122.88 35.03" xml:space="preserve" transform="scale(-1, 1)"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g fill="'.concat(e,'"><path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"/></g></svg>')}const p=function(){function e(){}return e.prototype.createCar=function(e,t,n,r,o,s,i){var c,u=new a({tag:"div",cssClasses:["carBlock","".concat(n)]}).getElement();u.append(this.createHeaderCar(e,r,o),this.createRoad(t,s,i)),null===(c=document.querySelector(".containerGarage"))||void 0===c||c.append(u)},e.prototype.createHeaderCar=function(e,t,n){var r=new a({tag:"div",cssClasses:["wrapperBtnsCar"]}).getElement(),o=new a({tag:"button",content:"Select",cssClasses:["btnSelect","btn"],event:{type:"click",callback:t}}).getElement(),s=new a({tag:"button",content:"Remove",cssClasses:["btnRemove","btn"],event:{type:"click",callback:n}}).getElement(),i=new a({tag:"span",content:e,cssClasses:["carNameSpan"]}).getElement();return r.append(o,s,i),r},e.prototype.createRoad=function(e,t,n){var r=new a({tag:"div",cssClasses:["road"]}).getElement();return r.append(this.createStartAndStopBtns(t,n),this.createCarIcon(e),this.createFlagIcon()),r},e.prototype.createStartAndStopBtns=function(e,t){var n=new a({tag:"div",cssClasses:["startAndStop"]}).getElement(),r=new a({tag:"button",content:"A",cssClasses:["btnStart","btn"],event:{type:"click",callback:e}}).getElement(),o=new a({tag:"button",content:"B",cssClasses:["btnStop","btn","inactive"],event:{type:"click",callback:t}}).getElement();return n.append(r,o),n},e.prototype.createCarIcon=function(e){var t=l(e);return new a({tag:"div",cssClasses:["carIcon"],innerHTML:t}).getElement()},e.prototype.createFlagIcon=function(){return new a({tag:"div",cssClasses:["flagIcon"],innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="#fff"><path d="M0 0h48v48H0z" fill="none"/><path d="M28.8 12L28 8H10v34h4V28h11.2l.8 4h14V12z"/></svg>'}).getElement()},e}(),h=function(){function e(e){this.element=this.createCarBlock(e)}return e.prototype.get=function(){return this.element},e.prototype.createCarBlock=function(e){var t=new a({tag:"div",cssClasses:["wrapperCreateCar","wrapperOption"]}).getElement(),n=new a({tag:"input",cssClasses:["inputCarNameCreate","inputCarName"]}).getElement(),r=new a({tag:"input",cssClasses:["inputColorCreate","inputColor"],attributes:{type:"color"}}).getElement(),o=new a({tag:"button",content:"Create",cssClasses:["btnCreate","btn"],event:{type:"click",callback:e}}).getElement();return t.append(n,r,o),t},e}(),d=function(){function e(e){this.element=this.updateCarBlock(e)}return e.prototype.get=function(){return this.element},e.prototype.updateCarBlock=function(e){var t=new a({tag:"div",cssClasses:["wrapperUpdateCar","wrapperOption","inactive"]}).getElement(),n=new a({tag:"input",cssClasses:["inputCarNameUpdate","inputCarName"]}).getElement(),r=new a({tag:"input",cssClasses:["inputColorUpdate","inputColor"],attributes:{type:"color"}}).getElement(),o=new a({tag:"button",content:"Update",cssClasses:["btnUpdate","btn"],event:{type:"click",callback:e}}).getElement();return t.append(n,r,o),t},e}(),g=function(){function e(){}return e.prototype.createWinnerMessage=function(e){var t,n=new a({tag:"div",content:"".concat(e," went first"),cssClasses:["winnerMessage"]}).getElement();null===(t=document.querySelector(".wrapperGarage"))||void 0===t||t.append(n)},e}(),f=function(){function e(){}return e.currentPage=1,e}();var v=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))},m=function(e,t){var n,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};const y=function(){function e(e){this.carsPerPage=7,this.animationId=new Map,this.isThereWinner=!0,this.APIService=e}return e.prototype.create=function(){this.createView(),this.getCars()},e.prototype.createView=function(){var e=new a({tag:"div",cssClasses:["wrapperGarage"],event:{type:"click",callback:this.removeWinnerMessage}}).getElement(),t=new a({tag:"div",cssClasses:["wrapperControl"]}).getElement(),n=new a({tag:"div",cssClasses:["containerGarage"]}).getElement(),r=new h(this.createCarCallback.bind(this)).get(),o=new d(this.updateCarCallback.bind(this)).get(),l=new u(this.race.bind(this),this.reset.bind(this),this.generateCars.bind(this)).get(),p=(new s).get(),g=new c(f.currentPage).get(),v=new i(this.nextPage.bind(this),this.prevPage.bind(this)).get();t.append(r,o,l),e.append(p,t,g,n,v),document.body.append(e)},e.prototype.getCars=function(){return v(this,void 0,void 0,(function(){var e,t,n,r=this;return m(this,(function(a){switch(a.label){case 0:return[4,this.APIService.getCars(f.currentPage,this.carsPerPage)];case 1:return[4,(e=a.sent()).json()];case 2:return t=a.sent(),n=e.headers.get("X-Total-Count"),t.forEach((function(e){(new p).createCar(e.name,e.color,e.id,r.selectCar.bind(r),r.deleteCarCallback.bind(r),r.startCarCallback.bind(r),r.stopCarCallback.bind(r))})),this.nextAndPrevVisability(n),this.setCarCount(n),[2]}}))}))},e.prototype.nextAndPrevVisability=function(e){var t,n,r,a;parseInt(e,10)>f.currentPage*this.carsPerPage?null===(t=document.querySelector(".nextPage"))||void 0===t||t.classList.remove("inactive"):null===(n=document.querySelector(".nextPage"))||void 0===n||n.classList.add("inactive"),f.currentPage>1?null===(r=document.querySelector(".previousPage"))||void 0===r||r.classList.remove("inactive"):null===(a=document.querySelector(".previousPage"))||void 0===a||a.classList.add("inactive")},e.prototype.createCarCallback=function(){return v(this,void 0,void 0,(function(){var e,t,n;return m(this,(function(r){return e=document.querySelector(".inputCarNameCreate"),t=document.querySelector(".inputColorCreate"),""===e.value||(n={name:e.value,color:t.value},this.createCar(n),e.value=""),[2]}))}))},e.prototype.createCar=function(e){var t;return v(this,void 0,void 0,(function(){var n,r;return m(this,(function(a){switch(a.label){case 0:return[4,this.APIService.createCar(e)];case 1:return[4,a.sent().json()];case 2:return n=a.sent(),(null===(t=document.querySelector(".containerGarage"))||void 0===t?void 0:t.childElementCount)!==this.carsPerPage&&(new p).createCar(n.name,n.color,n.id,this.selectCar.bind(this),this.deleteCarCallback.bind(this),this.startCarCallback.bind(this),this.stopCarCallback.bind(this)),r=document.querySelector(".countCar").textContent.slice(2,-2),r=(parseInt(r,10)+1).toString(),this.setCarCount(r),this.nextAndPrevVisability(r),[2]}}))}))},e.prototype.deleteCarCallback=function(e){return v(this,void 0,void 0,(function(){var t,n;return m(this,(function(r){switch(r.label){case 0:return t=e.target,n=t.closest(".carBlock"),[4,this.APIService.deleteCar(n.classList[1])];case 1:return r.sent(),this.APIService.removeWinner(n.classList[1]),n.remove(),this.cleanGarage(),this.getCars(),[2]}}))}))},e.prototype.selectCar=function(e){return v(this,void 0,void 0,(function(){var t,n,r,a,o,s,i;return m(this,(function(c){switch(c.label){case 0:return t=e.target,n=t.closest(".carBlock"),r=n.classList[1],(a=document.querySelector(".wrapperUpdateCar")).classList.remove("inactive"),a.classList.remove(a.classList[2]),a.classList.add(r),[4,this.APIService.getCar(r)];case 1:return o=c.sent(),s=document.querySelector(".inputCarNameUpdate"),i=document.querySelector(".inputColorUpdate"),s.value=o.name,i.value=o.color,[2]}}))}))},e.prototype.updateCarCallback=function(e){var t;return v(this,void 0,void 0,(function(){var n,r,a,o,s;return m(this,(function(i){switch(i.label){case 0:return n=e.target,r=document.querySelector(".inputCarNameUpdate"),a=document.querySelector(".inputColorUpdate"),""===r.value?[2]:(o={name:r.value,color:a.value},s=null===(t=n.closest(".wrapperUpdateCar"))||void 0===t?void 0:t.classList[2],[4,this.APIService.updateCar(s,o)]);case 1:return i.sent(),this.cleanGarage(),this.getCars(),this.disableUpdateBlock(),[2]}}))}))},e.prototype.disableUpdateBlock=function(){var e=document.querySelector(".wrapperUpdateCar"),t=document.querySelector(".inputCarNameUpdate"),n=document.querySelector(".inputColorUpdate");e.classList.remove(e.classList[2]),e.classList.add("inactive"),t.value="",n.value="#000000"},e.prototype.nextPage=function(){f.currentPage+=1,this.changePage()},e.prototype.prevPage=function(){f.currentPage-=1,this.changePage()},e.prototype.changePage=function(){var e=this;this.cleanGarage(),this.getCars(),this.setCurrentPage(),this.animationId.forEach((function(t,n){cancelAnimationFrame(t),e.animationId.delete(n)}))},e.prototype.disableChangePage=function(){var e=document.querySelector(".nextPage"),t=document.querySelector(".previousPage");e.classList.add("inactive"),t.classList.add("inactive")},e.prototype.enableChangePage=function(){var e=document.querySelector(".countCar").textContent.slice(2,-2);this.nextAndPrevVisability(e)},e.prototype.cleanGarage=function(){for(var e=document.querySelector(".containerGarage");e.firstChild;)e.firstChild.remove()},e.prototype.setCurrentPage=function(){document.querySelector(".pageNumber").textContent="Page #".concat(f.currentPage)},e.prototype.setCarCount=function(e){document.querySelector(".countCar").textContent="( ".concat(e," )")},e.prototype.generateCars=function(){var e=this;(function(e){for(var t=[],n=0;n<e;n+=1){var r=(a=void 0,s=void 0,i=void 0,a=o.brands[Math.floor(Math.random()*o.brands.length)],s=o.models[Math.floor(Math.random()*o.models.length)],i=function(){for(var e="#",t=0;t<6;t+=1)e+="0123456789abcdef"[Math.floor(16*Math.random())];return e}(),{name:"".concat(a," ").concat(s),color:i});t.push(r)}var a,s,i;return t})(100).forEach((function(t){e.createCar(t)}))},e.prototype.startCarCallback=function(e){var t,n,r;return v(this,void 0,void 0,(function(){var a,o,s,i;return m(this,(function(c){return a=e.target,o=null===(t=a.closest(".carBlock"))||void 0===t?void 0:t.classList[1],s=null===(n=a.closest(".carBlock"))||void 0===n?void 0:n.querySelector(".carIcon"),i=null===(r=a.closest(".carBlock"))||void 0===r?void 0:r.querySelector(".btnStop"),this.startCar(s,o,a,i),[2]}))}))},e.prototype.startCar=function(e,t,n,r){return v(this,void 0,void 0,(function(){var a,o,s,i;return m(this,(function(c){switch(c.label){case 0:return[4,this.APIService.startEngine(t)];case 1:if(a=c.sent(),o=a.distance/a.velocity,null===(s=document.querySelector(".road")))return[2];i=s.offsetWidth-e.clientWidth,n.classList.add("inactive"),r.classList.remove("inactive"),this.animationCar(e,o,i,t),c.label=2;case 2:return c.trys.push([2,4,,5]),[4,this.APIService.checkEngine(t)];case 3:return c.sent(),[3,5];case 4:return c.sent(),cancelAnimationFrame(this.animationId.get(t)),this.animationId.delete(t),[3,5];case 5:return[2]}}))}))},e.prototype.animationCar=function(e,t,n,r){var a=this,o=e.offsetLeft,s=o,i=0,c=function(u){var l=u-i;i=u,l>20&&(l=16),s+=(n-o)/(t/l),e.setAttribute("style","left: ".concat(s,"px")),s<n&&a.animationId.set(r,requestAnimationFrame(c)),s>n&&!a.isThereWinner&&(a.isThereWinner=!0,a.createWinnerBlock(r),a.setWinner(r,t))};this.animationId.set(r,requestAnimationFrame(c))},e.prototype.setWinner=function(e,t){return v(this,void 0,void 0,(function(){var n,r;return m(this,(function(a){switch(a.label){case 0:n={id:parseInt(e,10),wins:1,time:Math.round(t)/1e3},a.label=1;case 1:return a.trys.push([1,3,,5]),[4,this.APIService.createWinner(n)];case 2:return a.sent(),[3,5];case 3:return a.sent(),[4,this.APIService.getWinner(e)];case 4:return(r=a.sent()).wins+=1,Math.round(t)/1e3<r.time&&(r.time=Math.round(t)/1e3),this.APIService.updateWinner(r),[3,5];case 5:return[2]}}))}))},e.prototype.createWinnerBlock=function(e){return v(this,void 0,void 0,(function(){var t;return m(this,(function(n){switch(n.label){case 0:return[4,this.APIService.getCar(e)];case 1:return t=n.sent(),(new g).createWinnerMessage(t.name),setTimeout((function(){var e;null===(e=document.querySelector(".winnerMessage"))||void 0===e||e.remove()}),3e3),[2]}}))}))},e.prototype.race=function(e){var t,n=this;e.target.classList.add("inactive"),null===(t=document.querySelector(".btnReset"))||void 0===t||t.classList.remove("inactive"),this.disableChangePage(),this.isThereWinner=!1,document.querySelector(".containerGarage").querySelectorAll(".carBlock").forEach((function(e){var t,r=e.querySelector(".carIcon"),a=e.classList[1],o=e.querySelector(".btnStart"),s=null===(t=o.closest(".carBlock"))||void 0===t?void 0:t.querySelector(".btnStop");n.startCar(r,a,o,s)}))},e.prototype.stopCarCallback=function(e){var t,n,r;return v(this,void 0,void 0,(function(){var a,o,s,i;return m(this,(function(c){return a=e.target,o=null===(t=a.closest(".carBlock"))||void 0===t?void 0:t.classList[1],s=null===(n=a.closest(".carBlock"))||void 0===n?void 0:n.querySelector(".carIcon"),i=null===(r=a.closest(".carBlock"))||void 0===r?void 0:r.querySelector(".btnStart"),this.stopCar(s,o,i,a),[2]}))}))},e.prototype.stopCar=function(e,t,n,r){return v(this,void 0,void 0,(function(){return m(this,(function(a){switch(a.label){case 0:return[4,this.APIService.stopEngine(t)];case 1:return 0===a.sent().velocity&&(this.animationId.has(t)&&(cancelAnimationFrame(this.animationId.get(t)),this.animationId.delete(t)),e.setAttribute("style","left: 80px"),n.classList.remove("inactive"),r.classList.add("inactive")),[2]}}))}))},e.prototype.reset=function(e){var t,n=this;e.target.classList.add("inactive"),null===(t=document.querySelector(".btnRace"))||void 0===t||t.classList.remove("inactive"),this.enableChangePage();var r=document.querySelector(".containerGarage").querySelectorAll(".carBlock");this.isThereWinner=!0,r.forEach((function(e){var t,r=e.querySelector(".carIcon"),a=e.classList[1],o=e.querySelector(".btnStart"),s=null===(t=o.closest(".carBlock"))||void 0===t?void 0:t.querySelector(".btnStop");n.stopCar(r,a,o,s)}))},e.prototype.removeWinnerMessage=function(){var e;null===(e=document.querySelector(".winnerMessage"))||void 0===e||e.remove()},e}(),C=function(){function e(){this.element=this.createBtnToGarage()}return e.prototype.get=function(){return this.element},e.prototype.createBtnToGarage=function(){return new a({tag:"a",content:"To Garage",cssClasses:["btnToGarage"],attributes:{href:"/garage"}}).getElement()},e}();const b=function(){function e(e,t){this.element=this.createChangePageBtns(e,t)}return e.prototype.get=function(){return this.element},e.prototype.createChangePageBtns=function(e,t){var n=new a({tag:"div",cssClasses:["changePageBtns"]}).getElement(),r=new a({tag:"button",content:"Next",cssClasses:["nextPageWinners","btn","inactive"],event:{type:"click",callback:e}}).getElement(),o=new a({tag:"button",content:"Prev",cssClasses:["previousPageWinners","btn","inactive"],event:{type:"click",callback:t}}).getElement();return n.append(o,r),n},e}(),w=function(){function e(e){this.element=this.createContainerWinnersHeader(e)}return e.prototype.get=function(){return this.element},e.prototype.createContainerWinnersHeader=function(e){var t=new a({tag:"div",cssClasses:["containerWinnersHeader"]}).getElement(),n=new a({tag:"h1",content:"Winners ",cssClasses:["headerWinners"]}).getElement(),r=new a({tag:"span",content:"( 0 )",cssClasses:["countWinners"]}).getElement(),o=new a({tag:"h2",content:"Page #".concat(e),cssClasses:["pageNumberWinners"]}).getElement();return n.append(r),t.append(n,o),t},e}(),P=function(){function e(){}return e.prototype.createRow=function(e,t,n,r,o){var s,i=new a({tag:"tr",cssClasses:["row"]}).getElement(),c=new a({tag:"th",content:"".concat(e),cssClasses:["numberWinner"]}).getElement(),u=new a({tag:"th",innerHTML:l(t),cssClasses:["carIconTable"]}).getElement(),p=new a({tag:"th",content:"".concat(n),cssClasses:["nameCarWinner"]}).getElement(),h=new a({tag:"th",content:"".concat(r),cssClasses:["wins"]}).getElement(),d=new a({tag:"th",content:"".concat(o),cssClasses:["bestTime"]}).getElement();i.append(c,u,p,h,d),null===(s=document.querySelector(".containerTableHeader"))||void 0===s||s.append(i)},e}(),S=function(){function e(e,t){this.element=this.createTableHeader(e,t)}return e.prototype.get=function(){return this.element},e.prototype.createTableHeader=function(e,t){var n=new a({tag:"table",cssClasses:["containerTableHeader"]}).getElement(),r=new a({tag:"tr",cssClasses:["headerRow"]}).getElement(),o=new a({tag:"th",content:"Number",cssClasses:["numberColumn"]}).getElement(),s=new a({tag:"th",content:"Car",cssClasses:["numberColumn"]}).getElement(),i=new a({tag:"th",content:"Name",cssClasses:["nameColumn"]}).getElement(),c=new a({tag:"th",content:"Wins",cssClasses:["winsColumn"],event:{type:"click",callback:e}}).getElement(),u=new a({tag:"th",content:"Best time",cssClasses:["bestTimeColumn"],event:{type:"click",callback:t}}).getElement();return r.append(o,s,i,c,u),n.append(r),n},e}(),E=function(){function e(){}return e.currentPage=1,e.sort="time",e.order="ASC",e}();var k=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))},L=function(e,t){var n,r,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(s=0)),s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};const T=function(){function e(e){this.winnersPerPage=10,this.APIService=e}return e.prototype.create=function(){this.createView(),this.getWinners()},e.prototype.createView=function(){var e=new a({tag:"div",cssClasses:["winnersWrapper"]}).getElement(),t=(new C).get(),n=new w(E.currentPage).get(),r=new S(this.setWinsSort.bind(this),this.setTimeSort.bind(this)).get(),o=new b(this.nextPage.bind(this),this.prevPage.bind(this)).get();e.append(t,n,r,o),document.body.append(e)},e.prototype.getWinners=function(){return k(this,void 0,void 0,(function(){var e,t,n,r,a=this;return L(this,(function(o){switch(o.label){case 0:return[4,this.APIService.getWinners(E.currentPage,this.winnersPerPage,E.sort,E.order)];case 1:return[4,(e=o.sent()).json()];case 2:return t=o.sent(),n=e.headers.get("X-Total-Count"),r=t.map((function(e){return k(a,void 0,void 0,(function(){return L(this,(function(t){switch(t.label){case 0:return[4,this.APIService.getCar(e.id.toString())];case 1:return[2,{winnerCar:t.sent(),winner:e}]}}))}))})),[4,Promise.all(r)];case 3:return o.sent().forEach((function(e,t){var n=e.winnerCar,r=e.winner;(new P).createRow(t+1+10*(E.currentPage-1),n.color,n.name,r.wins,r.time)})),this.nextAndPrevVisability(n),this.setWinnersCount(n),[2]}}))}))},e.prototype.nextAndPrevVisability=function(e){var t,n,r,a;parseInt(e,10)>E.currentPage*this.winnersPerPage?null===(t=document.querySelector(".nextPageWinners"))||void 0===t||t.classList.remove("inactive"):null===(n=document.querySelector(".nextPageWinners"))||void 0===n||n.classList.add("inactive"),E.currentPage>1?null===(r=document.querySelector(".previousPageWinners"))||void 0===r||r.classList.remove("inactive"):null===(a=document.querySelector(".previousPageWinners"))||void 0===a||a.classList.add("inactive")},e.prototype.setTimeSort=function(){E.sort="time",this.changeOrder(),this.cleanTable(),this.getWinners()},e.prototype.setWinsSort=function(){E.sort="wins",this.changeOrder(),this.cleanTable(),this.getWinners()},e.prototype.changeOrder=function(){"ASC"===E.order?E.order="DESC":E.order="ASC"},e.prototype.setWinnersCount=function(e){document.querySelector(".countWinners").textContent="( ".concat(e," )")},e.prototype.nextPage=function(){E.currentPage+=1,this.changePage()},e.prototype.prevPage=function(){E.currentPage-=1,this.changePage()},e.prototype.changePage=function(){this.cleanTable(),this.getWinners(),this.setCurrentPage()},e.prototype.setCurrentPage=function(){document.querySelector(".pageNumberWinners").textContent="Page #".concat(E.currentPage)},e.prototype.cleanTable=function(){document.querySelector(".containerTableHeader").querySelectorAll(".row").forEach((function(e){e.remove()}))},e}();(new(function(){function e(){this.router=new r,this.apiService=new n,this.entryPoint=document.body}return e.prototype.start=function(){var e=this;this.router.initRouter([{route:"/winners",callback:function(){e.clear(),new T(e.apiService).create()}},{route:"/garage",callback:function(){e.clear(),new y(e.apiService).create()},isDefaultRoute:!0}])},e.prototype.clear=function(){this.entryPoint.innerHTML=""},e}())).start()})();