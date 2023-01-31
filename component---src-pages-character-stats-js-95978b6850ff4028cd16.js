"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[289],{85863:function(e,t,a){a.r(t);var n=a(64572),r=a(67294),l=a(365),s=a(67940),c=a(23431);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e="undefined"!=typeof window&&window,t=(0,r.useState)((function(){var t=e?e.localStorage.getItem("character"):"{}";return JSON.parse(t)||{name:"",xpCurrent:"0",xpTotal:"0",state:"inControl",grit:"5",psyche:"5",gear:"5",angleProgress:"1"}})),a=t[0],n=t[1],i=function(e){var t=e.target.name,a=e.target.value;n((function(e){var n;return o(o({},e),{},((n={})[t]=a,n))}))};(0,r.useEffect)((function(){var e=setTimeout((function(){return g(a)}),500);return function(){return clearTimeout(e)}}),[a]);var g=function(){e&&e.localStorage.setItem("character",JSON.stringify(a))};return(0,c.tZ)(l.Z,{title:"CHARACTER STATS"},(0,c.tZ)(s.Z,{title:"Character Stats"}),(0,c.tZ)("form",{class:"character-stats"},(0,c.tZ)("div",{class:"first-row"},(0,c.tZ)("div",{class:"left-col"},(0,c.tZ)("label",null,"NAME / ALIAS ",(0,c.tZ)("input",{type:"text",name:"name",value:a.name||"",onChange:i}))),(0,c.tZ)("div",{class:"right-col"},(0,c.tZ)("span",{class:"xp-title"},"XP "),(0,c.tZ)("span",{class:"curtot"},"current / total"),(0,c.tZ)("div",{class:"input-container"},(0,c.tZ)("input",{type:"number",name:"xpCurrent",value:a.xpCurrent||"",onChange:i}),(0,c.tZ)("input",{type:"number",name:"xpTotal",value:a.xpTotal||"",onChange:i})))),(0,c.tZ)("div",{class:"state-container"},(0,c.tZ)("div",{class:"input-container"},(0,c.tZ)("label",null,(0,c.tZ)("input",{type:"radio",name:"state",value:a.inControl||"inControl",onChange:i,checked:"inControl"===a.state})," IN CONTROL"),(0,c.tZ)("label",null,(0,c.tZ)("input",{type:"radio",name:"state",value:a.inABadSpot||"inABadSpot",onChange:i,checked:"inABadSpot"===a.state})," IN A BAD SPOT"))),(0,c.tZ)("div",{class:"stats-container"},(0,c.tZ)("div",{class:"stat-container"},(0,c.tZ)("div",{class:"left-col"},(0,c.tZ)("label",{class:"stat"},"BRAIN ",(0,c.tZ)("input",{type:"number",name:"brain",value:a.brain||"",onChange:i}))),(0,c.tZ)("div",{class:"right-col"},(0,c.tZ)("span",{class:"stat-desc"},"cunning and knowledge"))),(0,c.tZ)("div",{class:"stat-container"},(0,c.tZ)("div",{class:"left-col"},(0,c.tZ)("label",{class:"stat"},"CHROME ",(0,c.tZ)("input",{type:"number",name:"chrome",value:a.chrome||"",onChange:i}))),(0,c.tZ)("div",{class:"right-col"},(0,c.tZ)("span",{class:"stat-desc"},"strength and endurance"))),(0,c.tZ)("div",{class:"stat-container"},(0,c.tZ)("div",{class:"left-col"},(0,c.tZ)("label",{class:"stat"},"EDGE ",(0,c.tZ)("input",{type:"number",name:"edge",value:a.edge||"",onChange:i}))),(0,c.tZ)("div",{class:"right-col"},(0,c.tZ)("span",{class:"stat-desc"},"speed and precision"))),(0,c.tZ)("div",{class:"stat-container"},(0,c.tZ)("div",{class:"left-col"},(0,c.tZ)("label",{class:"stat"},"FLASH ",(0,c.tZ)("input",{type:"number",name:"flash",value:a.flash||"",onChange:i}))),(0,c.tZ)("div",{class:"right-col"},(0,c.tZ)("span",{class:"stat-desc"},"personality and empathy"))),(0,c.tZ)("div",{class:"stat-container"},(0,c.tZ)("div",{class:"left-col"},(0,c.tZ)("label",{class:"stat"},"SHADE ",(0,c.tZ)("input",{type:"number",name:"shade",value:a.shade||"",onChange:i}))),(0,c.tZ)("div",{class:"right-col"},(0,c.tZ)("span",{class:"stat-desc"},"deception and stealth")))),(0,c.tZ)("div",{class:"stat-bar",id:"grit-stat-bar"},(0,c.tZ)("span",{class:"title"},"GRIT"),(0,c.tZ)("input",{type:"radio",name:"grit",id:"grit0",value:a.grit0||"0",onChange:i,checked:"0"===a.grit}),(0,c.tZ)("label",{for:"grit0"},"0"),(0,c.tZ)("input",{type:"radio",name:"grit",id:"grit1",value:a.grit1||"1",onChange:i,checked:"1"===a.grit}),(0,c.tZ)("label",{for:"grit1"},"1"),(0,c.tZ)("input",{type:"radio",name:"grit",id:"grit2",value:a.grit2||"2",onChange:i,checked:"2"===a.grit}),(0,c.tZ)("label",{for:"grit2"},"2"),(0,c.tZ)("input",{type:"radio",name:"grit",id:"grit3",value:a.grit3||"3",onChange:i,checked:"3"===a.grit}),(0,c.tZ)("label",{for:"grit3"},"3"),(0,c.tZ)("input",{type:"radio",name:"grit",id:"grit4",value:a.grit4||"4",onChange:i,checked:"4"===a.grit}),(0,c.tZ)("label",{for:"grit4"},"4"),(0,c.tZ)("input",{type:"radio",name:"grit",id:"grit5",value:a.grit5||"5",onChange:i,checked:"5"===a.grit}),(0,c.tZ)("label",{for:"grit5"},"5")),(0,c.tZ)("div",{class:"stat-bar",id:"psyche-stat-bar"},(0,c.tZ)("span",{class:"title"},"PSYCHE"),(0,c.tZ)("input",{type:"radio",name:"psyche",id:"psyche0",value:a.psyche0||"0",onChange:i,checked:"0"===a.psyche}),(0,c.tZ)("label",{for:"psyche0"},"0"),(0,c.tZ)("input",{type:"radio",name:"psyche",id:"psyche1",value:a.psyche1||"1",onChange:i,checked:"1"===a.psyche}),(0,c.tZ)("label",{for:"psyche1"},"1"),(0,c.tZ)("input",{type:"radio",name:"psyche",id:"psyche2",value:a.psyche2||"2",onChange:i,checked:"2"===a.psyche}),(0,c.tZ)("label",{for:"psyche2"},"2"),(0,c.tZ)("input",{type:"radio",name:"psyche",id:"psyche3",value:a.psyche3||"3",onChange:i,checked:"3"===a.psyche}),(0,c.tZ)("label",{for:"psyche3"},"3"),(0,c.tZ)("input",{type:"radio",name:"psyche",id:"psyche4",value:a.psyche4||"4",onChange:i,checked:"4"===a.psyche}),(0,c.tZ)("label",{for:"psyche4"},"4"),(0,c.tZ)("input",{type:"radio",name:"psyche",id:"psyche5",value:a.psyche5||"5",onChange:i,checked:"5"===a.psyche}),(0,c.tZ)("label",{for:"psyche5"},"5")),(0,c.tZ)("div",{class:"stat-bar",id:"gear-stat-bar"},(0,c.tZ)("span",{class:"title"},"GEAR"),(0,c.tZ)("input",{type:"radio",name:"gear",id:"gear0",value:a.gear0||"0",onChange:i,checked:"0"===a.gear}),(0,c.tZ)("label",{for:"gear0"},"0"),(0,c.tZ)("input",{type:"radio",name:"gear",id:"gear1",value:a.gear1||"1",onChange:i,checked:"1"===a.gear}),(0,c.tZ)("label",{for:"gear1"},"1"),(0,c.tZ)("input",{type:"radio",name:"gear",id:"gear2",value:a.gear2||"2",onChange:i,checked:"2"===a.gear}),(0,c.tZ)("label",{for:"gear2"},"2"),(0,c.tZ)("input",{type:"radio",name:"gear",id:"gear3",value:a.gear3||"3",onChange:i,checked:"3"===a.gear}),(0,c.tZ)("label",{for:"gear3"},"3"),(0,c.tZ)("input",{type:"radio",name:"gear",id:"gear4",value:a.gear4||"4",onChange:i,checked:"4"===a.gear}),(0,c.tZ)("label",{for:"gear4"},"4"),(0,c.tZ)("input",{type:"radio",name:"gear",id:"gear5",value:a.gear5||"5",onChange:i,checked:"5"===a.gear}),(0,c.tZ)("label",{for:"gear5"},"5")),(0,c.tZ)("div",{class:"angle-container"},(0,c.tZ)("div",{class:"angle-header"},(0,c.tZ)("span",{class:"angle-title"},"ANGLE"),(0,c.tZ)("label",{class:"angle-progress"},"PROGRESS ",(0,c.tZ)("input",{type:"number",name:"angleProgress",value:a.angleProgress||"",onChange:i}))),(0,c.tZ)("div",{class:"angle-options"},(0,c.tZ)("span",null,"Choose One:"),(0,c.tZ)("div",{class:"columns"},(0,c.tZ)("div",{class:"col left-col"},(0,c.tZ)("label",null,(0,c.tZ)("input",{type:"radio",name:"angle",value:a.angle1||"Get Out",onChange:i,checked:"Get Out"===a.angle})," Get Out"),(0,c.tZ)("label",null,(0,c.tZ)("input",{type:"radio",name:"angle",value:a.angle2||"Upgrade Life",onChange:i,checked:"Upgrade Life"===a.angle})," Upgrade Life"),(0,c.tZ)("label",null,(0,c.tZ)("input",{type:"radio",name:"angle",value:a.angle3||"Learn The Truth",onChange:i,checked:"Learn The Truth"===a.angle})," Learn The Truth")),(0,c.tZ)("div",{class:"col right-col"},(0,c.tZ)("label",null,(0,c.tZ)("input",{type:"radio",name:"angle",value:a.angle4||"Make'em Pay",onChange:i,checked:"Make'em Pay"===a.angle})," Make'em Pay"),(0,c.tZ)("label",null,(0,c.tZ)("input",{type:"radio",name:"angle",value:a.angle5||"Look After Them",onChange:i,checked:"Look After Them"===a.angle})," Look After Them"),(0,c.tZ)("label",null,(0,c.tZ)("input",{type:"radio",name:"angle",value:a.angle6||"Take A Stand",onChange:i,checked:"Take A Stand"===a.angle})," Take A Stand"))))),(0,c.tZ)("div",{class:"notes-container"},(0,c.tZ)("label",{class:"equipment_notes"},"EQUIPMENT + NOTES ",(0,c.tZ)("textarea",{name:"notes",value:a.notes||"",onChange:i})))))}}}]);
//# sourceMappingURL=component---src-pages-character-stats-js-95978b6850ff4028cd16.js.map