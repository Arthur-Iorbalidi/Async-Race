(()=>{"use strict";var e=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function s(e){try{i(r.next(e))}catch(e){c(e)}}function o(e){try{i(r.throw(e))}catch(e){c(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}i((r=r.apply(e,t||[])).next())}))},t=function(e,t){var n,r,a,c,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,o[0]&&(s=0)),s;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1],a=o;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(o);break}a[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};const n=function(){function n(){this.url="http://127.0.0.1:3000",this.options={garage:"/garage",engine:"/engine",winners:"/winners"}}return n.prototype.getCars=function(n,r){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage,"?_page=").concat(n,"&_limit=").concat(r))];case 1:return[2,e.sent()]}}))}))},n.prototype.getCar=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage,"/").concat(n))];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.createCar=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})];case 1:return[2,e.sent()]}}))}))},n.prototype.updateCar=function(n,r){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage,"/").concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})];case 1:return[2,e.sent()]}}))}))},n.prototype.deleteCar=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.garage,"/").concat(n),{method:"DELETE"})];case 1:return e.sent(),[2]}}))}))},n.prototype.startEngine=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.engine,"?id=").concat(n,"&status=started"),{method:"PATCH"})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.checkEngine=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.engine,"?id=").concat(n,"&status=drive"),{method:"PATCH"})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.stopEngine=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.engine,"?id=").concat(n,"&status=stopped"),{method:"PATCH"})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.getWinners=function(n,r,a,c){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners,"?_page=").concat(n,"&_limit=").concat(r,"&_sort=").concat(a,"&_order=").concat(c))];case 1:return[2,e.sent()]}}))}))},n.prototype.getWinner=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners,"/").concat(n))];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.createWinner=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.updateWinner=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners,"/").concat(n.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},n.prototype.removeWinner=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(this.url).concat(this.options.winners,"/").concat(n),{method:"DELETE"})];case 1:return e.sent(),[2]}}))}))},n}(),r={brands:["Tesla","BMW","Mercedez","Porshe","Volkswagen","Ford","Lamborghini","Audi","Mazda","Nissan","KIA","Renault","Chevrolet","Lexus","Hyundai","Skoda","Volvo","Fiat"],models:["A100","B3","A1","C3","D5","X5","X10","S1","K300","M200","Y5","A5","N3","K2","N100"]};const a=function(){function e(e){this.element=document.createElement(e.tag),e.hasOwnProperty("cssClasses")&&this.setClasses(e.cssClasses),e.hasOwnProperty("attributes")&&this.setAttribute(e.attributes),e.hasOwnProperty("content")&&this.setContent(e.content),e.hasOwnProperty("event")&&this.setEvent(e.event),e.hasOwnProperty("innerHTML")&&this.setinnerHTML(e.innerHTML)}return e.prototype.setClasses=function(e){var t=this;e.forEach((function(e){t.element.classList.add(e)}))},e.prototype.setAttribute=function(e){var t=this;Object.keys(e).forEach((function(n){t.element.setAttribute(n,e[n])}))},e.prototype.setContent=function(e){this.element.textContent=e},e.prototype.setinnerHTML=function(e){this.element.innerHTML=e},e.prototype.setEvent=function(e){this.element.addEventListener(e.type,e.callback)},e.prototype.getElement=function(){return this.element},e}();function c(e){return'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" x="0px" y="0px" viewBox="0 0 122.88 35.03" style="enable-background:new 0 0 122.88 35.03" xml:space="preserve" transform="scale(-1, 1)"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g fill="'.concat(e,'"><path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"/></g></svg>')}const s=function(){function e(){}return e.prototype.create=function(){var e=new a({tag:"div",cssClasses:["winnersWrapper","hidden"]}).getElement(),t=new a({tag:"button",content:"To Garage",cssClasses:["btnToGarage"],event:{type:"click",callback:i.toGarage}}).getElement();e.append(t,this.createContainerWinnersHeader(),this.createTableHeader(),this.createChangePageBtns()),document.body.append(e)},e.prototype.createContainerWinnersHeader=function(){var e=new a({tag:"div",cssClasses:["containerWinnersHeader"]}).getElement(),t=new a({tag:"h1",content:"Winners ",cssClasses:["headerWinners"]}).getElement(),n=new a({tag:"span",content:"( 0 )",cssClasses:["countWinners"]}).getElement(),r=new a({tag:"h2",content:"Page #1",cssClasses:["pageNumberWinners"]}).getElement();return t.append(n),e.append(t,r),e},e.prototype.createTableHeader=function(){var e=new a({tag:"table",cssClasses:["containerTableHeader"]}).getElement(),t=new a({tag:"tr",cssClasses:["headerRow"]}).getElement(),n=new a({tag:"th",content:"Number",cssClasses:["numberColumn"]}).getElement(),r=new a({tag:"th",content:"Car",cssClasses:["numberColumn"]}).getElement(),c=new a({tag:"th",content:"Name",cssClasses:["nameColumn"]}).getElement(),s=new a({tag:"th",content:"Wins",cssClasses:["winsColumn"],event:{type:"click",callback:i.setWinsSort}}).getElement(),o=new a({tag:"th",content:"Best time",cssClasses:["bestTimeColumn"],event:{type:"click",callback:i.setTimeSort}}).getElement();return t.append(n,r,c,s,o),e.append(t),e},e.createRow=function(e,t,n,r,s){var o,i=new a({tag:"tr",cssClasses:["row"]}).getElement(),l=new a({tag:"th",content:"".concat(e),cssClasses:["numberWinner"]}).getElement(),u=new a({tag:"th",innerHTML:c(t),cssClasses:["carIconTable"]}).getElement(),d=new a({tag:"th",content:"".concat(n),cssClasses:["nameCarWinner"]}).getElement(),p=new a({tag:"th",content:"".concat(r),cssClasses:["wins"]}).getElement(),g=new a({tag:"th",content:"".concat(s),cssClasses:["bestTime"]}).getElement();i.append(l,u,d,p,g),null===(o=document.querySelector(".containerTableHeader"))||void 0===o||o.append(i)},e.prototype.createChangePageBtns=function(){var e=new a({tag:"div",cssClasses:["changePageBtns"]}).getElement(),t=new a({tag:"button",content:"Next",cssClasses:["nextPageWinners","btn","inactive"],event:{type:"click",callback:i.nextPage}}).getElement(),n=new a({tag:"button",content:"Prev",cssClasses:["previousPageWinners","btn","inactive"],event:{type:"click",callback:i.prevPage}}).getElement();return e.append(n,t),e},e}();var o=function(){function e(){}return e.create=function(){(new s).create(),e.getWinners()},e.remove=function(){document.querySelector(".winnersWrapper").classList.add("hidden")},e.toGarage=function(){e.remove(),document.querySelector(".wrapperGarage").classList.remove("hidden")},e.getWinners=function(){return t=this,n=void 0,a=function(){var t,n,r,a,c;return function(e,t){var n,r,a,c,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,o[0]&&(s=0)),s;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1],a=o;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(o);break}a[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}(this,(function(o){switch(o.label){case 0:return[4,e.APIService.getWinners(e.currentPage,e.winnersPerPage,e.sort,e.order)];case 1:return[4,(t=o.sent()).json()];case 2:n=o.sent(),r=t.headers.get("X-Total-Count"),a=0,o.label=3;case 3:return a<n.length?[4,e.APIService.getCar(n[a].id.toString())]:[3,6];case 4:c=o.sent(),s.createRow(a+1+10*(e.currentPage-1),c.color,c.name,n[a].wins,n[a].time),o.label=5;case 5:return a+=1,[3,3];case 6:return e.nextAndPrevVisability(r),e.setWinnersCount(r),[2]}}))},new((r=void 0)||(r=Promise))((function(e,c){function s(e){try{i(a.next(e))}catch(e){c(e)}}function o(e){try{i(a.throw(e))}catch(e){c(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,o)}i((a=a.apply(t,n||[])).next())}));var t,n,r,a},e.nextAndPrevVisability=function(t){var n,r,a,c;parseInt(t,10)>e.currentPage*e.winnersPerPage?null===(n=document.querySelector(".nextPageWinners"))||void 0===n||n.classList.remove("inactive"):null===(r=document.querySelector(".nextPageWinners"))||void 0===r||r.classList.add("inactive"),e.currentPage>1?null===(a=document.querySelector(".previousPageWinners"))||void 0===a||a.classList.remove("inactive"):null===(c=document.querySelector(".previousPageWinners"))||void 0===c||c.classList.add("inactive")},e.setTimeSort=function(){e.sort="time",e.changeOrder(),e.cleanTable(),e.getWinners()},e.setWinsSort=function(){e.sort="wins",e.changeOrder(),e.cleanTable(),e.getWinners()},e.changeOrder=function(){"ASC"===e.order?e.order="DESC":e.order="ASC"},e.setWinnersCount=function(e){document.querySelector(".countWinners").textContent="( ".concat(e," )")},e.nextPage=function(){e.currentPage+=1,e.changePage()},e.prevPage=function(){e.currentPage-=1,e.changePage()},e.changePage=function(){e.cleanTable(),e.getWinners(),e.setCurrentPage()},e.setCurrentPage=function(){document.querySelector(".pageNumberWinners").textContent="Page #".concat(e.currentPage)},e.cleanTable=function(){document.querySelector(".containerTableHeader").querySelectorAll(".row").forEach((function(e){e.remove()}))},e.APIService=new n,e.winnersPerPage=10,e.currentPage=1,e.sort="time",e.order="ASC",e}();const i=o,l=function(){function e(){}return e.prototype.create=function(){var e=new a({tag:"div",cssClasses:["wrapperGarage"],event:{type:"click",callback:g.removeWinnerMessage}}).getElement(),t=new a({tag:"button",content:"To Winners",cssClasses:["btnToWinners"],event:{type:"click",callback:g.toWinners}}).getElement(),n=new a({tag:"div",cssClasses:["wrapperControl"]}).getElement(),r=new a({tag:"div",cssClasses:["containerGarage"]}).getElement();n.append(this.createCarBlock(),this.updateCarBlock(),this.controlsBtns()),e.append(t,n,this.createContainerGarageHeader(),r,this.createChangePageBtns()),document.body.append(e)},e.prototype.createContainerGarageHeader=function(){var e=new a({tag:"div",cssClasses:["containerGarageHeader"]}).getElement(),t=new a({tag:"h1",content:"Garage ",cssClasses:["headerGarage"]}).getElement(),n=new a({tag:"span",content:"( 0 )",cssClasses:["countCar"]}).getElement(),r=new a({tag:"h2",content:"Page #1",cssClasses:["pageNumber"]}).getElement();return t.append(n),e.append(t,r),e},e.prototype.createCarBlock=function(){var e=new a({tag:"div",cssClasses:["wrapperCreateCar","wrapperOption"]}).getElement(),t=new a({tag:"input",cssClasses:["inputCarNameCreate","inputCarName"]}).getElement(),n=new a({tag:"input",cssClasses:["inputColorCreate","inputColor"],attributes:{type:"color"}}).getElement(),r=new a({tag:"button",content:"Create",cssClasses:["btnCreate","btn"],event:{type:"click",callback:g.createCarCallback}}).getElement();return e.append(t,n,r),e},e.prototype.updateCarBlock=function(){var e=new a({tag:"div",cssClasses:["wrapperUpdateCar","wrapperOption","inactive"]}).getElement(),t=new a({tag:"input",cssClasses:["inputCarNameUpdate","inputCarName"]}).getElement(),n=new a({tag:"input",cssClasses:["inputColorUpdate","inputColor"],attributes:{type:"color"}}).getElement(),r=new a({tag:"button",content:"Update",cssClasses:["btnUpdate","btn"],event:{type:"click",callback:g.updateCarCallback}}).getElement();return e.append(t,n,r),e},e.prototype.controlsBtns=function(){var e=new a({tag:"div",cssClasses:["wrapperBtns"]}).getElement(),t=new a({tag:"button",content:"Race",cssClasses:["btnRace","btn"],event:{type:"click",callback:g.race}}).getElement(),n=new a({tag:"button",content:"Reset",cssClasses:["btnReset","btn","inactive"],event:{type:"click",callback:g.reset}}).getElement(),r=new a({tag:"button",content:"Generate Cars",cssClasses:["btnGenerate","btn"],event:{type:"click",callback:g.generateCars}}).getElement();return e.append(t,n,r),e},e.createCar=function(e,t,n){var r,c=new a({tag:"div",cssClasses:["carBlock","".concat(n)]}).getElement();c.append(this.createHeaderCar(e),this.createRoad(t)),null===(r=document.querySelector(".containerGarage"))||void 0===r||r.append(c)},e.createHeaderCar=function(e){var t=new a({tag:"div",cssClasses:["wrapperBtnsCar"]}).getElement(),n=new a({tag:"button",content:"Select",cssClasses:["btnSelect","btn"],event:{type:"click",callback:g.selectCar}}).getElement(),r=new a({tag:"button",content:"Remove",cssClasses:["btnRemove","btn"],event:{type:"click",callback:g.deleteCarCallback}}).getElement(),c=new a({tag:"span",content:e,cssClasses:["carNameSpan"]}).getElement();return t.append(n,r,c),t},e.createStartAndStopBtns=function(){var e=new a({tag:"div",cssClasses:["startAndStop"]}).getElement(),t=new a({tag:"button",content:"A",cssClasses:["btnStart","btn"],event:{type:"click",callback:g.startCarCallback}}).getElement(),n=new a({tag:"button",content:"B",cssClasses:["btnStop","btn","inactive"],event:{type:"click",callback:g.stopCarCallback}}).getElement();return e.append(t,n),e},e.createRoad=function(e){var t=new a({tag:"div",cssClasses:["road"]}).getElement();return t.append(this.createStartAndStopBtns(),this.createCarIcon(e),this.createFlagIcon()),t},e.createCarIcon=function(e){var t=c(e);return new a({tag:"div",cssClasses:["carIcon"],innerHTML:t}).getElement()},e.createFlagIcon=function(){return new a({tag:"div",cssClasses:["flagIcon"],innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="#fff"><path d="M0 0h48v48H0z" fill="none"/><path d="M28.8 12L28 8H10v34h4V28h11.2l.8 4h14V12z"/></svg>'}).getElement()},e.prototype.createChangePageBtns=function(){var e=new a({tag:"div",cssClasses:["changePageBtns"]}).getElement(),t=new a({tag:"button",content:"Next",cssClasses:["nextPage","btn","inactive"],event:{type:"click",callback:g.nextPage}}).getElement(),n=new a({tag:"button",content:"Prev",cssClasses:["previousPage","btn","inactive"],event:{type:"click",callback:g.prevPage}}).getElement();return e.append(n,t),e},e.createWinnerMessage=function(e){var t,n=new a({tag:"div",content:"".concat(e," went first"),cssClasses:["winnerMessage"]}).getElement();null===(t=document.querySelector(".wrapperGarage"))||void 0===t||t.append(n)},e}();var u=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function s(e){try{i(r.next(e))}catch(e){c(e)}}function o(e){try{i(r.throw(e))}catch(e){c(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}i((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,a,c,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,o[0]&&(s=0)),s;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1],a=o;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(o);break}a[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},p=function(){function e(){}return e.create=function(){(new l).create(),e.getCars()},e.getCars=function(){return u(this,void 0,void 0,(function(){var t,n,r;return d(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),[4,e.APIService.getCars(e.currentPage,e.carsPerPage)];case 1:return[4,(t=a.sent()).json()];case 2:return n=a.sent(),r=t.headers.get("X-Total-Count"),n.forEach((function(e){l.createCar(e.name,e.color,e.id)})),e.nextAndPrevVisability(r),e.setCarCount(r),[3,4];case 3:return a.sent(),alert("Включите JSON сервер"),[3,4];case 4:return[2]}}))}))},e.nextAndPrevVisability=function(t){var n,r,a,c;parseInt(t,10)>e.currentPage*e.carsPerPage?null===(n=document.querySelector(".nextPage"))||void 0===n||n.classList.remove("inactive"):null===(r=document.querySelector(".nextPage"))||void 0===r||r.classList.add("inactive"),e.currentPage>1?null===(a=document.querySelector(".previousPage"))||void 0===a||a.classList.remove("inactive"):null===(c=document.querySelector(".previousPage"))||void 0===c||c.classList.add("inactive")},e.createCarCallback=function(){return u(this,void 0,void 0,(function(){var t,n,r;return d(this,(function(a){return t=document.querySelector(".inputCarNameCreate"),n=document.querySelector(".inputColorCreate"),""===t.value||(r={name:t.value,color:n.value},e.createCar(r),t.value=""),[2]}))}))},e.createCar=function(t){var n;return u(this,void 0,void 0,(function(){var r,a;return d(this,(function(c){switch(c.label){case 0:return[4,e.APIService.createCar(t)];case 1:return[4,c.sent().json()];case 2:return r=c.sent(),(null===(n=document.querySelector(".containerGarage"))||void 0===n?void 0:n.childElementCount)!==e.carsPerPage&&l.createCar(r.name,r.color,r.id),a=document.querySelector(".countCar").textContent.slice(2,-2),a=(parseInt(a,10)+1).toString(),e.setCarCount(a),e.nextAndPrevVisability(a),[2]}}))}))},e.deleteCarCallback=function(t){return u(this,void 0,void 0,(function(){var n,r;return d(this,(function(a){switch(a.label){case 0:return n=t.target,r=n.closest(".carBlock"),[4,e.APIService.deleteCar(r.classList[1])];case 1:return a.sent(),e.APIService.removeWinner(r.classList[1]),r.remove(),e.cleanGarage(),e.getCars(),[2]}}))}))},e.selectCar=function(t){return u(this,void 0,void 0,(function(){var n,r,a,c,s,o,i;return d(this,(function(l){switch(l.label){case 0:return n=t.target,r=n.closest(".carBlock"),a=r.classList[1],(c=document.querySelector(".wrapperUpdateCar")).classList.remove("inactive"),c.classList.remove(c.classList[2]),c.classList.add(a),[4,e.APIService.getCar(a)];case 1:return s=l.sent(),o=document.querySelector(".inputCarNameUpdate"),i=document.querySelector(".inputColorUpdate"),o.value=s.name,i.value=s.color,[2]}}))}))},e.updateCarCallback=function(t){var n;return u(this,void 0,void 0,(function(){var r,a,c,s,o;return d(this,(function(i){switch(i.label){case 0:return r=t.target,a=document.querySelector(".inputCarNameUpdate"),c=document.querySelector(".inputColorUpdate"),""===a.value?[2]:(s={name:a.value,color:c.value},o=null===(n=r.closest(".wrapperUpdateCar"))||void 0===n?void 0:n.classList[2],[4,e.APIService.updateCar(o,s)]);case 1:return i.sent(),e.cleanGarage(),e.getCars(),e.disableUpdateBlock(),[2]}}))}))},e.disableUpdateBlock=function(){var e=document.querySelector(".wrapperUpdateCar"),t=document.querySelector(".inputCarNameUpdate"),n=document.querySelector(".inputColorUpdate");e.classList.remove(e.classList[2]),e.classList.add("inactive"),t.value="",n.value="#000000"},e.nextPage=function(){e.currentPage+=1,e.changePage()},e.prevPage=function(){e.currentPage-=1,e.changePage()},e.changePage=function(){e.cleanGarage(),e.getCars(),e.setCurrentPage(),e.animationId.forEach((function(t,n){cancelAnimationFrame(t),e.animationId.delete(n)}))},e.disableChangePage=function(){var e=document.querySelector(".nextPage"),t=document.querySelector(".previousPage");e.classList.add("inactive"),t.classList.add("inactive")},e.enableChangePage=function(){var t=document.querySelector(".countCar").textContent.slice(2,-2);e.nextAndPrevVisability(t)},e.cleanGarage=function(){for(var e=document.querySelector(".containerGarage");e.firstChild;)e.firstChild.remove()},e.setCurrentPage=function(){document.querySelector(".pageNumber").textContent="Page #".concat(e.currentPage)},e.setCarCount=function(e){document.querySelector(".countCar").textContent="( ".concat(e," )")},e.generateCars=function(){(function(e){for(var t=[],n=0;n<e;n+=1){var a=(c=void 0,s=void 0,o=void 0,c=r.brands[Math.floor(Math.random()*r.brands.length)],s=r.models[Math.floor(Math.random()*r.models.length)],o=function(){for(var e="#",t=0;t<6;t+=1)e+="0123456789abcdef"[Math.floor(16*Math.random())];return e}(),{name:"".concat(c," ").concat(s),color:o});t.push(a)}var c,s,o;return t})(100).forEach((function(t){e.createCar(t)}))},e.startCarCallback=function(t){var n,r,a;return u(this,void 0,void 0,(function(){var c,s,o,i;return d(this,(function(l){return c=t.target,s=null===(n=c.closest(".carBlock"))||void 0===n?void 0:n.classList[1],o=null===(r=c.closest(".carBlock"))||void 0===r?void 0:r.querySelector(".carIcon"),i=null===(a=c.closest(".carBlock"))||void 0===a?void 0:a.querySelector(".btnStop"),e.startCar(o,s,c,i),[2]}))}))},e.startCar=function(t,n,r,a){return u(this,void 0,void 0,(function(){var c,s,o,i;return d(this,(function(l){switch(l.label){case 0:return[4,e.APIService.startEngine(n)];case 1:if(c=l.sent(),s=c.distance/c.velocity,null===(o=document.querySelector(".road")))return[2];i=o.offsetWidth-t.clientWidth,r.classList.add("inactive"),a.classList.remove("inactive"),e.animationCar(t,s,i,n),l.label=2;case 2:return l.trys.push([2,4,,5]),[4,e.APIService.checkEngine(n)];case 3:return l.sent(),[3,5];case 4:return l.sent(),cancelAnimationFrame(e.animationId.get(n)),e.animationId.delete(n),[3,5];case 5:return[2]}}))}))},e.animationCar=function(t,n,r,a){var c=t.offsetLeft,s=c,o=0;e.animationId.set(a,requestAnimationFrame((function i(l){var u=l-o;o=l,u>20&&(u=16),s+=(r-c)/(n/u),t.setAttribute("style","left: ".concat(s,"px")),s<r&&e.animationId.set(a,requestAnimationFrame(i)),s>r&&!e.isThereWinner&&(e.isThereWinner=!0,e.createWinnerBlock(a),e.setWinner(a,n))})))},e.setWinner=function(t,n){return u(this,void 0,void 0,(function(){var r,a;return d(this,(function(c){switch(c.label){case 0:r={id:parseInt(t),wins:1,time:Math.round(n)/1e3},c.label=1;case 1:return c.trys.push([1,3,,5]),[4,e.APIService.createWinner(r)];case 2:return c.sent(),[3,5];case 3:return c.sent(),[4,e.APIService.getWinner(t)];case 4:return(a=c.sent()).wins+=1,Math.round(n)/1e3<a.time&&(a.time=Math.round(n)/1e3),e.APIService.updateWinner(a),[3,5];case 5:return[2]}}))}))},e.createWinnerBlock=function(t){return u(this,void 0,void 0,(function(){var n;return d(this,(function(r){switch(r.label){case 0:return[4,e.APIService.getCar(t)];case 1:return n=r.sent(),l.createWinnerMessage(n.name),setTimeout((function(){var e;null===(e=document.querySelector(".winnerMessage"))||void 0===e||e.remove()}),3e3),[2]}}))}))},e.race=function(t){var n;t.target.classList.add("inactive"),null===(n=document.querySelector(".btnReset"))||void 0===n||n.classList.remove("inactive"),e.disableChangePage(),e.isThereWinner=!1,document.querySelector(".containerGarage").querySelectorAll(".carBlock").forEach((function(t){var n,r=t.querySelector(".carIcon"),a=t.classList[1],c=t.querySelector(".btnStart"),s=null===(n=c.closest(".carBlock"))||void 0===n?void 0:n.querySelector(".btnStop");e.startCar(r,a,c,s)}))},e.stopCarCallback=function(t){var n,r,a;return u(this,void 0,void 0,(function(){var c,s,o,i;return d(this,(function(l){return c=t.target,s=null===(n=c.closest(".carBlock"))||void 0===n?void 0:n.classList[1],o=null===(r=c.closest(".carBlock"))||void 0===r?void 0:r.querySelector(".carIcon"),i=null===(a=c.closest(".carBlock"))||void 0===a?void 0:a.querySelector(".btnStart"),e.stopCar(o,s,i,c),[2]}))}))},e.stopCar=function(t,n,r,a){return u(this,void 0,void 0,(function(){return d(this,(function(c){switch(c.label){case 0:return[4,e.APIService.stopEngine(n)];case 1:return 0===c.sent().velocity&&(e.animationId.has(n)&&(cancelAnimationFrame(e.animationId.get(n)),e.animationId.delete(n)),t.setAttribute("style","left: 80px"),r.classList.remove("inactive"),a.classList.add("inactive")),[2]}}))}))},e.reset=function(t){var n;t.target.classList.add("inactive"),null===(n=document.querySelector(".btnRace"))||void 0===n||n.classList.remove("inactive"),e.enableChangePage();var r=document.querySelector(".containerGarage").querySelectorAll(".carBlock");e.isThereWinner=!0,r.forEach((function(t){var n,r=t.querySelector(".carIcon"),a=t.classList[1],c=t.querySelector(".btnStart"),s=null===(n=c.closest(".carBlock"))||void 0===n?void 0:n.querySelector(".btnStop");e.stopCar(r,a,c,s)}))},e.removeWinnerMessage=function(){var e;null===(e=document.querySelector(".winnerMessage"))||void 0===e||e.remove()},e.remove=function(){document.querySelector(".wrapperGarage").classList.add("hidden")},e.toWinners=function(){e.remove(),document.querySelector(".winnersWrapper").classList.remove("hidden"),i.cleanTable(),i.getWinners()},e.APIService=new n,e.currentPage=1,e.carsPerPage=7,e.animationId=new Map,e.isThereWinner=!0,e}();const g=p;(new(function(){function e(){}return e.prototype.start=function(){g.create(),i.create()},e}())).start()})();