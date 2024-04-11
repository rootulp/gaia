"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[6868],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>g});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),c=o,g=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return t?n.createElement(g,r(r({ref:a},u),{},{components:t})):n.createElement(g,r({ref:a},u))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},90:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const l={title:"v15.1.0",order:1},r=void 0,s={unversionedId:"changelogs/v15.1.0",id:"changelogs/v15.1.0",title:"v15.1.0",description:"This document outlines API breaking changes that were introduced in gaia v15.1.0.",source:"@site/docs/changelogs/v15.1.0.md",sourceDirName:"changelogs",slug:"/changelogs/v15.1.0",permalink:"/changelogs/v15.1.0",draft:!1,tags:[],version:"current",frontMatter:{title:"v15.1.0",order:1},sidebar:"tutorialSidebar",previous:{title:"Changelogs",permalink:"/changelogs/"}},i={},p=[{value:"Supported modules:",id:"supported-modules",level:2},{value:"Behaviour changes",id:"behaviour-changes",level:2},{value:"REST/RPC Changes",id:"restrpc-changes",level:2},{value:"DenomOwners",id:"denomowners",level:3},{value:"Querying latest block",id:"querying-latest-block",level:3},{value:"Genesis commands",id:"genesis-commands",level:2},{value:"Governance commands",id:"governance-commands",level:2},{value:"submit-legacy-proposal",id:"submit-legacy-proposal",level:3},{value:"draft-proposal",id:"draft-proposal",level:3},{value:"submit-proposal",id:"submit-proposal",level:3}],u={toc:p},d="wrapper";function m(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document outlines API breaking changes that were introduced in ",(0,o.kt)("inlineCode",{parentName:"p"},"gaia v15.1.0"),"."),(0,o.kt)("p",null,"This release is based on cosmos-sdk ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.47.x")," and ibc-go ",(0,o.kt)("inlineCode",{parentName:"p"},"v7.x"),"."),(0,o.kt)("p",null,"You can find the comprehensive API docs at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/api"},"https://docs.cosmos.network/api"))),(0,o.kt)("p",null,"Module reference manuals (with CLI instructions) can be found at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.47/build/modules"},"https://docs.cosmos.network/v0.47/build/modules"))),(0,o.kt)("p",null,"Comprehensive list of changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/gaia/blob/release/v15.1.x/CHANGELOG.md#api-breaking"},"https://github.com/cosmos/gaia/blob/release/v15.1.x/CHANGELOG.md#api-breaking"))),(0,o.kt)("h2",{id:"supported-modules"},"Supported modules:"),(0,o.kt)("p",null,"cosmos-sdk ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.47.10-ics-lsm")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"x/auth"),(0,o.kt)("li",{parentName:"ul"},"x/authz"),(0,o.kt)("li",{parentName:"ul"},"x/bank"),(0,o.kt)("li",{parentName:"ul"},"x/capability"),(0,o.kt)("li",{parentName:"ul"},"x/consensus"),(0,o.kt)("li",{parentName:"ul"},"x/crisis"),(0,o.kt)("li",{parentName:"ul"},"x/distribution"),(0,o.kt)("li",{parentName:"ul"},"x/evidence"),(0,o.kt)("li",{parentName:"ul"},"x/feegrant"),(0,o.kt)("li",{parentName:"ul"},"x/gov"),(0,o.kt)("li",{parentName:"ul"},"x/mint"),(0,o.kt)("li",{parentName:"ul"},"x/params"),(0,o.kt)("li",{parentName:"ul"},"x/slashing"),(0,o.kt)("li",{parentName:"ul"},"x/staking (with LSM changes)"),(0,o.kt)("li",{parentName:"ul"},"x/upgrade")),(0,o.kt)("p",null,"ibc-go ",(0,o.kt)("inlineCode",{parentName:"p"},"v7.x")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"transfer"),(0,o.kt)("li",{parentName:"ul"},"ica (host)")),(0,o.kt)("p",null,"interchain-security/provider ",(0,o.kt)("inlineCode",{parentName:"p"},"v3.3.x")),(0,o.kt)("p",null,"packetforward ",(0,o.kt)("inlineCode",{parentName:"p"},"v7.x")),(0,o.kt)("p",null,"gaia"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"x/globalfee ",(0,o.kt)("inlineCode",{parentName:"li"},"v15.x")),(0,o.kt)("li",{parentName:"ul"},"x/metaprotocols ",(0,o.kt)("inlineCode",{parentName:"li"},"v15.x"))),(0,o.kt)("h1",{id:"important-changes"},"Important changes"),(0,o.kt)("p",null,"Changes are outlined compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad <= v14.x")),(0,o.kt)("h2",{id:"behaviour-changes"},"Behaviour changes"),(0,o.kt)("p",null,"Starting ",(0,o.kt)("inlineCode",{parentName:"p"},"v15.1.0")," all users must have at least ",(0,o.kt)("inlineCode",{parentName:"p"},"1 ATOM")," staked in order to cast a vote on a governance proposal."),(0,o.kt)("p",null,"Votes from accounts whose staked amounts are ",(0,o.kt)("inlineCode",{parentName:"p"},"< 1 ATOM")," will be rejected."),(0,o.kt)("h2",{id:"restrpc-changes"},"REST/RPC Changes"),(0,o.kt)("h3",{id:"denomowners"},"DenomOwners"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DenomOwners")," query is not supported on the Cosmos Hub chain."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"querying ",(0,o.kt)("inlineCode",{parentName:"li"},"<RPC_ADDR>.cosmos/bank/v1beta1/denom_owners/{denom}")," always returns an empty result.")),(0,o.kt)("h3",{id:"querying-latest-block"},"Querying latest block"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"curl <RPC>/blocks/latest")," no longer works and returns ",(0,o.kt)("inlineCode",{parentName:"p"},'{"code":12,"message":"Not Implemented","details":[]}')),(0,o.kt)("p",null,"The endpoint was moved to: ",(0,o.kt)("inlineCode",{parentName:"p"},"<RPC>/cosmos/base/tendermint/v1beta1/blocks/latest")),(0,o.kt)("h1",{id:"cli-changes"},"CLI Changes"),(0,o.kt)("h2",{id:"genesis-commands"},"Genesis commands"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gaiad")," no longer uses a custom genesis commands and instead relies on the commands defined in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/build/modules/genutil"},"x/genutil module"),"."),(0,o.kt)("p",null,"These queries no longer work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gaiad gentx\ngaiad collect-gentx\ngaiad validate-genesis\ngaiad add-genesis-account\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis")," subcommands instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gaiad genesis gentx\ngaiad genesis collect-gentx\ngaiad genesis validate-genesis\ngaiad genesis add-genesis-account\ngaiad genesis migrate\n")),(0,o.kt)("h2",{id:"governance-commands"},"Governance commands"),(0,o.kt)("p",null,"Governance commands are aligned with cosmos-sdk v0.47.x ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/build/modules/gov"},"x/gov module"),"."),(0,o.kt)("h3",{id:"submit-legacy-proposal"},"submit-legacy-proposal"),(0,o.kt)("p",null,"Some proposal types can be submitted using the ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad tx gov submit-legacy-proposal")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gaiad tx gov submit-legacy-proposal\n\nAvailable Commands:\n  cancel-software-upgrade Cancel the current software upgrade proposal\n  change-reward-denoms    Submit a change reward denoms proposal\n  consumer-addition       Submit a consumer addition proposal\n  consumer-removal        Submit a consumer chain removal proposal\n  ibc-upgrade             Submit an IBC upgrade proposal\n  param-change            Submit a parameter change proposal\n  software-upgrade        Submit a software upgrade proposal\n  update-client           Submit an update IBC client proposal\n")),(0,o.kt)("p",null,"Most cosmos-sdk modules no longer allow their parameters to be upgraded using a ",(0,o.kt)("inlineCode",{parentName:"p"},"param-change")," proposal. Use the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgUpgradeParams")," message instead and create a JSON file proposal using ",(0,o.kt)("inlineCode",{parentName:"p"},"draft-proposal")," (listed below)."),(0,o.kt)("p",null,"List of proposals available for submission via ",(0,o.kt)("inlineCode",{parentName:"p"},"submit-legacy-proposal")," will be further decreased in subsequent releases."),(0,o.kt)("p",null,"More information is available in cosmos-sdk ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/build/modules/gov#submit-legacy-proposal"},"x/gov docs"),"."),(0,o.kt)("h3",{id:"draft-proposal"},"draft-proposal"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gaiad tx gov draft-proposal")," command is available. You can use this command to create a draft proposal in JSON format."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"more information is available in the cosmos-sdk ",(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.47/build/modules/gov#draft-proposal"},"x/gov docs"))),(0,o.kt)("h3",{id:"submit-proposal"},"submit-proposal"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gaiad tx gov submit-proposal")," command is available. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"draft-proposal")," (listed above) to create a proposal JSON and submit it as a transaction."),(0,o.kt)("p",null,"More information is available in cosmos-sdk ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/build/modules/gov#submit-proposal"},"x/gov docs")))}m.isMDXComponent=!0}}]);