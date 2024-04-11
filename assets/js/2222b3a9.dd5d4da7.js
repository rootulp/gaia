"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[5613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?a.createElement(b,l(l({ref:t},d),{},{components:r})):a.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={title:"Building Gaia Deterministically",order:5},l=void 0,o={unversionedId:"resources/reproducible-builds",id:"resources/reproducible-builds",title:"Building Gaia Deterministically",description:"The Tendermint rbuilder Docker image provides a deterministic build environment that is used to build Cosmos SDK applications. It provides a way to be reasonably sure that the executables are really built from the git source. It also makes sure that the same, tested dependencies are used and statically built into the executable.",source:"@site/docs/resources/reproducible-builds.md",sourceDirName:"resources",slug:"/resources/reproducible-builds",permalink:"/resources/reproducible-builds",draft:!1,tags:[],version:"current",frontMatter:{title:"Building Gaia Deterministically",order:5},sidebar:"tutorialSidebar",previous:{title:"Ledger Nano Support",permalink:"/resources/ledger"},next:{title:"Service Providers",permalink:"/resources/service-providers"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build",id:"build",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tendermint/images/tree/master/rbuilder"},"Tendermint rbuilder Docker image")," provides a deterministic build environment that is used to build Cosmos SDK applications. It provides a way to be reasonably sure that the executables are really built from the git source. It also makes sure that the same, tested dependencies are used and statically built into the executable."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Make sure you have ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker installed on your system"),"."),(0,n.kt)("p",null,"All the following instructions have been tested on ",(0,n.kt)("em",{parentName:"p"},"Ubuntu 18.04.2 LTS")," with ",(0,n.kt)("em",{parentName:"p"},"docker 20.10.2"),"."),(0,n.kt)("h2",{id:"build"},"Build"),(0,n.kt)("p",null,"Clone ",(0,n.kt)("inlineCode",{parentName:"p"},"gaia"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/cosmos/gaia.git\n")),(0,n.kt)("p",null,"Checkout the commit, branch, or release tag you want to build:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd gaia/\ngit checkout v4.2.1\n")),(0,n.kt)("p",null,"The buildsystem supports and produces binaries for the following architectures:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"darwin/amd64")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"linux/amd64")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"linux/arm64")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"windows/amd64"))),(0,n.kt)("p",null,"Run the following command to launch a build for all supported architectures:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"make distclean build-reproducible\n")),(0,n.kt)("p",null,"The build system generates both the binaries and deterministic build report in the ",(0,n.kt)("inlineCode",{parentName:"p"},"artifacts")," directory.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"artifacts/build_report")," file contains the list of the build artifacts and their respective checksums, and can be used to verify\nbuild sanity. An example of its contents follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"App: gaiad\nVersion: v4.2.1\nCommit: dbd8a6fb522c571debf958837f9113c56d418f6b\nFiles:\n 29d219b0b120b3188bd7cd7249fc96b9  gaiad-v4.2.1-darwin-amd64\n 80338d9f0e55ea8f6c93f2ec7d4e18d6  gaiad-v4.2.1-linux-amd64\n 9bc77a512acca673ca1769ae67b4d6c7  gaiad-v4.2.1-linux-arm64\n c84387860f52178e2bffee08897564bb  gaiad-v4.2.1-windows-amd64.exe\n c25cca8ccceec06a6fabae90f671fab1  gaiad-v4.2.1.tar.gz\nChecksums-Sha256:\n 05e5b9064bac4e71f0162c4c3c3bff55def22ca016d34205a5520fef89fd2776  gaiad-v4.2.1-darwin-amd64\n ccda422cbda29c723aaf27653bcf0f6412e138eec33fba2b49de131f9ffbe2d2  gaiad-v4.2.1-linux-amd64\n 95f89e8213cb758d12e1b0b631285938de822d04d2e25f399e99c0b798173cfd  gaiad-v4.2.1-linux-arm64\n 7ef98f0041f1573f0a8601abad4a14b1c163f47481c7ba1954fd81ed423a6408  gaiad-v4.2.1-windows-amd64.exe\n 422883ba43c96a6ea5ef9512d39321dd1356633c6a9505517b9c651788df4a7f  gaiad-v4.2.1.tar.gz\n")))}p.isMDXComponent=!0}}]);