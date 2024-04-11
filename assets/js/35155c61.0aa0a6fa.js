"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[9946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));n(2389);const i={title:"Quick Start - Join Mainnet",order:3},o=void 0,s={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start - Join Mainnet",description:"Bootstrap a  cosmoshub-4 mainnet node",source:"@site/docs/getting-started/quickstart.mdx",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/getting-started/quickstart",draft:!1,tags:[],version:"current",frontMatter:{title:"Quick Start - Join Mainnet",order:3},sidebar:"tutorialSidebar",previous:{title:"Installing Gaia",permalink:"/getting-started/installation"},next:{title:"System requirements",permalink:"/getting-started/system-requirements"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Sync Options",id:"sync-options",level:3},{value:"State Sync",id:"state-sync",level:4},{value:"Quick Sync",id:"quick-sync",level:4},{value:"Create Gaia Home &amp; Config",id:"create-gaia-home--config",level:5},{value:"Start Quicksync Download",id:"start-quicksync-download",level:5},{value:"Default",id:"default",level:6},{value:"Pruned",id:"pruned",level:6},{value:"Archive",id:"archive",level:6},{value:"Unzip",id:"unzip",level:5},{value:"Copy Address Book Quicksync",id:"copy-address-book-quicksync",level:5},{value:"Start Gaia",id:"start-gaia",level:5}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bootstrap a  ",(0,r.kt)("inlineCode",{parentName:"strong"},"cosmoshub-4")," mainnet node")),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": Make sure the ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/installation"},"Gaia CLI is installed"),".")),(0,r.kt)("h3",{id:"sync-options"},"Sync Options"),(0,r.kt)("p",null,"To quickly get started, node operators can choose to sync via State Sync or by downloading a snapshot from Quicksync. State Sync works by replaying larger chunks of application state directly rather than replaying individual blocks or consensus rounds. Quicksync is a service provided courtesy of ChainLayer, and offers historical state of the chain available for download every 24 hours. For more advanced information on setting up a node, see the Sync Options section of the full ",(0,r.kt)("a",{parentName:"p",href:"/hub-tutorials/join-mainnet"},"Joining Mainnet Tutorial")),(0,r.kt)("h4",{id:"state-sync"},"State Sync"),(0,r.kt)("p",null,"To enable state sync, visit an ",(0,r.kt)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/blocks"},"explorer")," to get a recent block height and corresponding hash. A node operator can choose any height/hash in the current bonding period, but as the recommended snapshot period is 1000 blocks, it is advised to choose something close to current height - 1000. Set these parameters in the code snippet below ",(0,r.kt)("inlineCode",{parentName:"p"},"<BLOCK_HEIGHT>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<BLOCK_HASH>")),(0,r.kt)("p",null,"For reference, the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc_servers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"persistent")," peers can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry/blob/master/cosmoshub/chain.json"},"cosmos hub chain-registry repo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Build gaiad binary and initialize chain\ncd $HOME\ngit clone -b v15.0.0 https://github.com/cosmos/gaia --depth=1\ncd gaiad\nmake install\ngaiad init CUSTOM_MONIKER --chain-id cosmoshub-4\n\n#Set minimum gas price & peers\nsed -i'' 's/minimum-gas-prices = \"\"/minimum-gas-prices = \"0.0025uatom\"/' $HOME/.gaia/config/app.toml\nsed -i'' 's/persistent_peers = \"\"/persistent_peers = '\"\\\"$(curl -s https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/chain.json | jq -r '[foreach .peers.seeds[] as $item (\"\"; \"\\($item.id)@\\($item.address)\")] | join(\",\")')\\\"\"'/' $HOME/.gaia/config/config.toml\n\n# Configure State sync\nsed -i'' 's/enable = false/enable = true/' $HOME/.gaia/config/config.toml\nsed -i'' 's/trust_height = 0/trust_height = <BLOCK_HEIGHT>/' $HOME/.gaia/config/config.toml\nsed -i'' 's/trust_hash = \"\"/trust_hash = \"<BLOCK_HASH>\"/' $HOME/.gaia/config/config.toml\nsed -i'' 's/rpc_servers = \"\"/rpc_servers = \"https:\\/\\/cosmos-rpc.polkachu.com:443,https:\\/\\/rpc-cosmoshub-ia.cosmosia.notional.ventures:443,https:\\/\\/rpc.cosmos.network:443\"/' $HOME/.gaia/config/config.toml\n\n#Start Gaia\ngaiad start --x-crisis-skip-assert-invariants\n")),(0,r.kt)("h4",{id:"quick-sync"},"Quick Sync"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Make sure to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"--home")," flag when initializing and starting ",(0,r.kt)("inlineCode",{parentName:"p"},"gaiad")," if mounting quicksync data externally."),(0,r.kt)("h5",{id:"create-gaia-home--config"},"Create Gaia Home & Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir $HOME/.gaia/config -p\n")),(0,r.kt)("h5",{id:"start-quicksync-download"},"Start Quicksync Download"),(0,r.kt)("p",null,"Node Operators can decide how much of historical state they want to preserve by choosing between ",(0,r.kt)("inlineCode",{parentName:"p"},"Pruned"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Default"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Archive"),". See the ",(0,r.kt)("a",{parentName:"p",href:"https://quicksync.io/networks/cosmos.html"},"Quicksync.io downloads")," for up-to-date snapshot sizes."),(0,r.kt)("h6",{id:"default"},"Default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"sudo apt-get install wget liblz4-tool aria2 jq -y\n\nexport URL=`curl -L https://quicksync.io/cosmos.json|jq -r '.[] |select(.file==\"cosmoshub-4-default\")|.url'`\n\necho $URL\n\ncd $HOME/.gaia\n\naria2c -x5 $URL\n")),(0,r.kt)("h6",{id:"pruned"},"Pruned"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"sudo apt-get install wget liblz4-tool aria2 jq -y\n\nexport URL=`curl -L https://quicksync.io/cosmos.json|jq -r '.[] |select(.file==\"cosmoshub-4-pruned\")|.url'`\n\necho $URL\n\ncd $HOME/.gaia\n\naria2c -x5 $URL\n")),(0,r.kt)("h6",{id:"archive"},"Archive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"sudo apt-get install wget liblz4-tool aria2 jq -y\n\nexport URL=`curl -L https://quicksync.io/cosmos.json|jq -r '.[] |select(.file==\"cosmoshub-4-archive\")|.url'`\n\necho $URL\n\ncd $HOME/.gaia\n\naria2c -x5 $URL\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The download logs should look like the following")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"01/11 07:48:17 [NOTICE] Downloading 1 item(s)\n[#7cca5a 484MiB/271GiB(0%) CN:5 DL:108MiB ETA:42m41s]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Completed Download Process:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[#7cca5a 271GiB/271GiB(99%) CN:1 DL:77MiB]\n01/11 08:32:19 [NOTICE] Download complete: /mnt/quicksync_01/cosmoshub-4-pruned.20220111.0310.tar.lz4\n\nDownload Results:\ngid   |stat|avg speed  |path/URI\n======+====+===========+=======================================================\n7cca5a|OK  |   105MiB/s|/mnt/quicksync_01/cosmoshub-4-pruned.20220111.0310.tar.lz4\n\nStatus Legend:\n(OK):download completed.\n")),(0,r.kt)("h5",{id:"unzip"},"Unzip"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lz4 -c -d `basename $URL` | tar xf -\n")),(0,r.kt)("h5",{id:"copy-address-book-quicksync"},"Copy Address Book Quicksync"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://quicksync.io/addrbook.cosmos.json > $HOME/.gaia/config/addrbook.json\n")),(0,r.kt)("h5",{id:"start-gaia"},"Start Gaia"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad start --x-crisis-skip-assert-invariants\n\n")))}d.isMDXComponent=!0}}]);