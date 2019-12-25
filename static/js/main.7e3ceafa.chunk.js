(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/spinner.ee7cd8ed.svg"},17:function(e,t,a){e.exports=a(26)},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),o=a.n(i),c=(a(22),a(11)),s=a.n(c),l=a(5),u=a(6),h=a(8),p=a(7),m=a(9),d=(a(24),a(28)),g=a(29),f=a(30),v=a(10),w=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.isLongTile?"longTile commonTileClass":"tile bigTileClass";return e+=" tile"+this.props.weatherDes,r.a.createElement(v.a,{className:e,border:"dark"},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,r.a.createElement("p",null,Math.round(this.props.weatherData)," \u2103")),r.a.createElement(v.a.Subtitle,{className:"mb-2 text-muted"},this.props.date),r.a.createElement(v.a.Text,{className:"tileText"},this.props.weatherDes)))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"headerBox"},r.a.createElement("h4",{className:"header"},"The weather in ",this.props.city," is "))}}]),t}(n.Component),E=a(16),y=a.n(E),j=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:y.a,alt:"loading icon",className:"spinner"}),r.a.createElement("h1",null,"Loading..."))}}]),t}(n.Component),O="752c19413eb03dc172eb2aba7ebb9258",T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={temp:[],weatherDescription:[],dates:[],city:"",loaded:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"renderTile",value:function(e){var t=0!==e;return r.a.createElement(w,{isLongTile:t,weatherData:this.state.temp[e],weatherDes:this.state.weatherDescription[e],date:this.state.dates[e]})}},{key:"getTodayDate",value:function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+t}},{key:"getLocation",value:function(){return navigator.geolocation?new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)})):"Toronto"}},{key:"getApiURL",value:function(e){var t=O,a="https://api.openweathermap.org/data/2.5/weather?",n="https://api.openweathermap.org/data/2.5/forecast?",r="Toronto"===e?"q=Toronto":"lat="+e.coords.latitude+"&lon="+e.coords.longitude;return[a+=r+"&units=metric&appid="+t,n+=r+"&units=metric&appid="+t]}},{key:"componentDidMount",value:function(){var e,t,a,n,r,i,o,c=this;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,s.a.awrap(this.getLocation());case 2:return e=l.sent,t=this.getApiURL(e),a=this.getTodayDate(),n=[],r=[],i=[],o="",l.next=11,s.a.awrap(fetch(t[0]).then((function(e){return e.json()})).then((function(e){n.push(e.main.temp),r.push(e.weather[0].main),i.push(a),o=e.name})));case 11:return l.next=13,s.a.awrap(fetch(t[1]).then((function(e){return e.json()})).then((function(e){for(var t=e.list,s=0;s<t.length;s++){var l=t[s].dt_txt;if(!l.includes(a)&&l.includes("12:00:00")){console.log(t[s]);var u=t[s];n.push(u.main.temp),r.push(u.weather[0].main),i.push(u.dt_txt.substring(0,10))}}c.setState({temp:n,weatherDescription:r,dates:i,city:o,loaded:!0})})).catch(console.log("An error occurred while retrieving weather data")));case 13:case"end":return l.stop()}}),null,this)}},{key:"render",value:function(){var e="body ";return e+=null===this.state.weatherDescription[0]?"na":this.state.weatherDescription[0],e+=" commonBgdClass",r.a.createElement(r.a.Fragment,null,this.state.loaded?r.a.createElement("div",{className:e},r.a.createElement(b,{city:this.state.city}),r.a.createElement(d.a,{style:{textAlign:"center"}},r.a.createElement(g.a,null,r.a.createElement(f.a,{style:{textAlign:"center",paddingBottom:"2%"}},this.renderTile(0))),r.a.createElement(g.a,null,r.a.createElement(f.a,null,this.renderTile(1)),r.a.createElement(f.a,null,this.renderTile(2)),r.a.createElement(f.a,null,this.renderTile(3)),r.a.createElement(f.a,null,this.renderTile(4))))):r.a.createElement(j,null))}}]),t}(n.Component);a(25);var D=function(){return r.a.createElement("div",null,r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.7e3ceafa.chunk.js.map