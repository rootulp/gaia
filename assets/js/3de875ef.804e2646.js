"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[3596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l="ADR 003: Interchain Accounts Controller Module",i={unversionedId:"architecture/adr/adr-003-ica-controller",id:"architecture/adr/adr-003-ica-controller",title:"ADR 003: Interchain Accounts Controller Module",description:"Changelog",source:"@site/docs/architecture/adr/adr-003-ica-controller.md",sourceDirName:"architecture/adr",slug:"/architecture/adr/adr-003-ica-controller",permalink:"/architecture/adr/adr-003-ica-controller",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 002: Globalfee Module",permalink:"/architecture/adr/adr-002-globalfee"},next:{title:"adr-template",permalink:"/architecture/templates/adr-template"}},c={},s=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adr-003-interchain-accounts-controller-module"},"ADR 003: Interchain Accounts Controller Module"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2024-03-08: Initial Draft")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Proposed"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"The Interchain Accounts Controller IBC module allows users of one chain to create and control accounts on other chains. The Hub currently doesn't have ICA Controller module enabled, so it is not possible to create accounts on other chains from the Hub chain."),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Enabling the ICA Controller module on the Hub would support various use cases. One such case could be the provider-based governance that would allow the ATOM stakers to participate in a governance on consumer chains."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"The ICA Controller module will be included in the application, so the Hub will have both ICA Host and Controller modules. The implementation will use the Controller module's built-in authentication mechanism, since we don't have a need for custom authentication logic. According to this, users will directly use ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgRegisterInterchainAccount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSendTx")," messages defined by the Controller module. The possibility provided by the Controller module to define underlaying application to have custom processing of IBC messages exchanged by the Controller module (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"OnChanOpenInit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OnAcknowledgementPacket"),", etc.) will not be used, since there is currently no need for this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// ICA Controller keeper\nappKeepers.ICAControllerKeeper = icacontrollerkeeper.NewKeeper(\n    appCodec,\n    appKeepers.keys[icacontrollertypes.StoreKey],\n    appKeepers.GetSubspace(icacontrollertypes.SubModuleName),\n    appKeepers.IBCKeeper.ChannelKeeper, // ICS4Wrapper\n    appKeepers.IBCKeeper.ChannelKeeper,\n    &appKeepers.IBCKeeper.PortKeeper,\n    appKeepers.ScopedICAControllerKeeper,\n    bApp.MsgServiceRouter(),\n)\n\n// Create ICA module\nappKeepers.ICAModule = ica.NewAppModule(&appKeepers.ICAControllerKeeper, &appKeepers.ICAHostKeeper)\n\n// Create Interchain Accounts Controller Stack\nvar icaControllerStack porttypes.IBCModule = icacontroller.NewIBCMiddleware(nil, appKeepers.ICAControllerKeeper)\n\n// Add Interchain Accounts Controller IBC route\nibcRouter.AddRoute(icacontrollertypes.SubModuleName, icaControllerStack)\n")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users of the Hub will have a possibility to create and utilize Interchain Accounts on other IBC connected chains.")),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Since we don't need to implement a custom authentication mechanism, we can rely on the one defined by the Controller module itself, implemented through the ",(0,o.kt)("inlineCode",{parentName:"li"},"MsgRegisterInterchainAccount")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"MsgSendTx")," messages.")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/issues/2869"},"https://github.com/cosmos/gaia/issues/2869")))}d.isMDXComponent=!0}}]);