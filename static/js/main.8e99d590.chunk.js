(this.webpackJsonpfretboard=this.webpackJsonpfretboard||[]).push([[0],{13:function(e,t,n){e.exports=n(36)},18:function(e,t,n){},19:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(18),n(8)),u=n(9),i=n(12),l=n(11),m=(n(19),n(10)),f=n.n(m),p=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],d=function(e){return r.a.createElement("tr",{className:"guitarString"},e.notes.map((function(t){return r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.action(t)}},p[t%12]))})))},h=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).midiSounds=new f.a("root"),a.midiSounds.cacheInstrument(260),a.state={selectedInstrument:260},a}return Object(u.a)(n,[{key:"playNotes",value:function(e){this.midiSounds.playChordNow(this.state.selectedInstrument,e,.5)}},{key:"render",value:function(){for(var e=this,t=[],n=[],a=[],o=[],c=[],s=[],u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],i=u.map((function(e){return r.a.createElement("td",null,0===e?" ":e)})),l=0;l<u.length;l++)t.push(64+l),n.push(59+l),a.push(55+l),o.push(50+l),c.push(45+l),s.push(40+l);return r.a.createElement("div",{className:"App"},r.a.createElement("table",{className:"fretboard"},r.a.createElement("tr",{class:"fretNumbers"},i),r.a.createElement(d,{notes:t,action:function(t){return e.playNotes([t])}}),r.a.createElement(d,{notes:n,action:function(t){return e.playNotes([t])}}),r.a.createElement(d,{notes:a,action:function(t){return e.playNotes([t])}}),r.a.createElement(d,{notes:o,action:function(t){return e.playNotes([t])}}),r.a.createElement(d,{notes:c,action:function(t){return e.playNotes([t])}}),r.a.createElement(d,{notes:s,action:function(t){return e.playNotes([t])}}),r.a.createElement("tr",{className:"fretNumbers"},i)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8e99d590.chunk.js.map