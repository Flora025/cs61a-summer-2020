(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a=n(48),r=n(0),o=n.n(r),c=n(14),s=n.n(c),i=(n(58),n(6)),l=n(3),u=n.n(l),m=n(10),d=n(15),p=n(16),h=n(19),f=n(17),y=n(20),g=(n(60),n(61),n(62),n(18)),v=n.n(g),E=n(11),b=n.n(E),w=n(25),_=n.n(w),W=n(49),k=n.n(W),T=n(50),j=n.n(T);function O(e){var t=e.fastestWords,n=e.playerIndex;return t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Fastest words typed by each player"),o.a.createElement(k.a,null,t.map(function(e,t){return o.a.createElement(_.a,null,o.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Player"," ",t+1,n===t&&" (you)"))),o.a.createElement("tbody",null,e.map(function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e))}))))})))}n(66),n(67);var S=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={updated:!1},n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){this.state.updated||this.setState({updated:!0})}},{key:"render",value:function(){var e="TypedWord ";return this.state.updated&&this.props.incorrect?e+="both":this.props.incorrect?e+="incorrect":this.state.updated&&(e+="updated"),o.a.createElement("span",{className:e},this.props.word," ")}}]),t}(o.a.PureComponent),x=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).handleClick=function(){n.inputRef.current&&n.inputRef.current.focus()},n.inputRef=o.a.createRef(),n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.inputRef.current&&this.inputRef.current.focus()}},{key:"render",value:function(){var e=this,t=this.props.words.map(function(t,n){var a=e.props.correctWords[n]!==t;return o.a.createElement(S,{key:n,word:t,incorrect:a})});return o.a.createElement("div",{className:"Input"},"And type them below:",o.a.createElement("div",{className:"InputBox",onClick:this.handleClick},t,this.props.active&&o.a.createElement(C,{ref:this.inputRef,active:this.props.active,onChange:this.props.onChange,onWordTyped:this.props.onWordTyped,popPrevWord:this.props.popPrevWord})))}}]),t}(r.Component),C=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).handleKeyDown=function(e){8===e.keyCode&&""===e.target.innerText&&(n.setText(n.props.popPrevWord(),!1),e.preventDefault(),n.handleInput(e))},n.handleInput=function(e){var t=e.target.innerText;if(/\s/.test(t)){for(var a=t.split(/\s/),r=[],o=0;o!==a.length-1;++o){n.props.onWordTyped(a[o])||r.push(a[o])}n.setText(r.join(" ")+a[a.length-1])}else n.props.onChange(t)},n.setText=function(e,t){n.inputRef.current.innerText=e;var a=document.createRange();a.selectNodeContents(n.inputRef.current),a.collapse(t);var r=window.getSelection();r.removeAllRanges(),r.addRange(a)},n.inputRef=o.a.createRef(),n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"focus",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){return o.a.createElement("span",{className:"InputField",ref:this.inputRef,contentEditable:this.props.active,onInput:this.handleInput,onKeyDown:this.handleKeyDown,onPaste:function(e){return e.preventDefault()}})}}]),t}(r.Component);n(68);function N(e){return o.a.createElement("div",{className:"Indicator"},e.text)}var I=function(){return(new Date).getTime()/1e3},L=function(e){return e?e.toFixed(1):"None"};function P(e){var t=e.wpm,n=e.accuracy,a=e.remainingTime;return o.a.createElement("div",{className:"Indicators"},o.a.createElement(N,{text:"WPM: ".concat(L(t))}),o.a.createElement(N,{text:"Accuracy: ".concat(L(n))}),o.a.createElement(N,{text:"Time: ".concat(a)}))}var M=n(7),R=n.n(M);n(69),n(70);function A(e){return o.a.createElement("div",{className:"Entry"},o.a.createElement("span",{className:"Rank"},e.rank),o.a.createElement("span",{className:"Score"},e.score.toFixed(2)),o.a.createElement("span",{className:"Name"},e.name))}function U(){return B.apply(this,arguments)}function B(){return(B=Object(m.a)(u.a.mark(function e(){var t,n,a,r=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"same-origin",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"manual",body:JSON.stringify(n)});case 4:if(200===(a=e.sent).status){e.next=7;break}throw new Error("Error ".concat(a.status,"."));case 7:return e.abrupt("return",a.json());case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function H(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)(function(){e.show?U("/leaderboard").then(function(e){c(e)}):c([])},[e.show]),o.a.createElement(R.a,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.show,onHide:e.onHide},o.a.createElement(R.a.Header,{closeButton:!0},o.a.createElement(R.a.Title,{className:"Header"},"Leaderboard")),o.a.createElement(R.a.Body,null,o.a.createElement("div",{className:"Entries"},o.a.createElement("p",{id:"Title"},"Top WPMs"),a.map(function(e,t){var n=Object(i.a)(e,2),a=n[0],r=n[1];return o.a.createElement(A,{name:a,index:t,rank:t+1,score:r})}))))}var F=n(51),D=n.n(F);n(105);function z(e){return o.a.createElement(R.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.show},o.a.createElement(R.a.Body,null,o.a.createElement("div",{className:"Spinner"},o.a.createElement("p",null,"Looking for opponents..."),o.a.createElement("p",null,e.numPlayers-1," ","other player(s) found so far!"),o.a.createElement(D.a,{animation:"border"}))))}n(106);function q(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{id:"autoCorrectCheckBox",text:"Enable Auto-Correct",value:e.autoCorrect,onChange:e.onAutoCorrectToggle}),o.a.createElement("br",null),o.a.createElement(V,{onClick:e.onRestart}))}function G(e){return o.a.createElement("div",{className:"Options custom-control custom-checkbox"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:e.id,checked:e.value,onChange:e.onChange}),o.a.createElement("label",{className:"custom-control-label",htmlFor:e.id},e.text))}function V(e){return o.a.createElement("div",{className:"Button"},o.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:e.onClick},"Restart"))}n(107);function K(e){var t=function(t){return function(){e.setMode(t)}};return o.a.createElement(R.a,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.show},o.a.createElement(R.a.Header,null,o.a.createElement(R.a.Title,null,"Welcome!")),o.a.createElement(R.a.Body,null,o.a.createElement("p",null,"Welcome to the 61A Typing Test!"),o.a.createElement("p",null,"Select a mode below to begin.")),o.a.createElement(R.a.Footer,null,o.a.createElement(v.a,{onClick:t(ce.SINGLE),variant:"primary"},"Single Player"),o.a.createElement(v.a,{onClick:t(ce.WAITING),variant:"warning"},"Multiplayer")))}n(110),n(111);function J(e){var t="Character ";return e.correct?t+="correct":e.wrong&&(t+="wrong"),o.a.createElement("span",{className:t},e.char)}function Y(e){for(var t=e.promptedWords,n=e.typedWords,a=e.currWord,r=[],c=!1,s=0;s!==t.length;++s){var i=t[s],l=n[s];if(l){var u=i===l,m=!0,d=!1,p=void 0;try{for(var h,f=i[Symbol.iterator]();!(m=(h=f.next()).done);m=!0){var y=h.value;r.push(o.a.createElement(J,{key:r.length,char:y,correct:u,wrong:!u}))}}catch(j){d=!0,p=j}finally{try{m||null==f.return||f.return()}finally{if(d)throw p}}r.push(o.a.createElement(J,{key:r.length,char:" "}))}else if(c){var g=!0,v=!1,E=void 0;try{for(var b,w=i[Symbol.iterator]();!(g=(b=w.next()).done);g=!0){var _=b.value;r.push(o.a.createElement(J,{key:r.length,char:_}))}}catch(j){v=!0,E=j}finally{try{g||null==w.return||w.return()}finally{if(v)throw E}}r.push(o.a.createElement(J,{key:r.length,char:" "}))}else{for(var W=0;W!==i.length;++W){var k=a[W]&&i[W]===a[W],T=a[W]&&i[W]!==a[W];r.push(o.a.createElement(J,{key:r.length,char:i[W],correct:k,wrong:T}))}r.push(o.a.createElement(J,{key:r.length,char:" "})),c=!0}}return o.a.createElement("div",{className:"PromptBox"},"Look at the following words:",o.a.createElement("div",{className:"Prompt"},r))}n(112);var X=n(52),Q=n.n(X);function Z(e){var t=e.progress,n=e.playerIndex,a=["info","warning","success","danger"];return o.a.createElement("div",{className:"ProgressBars"},t.map(function(e,t){var r=Object(i.a)(e,2),c=r[0],s=r[1],l=1===c&&"".concat(s.toFixed(2)," seconds"),u=t===n?" (you)":"";return o.a.createElement("div",{className:"ProgressBar",key:t},o.a.createElement(Q.a,{variant:a[t],animated:!0,label:"Player ".concat(t+1).concat(u),now:100*c}),o.a.createElement("div",{className:"barData"},l))}))}n(114);function $(e){var t=e.images,n=e.lastWordLen,a=e.onSubmit,c=Object(r.useState)([]),s=Object(i.a)(c,2),l=s[0],d=s[1],p=Object(r.useState)(""),h=Object(i.a)(p,2),f=h[0],y=h[1],g=Object(r.useState)(I()),v=Object(i.a)(g,1)[0],E=Object(r.useState)(null),b=Object(i.a)(E,2),w=b[0],_=b[1],W=Object(r.useState)(!0),k=Object(i.a)(W,2),T=k[0],j=k[1],O=function(){var e=Object(m.a)(u.a.mark(function e(r){var o,c,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=l.join(" "),e.next=3,U("/analyze",{promptedText:o,typedText:o,startTime:v,endTime:I()});case 3:c=e.sent,s=c.wpm,_(s),y(r),l.length+1===t.length&&r&&r.length===n&&(d(l.concat([r])),y(""),j(!1),a(l.concat([r])));case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();!function(e,t){var n=Object(r.useRef)();Object(r.useEffect)(function(){n.current=e},[e]),Object(r.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])}(O,100);return o.a.createElement("div",{className:"CaptchaChallenge"},"Look at the following words:",o.a.createElement("div",{className:"images"},t.map(function(e,t){return o.a.createElement("img",{className:t===l.length?"activeImage":"",src:e,key:t})})),o.a.createElement("br",null),o.a.createElement(x,{correctWords:l,words:l,onWordTyped:function(e){return""===e||(y(""),d(l.concat([e])),!0)},onChange:O,popPrevWord:function(){return l.length?(d(l.slice(0,l.length-1)),l[l.length-1]):""},active:T}),o.a.createElement("br",null),o.a.createElement("div",{className:"form-group"},o.a.createElement("button",{onClick:function(){a(l.concat([f]))},type:"submit",className:"btn btn-primary"},"Submit"),o.a.createElement(N,{text:"WPM: ".concat(L(w))})))}function ee(e){var t=e.message,n=e.onClick,a=t||"However, you first need to complete this Captcha challenge to validate your WPM. Click the button to receive your challenge.";return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Congratulations! Your WPM is fast enough to place on our leaderboard!"),o.a.createElement("p",null,a),o.a.createElement("div",{className:"form-group",onClick:n},o.a.createElement("button",{type:"button",className:"btn btn-primary"},"Request Challenge")),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"You'll need to type at a speed similar to your current WPM to pass the check. It's OK if you make mistakes or type a bit slower. After you pass the challenge, you won't be asked again for some time."))}function te(e){var t=e.onSubmit,n=Object(r.useRef)(null);return o.a.createElement(o.a.Fragment,null,"Congratulations! Your WPM is fast enough to place on our leaderboard! Enter a name here to associate it with your score:",o.a.createElement("br",null),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(n.current.value)}},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",ref:n,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter username"}),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Please don't name yourself anything inappropriate!")),o.a.createElement("div",{className:"form-group"},o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}function ne(e){var t=e.show,n=e.onHide,a=e.needVerify,c=e.wpm,s=e.onSubmit,l=Object(r.useState)([]),d=Object(i.a)(l,2),p=d[0],h=d[1],f=Object(r.useState)([]),y=Object(i.a)(f,2),g=y[0],v=y[1],E=Object(r.useState)(""),w=Object(i.a)(E,2),_=w[0],W=w[1],k=Object(r.useState)(!a),T=Object(i.a)(k,2),j=T[0],O=T[1],S=Object(r.useRef)(null);!t&&p.length&&h([]);var x=function(){var e=Object(m.a)(u.a.mark(function e(){var t,n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("/request_wpm_challenge",{user:b.a.get("user")});case 2:t=e.sent,n=t.images,a=t.token,r=t.lastWordLen,h(n),v(r),S.current=a;case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,a,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("/claim_wpm_challenge",{user:b.a.get("user"),token:S.current,typed:t,claimedWpm:c});case 2:n=e.sent,a=n.success,r=n.message,o=n.token,a?(O(!0),b.a.set("token",o)):(W("The server said: ".concat(r," Please try again.")),h([]));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N=p.length?o.a.createElement($,{images:p,lastWordLen:g,onSubmit:C}):o.a.createElement(ee,{message:_,onClick:x}),I=j?o.a.createElement(te,{onSubmit:s}):N;return o.a.createElement(R.a,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:t,onHide:n},o.a.createElement(R.a.Header,{closeButton:!0},o.a.createElement(R.a.Title,{className:"Header"},"High Score")),o.a.createElement(R.a.Body,null,I))}var ae=n(23),re=n.n(ae);n(115);function oe(e){var t=e.onClick,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],s=a[1],l=function(){t(c.split(/\s|,/).map(function(e){return e.trim().toLowerCase()}).filter(function(e){return e.length}))};return o.a.createElement("div",{className:"TopicPicker"},o.a.createElement(re.a,{onSubmit:function(e){e.preventDefault(),l()}},o.a.createElement(re.a.Label,null,"Specify topics of interest"),o.a.createElement(re.a.Row,null,o.a.createElement(_.a,null,o.a.createElement(re.a.Control,{placeholder:"Cat, Cats, Kittens, ...",value:c,onChange:function(e){s(e.target.value)}})),o.a.createElement(v.a,{variant:"primary",onClick:l},"Submit")),o.a.createElement(re.a.Text,{className:"text-muted"},"List topics separated by commas.")))}var ce={SINGLE:"single",MULTI:"multi",WELCOME:"welcome",WAITING:"waiting"},se=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).initialize=function(){n.setState({typedWords:[],currWord:"",inputActive:!0,wpm:null,accuracy:null,fastestWords:[]}),U("/request_paragraph",{topics:n.state.topics}).then(function(e){n.state.pigLatin?U("/translate_to_pig_latin",{text:e}).then(function(e){n.setState({promptedWords:e.split(" ")})}):n.setState({promptedWords:e.split(" ")})}),n.setState({startTime:0,currTime:0}),clearInterval(n.timer),n.timer=null},n.restart=function(){n.timer=setInterval(n.updateReadouts,100),n.setState({startTime:I(),currTime:I()})},n.updateReadouts=Object(m.a)(u.a.mark(function e(){var t,a,r,o,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.promptedWords.join(" "),a=n.state.typedWords.join(" "),e.next=4,U("/analyze",{promptedText:t,typedText:a,startTime:n.state.startTime,endTime:I()});case 4:r=e.sent,o=r.wpm,c=r.accuracy,n.setState({wpm:o,accuracy:c,currTime:I()});case 8:case"end":return e.stop()}},e)})),n.reportProgress=function(){var e=n.state.promptedWords.join(" ");U("/report_progress",{id:n.state.id,typed:n.state.typedWords.join(" "),prompt:e})},n.requestProgress=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("/request_progress",{targets:n.state.playerList});case 2:t=e.sent,n.setState({progress:t}),t.every(function(e){return 1===Object(i.a)(e,1)[0]})&&(clearInterval(n.multiplayerTimer),n.fastestWords());case 5:case"end":return e.stop()}},e)})),n.fastestWords=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("/fastest_words",{targets:n.state.playerList,prompt:n.state.promptedWords.join(" ")});case 2:t=e.sent,n.setState({fastestWords:t});case 4:case"end":return e.stop()}},e)})),n.popPrevWord=function(){if(0!==n.state.typedWords.length){var e=n.state.typedWords[n.state.typedWords.length-1];return n.setState(function(e){return{typedWords:e.typedWords.slice(0,e.typedWords.length-1)}}),e}return""},n.handleWordTyped=function(e){if(!e)return!0;var t=n.state.typedWords.length;return n.setState(function(a){return a.autoCorrect&&e!==a.promptedWords[t]&&U("/autocorrect",{word:e}).then(function(a){n.setState(function(n){if(n.typedWords[t]!==e)return{};var r=n.typedWords;return r[t]=a,{typedWords:r}})}),{typedWords:a.typedWords.concat([e]),currWord:""}},function(){n.updateReadouts(),n.state.mode===ce.MULTI&&n.reportProgress()}),!0},n.handleChange=function(){var e=Object(m.a)(u.a.mark(function e(t){var a,r,o,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setState({currWord:t}),n.state.typedWords.length+1!==n.state.promptedWords.length||n.state.promptedWords[n.state.promptedWords.length-1]!==t||n.state.mode!==ce.SINGLE&&n.state.typedWords.concat([t]).join(" ")!==n.state.promptedWords.join(" ")){e.next=14;break}return clearInterval(n.timer),n.setState({inputActive:!1}),n.handleWordTyped(t),a=b.a.get("token")||null,e.next=8,U("/check_leaderboard_eligibility",{user:b.a.get("user"),wpm:n.state.wpm,token:a});case 8:r=e.sent,o=r.eligible,c=r.needVerify,o&&100===n.state.accuracy&&n.setState({showUsernameEntry:!0,needVerify:c}),e.next=15;break;case 14:n.timer||n.restart();case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handlePigLatinToggle=function(){n.initialize(),n.setState(function(e){return{autoCorrect:!1,pigLatin:!e.pigLatin}})},n.handleAutoCorrectToggle=function(){n.initialize(),n.setState(function(e){return{autoCorrect:!e.autoCorrect,pigLatin:!1}})},n.setMode=function(e){n.setState({mode:e}),e===ce.WAITING&&(n.multiplayerTimer=setInterval(n.requestMatch,1e3))},n.requestMatch=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("/request_match",{id:n.state.id});case 2:(t=e.sent).start?(n.setState({mode:ce.MULTI,playerList:t.players,numPlayers:t.players.length,promptedWords:t.text.split(" "),progress:new Array(t.players.length).fill([0,0]),pigLatin:!1,autoCorrect:!1}),clearInterval(n.multiplayerTimer),n.multiplayerTimer=setInterval(n.requestProgress,500)):n.setState({numPlayers:t.numWaiting});case 4:case"end":return e.stop()}},e)})),n.toggleLeaderBoard=function(){n.setState(function(e){return{showLeaderboard:!e.showLeaderboard}})},n.handleSetTopics=function(e){n.setState({topics:e},n.initialize)},n.handleUsernameSubmission=function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("/record_wpm",{name:t,user:b.a.get("user"),wpm:n.state.wpm,token:b.a.get("token")||null});case 2:n.hideUsernameEntry();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.hideUsernameEntry=function(){n.setState({showUsernameEntry:!1})},n.state={promptedWords:["Please wait - loading!"],typedWords:[],wpm:null,accuracy:null,startTime:0,currTime:0,pigLatin:!1,autoCorrect:!1,currWord:"",inputActive:!1,numPlayers:1,mode:ce.SINGLE,playerList:[],progress:[],showLeaderboard:!1,fastestWords:[],showUsernameEntry:!1,needVerify:!1,topics:[]},n.timer=null,n.multiplayerTimer=null,U("/request_id").then(function(e){null!==e&&n.setState({id:e.toString(),mode:ce.WELCOME})}),b.a.get("user")||b.a.set("user",function(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",a=0;a<e;a++){var r=Math.floor(Math.random()*t.length);n+=t.substring(r,r+1)}return n}(32)),n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.initialize()}},{key:"componentDidUpdate",value:function(){this.state.mode===ce.WELCOME||this.state.mode===ce.WAITING||this.state.showLeaderboard?document.getElementById("app-root").style.filter="blur(5px)":document.getElementById("app-root").style.filter="none"}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),clearInterval(this.multiplayerTimer)}},{key:"render",value:function(){var e=this,t=this.state,n=t.wpm,a=t.accuracy,r=t.numPlayers,c=t.startTime,s=t.currTime,i=t.playerList,l=t.id,u=t.fastestWords,m=(s-c).toFixed(1),d=i.indexOf(l);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App container",id:"app-root"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("br",null),o.a.createElement("div",{className:"LeaderboardButton"},o.a.createElement(v.a,{onClick:function(){return e.toggleLeaderBoard(!1)},variant:"outline-dark"},"Leaderboard")),o.a.createElement("h1",{className:"display-4 mainTitle"},o.a.createElement("b",null,"C"),"S61A ",o.a.createElement("b",null,"A"),"utocorrected ",o.a.createElement("b",null,"T"),"yping ",o.a.createElement("b",null,"S"),"oftware"),o.a.createElement("br",null),o.a.createElement(P,{wpm:n,accuracy:a,remainingTime:m}),this.state.mode===ce.MULTI&&o.a.createElement(Z,{numPlayers:r,progress:this.state.progress,playerIndex:d}),o.a.createElement("br",null),o.a.createElement(Y,{promptedWords:this.state.promptedWords,typedWords:this.state.typedWords,currWord:this.state.currWord}),o.a.createElement("br",null),o.a.createElement(x,{key:this.state.promptedWords[0],correctWords:this.state.promptedWords,words:this.state.typedWords,onWordTyped:this.handleWordTyped,onChange:this.handleChange,popPrevWord:this.popPrevWord,active:this.state.inputActive}),o.a.createElement("br",null),this.state.mode!==ce.MULTI&&o.a.createElement(o.a.Fragment,null,o.a.createElement(q,{pigLatin:this.state.pigLatin,onPigLatinToggle:this.handlePigLatinToggle,autoCorrect:this.state.autoCorrect,onAutoCorrectToggle:this.handleAutoCorrectToggle,onRestart:this.initialize}),o.a.createElement("br",null),o.a.createElement(oe,{onClick:this.handleSetTopics})),this.state.mode===ce.MULTI&&o.a.createElement(O,{playerIndex:d,fastestWords:u})))),o.a.createElement(K,{show:this.state.mode===ce.WELCOME,setMode:this.setMode,toggleFindingOpponents:this.toggleFindingOpponents}),o.a.createElement(z,{show:this.state.mode===ce.WAITING,numPlayers:this.state.numPlayers}),o.a.createElement(H,{show:this.state.showLeaderboard,onHide:this.toggleLeaderBoard}),o.a.createElement(ne,{key:this.state.showUsernameEntry,wpm:this.state.wpm,show:this.state.showUsernameEntry,needVerify:this.state.needVerify,onHide:this.hideUsernameEntry,onSubmit:this.handleUsernameSubmission}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(){var e=Object(a.a)(["\n _________________________________________ \n/ Hello adventurous student! If you want  | to see the source of the GUI, go to Dev |\n| Tools => Sources => Page => top =>      |\n| [this domain] => static => js and       |\n enjoy!                                  /\n ----------------------------------------- \n                                  _\n                            |                             | |\n                             | |\n        |                   | |\n       /, ~                / /\n      X     `-.....-------./ /\n       ~-. ~  ~              |\n                       /    |\n             /_     ___   /\n           | / ~~~~~    |\n           | |         || |\n           | |        || )\n          (_/ (_/      ((_/\n"],["\n _________________________________________ \n/ Hello adventurous student! If you want  \\\n| to see the source of the GUI, go to Dev |\n| Tools => Sources => Page => top =>      |\n| [this domain] => static => js and       |\n\\ enjoy!                                  /\n ----------------------------------------- \n  \\\n   \\\n    \\                         _\n     \\                       | \\\n      \\                      | |\n                             | |\n        |\\                   | |\n       /, ~\\                / /\n      X     \\`-.....-------./ /\n       ~-. ~  ~              |\n          \\             /    |\n           \\  /_     ___\\   /\n           | /\\ ~~~~~   \\ |\n           | | \\        || |\n           | |\\ \\       || )\n          (_/ (_/      ((_/\n"]);return ie=function(){return e},e}document.body.prepend(new Comment(String.raw(ie()))),U("/favicon").then(function(e){document.querySelector('link[rel="shortcut icon"]').href=e}),s.a.render(o.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,n){e.exports=n(123)},58:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.c5c6e95b.chunk.js.map