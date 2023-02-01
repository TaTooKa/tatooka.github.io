"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[289],{85863:function(e,t,a){a.r(t);var n=a(4942),r=a(67294),l=a(54212),i=a(67940),s=a(23431);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e="undefined"!=typeof window&&window,t=(0,r.useState)((function(){var t=e?e.localStorage.getItem("character"):"{}";return JSON.parse(t)||{name:"",xpCurrent:"0",xpTotal:"0",state:"inControl",grit:"5",psyche:"5",gear:"5",angleProgress:"1"}})),a=t[0],n=t[1],c=function(e){if("number"==e.target.type){var t=e.target.name,a=Math.max(e.target.min,Math.min(e.target.max,Number(e.target.value)));n((function(e){var n;return o(o({},e),{},((n={})[t]=a,n))}))}else{var r=e.target.name,l=e.target.value;n((function(e){var t;return o(o({},e),{},((t={})[r]=l,t))}))}};(0,r.useEffect)((function(){var e=setTimeout((function(){return g(a)}),500);return function(){return clearTimeout(e)}}),[a]);var g=function(){e&&e.localStorage.setItem("character",JSON.stringify(a))};return(0,s.tZ)(l.Z,{title:"CHARACTER STATS"},(0,s.tZ)(i.Z,{title:"Character Stats"}),(0,s.tZ)("form",{class:"character-stats"},(0,s.tZ)("div",{class:"left-side"},(0,s.tZ)("div",{class:"first-row"},(0,s.tZ)("div",{class:"left-col"},(0,s.tZ)("label",null,"NAME / ALIAS ",(0,s.tZ)("input",{type:"text",name:"name",value:a.name||"",onChange:c}))),(0,s.tZ)("div",{class:"right-col"},(0,s.tZ)("span",{class:"xp-title"},"XP "),(0,s.tZ)("span",{class:"curtot"},"current / total"),(0,s.tZ)("div",{class:"input-container"},(0,s.tZ)("input",{type:"number",id:"xpCurrent",name:"xpCurrent",value:a.xpCurrent||"",onChange:c}),(0,s.tZ)("input",{type:"number",id:"xpTotal",name:"xpTotal",value:a.xpTotal||"",onChange:c})))),(0,s.tZ)("div",{class:"state-container"},(0,s.tZ)("div",{class:"input-container"},(0,s.tZ)("input",{id:"inControlInput",type:"radio",name:"state",value:a.inControl||"inControl",onChange:c,checked:"inControl"===a.state}),(0,s.tZ)("label",{for:"inControlInput"}," IN CONTROL"),(0,s.tZ)("input",{id:"inABadSpotInput",type:"radio",name:"state",value:a.inABadSpot||"inABadSpot",onChange:c,checked:"inABadSpot"===a.state}),(0,s.tZ)("label",{for:"inABadSpotInput"}," IN A BAD SPOT"))),(0,s.tZ)("div",{class:"stats-container"},(0,s.tZ)("div",{class:"stat-container"},(0,s.tZ)("div",{class:"left-col"},(0,s.tZ)("label",{class:"stat"},"BRAIN ",(0,s.tZ)("input",{type:"number",name:"brain",value:a.brain||"",onChange:c,min:"1",max:"99"}))),(0,s.tZ)("div",{class:"right-col"},(0,s.tZ)("span",{class:"stat-desc"},"cunning and knowledge"))),(0,s.tZ)("div",{class:"stat-container"},(0,s.tZ)("div",{class:"left-col"},(0,s.tZ)("label",{class:"stat"},"CHROME ",(0,s.tZ)("input",{type:"number",name:"chrome",value:a.chrome||"",onChange:c,min:"1",max:"99"}))),(0,s.tZ)("div",{class:"right-col"},(0,s.tZ)("span",{class:"stat-desc"},"strength and endurance"))),(0,s.tZ)("div",{class:"stat-container"},(0,s.tZ)("div",{class:"left-col"},(0,s.tZ)("label",{class:"stat"},"EDGE ",(0,s.tZ)("input",{type:"number",name:"edge",value:a.edge||"",onChange:c,min:"1",max:"99"}))),(0,s.tZ)("div",{class:"right-col"},(0,s.tZ)("span",{class:"stat-desc"},"speed and precision"))),(0,s.tZ)("div",{class:"stat-container"},(0,s.tZ)("div",{class:"left-col"},(0,s.tZ)("label",{class:"stat"},"FLASH ",(0,s.tZ)("input",{type:"number",name:"flash",value:a.flash||"",onChange:c,min:"1",max:"99"}))),(0,s.tZ)("div",{class:"right-col"},(0,s.tZ)("span",{class:"stat-desc"},"personality and empathy"))),(0,s.tZ)("div",{class:"stat-container"},(0,s.tZ)("div",{class:"left-col"},(0,s.tZ)("label",{class:"stat"},"SHADE ",(0,s.tZ)("input",{type:"number",name:"shade",value:a.shade||"",onChange:c,min:"1",max:"99"}))),(0,s.tZ)("div",{class:"right-col"},(0,s.tZ)("span",{class:"stat-desc"},"deception and stealth")))),(0,s.tZ)("div",{class:"stat-bar",id:"grit-stat-bar"},(0,s.tZ)("span",{class:"title"},"GRIT"),(0,s.tZ)("input",{type:"radio",name:"grit",id:"grit0",value:a.grit0||"0",onChange:c,checked:"0"===a.grit}),(0,s.tZ)("label",{for:"grit0"},"0"),(0,s.tZ)("input",{type:"radio",name:"grit",id:"grit1",value:a.grit1||"1",onChange:c,checked:"1"===a.grit}),(0,s.tZ)("label",{for:"grit1"},"1"),(0,s.tZ)("input",{type:"radio",name:"grit",id:"grit2",value:a.grit2||"2",onChange:c,checked:"2"===a.grit}),(0,s.tZ)("label",{for:"grit2"},"2"),(0,s.tZ)("input",{type:"radio",name:"grit",id:"grit3",value:a.grit3||"3",onChange:c,checked:"3"===a.grit}),(0,s.tZ)("label",{for:"grit3"},"3"),(0,s.tZ)("input",{type:"radio",name:"grit",id:"grit4",value:a.grit4||"4",onChange:c,checked:"4"===a.grit}),(0,s.tZ)("label",{for:"grit4"},"4"),(0,s.tZ)("input",{type:"radio",name:"grit",id:"grit5",value:a.grit5||"5",onChange:c,checked:"5"===a.grit}),(0,s.tZ)("label",{for:"grit5"},"5")),(0,s.tZ)("div",{class:"stat-bar",id:"psyche-stat-bar"},(0,s.tZ)("span",{class:"title"},"PSYCHE"),(0,s.tZ)("input",{type:"radio",name:"psyche",id:"psyche0",value:a.psyche0||"0",onChange:c,checked:"0"===a.psyche}),(0,s.tZ)("label",{for:"psyche0"},"0"),(0,s.tZ)("input",{type:"radio",name:"psyche",id:"psyche1",value:a.psyche1||"1",onChange:c,checked:"1"===a.psyche}),(0,s.tZ)("label",{for:"psyche1"},"1"),(0,s.tZ)("input",{type:"radio",name:"psyche",id:"psyche2",value:a.psyche2||"2",onChange:c,checked:"2"===a.psyche}),(0,s.tZ)("label",{for:"psyche2"},"2"),(0,s.tZ)("input",{type:"radio",name:"psyche",id:"psyche3",value:a.psyche3||"3",onChange:c,checked:"3"===a.psyche}),(0,s.tZ)("label",{for:"psyche3"},"3"),(0,s.tZ)("input",{type:"radio",name:"psyche",id:"psyche4",value:a.psyche4||"4",onChange:c,checked:"4"===a.psyche}),(0,s.tZ)("label",{for:"psyche4"},"4"),(0,s.tZ)("input",{type:"radio",name:"psyche",id:"psyche5",value:a.psyche5||"5",onChange:c,checked:"5"===a.psyche}),(0,s.tZ)("label",{for:"psyche5"},"5")),(0,s.tZ)("div",{class:"stat-bar",id:"gear-stat-bar"},(0,s.tZ)("span",{class:"title"},"GEAR"),(0,s.tZ)("input",{type:"radio",name:"gear",id:"gear0",value:a.gear0||"0",onChange:c,checked:"0"===a.gear}),(0,s.tZ)("label",{for:"gear0"},"0"),(0,s.tZ)("input",{type:"radio",name:"gear",id:"gear1",value:a.gear1||"1",onChange:c,checked:"1"===a.gear}),(0,s.tZ)("label",{for:"gear1"},"1"),(0,s.tZ)("input",{type:"radio",name:"gear",id:"gear2",value:a.gear2||"2",onChange:c,checked:"2"===a.gear}),(0,s.tZ)("label",{for:"gear2"},"2"),(0,s.tZ)("input",{type:"radio",name:"gear",id:"gear3",value:a.gear3||"3",onChange:c,checked:"3"===a.gear}),(0,s.tZ)("label",{for:"gear3"},"3"),(0,s.tZ)("input",{type:"radio",name:"gear",id:"gear4",value:a.gear4||"4",onChange:c,checked:"4"===a.gear}),(0,s.tZ)("label",{for:"gear4"},"4"),(0,s.tZ)("input",{type:"radio",name:"gear",id:"gear5",value:a.gear5||"5",onChange:c,checked:"5"===a.gear}),(0,s.tZ)("label",{for:"gear5"},"5"))),(0,s.tZ)("div",{class:"right-side"},(0,s.tZ)("div",{class:"angle-container"},(0,s.tZ)("div",{class:"angle-header"},(0,s.tZ)("span",{class:"angle-title"},"ANGLE"),(0,s.tZ)("label",{class:"angle-progress"},"PROGRESS ",(0,s.tZ)("input",{type:"number",name:"angleProgress",value:a.angleProgress||"",onChange:c,min:"1",max:"99"}))),(0,s.tZ)("div",{class:"angle-options"},(0,s.tZ)("span",null,"Choose One:"),(0,s.tZ)("div",{class:"columns"},(0,s.tZ)("div",{class:"col left-col"},(0,s.tZ)("input",{id:"angleInput1",type:"radio",name:"angle",value:a.angle1||"Get Out",onChange:c,checked:"Get Out"===a.angle}),(0,s.tZ)("label",{for:"angleInput1"}," Get Out"),(0,s.tZ)("input",{id:"angleInput2",type:"radio",name:"angle",value:a.angle2||"Upgrade Life",onChange:c,checked:"Upgrade Life"===a.angle}),(0,s.tZ)("label",{for:"angleInput2"}," Upgrade Life"),(0,s.tZ)("input",{id:"angleInput3",type:"radio",name:"angle",value:a.angle3||"Learn The Truth",onChange:c,checked:"Learn The Truth"===a.angle}),(0,s.tZ)("label",{for:"angleInput3"}," Learn The Truth")),(0,s.tZ)("div",{class:"col right-col"},(0,s.tZ)("input",{id:"angleInput4",type:"radio",name:"angle",value:a.angle4||"Make'em Pay",onChange:c,checked:"Make'em Pay"===a.angle}),(0,s.tZ)("label",{for:"angleInput4"}," Make'em Pay"),(0,s.tZ)("input",{id:"angleInput5",type:"radio",name:"angle",value:a.angle5||"Look After Them",onChange:c,checked:"Look After Them"===a.angle}),(0,s.tZ)("label",{for:"angleInput5"}," Look After Them"),(0,s.tZ)("input",{id:"angleInput6",type:"radio",name:"angle",value:a.angle6||"Take A Stand",onChange:c,checked:"Take A Stand"===a.angle}),(0,s.tZ)("label",{for:"angleInput6"}," Take A Stand"))))),(0,s.tZ)("div",{class:"notes-container"},(0,s.tZ)("label",{class:"equipment_notes"},"EQUIPMENT + NOTES ",(0,s.tZ)("textarea",{name:"notes",value:a.notes||"",onChange:c}))))))}}}]);
//# sourceMappingURL=component---src-pages-character-stats-js-1c6de201f765b518b62f.js.map