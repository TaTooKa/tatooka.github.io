"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[674],{83084:function(t,e,r){r.r(e);var a=r(64572),n=r(67294),l=r(98859),s=r(67940),i=r(23431);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(){var t="undefined"!=typeof window&&window,e=(0,n.useState)((function(){var e=t?t.localStorage.getItem("traits"):"{}";return JSON.parse(e)||{}})),r=e[0],a=e[1],o=function(t){if(console.log(t,t.target.name,t.target.value,t.target.checked),"checkbox"==t.target.type){var e=t.target.name,r=t.target.checked;a((function(t){var a;return c(c({},t),{},((a={})[e]=r,a))}))}else{var n=t.target.name,l=t.target.value;a((function(t){var e;return c(c({},t),{},((e={})[n]=l,e))}))}};(0,n.useEffect)((function(){var t=setTimeout((function(){return u(r)}),500);return function(){return clearTimeout(t)}}),[r]);var u=function(){t&&t.localStorage.setItem("traits",JSON.stringify(r))};return(0,i.tZ)(l.Z,{title:"CHARACTER TRAITS",headings:[{depth:2,value:"SKILLS AND BACKGROUND"},{depth:2,value:"GEAR AND CYBERWARE"},{depth:2,value:"CONTACTS"}]},(0,i.tZ)(s.Z,{title:"Character Traits"}),(0,i.tZ)("form",{class:"character-traits"},(0,i.tZ)("div",{class:"traits-container",id:"skills-container"},(0,i.tZ)("h2",{id:"skills-and-background"},"SKILLS AND BACKGROUND"),(0,i.tZ)("div",{class:"trait skill"},(0,i.tZ)("input",{id:"skillNetrunner",type:"checkbox",name:"skillNetrunner",value:r.skillNetrunner,onChange:o,defaultChecked:r.skillNetrunner}),(0,i.tZ)("label",{for:"skillNetrunner"}," ",(0,i.tZ)("span",{class:"trait-name"},"NETRUNNER"),": gain a ",(0,i.tZ)("b",null,"BOOST")," for any test involving hacking or surfing the NET.")),(0,i.tZ)("div",{class:"trait skill"},(0,i.tZ)("input",{id:"skillBlademaster",type:"checkbox",name:"skillBlademaster",value:r.skillBlademaster,onChange:o,defaultChecked:r.skillBlademaster}),(0,i.tZ)("label",{for:"skillBlademaster"}," ",(0,i.tZ)("span",{class:"trait-name"},"BLADEMASTER"),": when wielding a long blade, gain a ",(0,i.tZ)("b",null,"BOOST")," when you test ",(0,i.tZ)("span",{class:"stat"},"CHROME")," to ",(0,i.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," or when you ",(0,i.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," to defend.")),(0,i.tZ)("div",{class:"trait skill"},(0,i.tZ)("input",{id:"skillStreetRat",type:"checkbox",name:"skillStreetRat",value:r.skillStreetRat,onChange:o,defaultChecked:r.skillStreetRat}),(0,i.tZ)("label",{for:"skillStreetRat"}," ",(0,i.tZ)("span",{class:"trait-name"},"STREET RAT"),": gain a ",(0,i.tZ)("b",null,"BOOST")," for any test involving lying, bluffing, stealing or cheating.")),(0,i.tZ)("div",{class:"trait skill"},(0,i.tZ)("input",{id:"skillBountyHunter",type:"checkbox",name:"skillBountyHunter",value:r.skillBountyHunter,onChange:o,defaultChecked:r.skillBountyHunter}),(0,i.tZ)("label",{for:"skillBountyHunter"}," ",(0,i.tZ)("span",{class:"trait-name"},"BOUNTY HUNTER"),": gain a ",(0,i.tZ)("b",null,"BOOST")," whenever you ",(0,i.tZ)("a",{href:"/prompts/general-prompts#gather-information"},"GATHER INFORMATION"),", ",(0,i.tZ)("a",{href:"/prompts/challenge-prompts#accept-a-challenge"},"ACCEPT A CHALLENGE")," or ",(0,i.tZ)("a",{href:"/prompts/challenge-prompts#fulfill-a-challenge"},"FULFILL A CHALLENGE")," related to a bounty."))),(0,i.tZ)("hr",null),(0,i.tZ)("div",{class:"traits-container",id:"gear-container"},(0,i.tZ)("h2",{id:"gear-and-cyberware"},"GEAR AND CYBERWARE"),(0,i.tZ)("div",{class:"trait skill"},(0,i.tZ)("input",{id:"gearArmored",type:"checkbox",name:"gearArmored",value:r.gearArmored,onChange:o,defaultChecked:r.gearArmored}),(0,i.tZ)("label",{for:"gearArmored"}," ",(0,i.tZ)("span",{class:"trait-name"},"ARMORED"),": ",(0,i.tZ)("i",null,"Shiny and Chrome"),". gain a ",(0,i.tZ)("b",null,"BOOST")," when you ",(0,i.tZ)("a",{href:"/prompts/general-prompts#act-under-pressure"},"ACT UNDER PRESSURE")," or ",(0,i.tZ)("a",{href:"/prompts/general-prompts#clash"},"CLASH")," against physical attacks or impact damage."))),(0,i.tZ)("hr",null),(0,i.tZ)("div",{class:"traits-container",id:"contacts-container"},(0,i.tZ)("h2",{id:"contacts"},"CONTACTS")),(0,i.tZ)("br",null)))}}}]);
//# sourceMappingURL=component---src-pages-character-traits-js-10bfb083d049c373e500.js.map