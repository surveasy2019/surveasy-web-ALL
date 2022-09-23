(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"000b":function(t,e,n){"use strict";n.d(e,"a",(function(){return pe}));var r=n("5606"),i=n("4fc1"),o=n("1fd5"),s=n("ffa6"),a=n("9dbb");const c="@firebase/installations",u="0.5.1",l=1e4,h="w:"+u,f="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",p=36e5,g="installations",m="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new o["b"](g,m,v);function b(t){return t instanceof o["c"]&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w({projectId:t}){return`${d}/projects/${t}/installations`}function _(t){return{token:t.token,requestStatus:2,expiresIn:S(t.expiresIn),creationTime:Date.now()}}async function E(t,e){const n=await e.json(),r=n.error;return y.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function O(t,{refreshToken:e}){const n=I(t);return n.append("Authorization",x(e)),n}async function T(t){const e=await t();return e.status>=500&&e.status<600?t():e}function S(t){return Number(t.replace("s","000"))}function x(t){return`${f} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k(t,{fid:e}){const n=w(t),r=I(t),i={fid:e,authVersion:f,appId:t.appId,sdkVersion:h},o={method:"POST",headers:r,body:JSON.stringify(i)},s=await T(()=>fetch(n,o));if(s.ok){const t=await s.json(),n={fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:_(t.authToken)};return n}throw await E("Create Installation",s)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t){return new Promise(e=>{setTimeout(e,t)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=/^[cdef][\w-]{21}$/,R="";function N(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=P(t);return j.test(n)?n:R}catch(t){return R}}function P(t){const e=C(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new Map;function M(t,e){const n=D(t);U(n,e),F(n,e)}function U(t,e){const n=L.get(t);if(n)for(const r of n)r(e)}function F(t,e){const n=B();n&&n.postMessage({key:t,fid:e}),$()}let V=null;function B(){return!V&&"BroadcastChannel"in self&&(V=new BroadcastChannel("[Firebase] FID Change"),V.onmessage=t=>{U(t.data.key,t.data.fid)}),V}function $(){0===L.size&&V&&(V.close(),V=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q="firebase-installations-database",z=1,G="firebase-installations-store";let H=null;function K(){return H||(H=Object(a["openDb"])(q,z,t=>{switch(t.oldVersion){case 0:t.createObjectStore(G)}})),H}async function W(t,e){const n=D(t),r=await K(),i=r.transaction(G,"readwrite"),o=i.objectStore(G),s=await o.get(n);return await o.put(e,n),await i.complete,s&&s.fid===e.fid||M(t,e.fid),e}async function J(t){const e=D(t),n=await K(),r=n.transaction(G,"readwrite");await r.objectStore(G).delete(e),await r.complete}async function X(t,e){const n=D(t),r=await K(),i=r.transaction(G,"readwrite"),o=i.objectStore(G),s=await o.get(n),a=e(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.complete,!a||s&&s.fid===a.fid||M(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){let e;const n=await X(t,n=>{const r=Y(n),i=Z(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===R?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Y(t){const e=t||{fid:N(),registrationStatus:0};return rt(e)}function Z(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(y.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tt(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:et(t)}:{installationEntry:e}}async function tt(t,e){try{const n=await k(t,e);return W(t,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await J(t):await W(t,{fid:e.fid,registrationStatus:0}),n}}async function et(t){let e=await nt(t);while(1===e.registrationStatus)await A(100),e=await nt(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Q(t);return n||e}return e}function nt(t){return X(t,t=>{if(!t)throw y.create("installation-not-found");return rt(t)})}function rt(t){return it(t)?{fid:t.fid,registrationStatus:0}:t}function it(t){return 1===t.registrationStatus&&t.registrationTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot({appConfig:t,platformLoggerProvider:e},n){const r=st(t,n),i=O(t,n),o=e.getImmediate({optional:!0});o&&i.append("x-firebase-client",o.getPlatformInfoString());const s={installation:{sdkVersion:h}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await T(()=>fetch(r,a));if(c.ok){const t=await c.json(),e=_(t);return e}throw await E("Generate Auth Token",c)}function st(t,{fid:e}){return`${w(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e=!1){let n;const r=await X(t.appConfig,r=>{if(!ht(r))throw y.create("not-registered");const i=r.authToken;if(!e&&ft(i))return r;if(1===i.requestStatus)return n=ct(t,e),r;{if(!navigator.onLine)throw y.create("app-offline");const e=pt(r);return n=lt(t,e),e}}),i=n?await n:r.authToken;return i}async function ct(t,e){let n=await ut(t.appConfig);while(1===n.authToken.requestStatus)await A(100),n=await ut(t.appConfig);const r=n.authToken;return 0===r.requestStatus?at(t,e):r}function ut(t){return X(t,t=>{if(!ht(t))throw y.create("not-registered");const e=t.authToken;return gt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function lt(t,e){try{const n=await ot(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await W(t.appConfig,r),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await W(t.appConfig,n)}else await J(t.appConfig);throw n}}function ht(t){return void 0!==t&&2===t.registrationStatus}function ft(t){return 2===t.requestStatus&&!dt(t)}function dt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p}function pt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gt(t){return 1===t.requestStatus&&t.requestTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t){const e=t,{installationEntry:n,registrationPromise:r}=await Q(e.appConfig);return r?r.catch(console.error):at(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e=!1){const n=t;await yt(n.appConfig);const r=await at(n,e);return r.token}async function yt(t){const{registrationPromise:e}=await Q(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(t){if(!t||!t.options)throw wt("App Configuration");if(!t.name)throw wt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wt(t){return y.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="installations",Et="installations-internal",It=t=>{const e=t.getProvider("app").getImmediate(),n=bt(e),i=Object(r["b"])(e,"platform-logger"),o={app:e,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()};return o},Ot=t=>{const e=t.getProvider("app").getImmediate(),n=Object(r["b"])(e,_t).getImmediate(),i={getId:()=>mt(n),getToken:t=>vt(n,t)};return i};function Tt(){Object(r["c"])(new s["a"](_t,It,"PUBLIC")),Object(r["c"])(new s["a"](Et,Ot,"PRIVATE"))}Tt(),Object(r["g"])(c,u);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const St="analytics",xt="firebase_id",kt="origin",At=6e4,Ct="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jt="https://www.googletagmanager.com/gtag/js",Rt=new i["b"]("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(t){return Promise.all(t.map(t=>t.catch(t=>t)))}function Pt(t,e){const n=document.createElement("script");n.src=`${jt}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Dt(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Lt(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const t=await Nt(n),r=t.find(t=>t.measurementId===i);r&&await e[r.appId]}}catch(a){Rt.error(a)}t("config",i,o)}async function Mt(t,e,n,r,i){try{let o=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await Nt(n);for(const n of t){const t=r.find(t=>t.measurementId===n),i=t&&e[t.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Rt.error(o)}}function Ut(t,e,n,r){async function i(i,o,s){try{"event"===i?await Mt(t,e,n,o,s):"config"===i?await Lt(t,e,n,r,o,s):t("set",o)}catch(a){Rt.error(a)}}return i}function Ft(t,e,n,r,i){let o=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=Ut(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function Vt(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(jt))return e;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},$t=new o["b"]("analytics","Analytics",Bt),qt=30,zt=1e3;class Gt{constructor(t={},e=zt){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ht=new Gt;function Kt(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Wt(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Kt(r)},o=Ct.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let t="";try{const n=await s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw $t.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}async function Jt(t,e=Ht,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw $t.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw $t.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Zt;return setTimeout(async()=>{a.abort()},void 0!==n?n:At),Xt({appId:r,apiKey:i,measurementId:o},s,a,e)}async function Xt(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Ht){const{appId:s,measurementId:a}=t;try{await Qt(r,e)}catch(c){if(a)return Rt.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+a+` provided in the "measurementId" field in the local Firebase config. [${c.message}]`),{appId:s,measurementId:a};throw c}try{const e=await Wt(t);return i.deleteThrottleMetadata(s),e}catch(c){if(!Yt(c)){if(i.deleteThrottleMetadata(s),a)return Rt.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+a+` provided in the "measurementId" field in the local Firebase config. [${c.message}]`),{appId:s,measurementId:a};throw c}const e=503===Number(c.customData.httpStatus)?Object(o["f"])(n,i.intervalMillis,qt):Object(o["f"])(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+e,backoffCount:n+1};return i.setThrottleMetadata(s,u),Rt.debug(`Calling attemptFetch again in ${e} millis`),Xt(t,u,r,i)}}function Qt(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Yt(t){if(!(t instanceof o["c"])||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class Zt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(){if(!Object(o["q"])())return Rt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Object(o["x"])()}catch(t){return Rt.warn($t.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}async function ee(t,e,n,r,i,o,s){var a;const c=Jt(t);c.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Rt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>Rt.error(t)),e.push(c);const u=te().then(t=>t?r.getId():void 0),[l,h]=await Promise.all([c,u]);Vt()||Pt(o,l.measurementId),i("js",new Date);const f=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return f[kt]="firebase",f.update=!0,null!=h&&(f[xt]=h),i("config",l.measurementId,f),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.app=t}_delete(){return delete re[this.app.options.appId],Promise.resolve()}}let re={},ie=[];const oe={};let se,ae,ce="dataLayer",ue="gtag",le=!1;function he(){const t=[];if(Object(o["m"])()&&t.push("This is a browser extension environment."),Object(o["d"])()||t.push("Cookies are not available."),t.length>0){const e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});Rt.warn(n.message)}}function fe(t,e,n){he();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw $t.create("no-api-key");Rt.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+t.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=re[r])throw $t.create("already-exists",{id:r});if(!le){Dt(ce);const{wrappedGtag:t,gtagCore:e}=Ft(re,ie,oe,ce,ue);ae=t,se=e,le=!0}re[r]=ee(t,ie,oe,e,se,ce,n);const i=new ne(t);return i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}function pe(t=Object(r["e"])()){t=Object(o["k"])(t);const e=Object(r["b"])(t,St);return e.isInitialized()?e.getImmediate():ge(t)}function ge(t,e={}){const n=Object(r["b"])(t,St);if(n.isInitialized()){const t=n.getImmediate();if(Object(o["i"])(e,n.getOptions()))return t;throw $t.create("already-initialized")}const i=n.initialize({options:e});return i}function me(t,e,n,r){t=Object(o["k"])(t),de(ae,re[t.app.options.appId],e,n,r).catch(t=>Rt.error(t))}const ve="@firebase/analytics",ye="0.7.1";function be(){function t(t){try{const e=t.getProvider(St).getImmediate();return{logEvent:(t,n,r)=>me(e,t,n,r)}}catch(e){throw $t.create("interop-component-reg-failed",{reason:e})}}Object(r["c"])(new s["a"](St,(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return fe(n,r,e)},"PUBLIC")),Object(r["c"])(new s["a"]("analytics-internal",t,"PRIVATE")),Object(r["g"])(ve,ye)}be()},"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"0366":function(t,e,n){var r=n("59ed");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"04d1":function(t,e,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=a(e),u)try{return l(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ca})),n.d(e,"b",(function(){return aa})),n.d(e,"c",(function(){return Xo})),n.d(e,"d",(function(){return ia})),n.d(e,"e",(function(){return Qo})),n.d(e,"f",(function(){return Zs})),n.d(e,"g",(function(){return ea})),n.d(e,"h",(function(){return ts})),n.d(e,"i",(function(){return Ks})),n.d(e,"j",(function(){return Gs})),n.d(e,"k",(function(){return Bs})),n.d(e,"l",(function(){return na})),n.d(e,"m",(function(){return ra})),n.d(e,"n",(function(){return qs}));var r=n("5606"),i=n("ffa6"),o=n("4fc1"),s=n("1fd5"),a=n("8f6b");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new o["b"]("@firebase/firestore");function h(){return l.logLevel}function f(t,...e){if(l.logLevel<=o["a"].DEBUG){const n=e.map(g);l.debug(`Firestore (${u}): ${t}`,...n)}}function d(t,...e){if(l.logLevel<=o["a"].ERROR){const n=e.map(g);l.error(`Firestore (${u}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=o["a"].WARN){const n=e.map(g);l.warn(`Firestore (${u}): ${t}`,...n)}}function g(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw d(e),new Error(e)}function v(t,e){t||m()}function y(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(c.UNAUTHENTICATED))}shutdown(){}}class O{constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new _;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},s=t=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(t=>s(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new E(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new c(t)}}class T{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class S{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new T(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */x.T=-1;class A{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=k(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function C(t,e){return t<e?-1:t>e?1:0}function j(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return R.fromMillis(Date.now())}static fromDate(t){return R.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new R(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new R(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function D(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function L(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,e,n){void 0===e?e=0:e>t.length&&m(),void 0===n?n=t.length-e:n>t.length-e&&m(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===M.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof M?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class U extends M{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new w(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new U(e)}static emptyPath(){return new U([])}}const F=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class V extends M{construct(t,e,n){return new V(t,e,n)}static isValidIdentifier(t){return F.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),V.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new V(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new w(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new w(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new w(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new w(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new V(e)}static emptyPath(){return new V([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.fields=t,t.sort(V.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return j(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new $(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new $(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$.EMPTY_BYTE_STRING=new $("");const q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function z(t){if(v(!!t),"string"==typeof t){let e=0;const n=q.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:G(t.seconds),nanos:G(t.nanos)}}function G(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function H(t){return"string"==typeof t?$.fromBase64String(t):$.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function W(t){const e=t.mapValue.fields.__previous_value__;return K(e)?W(e):e}function J(t){const e=z(t.mapValue.fields.__local_write_time__.timestampValue);return new R(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return null==t}function Q(t){return 0===t&&1/t==-1/0}function Y(t){return"number"==typeof t&&Number.isInteger(t)&&!Q(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.path=t}static fromPath(t){return new Z(U.fromString(t))}static fromName(t){return new Z(U.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Z(new U(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?K(t)?4:10:m()}function et(t,e){const n=tt(t);if(n!==tt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return J(t).isEqual(J(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=z(t.timestampValue),r=z(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return H(t.bytesValue).isEqual(H(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return G(t.geoPointValue.latitude)===G(e.geoPointValue.latitude)&&G(t.geoPointValue.longitude)===G(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return G(t.integerValue)===G(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=G(t.doubleValue),r=G(e.doubleValue);return n===r?Q(n)===Q(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return j(t.arrayValue.values||[],e.arrayValue.values||[],et);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(P(n)!==P(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!et(n[i],r[i])))return!1;return!0}(t,e);default:return m()}}function nt(t,e){return void 0!==(t.values||[]).find(t=>et(t,e))}function rt(t,e){const n=tt(t),r=tt(e);if(n!==r)return C(n,r);switch(n){case 0:return 0;case 1:return C(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=G(t.integerValue||t.doubleValue),r=G(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return it(t.timestampValue,e.timestampValue);case 4:return it(J(t),J(e));case 5:return C(t.stringValue,e.stringValue);case 6:return function(t,e){const n=H(t),r=H(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=C(n[i],r[i]);if(0!==t)return t}return C(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=C(G(t.latitude),G(e.latitude));return 0!==n?n:C(G(t.longitude),G(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=rt(n[i],r[i]);if(t)return t}return C(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=C(r[s],o[s]);if(0!==t)return t;const e=rt(n[r[s]],i[o[s]]);if(0!==e)return e}return C(r.length,o.length)}(t.mapValue,e.mapValue);default:throw m()}}function it(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return C(t,e);const n=z(t),r=z(e),i=C(n.seconds,r.seconds);return 0!==i?i:C(n.nanos,r.nanos)}function ot(t){return st(t)}function st(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=z(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?H(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=st(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${st(t.fields[i])}`;return n+"}"}(t.mapValue):m();var e,n}function at(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ct(t){return!!t&&"integerValue"in t}function ut(t){return!!t&&"arrayValue"in t}function lt(t){return!!t&&"nullValue"in t}function ht(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ft(t){return!!t&&"mapValue"in t}function dt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return D(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=dt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ft(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dt(e)}setAll(t){let e=V.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=dt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ft(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return et(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ft(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){D(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new pt(dt(this.value))}}function gt(t){const e=[];return D(t.fields,(t,n)=>{const r=new V([t]);if(ft(n)){const t=gt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new B(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new mt(t,0,N.min(),pt.empty(),0)}static newFoundDocument(t,e,n){return new mt(t,1,e,n,0)}static newNoDocument(t,e){return new mt(t,2,e,pt.empty(),0)}static newUnknownDocument(t,e){return new mt(t,3,e,pt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new mt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.A=null}}function yt(t,e=null,n=[],r=[],i=null,o=null,s=null){return new vt(t,e,n,r,i,o,s)}function bt(t){const e=y(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Ot(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),X(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Pt(e.startAt)),e.endAt&&(t+="|ub:",t+=Pt(e.endAt)),e.A=t}return e.A}function wt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`;var e}).join(", ")}]`),X(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Pt(t.startAt)),t.endAt&&(e+=", endAt: "+Pt(t.endAt)),`Target(${e})`}function _t(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Lt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!et(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ut(t.startAt,e.startAt)&&Ut(t.endAt,e.endAt)}function Et(t){return Z.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class It extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Tt(t,e,n):"array-contains"===e?new At(t,n):"in"===e?new Ct(t,n):"not-in"===e?new jt(t,n):"array-contains-any"===e?new Rt(t,n):new It(t,e,n)}static R(t,e,n){return"in"===e?new St(t,n):new xt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(rt(e,this.value)):null!==e&&tt(this.value)===tt(e)&&this.P(rt(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return m()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Ot(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}class Tt extends It{constructor(t,e,n){super(t,e,n),this.key=Z.fromName(n.referenceValue)}matches(t){const e=Z.comparator(t.key,this.key);return this.P(e)}}class St extends It{constructor(t,e){super(t,"in",e),this.keys=kt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class xt extends It{constructor(t,e){super(t,"not-in",e),this.keys=kt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function kt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>Z.fromName(t.referenceValue))}class At extends It{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ut(e)&&nt(e.arrayValue,this.value)}}class Ct extends It{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&nt(this.value.arrayValue,e)}}class jt extends It{constructor(t,e){super(t,"not-in",e)}matches(t){if(nt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!nt(this.value.arrayValue,e)}}class Rt extends It{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ut(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>nt(this.value.arrayValue,t))}}class Nt{constructor(t,e){this.position=t,this.before=e}}function Pt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ot(t)).join(",")}`}class Dt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Mt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?Z.comparator(Z.fromName(s.referenceValue),n.key):rt(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Ut(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!et(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Vt(t,e,n,r,i,o,s,a){return new Ft(t,e,n,r,i,o,s,a)}function Bt(t){return new Ft(t)}function $t(t){return!X(t.limit)&&"F"===t.limitType}function qt(t){return!X(t.limit)&&"L"===t.limitType}function zt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Gt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Ht(t){return null!==t.collectionGroup}function Kt(t){const e=y(t);if(null===e.V){e.V=[];const t=Gt(e),n=zt(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Dt(t)),e.V.push(new Dt(V.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Dt(V.keyField(),t))}}}return e.V}function Wt(t){const e=y(t);if(!e.S)if("F"===e.limitType)e.S=yt(e.path,e.collectionGroup,Kt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Kt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Dt(i.field,e))}const n=e.endAt?new Nt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Nt(e.startAt.position,!e.startAt.before):null;e.S=yt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Jt(t,e,n){return new Ft(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xt(t,e){return _t(Wt(t),Wt(e))&&t.limitType===e.limitType}function Qt(t){return`${bt(Wt(t))}|lt:${t.limitType}`}function Yt(t){return`Query(target=${wt(Wt(t))}; limitType=${t.limitType})`}function Zt(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Z.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Mt(t.startAt,Kt(t),e))&&(!t.endAt||!Mt(t.endAt,Kt(t),e))}(t,e)}function te(t){return(e,n)=>{let r=!1;for(const i of Kt(t)){const t=ee(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ee(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?rt(r,i):m()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return m()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Q(e)?"-0":e}}function re(t){return{integerValue:""+t}}function ie(t,e){return Y(e)?re(e):ne(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this._=void 0}}function se(t,e,n){return t instanceof ue?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof le?he(t,e):t instanceof fe?de(t,e):function(t,e){const n=ce(t,e),r=ge(n)+ge(t.C);return ct(n)&&ct(t.C)?re(r):ne(t.N,r)}(t,e)}function ae(t,e,n){return t instanceof le?he(t,e):t instanceof fe?de(t,e):n}function ce(t,e){return t instanceof pe?ct(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ue extends oe{}class le extends oe{constructor(t){super(),this.elements=t}}function he(t,e){const n=me(e);for(const r of t.elements)n.some(t=>et(t,r))||n.push(r);return{arrayValue:{values:n}}}class fe extends oe{constructor(t){super(),this.elements=t}}function de(t,e){let n=me(e);for(const r of t.elements)n=n.filter(t=>!et(t,r));return{arrayValue:{values:n}}}class pe extends oe{constructor(t,e){super(),this.N=t,this.C=e}}function ge(t){return G(t.integerValue||t.doubleValue)}function me(t){return ut(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e){this.field=t,this.transform=e}}function ye(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof le&&e instanceof le||t instanceof fe&&e instanceof fe?j(t.elements,e.elements,et):t instanceof pe&&e instanceof pe?et(t.C,e.C):t instanceof ue&&e instanceof ue}(t.transform,e.transform)}class be{constructor(t,e){this.version=t,this.transformResults=e}}class we{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new we}static exists(t){return new we(void 0,t)}static updateTime(t){return new we(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _e(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ee{}function Ie(t,e,n){t instanceof ke?function(t,e,n){const r=t.value.clone(),i=je(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!_e(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=je(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ce(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Oe(t,e,n){t instanceof ke?function(t,e,n){if(!_e(t.precondition,e))return;const r=t.value.clone(),i=Re(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(xe(e),r).setHasLocalMutations()}(t,e,n):t instanceof Ae?function(t,e,n){if(!_e(t.precondition,e))return;const r=Re(t.fieldTransforms,n,e),i=e.data;i.setAll(Ce(t)),i.setAll(r),e.convertToFoundDocument(xe(e),i).setHasLocalMutations()}(t,e,n):function(t,e){_e(t.precondition,e)&&e.convertToNoDocument(N.min())}(t,e)}function Te(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ce(r.transform,t||null);null!=i&&(null==n&&(n=pt.empty()),n.set(r.field,i))}return n||null}function Se(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&j(t,e,(t,e)=>ye(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function xe(t){return t.isFoundDocument()?t.version:N.min()}class ke extends Ee{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ae extends Ee{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ce(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function je(t,e,n){const r=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,ae(s,a,n[i]))}return r}function Re(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,se(t,o,e))}return r}class Ne extends Ee{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Pe extends Ee{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,Me;function Ue(t){switch(t){case b.OK:return m();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return m()}}function Fe(t){if(void 0===t)return d("GRPC error has no .code"),b.UNKNOWN;switch(t){case Le.OK:return b.OK;case Le.CANCELLED:return b.CANCELLED;case Le.UNKNOWN:return b.UNKNOWN;case Le.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Le.INTERNAL:return b.INTERNAL;case Le.UNAVAILABLE:return b.UNAVAILABLE;case Le.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Le.NOT_FOUND:return b.NOT_FOUND;case Le.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Le.ABORTED:return b.ABORTED;case Le.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Le.DATA_LOSS:return b.DATA_LOSS;default:return m()}}(Me=Le||(Le={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(t,e){this.comparator=t,this.root=e||$e.EMPTY}insert(t,e){return new Ve(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(t){return new Ve(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$e.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Be(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Be(this.root,t,this.comparator,!1)}getReverseIterator(){return new Be(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Be(this.root,t,this.comparator,!0)}}class Be{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class $e{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:$e.RED,this.left=null!=r?r:$e.EMPTY,this.right=null!=i?i:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new $e(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return $e.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw m();if(this.right.isRed())throw m();const t=this.left.check();if(t!==this.right.check())throw m();return t+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1,$e.EMPTY=new class{constructor(){this.size=0}get key(){throw m()}get value(){throw m()}get color(){throw m()}get left(){throw m()}get right(){throw m()}copy(t,e,n,r,i){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(t){this.comparator=t,this.data=new Ve(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ze(this.data.getIterator())}getIteratorFrom(t){return new ze(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof qe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new qe(this.comparator);return e.data=t,e}}class ze{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Ve(Z.comparator);function He(){return Ge}const Ke=new Ve(Z.comparator);function We(){return Ke}const Je=new Ve(Z.comparator);function Xe(){return Je}const Qe=new qe(Z.comparator);function Ye(...t){let e=Qe;for(const n of t)e=e.add(n);return e}const Ze=new qe(C);function tn(){return Ze}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,nn.createSynthesizedTargetChangeForCurrentChange(t,e)),new en(N.min(),n,tn(),He(),Ye())}}class nn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new nn($.EMPTY_BYTE_STRING,e,Ye(),Ye(),Ye())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class on{constructor(t,e){this.targetId=t,this.O=e}}class sn{constructor(t,e,n=$.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class an{constructor(){this.F=0,this.M=ln(),this.L=$.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Ye(),e=Ye(),n=Ye();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:m()}}),new nn(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=ln()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class cn{constructor(t){this.tt=t,this.et=new Map,this.nt=He(),this.st=un(),this.it=new qe(C)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:m()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(Et(t))if(0===n){const n=new Z(t.path);this.at(e,n,mt.newNoDocument(n,N.min()))}else v(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Et(i.target)){const e=new Z(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,mt.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=Ye();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new en(t,e,this.it,this.nt,n);return this.nt=He(),this.st=un(),this.it=new qe(C),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new an,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new qe(C),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new an),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function un(){return new Ve(Z.comparator)}function ln(){return new Ve(Z.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),fn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class dn{constructor(t,e){this.databaseId=t,this.D=e}}function pn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gn(t,e){return t.D?e.toBase64():e.toUint8Array()}function mn(t,e){return pn(t,e.toTimestamp())}function vn(t){return v(!!t),N.fromTimestamp(function(t){const e=z(t);return new R(e.seconds,e.nanos)}(t))}function yn(t,e){return function(t){return new U(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function bn(t){const e=U.fromString(t);return v(zn(e)),e}function wn(t,e){return yn(t.databaseId,e.path)}function _n(t,e){const n=bn(e);if(n.get(1)!==t.databaseId.projectId)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(Tn(n))}function En(t,e){return yn(t.databaseId,e)}function In(t){const e=bn(t);return 4===e.length?U.emptyPath():Tn(e)}function On(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Sn(t,e,n){return{name:wn(t,e),fields:n.value.mapValue.fields}}function xn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:m()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.D?(v(void 0===e||"string"==typeof e),$.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),$.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?b.UNKNOWN:Fe(t.code);return new w(e,t.message||"")}(s);n=new sn(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_n(t,r.document.name),o=vn(r.document.updateTime),s=new pt({mapValue:{fields:r.document.fields}}),a=mt.newFoundDocument(i,o,s),c=r.targetIds||[],u=r.removedTargetIds||[];n=new rn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_n(t,r.document),o=r.readTime?vn(r.readTime):N.min(),s=mt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new rn([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_n(t,r.document),o=r.removedTargetIds||[];n=new rn([],o,i,null)}else{if(!("filter"in e))return m();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new De(r),o=t.targetId;n=new on(o,i)}}return n}function kn(t,e){let n;if(e instanceof ke)n={update:Sn(t,e.key,e.value)};else if(e instanceof Ne)n={delete:wn(t,e.key)};else if(e instanceof Ae)n={update:Sn(t,e.key,e.data),updateMask:qn(e.fieldMask)};else{if(!(e instanceof Pe))return m();n={verify:wn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ue)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof le)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof pe)return{fieldPath:e.field.canonicalString(),increment:n.C};throw m()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:mn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:m()}(t,e.precondition)),n}function An(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?vn(t.updateTime):vn(e);return n.isEqual(N.min())&&(n=vn(e)),new be(n,t.transformResults||[])}(t,e))):[]}function Cn(t,e){return{documents:[En(t,e.path)]}}function jn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=En(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=En(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ht(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NAN"}};if(lt(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ht(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NAN"}};if(lt(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(t.field),op:Un(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Fn(t.field),direction:Mn(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(t,e){return t.D||X(e)?e:{value:e}}(t,e.limit);return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=Dn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Dn(e.endAt)),n}function Rn(t){let e=In(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=Pn(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(t=>function(t){return new Dt(Vn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,X(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Ln(n.startAt));let u=null;return n.endAt&&(u=Ln(n.endAt)),Vt(e,i,s,o,a,"F",c,u)}function Nn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return m()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Pn(t){return t?void 0!==t.unaryFilter?[$n(t)]:void 0!==t.fieldFilter?[Bn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Pn(t)).reduce((t,e)=>t.concat(e)):m():[]}function Dn(t){return{before:t.before,values:t.position}}function Ln(t){const e=!!t.before,n=t.values||[];return new Nt(n,e)}function Mn(t){return hn[t]}function Un(t){return fn[t]}function Fn(t){return{fieldPath:t.canonicalString()}}function Vn(t){return V.fromServerFormat(t.fieldPath)}function Bn(t){return It.create(Vn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return m()}}(t.fieldFilter.op),t.fieldFilter.value)}function $n(t){switch(t.unaryFilter.op){case"IS_NAN":Vn(t.unaryFilter.field);return It.create(r["d"],"==",{doubleValue:NaN});case"IS_NULL":Vn(t.unaryFilter.field);return It.create(r["c"],"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":Vn(t.unaryFilter.field);return It.create(r["g"],"!=",{doubleValue:NaN});case"IS_NOT_NULL":Vn(t.unaryFilter.field);return It.create(r["a"],"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return m()}}function qn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function zn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kn(e)),e=Hn(t.get(n),e);return Kn(e)}function Hn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Kn(t){return t+""}class Wn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Wn.store="owner",Wn.key="owner";class Jn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Jn.store="mutationQueues",Jn.keyPath="userId";class Xn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Xn.store="mutations",Xn.keyPath="batchId",Xn.userMutationsIndex="userMutationsIndex",Xn.userMutationsKeyPath=["userId","batchId"];class Qn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Gn(e)]}static key(t,e,n){return[t,Gn(e),n]}}Qn.store="documentMutations",Qn.PLACEHOLDER=new Qn;class Yn{constructor(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}Yn.store="remoteDocuments",Yn.readTimeIndex="readTimeIndex",Yn.readTimeIndexPath="readTime",Yn.collectionReadTimeIndex="collectionReadTimeIndex",Yn.collectionReadTimeIndexPath=["parentPath","readTime"];class Zn{constructor(t){this.byteSize=t}}Zn.store="remoteDocumentGlobal",Zn.key="remoteDocumentGlobalKey";class tr{constructor(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}}tr.store="targets",tr.keyPath="targetId",tr.queryTargetsIndexName="queryTargetsIndex",tr.queryTargetsKeyPath=["canonicalId","targetId"];class er{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}er.store="targetDocuments",er.keyPath=["targetId","path"],er.documentTargetsIndex="documentTargetsIndex",er.documentTargetsKeyPath=["path","targetId"];class nr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}nr.key="targetGlobalKey",nr.store="targetGlobal";class rr{constructor(t,e){this.collectionId=t,this.parent=e}}rr.store="collectionParents",rr.keyPath=["collectionId","parent"];class ir{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}ir.store="clientMetadata",ir.keyPath="clientId";class or{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}or.store="bundles",or.keyPath="bundleId";class sr{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}sr.store="namedQueries",sr.keyPath="name";Jn.store,Xn.store,Qn.store,Yn.store,tr.store,Wn.store,nr.store,er.store,ir.store,Zn.store,rr.store,or.store,sr.store;const ar="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&m(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ur((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ur?e:ur.resolve(e)}catch(t){return ur.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ur.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ur.reject(e)}static resolve(t){return new ur((e,n)=>{e(t)})}static reject(t){return new ur((e,n)=>{n(t)})}static waitFor(t){return new ur((e,n)=>{let r=0,i=0,o=!1;t.forEach(t=>{++r,t.next(()=>{++i,o&&i===r&&e()},t=>n(t))}),o=!0,i===r&&e()})}static or(t){let e=ur.resolve(!1);for(const n of t)e=e.next(t=>t?ur.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ie(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Oe(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Oe(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(N.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Ye())}isEqual(t){return this.batchId===t.batchId&&j(this.mutations,t.mutations,(t,e)=>Se(t,e))&&j(this.baseMutations,t.baseMutations,(t,e)=>Se(t,e))}}class fr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=Xe();const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new fr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,n,r,i=N.min(),o=N.min(),s=$.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}withSequenceNumber(t){return new dr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.Wt=t}}function gr(t){const e=Rn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Jt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(){this.Gt=new vr}addToCollectionParentIndex(t,e){return this.Gt.add(e),ur.resolve()}getCollectionParents(t,e){return ur.resolve(this.Gt.getEntries(e))}}class vr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new qe(U.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new qe(U.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new yr(t,yr.DEFAULT_COLLECTION_PERCENTILE,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr.DEFAULT_COLLECTION_PERCENTILE=10,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yr.DEFAULT=new yr(41943040,yr.DEFAULT_COLLECTION_PERCENTILE,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yr.DISABLED=new yr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new br(0)}static ie(){return new br(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wr(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==ar)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){D(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return L(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.changes=new _r(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:N.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:mt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ur.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return Z.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Ht(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new Z(e)).next(t=>{let e=We();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=We();return this.Ht.getCollectionParents(t,r).next(o=>ur.forEach(o,o=>{const s=function(t,e){return new Ft(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.Dn(t,s,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=mt.newInvalidDocument(n),r=r.insert(n,i)),Oe(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{Zt(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=Ye();for(const o of e)for(const t of o.mutations)t instanceof Ae&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Ye(),r=Ye();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Or(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(N.min())?this.Fn(t,e):this.On.Pn(t,r).next(i=>{const s=this.Mn(e,i);return($t(e)||qt(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(h()<=o["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Yt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(s.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new qe(te(t));return e.forEach((e,r)=>{Zt(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return h()<=o["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Yt(e)),this.On.getDocumentsMatchingQuery(t,e,N.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Ve(C),this.qn=new _r(t=>bt(t),_t),this.Kn=N.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Ir(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function xr(t,e,n,r){return new Sr(t,e,n,r)}async function kr(t,e){const n=y(t);let r=n.In,i=n.Qn;const o=await n.persistence.runTransaction("Handle user change","readonly",t=>{let o;return n.In.getAllMutationBatches(t).next(s=>(o=s,r=n.persistence.getMutationQueue(e),i=new Ir(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let s=Ye();for(const t of o){n.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return i.Pn(t,s).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),o}function Ar(t,e){const n=y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=ur.resolve();return o.forEach(t=>{s=s.next(()=>r.getEntry(e,t)).next(e=>{const o=n.docVersions.get(t);v(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),s.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function Cr(t){const e=y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function jr(t,e){const n=y(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const s=[];e.targetChanges.forEach((e,o)=>{const a=i.get(o);if(!a)return;s.push(n.ze.removeMatchingKeys(t,e.removedDocuments,o).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,o)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(o,u),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&s.push(n.ze.updateTargetData(t,u))}});let a=He();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),s.push(Rr(t,o,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(N.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));s.push(e)}return ur.waitFor(s).next(()=>o.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}function Rr(t,e,n,r,i){let o=Ye();return n.forEach(t=>o=o.add(t)),e.getEntries(t,o).next(t=>{let o=He();return n.forEach((n,s)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;s.isNoDocument()&&s.version.isEqual(N.min())?(e.removeEntry(n,c),o=o.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(s,c),o=o.insert(n,s)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),o})}function Nr(t,e){const n=y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Pr(t,e){const n=y(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,ur.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new dr(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Dr(t,e,n){const r=y(t),i=r.Un.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!lr(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Lr(t,e,n){const r=y(t);let i=N.min(),o=Ye();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=y(t),i=r.qn.get(n);return void 0!==i?ur.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Wt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{o=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:N.min(),n?o:Ye())).next(t=>({documents:t,Gn:o})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return ur.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:vn(n.createTime)}),ur.resolve()}getNamedQuery(t,e){return ur.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:gr(t.bundledQuery),readTime:vn(t.readTime)}}(e)),ur.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.Zn=new qe(Fr.ts),this.es=new qe(Fr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Fr(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Fr(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new Z(new U([])),n=new Fr(e,t),r=new Fr(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Z(new U([])),n=new Fr(e,t),r=new Fr(e,t+1);let i=Ye();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Fr(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Fr{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return Z.comparator(t.key,e.key)||C(t.ls,e.ls)}static ns(t,e){return C(t.ls,e.ls)||Z.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new qe(Fr.ts)}checkEmpty(t){return ur.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new hr(i,e,n,r);this.In.push(o);for(const s of r)this.ds=this.ds.add(new Fr(s.key,i)),this.Ht.addToCollectionParentIndex(t,s.key.path.popLast());return ur.resolve(o)}lookupMutationBatch(t,e){return ur.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return ur.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return ur.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return ur.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Fr(e,0),r=new Fr(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),ur.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new qe(C);return e.forEach(t=>{const e=new Fr(t,0),r=new Fr(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),ur.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Z.isDocumentKey(i)||(i=i.child(""));const o=new Fr(new Z(i),0);let s=new qe(C);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t.ls)),!0)},o),ur.resolve(this.gs(s))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return ur.forEach(e.mutations,r=>{const i=new Fr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new Fr(e,0),r=this.ds.firstAfterOrEqual(n);return ur.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,ur.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Ve(Z.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),o=i?i.size:0,s=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:s,readTime:n}),this.size+=s-o,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ur.resolve(n?n.document.clone():mt.newInvalidDocument(e))}getEntries(t,e){let n=He();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():mt.newInvalidDocument(t))}),ur.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=He();const i=new Z(e.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i,readTime:s}}=o.getNext();if(!e.path.isPrefixOf(t.path))break;s.compareTo(n)<=0||Zt(e,i)&&(r=r.insert(i.key,i.clone()))}return ur.resolve(r)}Es(t,e){return ur.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new $r(this)}getSize(t){return ur.resolve(this.size)}}class $r extends Er{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),ur.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.persistence=t,this.Ts=new _r(t=>bt(t),_t),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Is=0,this.As=new Ur,this.targetCount=0,this.Rs=br.se()}forEachTarget(t,e){return this.Ts.forEach((t,n)=>e(n)),ur.resolve()}getLastRemoteSnapshotVersion(t){return ur.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ur.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ur.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),ur.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new br(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,ur.resolve()}updateTargetData(t,e){return this.ae(e),ur.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,ur.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)}),ur.waitFor(i).next(()=>r)}getTargetCount(t){return ur.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return ur.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ur.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),ur.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),ur.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ur.resolve(n)}containsKey(t,e){return ur.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e){this.bs={},this.Le=new x(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new qr(this),this.Ht=new mr,this.He=function(t,e){return new Br(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new pr(e),this.Je=new Mr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Vr(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new Gr(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return ur.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class Gr extends cr{constructor(t){super(),this.currentSequenceNumber=t}}class Hr{constructor(t){this.persistence=t,this.Ds=new Ur,this.Cs=null}static Ns(t){return new Hr(t)}get xs(){if(this.Cs)return this.Cs;throw m()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),ur.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),ur.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ur.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ur.forEach(this.xs,n=>{const r=Z.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return ur.or([()=>ur.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.activeTargetIds=tn()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wr{constructor(){this.yi=new Kr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Kr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);f("RestConnection","Sending: ",i,n);const o={};return this.Ui(o,r),this.qi(t,i,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Qr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,o)=>{const s=new a["g"];s.listenOnce(a["c"].COMPLETE,()=>{try{switch(s.getLastErrorCode()){case a["a"].NO_ERROR:const e=s.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),o(new w(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=s.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){const t=s.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);o(new w(e,t.message))}else o(new w(b.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new w(b.UNAVAILABLE,"Connection failed."));break;default:m()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);s.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a["d"]({})),this.Ui(o.initMessageHeaders,e),Object(s["r"])()||Object(s["s"])()||Object(s["n"])()||Object(s["p"])()||Object(s["u"])()||Object(s["m"])()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,o);const u=r.createWebChannel(c,o);let l=!1,h=!1;const d=new Yr({vi:t=>{h?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),u.open(),l=!0),f("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(u,a["f"].EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),g(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.$i())}),g(u,a["f"].EventType.ERROR,t=>{h||(h=!0,p("Connection","WebChannel transport errored:",t),d.$i(new w(b.UNAVAILABLE,"The operation could not be completed")))}),g(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];v(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Le[t];if(void 0!==e)return Fe(e)}(t),n=i.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.$i(new w(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),g(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){return new dn(t,!0)}class ni{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,n,r,i,o){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new ni(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(d(e.toString()),d("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===b.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new w(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ii extends ri{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=xn(this.N,t),n=function(t){if(!("targetChange"in t))return N.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?N.min():e.readTime?vn(e.readTime):N.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=On(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=Et(r)?{documents:Cn(t,r)}:{query:jn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=gn(t,e.resumeToken):e.snapshotVersion.compareTo(N.min())>0&&(n.readTime=pn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=Nn(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=On(this.N),e.removeTarget=t,this.wr(e)}}class oi extends ri{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=An(t.writeResults,t.commitTime),n=vn(t.commitTime);return this.listener.vr(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=On(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>kn(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class ai{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(d(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(t=>{n.enqueueAndForget(async()=>{vi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=y(t);e.Kr.add(4),await li(e),e.Wr.set("Unknown"),e.Kr.delete(4),await ui(e)}(this))})}),this.Wr=new ai(n,r)}}async function ui(t){if(vi(t))for(const e of t.jr)await e(!0)}async function li(t){for(const e of t.jr)await e(!1)}function hi(t,e){const n=y(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),mi(n)?gi(n):Pi(n).cr()&&di(n,e))}function fi(t,e){const n=y(t),r=Pi(n);n.qr.delete(e),r.cr()&&pi(n,e),0===n.qr.size&&(r.cr()?r.lr():vi(n)&&n.Wr.set("Unknown"))}function di(t,e){t.Gr.Y(e.targetId),Pi(t).Ir(e)}function pi(t,e){t.Gr.Y(e),Pi(t).Ar(e)}function gi(t){t.Gr=new cn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Pi(t).start(),t.Wr.Or()}function mi(t){return vi(t)&&!Pi(t).ar()&&t.qr.size>0}function vi(t){return 0===y(t).Kr.size}function yi(t){t.Gr=void 0}async function bi(t){t.qr.forEach((e,n)=>{di(t,e)})}async function wi(t,e){yi(t),mi(t)?(t.Wr.Lr(e),gi(t)):t.Wr.set("Unknown")}async function _i(t,e,n){if(t.Wr.set("Online"),e instanceof sn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ei(t,n)}else if(e instanceof rn?t.Gr.rt(e):e instanceof on?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(N.min()))try{const e=await Cr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken($.EMPTY_BYTE_STRING,n.snapshotVersion)),pi(t,e);const r=new dr(n.target,e,1,n.sequenceNumber);di(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await Ei(t,e)}}async function Ei(t,e,n){if(!lr(e))throw e;t.Kr.add(1),await li(t),t.Wr.set("Offline"),n||(n=()=>Cr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await ui(t)})}function Ii(t,e){return e().catch(n=>Ei(t,n,e))}async function Oi(t){const e=y(t),n=Di(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Ti(e);)try{const t=await Nr(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,Si(e,t)}catch(t){await Ei(e,t)}xi(e)&&ki(e)}function Ti(t){return vi(t)&&t.Ur.length<10}function Si(t,e){t.Ur.push(e);const n=Di(t);n.cr()&&n.br&&n.Pr(e.mutations)}function xi(t){return vi(t)&&!Di(t).ar()&&t.Ur.length>0}function ki(t){Di(t).start()}async function Ai(t){Di(t).Sr()}async function Ci(t){const e=Di(t);for(const n of t.Ur)e.Pr(n.mutations)}async function ji(t,e,n){const r=t.Ur.shift(),i=fr.from(r,e,n);await Ii(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Oi(t)}async function Ri(t,e){e&&Di(t).br&&await async function(t,e){if(n=e.code,Ue(n)&&n!==b.ABORTED){const n=t.Ur.shift();Di(t).hr(),await Ii(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Oi(t)}var n}(t,e),xi(t)&&ki(t)}async function Ni(t,e){const n=y(t);e?(n.Kr.delete(2),await ui(n)):e||(n.Kr.add(2),await li(n),n.Wr.set("Unknown"))}function Pi(t){return t.zr||(t.zr=function(t,e,n){const r=y(t);return r.Cr(),new ii(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:bi.bind(null,t),Ci:wi.bind(null,t),Tr:_i.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),mi(t)?gi(t):t.Wr.set("Unknown")):(await t.zr.stop(),yi(t))})),t.zr}function Di(t){return t.Hr||(t.Hr=function(t,e,n){const r=y(t);return r.Cr(),new oi(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:Ai.bind(null,t),Ci:Ri.bind(null,t),Vr:Ci.bind(null,t),vr:ji.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Oi(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Li{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new Li(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mi(t,e){if(d("AsyncQueue",`${e}: ${t}`),lr(t))return new w(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Z.comparator(e.key,n.key):(t,e)=>Z.comparator(t.key,e.key),this.keyedMap=We(),this.sortedSet=new Ve(this.comparator)}static emptySet(t){return new Ui(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ui))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ui;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.Jr=new Ve(Z.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):m():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Vi{constructor(t,e,n,r,i,o,s,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=s,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Vi(t,e,Ui.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.Xr=void 0,this.listeners=[]}}class $i{constructor(){this.queries=new _r(t=>Qt(t),Xt),this.onlineState="Unknown",this.Zr=new Set}}async function qi(t,e){const n=y(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Bi),i)try{o.Xr=await n.onListen(r)}catch(t){const n=Mi(t,`Initialization of query '${Yt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,o),o.listeners.push(e),e.eo(n.onlineState),o.Xr&&e.no(o.Xr)&&Ki(n)}async function zi(t,e){const n=y(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const t=o.listeners.indexOf(e);t>=0&&(o.listeners.splice(t,1),i=0===o.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Gi(t,e){const n=y(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(i)&&(r=!0);e.Xr=i}}r&&Ki(n)}function Hi(t,e,n){const r=y(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function Ki(t){t.Zr.forEach(t=>{t.next()})}class Wi{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Vi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.uo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Vi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(t){this.key=t}}class Xi{constructor(t){this.key=t}}class Qi{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=Ye(),this.mutatedKeys=Ye(),this.po=te(t),this.Eo=new Ui(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new Fi,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,o=r,s=!1;const a=$t(this.query)&&r.size===this.query.limit?r.last():null,c=qt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Zt(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(s=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(s=!0)),d&&(l?(o=o.add(l),i=f?i.add(t):i.delete(t)):(o=o.delete(t),i=i.delete(t)))}),$t(this.query)||qt(this.query))for(;o.size>this.query.limit;){const t=$t(this.query)?o.last():o.first();o=o.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:o,Ao:n,Ln:s,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return m()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const o=e?this.Po():[],s=0===this.yo.size&&this.current?1:0,a=s!==this.mo;return this.mo=s,0!==i.length||a?{snapshot:new Vi(this.query,t.Eo,r,i,t.mutatedKeys,0===s,a,!1),vo:o}:{vo:o}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Fi,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=Ye(),this.Eo.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new Xi(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Ji(n))}),e}So(t){this._o=t.Gn,this.yo=Ye();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Vi.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Yi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Zi{constructor(t){this.key=t,this.Co=!1}}class to{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new _r(t=>Qt(t),Xt),this.ko=new Map,this.$o=new Set,this.Oo=new Ve(Z.comparator),this.Fo=new Map,this.Mo=new Ur,this.Lo={},this.Bo=new Map,this.Uo=br.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function eo(t,e){const n=_o(t);let r,i;const o=n.xo.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Do();else{const t=await Pr(n.localStore,Wt(e)),o=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await no(n,e,r,"current"===o),n.isPrimaryClient&&hi(n.remoteStore,t)}return i}async function no(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await Lr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,i)));const o=r&&r.targetChanges.get(e.targetId),s=e.view.applyChanges(i,t.isPrimaryClient,o);return go(t,e.targetId,s.vo),s.snapshot}(t,e,n,r);const i=await Lr(t.localStore,e,!0),o=new Qi(e,i.Gn),s=o.Io(i.documents),a=nn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=o.applyChanges(s,t.isPrimaryClient,a);go(t,n,c.vo);const u=new Yi(e,n,o);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function ro(t,e){const n=y(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(t=>!Xt(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Dr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),fi(n.remoteStore,r.targetId),fo(n,r.targetId)}).catch(wr)):(fo(n,r.targetId),await Dr(n.localStore,r.targetId,!0))}async function io(t,e,n){const r=Eo(t);try{const t=await function(t,e){const n=y(t),r=R.now(),i=e.reduce((t,e)=>t.add(e.key),Ye());let o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,i).next(i=>{o=i;const s=[];for(const t of e){const e=Te(t,o.get(t.key));null!=e&&s.push(new Ae(t.key,e,gt(e.value.mapValue),we.exists(!0)))}return n.In.addMutationBatch(t,r,s,e)})).then(t=>(t.applyToLocalDocumentSet(o),{batchId:t.batchId,changes:o}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new Ve(C)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await yo(r,t.changes),await Oi(r.remoteStore)}catch(t){const e=Mi(t,"Failed to persist write");n.reject(e)}}async function oo(t,e){const n=y(t);try{const t=await jr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Fo.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?v(r.Co):t.removedDocuments.size>0&&(v(r.Co),r.Co=!1))}),await yo(n,t,e)}catch(t){await wr(t)}}function so(t,e,n){const r=y(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=y(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.eo(e)&&(r=!0)}),r&&Ki(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ao(t,e,n){const r=y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),o=i&&i.key;if(o){let t=new Ve(Z.comparator);t=t.insert(o,mt.newNoDocument(o,N.min()));const n=Ye().add(o),i=new en(N.min(),new Map,new qe(C),t,n);await oo(r,i),r.Oo=r.Oo.remove(o),r.Fo.delete(e),vo(r)}else await Dr(r.localStore,e,!1).then(()=>fo(r,e,n)).catch(wr)}async function co(t,e){const n=y(t),r=e.batch.batchId;try{const t=await Ar(n.localStore,e);ho(n,r,null),lo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yo(n,t)}catch(t){await wr(t)}}async function uo(t,e,n){const r=y(t);try{const t=await function(t,e){const n=y(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);ho(r,e,n),lo(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yo(r,t)}catch(n){await wr(n)}}function lo(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function ho(t,e,n){const r=y(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function fo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||po(t,e)})}function po(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(fi(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),vo(t))}function go(t,e,n){for(const r of n)r instanceof Ji?(t.Mo.addReference(r.key,e),mo(t,r)):r instanceof Xi?(f("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||po(t,r.key)):m()}function mo(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(f("SyncEngine","New document in limbo: "+n),t.$o.add(r),vo(t))}function vo(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Z(U.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Zi(n)),t.Oo=t.Oo.insert(n,r),hi(t.remoteStore,new dr(Wt(Bt(n.path)),r,2,x.T))}}async function yo(t,e,n){const r=y(t),i=[],o=[],s=[];r.xo.isEmpty()||(r.xo.forEach((t,a)=>{s.push(r.Ko(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Or.kn(a.targetId,t);o.push(e)}}))}),await Promise.all(s),r.No.Tr(i),await async function(t,e){const n=y(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ur.forEach(e,e=>ur.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>ur.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!lr(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,o))}async function bo(t,e){const n=y(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await kr(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new w(b.CANCELLED,e))})}),t.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await yo(n,t.Wn)}}function wo(t,e){const n=y(t),r=n.Fo.get(e);if(r&&r.Co)return Ye().add(r.key);{let t=Ye();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}function _o(t){const e=y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ao.bind(null,e),e.No.Tr=Gi.bind(null,e.eventManager),e.No.jo=Hi.bind(null,e.eventManager),e}function Eo(t){const e=y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=co.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uo.bind(null,e),e}class Io{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=ei(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return xr(this.persistence,new Tr,t.initialUser,this.N)}Go(t){return new zr(Hr.Ns,this.N)}Wo(t){return new Wr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Oo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>so(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=bo.bind(null,this.syncEngine),await Ni(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new $i}createDatastore(t){const e=ei(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Zr(r));var r;return function(t,e,n){return new si(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>so(this.syncEngine,t,0),o=Xr.bt()?new Xr:new Jr,new ci(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new to(t,e,n,r,i,o);return s&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=y(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await li(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=A.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Mi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function xo(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await kr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ko(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ao(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=y(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=vi(n);n.Kr.add(3),await li(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await ui(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Ao(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await xo(t,new Io)),t.offlineComponents}async function Co(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await ko(t,new Oo)),t.onlineComponents}function jo(t){return Co(t).then(t=>t.syncEngine)}async function Ro(t){const e=await Co(t),n=e.eventManager;return n.onListen=eo.bind(null,e.syncEngine),n.onUnlisten=ro.bind(null,e.syncEngine),n}function No(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new To({next:o=>{e.enqueueAndForget(()=>zi(t,s));const a=o.docs.has(n);!a&&o.fromCache?i.reject(new w(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&o.fromCache&&r&&"server"===r.source?i.reject(new w(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:t=>i.reject(t)}),s=new Wi(Bt(n.path),o,{includeMetadataChanges:!0,uo:!0});return qi(t,s)}(await Ro(t),t.asyncQueue,e,n,r)),r.promise}function Po(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const o=new To({next:n=>{e.enqueueAndForget(()=>zi(t,s)),n.fromCache&&"server"===r.source?i.reject(new w(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),s=new Wi(n,o,{includeMetadataChanges:!0,uo:!0});return qi(t,s)}(await Ro(t),t.asyncQueue,e,n,r)),r.promise}class Do{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Lo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Lo&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e,n){if(!n)throw new w(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Fo(t,e,n,r){if(!0===e&&!0===r)throw new w(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vo(t){if(!Z.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bo(t){if(Z.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $o(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":m()}function qo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$o(t);throw new w(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function zo(t,e){if(e<=0)throw new w(b.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new w(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new w(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Fo("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Go({}),this._settingsFrozen=!1,t instanceof Lo?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new w(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(t.options.projectId)}(t))}get app(){if(!this._app)throw new w(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new w(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Go(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new I;switch(t.type){case"gapi":t.client;return v(!("object"!=typeof r["d"]||null===r["d"]||!r["d"].auth||!r["d"].auth.getAuthHeaderValueForFirstParty)),new S(r["d"],t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(b.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Mo.get(t);e&&(f("ComponentProvider","Removing Datastore"),Mo.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ko(this.firestore,t,this._key)}}class Wo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Wo(this.firestore,t,this._query)}}class Jo extends Wo{constructor(t,e,n){super(t,e,Bt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ko(this.firestore,null,new Z(t))}withConverter(t){return new Jo(this.firestore,t,this._path)}}function Xo(t,e,...n){if(t=Object(s["k"])(t),Uo("collection","path",e),t instanceof Ho){const r=U.fromString(e,...n);return Bo(r),new Jo(t,null,r)}{if(!(t instanceof Ko||t instanceof Jo))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return Bo(r),new Jo(t.firestore,null,r)}}function Qo(t,e,...n){if(t=Object(s["k"])(t),1===arguments.length&&(e=A.I()),Uo("doc","path",e),t instanceof Ho){const r=U.fromString(e,...n);return Vo(r),new Ko(t,null,new Z(r))}{if(!(t instanceof Ko||t instanceof Jo))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return Vo(r),new Ko(t.firestore,t instanceof Jo?t.converter:null,new Z(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yo{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new ni(this,"async_queue_retry"),this.Ea=()=>{const t=ti();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=ti();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=ti();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const e=new _;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!lr(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{throw this.ma=t,this.ga=!1,d("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Li.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ta(){this.ma&&m()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Zo extends Ho{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Yo,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ns(this),this._firestoreClient.terminate()}}function ts(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function es(t){return t._firestoreClient||ns(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ns(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Do(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new So(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new w(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new V(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(t){this._byteString=t}static fromBase64String(t){try{return new is($.fromBase64String(t))}catch(t){throw new w(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new is($.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=/^__.*__$/;class cs{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new ke(t,this.data,e,this.fieldTransforms)}}class us{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ae(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ls(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw m()}}class hs{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new hs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return As(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(ls(this.Da)&&as.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class fs{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||ei(t)}Ba(t,e,n,r=!1){return new hs({Da:t,methodName:e,La:n,path:V.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function ds(t){const e=t._freezeSettings(),n=ei(t._databaseId);return new fs(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ps(t,e,n,r,i,o={}){const s=t.Ba(o.merge||o.mergeFields?2:0,e,n,i);Ts("Data must be an object, but it was:",s,r);const a=Is(r,s);let c,u;if(o.merge)c=new B(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=Ss(e,r,n);if(!s.contains(i))throw new w(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Cs(t,i)||t.push(i)}c=new B(t),u=s.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=s.fieldTransforms;return new cs(new pt(a),c,u)}class gs extends os{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(this._methodName+"() can only appear at the top level of your update data"):t.Fa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gs}}function ms(t,e,n){return new hs({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class vs extends os{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=ms(this,t,!0),n=this.Ua.map(t=>Es(t,e)),r=new le(n);return new ve(t.path,r)}isEqual(t){return this===t}}class ys extends os{constructor(t,e){super(t),this.Ua=e}_toFieldTransform(t){const e=ms(this,t,!0),n=this.Ua.map(t=>Es(t,e)),r=new fe(n);return new ve(t.path,r)}isEqual(t){return this===t}}function bs(t,e,n,r){const i=t.Ba(1,e,n);Ts("Data must be an object, but it was:",i,r);const o=[],a=pt.empty();D(r,(t,r)=>{const c=ks(e,t,n);r=Object(s["k"])(r);const u=i.$a(c);if(r instanceof gs)o.push(c);else{const t=Es(r,u);null!=t&&(o.push(c),a.set(c,t))}});const c=new B(o);return new us(a,c,i.fieldTransforms)}function ws(t,e,n,r,i,o){const a=t.Ba(1,e,n),c=[Ss(e,r,n)],u=[i];if(o.length%2!=0)throw new w(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<o.length;s+=2)c.push(Ss(e,o[s])),u.push(o[s+1]);const l=[],h=pt.empty();for(let d=c.length-1;d>=0;--d)if(!Cs(l,c[d])){const t=c[d];let e=u[d];e=Object(s["k"])(e);const n=a.$a(t);if(e instanceof gs)l.push(t);else{const r=Es(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new B(l);return new us(h,f,a.fieldTransforms)}function _s(t,e,n,r=!1){return Es(n,t.Ba(r?4:3,e))}function Es(t,e){if(Os(t=Object(s["k"])(t)))return Ts("Unsupported field value:",e,t),Is(t,e);if(t instanceof os)return function(t,e){if(!ls(e.Da))throw e.Fa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Fa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Es(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(s["k"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ie(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=R.fromDate(t);return{timestampValue:pn(e.N,n)}}if(t instanceof R){const n=new R(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:pn(e.N,n)}}if(t instanceof ss)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof is)return{bytesValue:gn(e.N,t._byteString)};if(t instanceof Ko){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:yn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa("Unsupported field value: "+$o(t))}(t,e)}function Is(t,e){const n={};return L(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):D(t,(t,r)=>{const i=Es(r,e.Na(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Os(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof R||t instanceof ss||t instanceof is||t instanceof Ko||t instanceof os)}function Ts(t,e,n){if(!Os(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=$o(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function Ss(t,e,n){if((e=Object(s["k"])(e))instanceof rs)return e._internalPath;if("string"==typeof e)return ks(t,e);throw As("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const xs=new RegExp("[~\\*/\\[\\]]");function ks(t,e,n){if(e.search(xs)>=0)throw As(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rs(...e.split("."))._internalPath}catch(r){throw As(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function As(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new w(b.INVALID_ARGUMENT,a+t+c)}function Cs(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ko(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Rs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ns("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Rs extends js{data(){return super.data()}}function Ns(t,e){return"string"==typeof e?ks(t,e):e instanceof rs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ds extends js{constructor(t,e,n,r,i,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ns("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ls extends Ds{data(t={}){return super.data(t)}}class Ms{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ps(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ls(this._firestore,this._userDataWriter,n.key,n,new Ps(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new w(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Ls(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ps(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Ls(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ps(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,o=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),o=n.indexOf(e.doc.key)),{type:Us(e.type),doc:r,oldIndex:i,newIndex:o}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Us(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return m()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fs(t){if(qt(t)&&0===t.explicitOrderBy.length)throw new w(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vs{}function Bs(t,...e){for(const n of e)t=n._apply(t);return t}class $s extends Vs{constructor(t,e,n){super(),this.Ka=t,this.ja=e,this.Qa=n,this.type="where"}_apply(t){const e=ds(t.firestore),n=function(t,e,n,r,i,o,s){let a;if(i.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new w(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on FieldPath.documentId().`);if("in"===o||"not-in"===o){Js(s,o);const e=[];for(const n of s)e.push(Ws(r,t,n));a={arrayValue:{values:e}}}else a=Ws(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||Js(s,o),a=_s(n,e,s,"in"===o||"not-in"===o);const c=It.create(i,o,a);return function(t,e){if(e.v()){const n=Gt(t);if(null!==n&&!n.isEqual(e.field))throw new w(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=zt(t);null!==r&&Xs(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new w(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new w(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Wo(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ft(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function qs(t,e,n){const r=e,i=Ns("where",t);return new $s(i,r,n)}class zs extends Vs{constructor(t,e){super(),this.Ka=t,this.Wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new w(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new w(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Dt(e,n);return function(t,e){if(null===zt(t)){const n=Gt(t);null!==n&&Xs(t,n,e.field)}}(t,r),r}(t._query,this.Ka,this.Wa);return new Wo(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ft(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Gs(t,e="asc"){const n=e,r=Ns("orderBy",t);return new zs(r,n)}class Hs extends Vs{constructor(t,e,n){super(),this.type=t,this.Ga=e,this.za=n}_apply(t){return new Wo(t.firestore,t.converter,Jt(t._query,this.Ga,this.za))}}function Ks(t){return zo("limit",t),new Hs("limit",t,"F")}function Ws(t,e,n){if("string"==typeof(n=Object(s["k"])(n))){if(""===n)throw new w(b.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ht(e)&&-1!==n.indexOf("/"))throw new w(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(U.fromString(n));if(!Z.isDocumentKey(r))throw new w(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return at(t,new Z(r))}if(n instanceof Ko)return at(t,n._key);throw new w(b.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${$o(n)}.`)}function Js(t,e){if(!Array.isArray(t)||0===t.length)throw new w(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new w(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Xs(t,e,n){if(!n.isEqual(e))throw new w(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{convertValue(t,e="none"){switch(tt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return G(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(H(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw m()}}convertObject(t,e){const n={};return D(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new ss(G(t.latitude),G(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":W(t);return null==r["c"]?null:this.convertValue(r["c"],e);case"estimate":return this.convertTimestamp(J(t));default:return null}}convertTimestamp(t){const e=z(t);return new R(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);v(zn(n));const r=new Lo(n.get(1),n.get(3)),i=new Z(n.popFirst(5));return r.isEqual(e)||d(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zs(t){t=qo(t,Ko);const e=qo(t.firestore,Zo);return No(es(e),t._key).then(n=>sa(e,t,n))}class ta extends Qs{constructor(t){super(),this.firestore=t}convertBytes(t){return new is(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ko(this.firestore,null,e)}}function ea(t){t=qo(t,Wo);const e=qo(t.firestore,Zo),n=es(e),r=new ta(e);return Fs(t._query),Po(n,t._query).then(n=>new Ms(e,r,t,n))}function na(t,e,n){t=qo(t,Ko);const r=qo(t.firestore,Zo),i=Ys(t.converter,e,n);return oa(r,[ps(ds(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,we.none())])}function ra(t,e,n,...r){t=qo(t,Ko);const i=qo(t.firestore,Zo),o=ds(i);let a;return a="string"==typeof(e=Object(s["k"])(e))||e instanceof rs?ws(o,"updateDoc",t._key,e,n,r):bs(o,"updateDoc",t._key,e),oa(i,[a.toMutation(t._key,we.exists(!0))])}function ia(t){return oa(qo(t.firestore,Zo),[new Ne(t._key,we.none())])}function oa(t,e){return function(t,e){const n=new _;return t.asyncQueue.enqueueAndForget(async()=>io(await jo(t),e,n)),n.promise}(es(t),e)}function sa(t,e,n){const r=n.docs.get(e._key),i=new ta(t);return new Ds(t,i,e._key,r,new Ps(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(...t){return new vs("arrayUnion",t)}function ca(...t){return new ys("arrayRemove",t)}var ua;!function(t){u=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Zo(n,new O(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r["g"])("@firebase/firestore","3.1.0",ua)}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("e8b5"),i=n("68ee"),o=n("861d"),s=n("b622"),a=s("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===Array||r(e.prototype))?e=void 0:o(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},"0cb2":function(t,e,n){var r=n("7b0b"),i=Math.floor,o="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,l){var h=n+t.length,f=c.length,d=a;return void 0!==u&&(u=r(u),d=s),o.call(l,d,(function(r,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(h);case"<":s=u[o.slice(1,-1)];break;default:var a=+o;if(0===a)return r;if(a>f){var l=i(a/10);return 0===l?r:l<=f?void 0===c[l-1]?o.charAt(1):c[l-1]+o.charAt(1):r}s=c[a-1]}return void 0===s?"":s}))}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e){t.exports=function(t){try{return String(t)}catch(e){return"Object"}}},"0e44":function(t,e,n){"use strict";var r=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===i}(t)}(t)},i="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(t,e){return!1!==e.clone&&e.isMergeableObject(t)?u(Array.isArray(t)?[]:{},t,e):t}function s(t,e,n){return t.concat(e).map((function(t){return o(t,n)}))}function a(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function c(t,e){try{return e in t}catch(t){return!1}}function u(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||s,n.isMergeableObject=n.isMergeableObject||r,n.cloneUnlessOtherwiseSpecified=o;var i=Array.isArray(e);return i===Array.isArray(t)?i?n.arrayMerge(t,e,n):function(t,e,n){var r={};return n.isMergeableObject(t)&&a(t).forEach((function(e){r[e]=o(t[e],n)})),a(e).forEach((function(i){(function(t,e){return c(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,i)||(r[i]=c(t,i)&&n.isMergeableObject(e[i])?function(t,e){if(!e.customMerge)return u;var n=e.customMerge(t);return"function"==typeof n?n:u}(i,n)(t[i],e[i],n):o(e[i],n))})),r}(t,e,n):o(e,n)}u.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return u(t,n,e)}),{})};var l=u;function h(t){var e=(t=t||{}).storage||window&&window.localStorage,n=t.key||"vuex";function r(t,e){var n=e.getItem(t);try{return"string"==typeof n?JSON.parse(n):"object"==typeof n?n:void 0}catch(t){}}function i(){return!0}function o(t,e,n){return n.setItem(t,JSON.stringify(e))}function s(t,e){return Array.isArray(e)?e.reduce((function(e,n){return function(t,e,n,r){return!/^(__proto__|constructor|prototype)$/.test(e)&&((e=e.split?e.split("."):e.slice(0)).slice(0,-1).reduce((function(t,e){return t[e]=t[e]||{}}),t)[e.pop()]=n),t}(e,n,(r=t,void 0===(r=((i=n).split?i.split("."):i).reduce((function(t,e){return t&&t[e]}),r))?void 0:r));var r,i}),{}):t}function a(t){return function(e){return t.subscribe(e)}}(t.assertStorage||function(){e.setItem("@@",1),e.removeItem("@@")})(e);var c,u=function(){return(t.getState||r)(n,e)};return t.fetchBeforeUse&&(c=u()),function(r){t.fetchBeforeUse||(c=u()),"object"==typeof c&&null!==c&&(r.replaceState(t.overwrite?c:l(r.state,c,{arrayMerge:t.arrayMerger||function(t,e){return e},clone:!1})),(t.rehydrated||function(){})(r)),(t.subscriber||a)(r)((function(r,a){(t.filter||i)(r)&&(t.setState||o)(n,(t.reducer||s)(a,t.paths),e)}))}}e["a"]=h},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1148:function(t,e,n){"use strict";var r=n("a691"),i=n("577e"),o=n("1d80");t.exports=function(t){var e=i(o(this)),n="",s=r(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(n+=e);return n}},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),s=n("1d80"),a=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("577e"),h=n("dc4a"),f=n("14c3"),d=n("9263"),p=n("9f7f"),g=n("d039"),m=p.UNSUPPORTED_Y,v=[].push,y=Math.min,b=4294967295,w=!g((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=l(s(this)),o=void 0===n?b:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);var a,c,u,h=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");while(a=d.call(g,r)){if(c=g.lastIndex,c>p&&(h.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&v.apply(h,a.slice(1)),u=a[0].length,p=c,h.length>=o))break;g.lastIndex===a.index&&g.lastIndex++}return p===r.length?!u&&g.test("")||h.push(""):h.push(r.slice(p)),h.length>o?h.slice(0,o):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),o=void 0==e?void 0:h(e,t);return o?o.call(e,i,n):r.call(l(i),e,n)},function(t,i){var s=o(this),h=l(t),d=n(r,s,h,i,r!==e);if(d.done)return d.value;var p=a(s,RegExp),g=s.unicode,v=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(m?"g":"y"),w=new p(m?"^(?:"+s.source+")":s,v),_=void 0===i?b:i>>>0;if(0===_)return[];if(0===h.length)return null===f(w,h)?[h]:[];var E=0,I=0,O=[];while(I<h.length){w.lastIndex=m?0:I;var T,S=f(w,m?h.slice(I):h);if(null===S||(T=y(u(w.lastIndex+(m?I:0)),h.length))===E)I=c(h,I,g);else{if(O.push(h.slice(E,I)),O.length===_)return O;for(var x=1;x<=S.length-1;x++)if(O.push(S[x]),O.length===_)return O;I=E=T}}return O.push(h.slice(E)),O}]}),!w,m)},"14c3":function(t,e,n){var r=n("825a"),i=n("1626"),o=n("c6b6"),s=n("9263");t.exports=function(t,e){var n=t.exec;if(i(n)){var a=n.call(t,e);return null!==a&&r(a),a}if("RegExp"===o(t))return s.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c25"),a=n("9112"),c=function(t){if(t&&t.forEach!==s)try{a(t,"forEach",s)}catch(e){t.forEach=s}};for(var u in i)c(r[u]&&r[u].prototype);c(o)},1626:function(t,e){t.exports=function(t){return"function"===typeof t}},"17c25":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e){t.exports=function(t,e,n){if(t instanceof e)return t;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function a(t){r(s,i,o,a,c,"next",t)}function c(t){r(s,i,o,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return E})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return $})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return P})),n.d(e,"i",(function(){return A})),n.d(e,"j",(function(){return N})),n.d(e,"k",(function(){return q})),n.d(e,"l",(function(){return h})),n.d(e,"m",(function(){return p})),n.d(e,"n",(function(){return m})),n.d(e,"o",(function(){return k})),n.d(e,"p",(function(){return v})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return f})),n.d(e,"s",(function(){return g})),n.d(e,"t",(function(){return b})),n.d(e,"u",(function(){return y})),n.d(e,"v",(function(){return j})),n.d(e,"w",(function(){return R})),n.d(e,"x",(function(){return _}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)},a=function(t){return s(t).replace(/\./g,"")},c=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return h().indexOf("Electron/")>=0}function v(){const t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y(){return h().indexOf("MSAppHost/")>=0}function b(){return!d()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"===typeof indexedDB}function _(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}function E(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class O extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=I,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?S(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new O(r,s,n);return a}}function S(t,e){return t.replace(x,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(C(n)&&C(o)){if(!A(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function R(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function N(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){const n=new D(t,e);return n.subscribe.bind(n)}class D{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=L(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=M),void 0===r.error&&(r.error=M),void 0===r.complete&&(r.complete=M);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=1e3,F=2,V=144e5,B=.5;function $(t,e=U,n=F){const r=e*Math.pow(n,t),i=Math.round(B*r*(Math.random()-.5)*2);return Math.min(V,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),s=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var h,f,d,p,g,m,v,y=n&&n.that,b=!(!n||!n.AS_ENTRIES),w=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),E=s(e,y,1+b+_),I=function(t){return h&&u(h,"normal",t),new l(!0,t)},O=function(t){return b?(r(t),_?E(t[0],t[1],I):E(t[0],t[1])):_?E(t,I):E(t)};if(w)h=t;else{if(f=c(t),!f)throw TypeError(String(t)+" is not iterable");if(i(f)){for(d=0,p=o(t.length);p>d;d++)if(g=O(t[d]),g&&g instanceof l)return g;return new l(!1)}h=a(t,f)}m=h.next;while(!(v=m.call(h)).done){try{g=O(v.value)}catch(T){u(h,"throw",T)}if("object"==typeof g&&g&&g instanceof l)return g}return new l(!1)}},"23cb":function(t,e,n){var r=n("a691"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d===typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80"),s=n("577e"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~s(o(this)).indexOf(s(i(t)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,n){"use strict";var r=n("5e77").PROPER,i=n("6eeb"),o=n("825a"),s=n("577e"),a=n("d039"),c=n("ad6d"),u="toString",l=RegExp.prototype,h=l[u],f=a((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),d=r&&h.name!=u;(f||d)&&i(RegExp.prototype,u,(function(){var t=o(this),e=s(t.source),n=t.flags,r=s(void 0===n&&t instanceof RegExp&&!("flags"in l)?c.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"260b":function(t,e,n){"use strict";var r=n("5606");n.d(e,"a",(function(){return r["f"]}));var i="firebase",o="9.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,o,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("825a"),i=n("dc4a");t.exports=function(t,e,n){var o,s;r(t);try{if(o=i(t,"return"),!o){if("throw"===e)throw n;return n}o=o.call(t)}catch(a){s=!0,o=a}if("throw"===e)throw n;if(s)throw o;return r(o),n}},"2b27":function(t,e,n){(function(){var e={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},n={install:function(t){t.prototype.$cookies=this,t.$cookies=this},config:function(t,n,r,i,o){e.expires=t||"1d",e.path=n?"; path="+n:"; path=/",e.domain=r?"; domain="+r:"",e.secure=i?"; Secure":"",e.sameSite=o?"; SameSite="+o:"; SameSite=Lax"},get:function(t){var e=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(e&&"{"===e.substring(0,1)&&"}"===e.substring(e.length-1,e.length))try{e=JSON.parse(e)}catch(n){return e}return e},set:function(t,n,r,i,o,s,a){if(!t)throw new Error("Cookie name is not find in first argument.");if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(t))throw new Error('Cookie key name illegality, Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: '+t);n&&n.constructor===Object&&(n=JSON.stringify(n));var c="";if(r=void 0==r?e.expires:r,r&&0!=r)switch(r.constructor){case Number:c=r===1/0||-1===r?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+r;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(r)){var u=r.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(r.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":c="; max-age="+2592e3*+u;break;case"d":c="; max-age="+86400*+u;break;case"h":c="; max-age="+3600*+u;break;case"min":c="; max-age="+60*+u;break;case"s":c="; max-age="+u;break;case"y":c="; max-age="+31104e3*+u;break;default:new Error('unknown exception of "set operation"')}}else c="; expires="+r;break;case Date:c="; expires="+r.toUTCString();break}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(n)+c+(o?"; domain="+o:e.domain)+(i?"; path="+i:e.path)+(void 0==s?e.secure:s?"; Secure":"")+(void 0==a?e.sameSite:a?"; SameSite="+a:""),this},remove:function(t,n,r){return!(!t||!this.isKey(t))&&(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(r?"; domain="+r:e.domain)+(n?"; path="+n:e.path)+"; SameSite=Lax",this)},isKey:function(t){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=0;e<t.length;e++)t[e]=decodeURIComponent(t[e]);return t}};t.exports=n,"undefined"!==typeof window&&(window.$cookies=n)})()},"2cf4":function(t,e,n){var r,i,o,s,a=n("da84"),c=n("1626"),u=n("d039"),l=n("0366"),h=n("1be4"),f=n("cc12"),d=n("1cdc"),p=n("605d"),g=a.setImmediate,m=a.clearImmediate,v=a.process,y=a.MessageChannel,b=a.Dispatch,w=0,_={},E="onreadystatechange";try{r=a.location}catch(x){}var I=function(t){if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},O=function(t){return function(){I(t)}},T=function(t){I(t.data)},S=function(t){a.postMessage(String(t),r.protocol+"//"+r.host)};g&&m||(g=function(t){var e=[],n=arguments.length,r=1;while(n>r)e.push(arguments[r++]);return _[++w]=function(){(c(t)?t:Function(t)).apply(void 0,e)},i(w),w},m=function(t){delete _[t]},p?i=function(t){v.nextTick(O(t))}:b&&b.now?i=function(t){b.now(O(t))}:y&&!d?(o=new y,s=o.port2,o.port1.onmessage=T,i=l(s.postMessage,s,1)):a.addEventListener&&c(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!u(S)?(i=S,a.addEventListener("message",T,!1)):i=E in f("script")?function(t){h.appendChild(f("script"))[E]=function(){h.removeChild(this),I(t)}}:function(t){setTimeout(O(t),0)}),t.exports={set:g,clear:m}},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"2ef0":function(t,e,n){(function(t,r){var i;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var o,s="4.17.21",a=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",l="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",p=1,g=2,m=4,v=1,y=2,b=1,w=2,_=4,E=8,I=16,O=32,T=64,S=128,x=256,k=512,A=30,C="...",j=800,R=16,N=1,P=2,D=3,L=1/0,M=9007199254740991,U=17976931348623157e292,F=NaN,V=4294967295,B=V-1,$=V>>>1,q=[["ary",S],["bind",b],["bindKey",w],["curry",E],["curryRight",I],["flip",k],["partial",O],["partialRight",T],["rearg",x]],z="[object Arguments]",G="[object Array]",H="[object AsyncFunction]",K="[object Boolean]",W="[object Date]",J="[object DOMException]",X="[object Error]",Q="[object Function]",Y="[object GeneratorFunction]",Z="[object Map]",tt="[object Number]",et="[object Null]",nt="[object Object]",rt="[object Promise]",it="[object Proxy]",ot="[object RegExp]",st="[object Set]",at="[object String]",ct="[object Symbol]",ut="[object Undefined]",lt="[object WeakMap]",ht="[object WeakSet]",ft="[object ArrayBuffer]",dt="[object DataView]",pt="[object Float32Array]",gt="[object Float64Array]",mt="[object Int8Array]",vt="[object Int16Array]",yt="[object Int32Array]",bt="[object Uint8Array]",wt="[object Uint8ClampedArray]",_t="[object Uint16Array]",Et="[object Uint32Array]",It=/\b__p \+= '';/g,Ot=/\b(__p \+=) '' \+/g,Tt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,xt=/[&<>"']/g,kt=RegExp(St.source),At=RegExp(xt.source),Ct=/<%-([\s\S]+?)%>/g,jt=/<%([\s\S]+?)%>/g,Rt=/<%=([\s\S]+?)%>/g,Nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pt=/^\w*$/,Dt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,Mt=RegExp(Lt.source),Ut=/^\s+/,Ft=/\s/,Vt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Bt=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,qt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,zt=/[()=,{}\[\]\/\s]/,Gt=/\\(\\)?/g,Ht=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Kt=/\w*$/,Wt=/^[-+]0x[0-9a-f]+$/i,Jt=/^0b[01]+$/i,Xt=/^\[object .+?Constructor\]$/,Qt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Zt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,te=/($^)/,ee=/['\n\r\u2028\u2029\\]/g,ne="\\ud800-\\udfff",re="\\u0300-\\u036f",ie="\\ufe20-\\ufe2f",oe="\\u20d0-\\u20ff",se=re+ie+oe,ae="\\u2700-\\u27bf",ce="a-z\\xdf-\\xf6\\xf8-\\xff",ue="\\xac\\xb1\\xd7\\xf7",le="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",he="\\u2000-\\u206f",fe=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",de="A-Z\\xc0-\\xd6\\xd8-\\xde",pe="\\ufe0e\\ufe0f",ge=ue+le+he+fe,me="['’]",ve="["+ne+"]",ye="["+ge+"]",be="["+se+"]",we="\\d+",_e="["+ae+"]",Ee="["+ce+"]",Ie="[^"+ne+ge+we+ae+ce+de+"]",Oe="\\ud83c[\\udffb-\\udfff]",Te="(?:"+be+"|"+Oe+")",Se="[^"+ne+"]",xe="(?:\\ud83c[\\udde6-\\uddff]){2}",ke="[\\ud800-\\udbff][\\udc00-\\udfff]",Ae="["+de+"]",Ce="\\u200d",je="(?:"+Ee+"|"+Ie+")",Re="(?:"+Ae+"|"+Ie+")",Ne="(?:"+me+"(?:d|ll|m|re|s|t|ve))?",Pe="(?:"+me+"(?:D|LL|M|RE|S|T|VE))?",De=Te+"?",Le="["+pe+"]?",Me="(?:"+Ce+"(?:"+[Se,xe,ke].join("|")+")"+Le+De+")*",Ue="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fe="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ve=Le+De+Me,Be="(?:"+[_e,xe,ke].join("|")+")"+Ve,$e="(?:"+[Se+be+"?",be,xe,ke,ve].join("|")+")",qe=RegExp(me,"g"),ze=RegExp(be,"g"),Ge=RegExp(Oe+"(?="+Oe+")|"+$e+Ve,"g"),He=RegExp([Ae+"?"+Ee+"+"+Ne+"(?="+[ye,Ae,"$"].join("|")+")",Re+"+"+Pe+"(?="+[ye,Ae+je,"$"].join("|")+")",Ae+"?"+je+"+"+Ne,Ae+"+"+Pe,Fe,Ue,we,Be].join("|"),"g"),Ke=RegExp("["+Ce+ne+se+pe+"]"),We=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Je=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Xe=-1,Qe={};Qe[pt]=Qe[gt]=Qe[mt]=Qe[vt]=Qe[yt]=Qe[bt]=Qe[wt]=Qe[_t]=Qe[Et]=!0,Qe[z]=Qe[G]=Qe[ft]=Qe[K]=Qe[dt]=Qe[W]=Qe[X]=Qe[Q]=Qe[Z]=Qe[tt]=Qe[nt]=Qe[ot]=Qe[st]=Qe[at]=Qe[lt]=!1;var Ye={};Ye[z]=Ye[G]=Ye[ft]=Ye[dt]=Ye[K]=Ye[W]=Ye[pt]=Ye[gt]=Ye[mt]=Ye[vt]=Ye[yt]=Ye[Z]=Ye[tt]=Ye[nt]=Ye[ot]=Ye[st]=Ye[at]=Ye[ct]=Ye[bt]=Ye[wt]=Ye[_t]=Ye[Et]=!0,Ye[X]=Ye[Q]=Ye[lt]=!1;var Ze={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},en={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},nn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},rn=parseFloat,on=parseInt,sn="object"==typeof t&&t&&t.Object===Object&&t,an="object"==typeof self&&self&&self.Object===Object&&self,cn=sn||an||Function("return this")(),un=e&&!e.nodeType&&e,ln=un&&"object"==typeof r&&r&&!r.nodeType&&r,hn=ln&&ln.exports===un,fn=hn&&sn.process,dn=function(){try{var t=ln&&ln.require&&ln.require("util").types;return t||fn&&fn.binding&&fn.binding("util")}catch(e){}}(),pn=dn&&dn.isArrayBuffer,gn=dn&&dn.isDate,mn=dn&&dn.isMap,vn=dn&&dn.isRegExp,yn=dn&&dn.isSet,bn=dn&&dn.isTypedArray;function wn(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function _n(t,e,n,r){var i=-1,o=null==t?0:t.length;while(++i<o){var s=t[i];e(r,s,n(s),t)}return r}function En(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!1===e(t[n],n,t))break;return t}function In(t,e){var n=null==t?0:t.length;while(n--)if(!1===e(t[n],n,t))break;return t}function On(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(!e(t[n],n,t))return!1;return!0}function Tn(t,e){var n=-1,r=null==t?0:t.length,i=0,o=[];while(++n<r){var s=t[n];e(s,n,t)&&(o[i++]=s)}return o}function Sn(t,e){var n=null==t?0:t.length;return!!n&&Un(t,e,0)>-1}function xn(t,e,n){var r=-1,i=null==t?0:t.length;while(++r<i)if(n(e,t[r]))return!0;return!1}function kn(t,e){var n=-1,r=null==t?0:t.length,i=Array(r);while(++n<r)i[n]=e(t[n],n,t);return i}function An(t,e){var n=-1,r=e.length,i=t.length;while(++n<r)t[i+n]=e[n];return t}function Cn(t,e,n,r){var i=-1,o=null==t?0:t.length;r&&o&&(n=t[++i]);while(++i<o)n=e(n,t[i],i,t);return n}function jn(t,e,n,r){var i=null==t?0:t.length;r&&i&&(n=t[--i]);while(i--)n=e(n,t[i],i,t);return n}function Rn(t,e){var n=-1,r=null==t?0:t.length;while(++n<r)if(e(t[n],n,t))return!0;return!1}var Nn=$n("length");function Pn(t){return t.split("")}function Dn(t){return t.match(qt)||[]}function Ln(t,e,n){var r;return n(t,(function(t,n,i){if(e(t,n,i))return r=n,!1})),r}function Mn(t,e,n,r){var i=t.length,o=n+(r?1:-1);while(r?o--:++o<i)if(e(t[o],o,t))return o;return-1}function Un(t,e,n){return e===e?pr(t,e,n):Mn(t,Vn,n)}function Fn(t,e,n,r){var i=n-1,o=t.length;while(++i<o)if(r(t[i],e))return i;return-1}function Vn(t){return t!==t}function Bn(t,e){var n=null==t?0:t.length;return n?Hn(t,e)/n:F}function $n(t){return function(e){return null==e?o:e[t]}}function qn(t){return function(e){return null==t?o:t[e]}}function zn(t,e,n,r,i){return i(t,(function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)})),n}function Gn(t,e){var n=t.length;t.sort(e);while(n--)t[n]=t[n].value;return t}function Hn(t,e){var n,r=-1,i=t.length;while(++r<i){var s=e(t[r]);s!==o&&(n=n===o?s:n+s)}return n}function Kn(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function Wn(t,e){return kn(e,(function(e){return[e,t[e]]}))}function Jn(t){return t?t.slice(0,yr(t)+1).replace(Ut,""):t}function Xn(t){return function(e){return t(e)}}function Qn(t,e){return kn(e,(function(e){return t[e]}))}function Yn(t,e){return t.has(e)}function Zn(t,e){var n=-1,r=t.length;while(++n<r&&Un(e,t[n],0)>-1);return n}function tr(t,e){var n=t.length;while(n--&&Un(e,t[n],0)>-1);return n}function er(t,e){var n=t.length,r=0;while(n--)t[n]===e&&++r;return r}var nr=qn(Ze),rr=qn(tn);function ir(t){return"\\"+nn[t]}function or(t,e){return null==t?o:t[e]}function sr(t){return Ke.test(t)}function ar(t){return We.test(t)}function cr(t){var e,n=[];while(!(e=t.next()).done)n.push(e.value);return n}function ur(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function lr(t,e){return function(n){return t(e(n))}}function hr(t,e){var n=-1,r=t.length,i=0,o=[];while(++n<r){var s=t[n];s!==e&&s!==d||(t[n]=d,o[i++]=n)}return o}function fr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function dr(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function pr(t,e,n){var r=n-1,i=t.length;while(++r<i)if(t[r]===e)return r;return-1}function gr(t,e,n){var r=n+1;while(r--)if(t[r]===e)return r;return r}function mr(t){return sr(t)?wr(t):Nn(t)}function vr(t){return sr(t)?_r(t):Pn(t)}function yr(t){var e=t.length;while(e--&&Ft.test(t.charAt(e)));return e}var br=qn(en);function wr(t){var e=Ge.lastIndex=0;while(Ge.test(t))++e;return e}function _r(t){return t.match(Ge)||[]}function Er(t){return t.match(He)||[]}var Ir=function t(e){e=null==e?cn:Or.defaults(cn.Object(),e,Or.pick(cn,Je));var n=e.Array,r=e.Date,i=e.Error,Ft=e.Function,qt=e.Math,ne=e.Object,re=e.RegExp,ie=e.String,oe=e.TypeError,se=n.prototype,ae=Ft.prototype,ce=ne.prototype,ue=e["__core-js_shared__"],le=ae.toString,he=ce.hasOwnProperty,fe=0,de=function(){var t=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pe=ce.toString,ge=le.call(ne),me=cn._,ve=re("^"+le.call(he).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ye=hn?e.Buffer:o,be=e.Symbol,we=e.Uint8Array,_e=ye?ye.allocUnsafe:o,Ee=lr(ne.getPrototypeOf,ne),Ie=ne.create,Oe=ce.propertyIsEnumerable,Te=se.splice,Se=be?be.isConcatSpreadable:o,xe=be?be.iterator:o,ke=be?be.toStringTag:o,Ae=function(){try{var t=Ks(ne,"defineProperty");return t({},"",{}),t}catch(e){}}(),Ce=e.clearTimeout!==cn.clearTimeout&&e.clearTimeout,je=r&&r.now!==cn.Date.now&&r.now,Re=e.setTimeout!==cn.setTimeout&&e.setTimeout,Ne=qt.ceil,Pe=qt.floor,De=ne.getOwnPropertySymbols,Le=ye?ye.isBuffer:o,Me=e.isFinite,Ue=se.join,Fe=lr(ne.keys,ne),Ve=qt.max,Be=qt.min,$e=r.now,Ge=e.parseInt,He=qt.random,Ke=se.reverse,We=Ks(e,"DataView"),Ze=Ks(e,"Map"),tn=Ks(e,"Promise"),en=Ks(e,"Set"),nn=Ks(e,"WeakMap"),sn=Ks(ne,"create"),an=nn&&new nn,un={},ln=Ra(We),fn=Ra(Ze),dn=Ra(tn),Nn=Ra(en),Pn=Ra(nn),qn=be?be.prototype:o,pr=qn?qn.valueOf:o,wr=qn?qn.toString:o;function _r(t){if(Tl(t)&&!cl(t)&&!(t instanceof xr)){if(t instanceof Sr)return t;if(he.call(t,"__wrapped__"))return Pa(t)}return new Sr(t)}var Ir=function(){function t(){}return function(e){if(!Ol(e))return{};if(Ie)return Ie(e);t.prototype=e;var n=new t;return t.prototype=o,n}}();function Tr(){}function Sr(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=o}function xr(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=V,this.__views__=[]}function kr(){var t=new xr(this.__wrapped__);return t.__actions__=is(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=is(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=is(this.__views__),t}function Ar(){if(this.__filtered__){var t=new xr(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Cr(){var t=this.__wrapped__.value(),e=this.__dir__,n=cl(t),r=e<0,i=n?t.length:0,o=Ys(0,i,this.__views__),s=o.start,a=o.end,c=a-s,u=r?a:s-1,l=this.__iteratees__,h=l.length,f=0,d=Be(c,this.__takeCount__);if(!n||!r&&i==c&&d==c)return Fo(t,this.__actions__);var p=[];t:while(c--&&f<d){u+=e;var g=-1,m=t[u];while(++g<h){var v=l[g],y=v.iteratee,b=v.type,w=y(m);if(b==P)m=w;else if(!w){if(b==N)continue t;break t}}p[f++]=m}return p}function jr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Rr(){this.__data__=sn?sn(null):{},this.size=0}function Nr(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Pr(t){var e=this.__data__;if(sn){var n=e[t];return n===h?o:n}return he.call(e,t)?e[t]:o}function Dr(t){var e=this.__data__;return sn?e[t]!==o:he.call(e,t)}function Lr(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=sn&&e===o?h:e,this}function Mr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Ur(){this.__data__=[],this.size=0}function Fr(t){var e=this.__data__,n=li(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Te.call(e,n,1),--this.size,!0}function Vr(t){var e=this.__data__,n=li(e,t);return n<0?o:e[n][1]}function Br(t){return li(this.__data__,t)>-1}function $r(t,e){var n=this.__data__,r=li(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function qr(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function zr(){this.size=0,this.__data__={hash:new jr,map:new(Ze||Mr),string:new jr}}function Gr(t){var e=Gs(this,t)["delete"](t);return this.size-=e?1:0,e}function Hr(t){return Gs(this,t).get(t)}function Kr(t){return Gs(this,t).has(t)}function Wr(t,e){var n=Gs(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Jr(t){var e=-1,n=null==t?0:t.length;this.__data__=new qr;while(++e<n)this.add(t[e])}function Xr(t){return this.__data__.set(t,h),this}function Qr(t){return this.__data__.has(t)}function Yr(t){var e=this.__data__=new Mr(t);this.size=e.size}function Zr(){this.__data__=new Mr,this.size=0}function ti(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}function ei(t){return this.__data__.get(t)}function ni(t){return this.__data__.has(t)}function ri(t,e){var n=this.__data__;if(n instanceof Mr){var r=n.__data__;if(!Ze||r.length<a-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new qr(r)}return n.set(t,e),this.size=n.size,this}function ii(t,e){var n=cl(t),r=!n&&al(t),i=!n&&!r&&dl(t),o=!n&&!r&&!i&&Vl(t),s=n||r||i||o,a=s?Kn(t.length,ie):[],c=a.length;for(var u in t)!e&&!he.call(t,u)||s&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||sa(u,c))||a.push(u);return a}function oi(t){var e=t.length;return e?t[yo(0,e-1)]:o}function si(t,e){return Aa(is(t),mi(e,0,t.length))}function ai(t){return Aa(is(t))}function ci(t,e,n){(n!==o&&!il(t[e],n)||n===o&&!(e in t))&&pi(t,e,n)}function ui(t,e,n){var r=t[e];he.call(t,e)&&il(r,n)&&(n!==o||e in t)||pi(t,e,n)}function li(t,e){var n=t.length;while(n--)if(il(t[n][0],e))return n;return-1}function hi(t,e,n,r){return Ei(t,(function(t,i,o){e(r,t,n(t),o)})),r}function fi(t,e){return t&&os(e,Eh(e),t)}function di(t,e){return t&&os(e,Ih(e),t)}function pi(t,e,n){"__proto__"==e&&Ae?Ae(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function gi(t,e){var r=-1,i=e.length,s=n(i),a=null==t;while(++r<i)s[r]=a?o:mh(t,e[r]);return s}function mi(t,e,n){return t===t&&(n!==o&&(t=t<=n?t:n),e!==o&&(t=t>=e?t:e)),t}function vi(t,e,n,r,i,s){var a,c=e&p,u=e&g,l=e&m;if(n&&(a=i?n(t,r,i,s):n(t)),a!==o)return a;if(!Ol(t))return t;var h=cl(t);if(h){if(a=ea(t),!c)return is(t,a)}else{var f=Qs(t),d=f==Q||f==Y;if(dl(t))return Wo(t,c);if(f==nt||f==z||d&&!i){if(a=u||d?{}:na(t),!c)return u?as(t,di(a,t)):ss(t,fi(a,t))}else{if(!Ye[f])return i?t:{};a=ra(t,f,c)}}s||(s=new Yr);var v=s.get(t);if(v)return v;s.set(t,a),Ml(t)?t.forEach((function(r){a.add(vi(r,e,n,r,t,s))})):Sl(t)&&t.forEach((function(r,i){a.set(i,vi(r,e,n,i,t,s))}));var y=l?u?Vs:Fs:u?Ih:Eh,b=h?o:y(t);return En(b||t,(function(r,i){b&&(i=r,r=t[i]),ui(a,i,vi(r,e,n,i,t,s))})),a}function yi(t){var e=Eh(t);return function(n){return bi(n,t,e)}}function bi(t,e,n){var r=n.length;if(null==t)return!r;t=ne(t);while(r--){var i=n[r],s=e[i],a=t[i];if(a===o&&!(i in t)||!s(a))return!1}return!0}function wi(t,e,n){if("function"!=typeof t)throw new oe(u);return Ta((function(){t.apply(o,n)}),e)}function _i(t,e,n,r){var i=-1,o=Sn,s=!0,c=t.length,u=[],l=e.length;if(!c)return u;n&&(e=kn(e,Xn(n))),r?(o=xn,s=!1):e.length>=a&&(o=Yn,s=!1,e=new Jr(e));t:while(++i<c){var h=t[i],f=null==n?h:n(h);if(h=r||0!==h?h:0,s&&f===f){var d=l;while(d--)if(e[d]===f)continue t;u.push(h)}else o(e,f,r)||u.push(h)}return u}_r.templateSettings={escape:Ct,evaluate:jt,interpolate:Rt,variable:"",imports:{_:_r}},_r.prototype=Tr.prototype,_r.prototype.constructor=_r,Sr.prototype=Ir(Tr.prototype),Sr.prototype.constructor=Sr,xr.prototype=Ir(Tr.prototype),xr.prototype.constructor=xr,jr.prototype.clear=Rr,jr.prototype["delete"]=Nr,jr.prototype.get=Pr,jr.prototype.has=Dr,jr.prototype.set=Lr,Mr.prototype.clear=Ur,Mr.prototype["delete"]=Fr,Mr.prototype.get=Vr,Mr.prototype.has=Br,Mr.prototype.set=$r,qr.prototype.clear=zr,qr.prototype["delete"]=Gr,qr.prototype.get=Hr,qr.prototype.has=Kr,qr.prototype.set=Wr,Jr.prototype.add=Jr.prototype.push=Xr,Jr.prototype.has=Qr,Yr.prototype.clear=Zr,Yr.prototype["delete"]=ti,Yr.prototype.get=ei,Yr.prototype.has=ni,Yr.prototype.set=ri;var Ei=ls(ji),Ii=ls(Ri,!0);function Oi(t,e){var n=!0;return Ei(t,(function(t,r,i){return n=!!e(t,r,i),n})),n}function Ti(t,e,n){var r=-1,i=t.length;while(++r<i){var s=t[r],a=e(s);if(null!=a&&(c===o?a===a&&!Fl(a):n(a,c)))var c=a,u=s}return u}function Si(t,e,n,r){var i=t.length;n=Wl(n),n<0&&(n=-n>i?0:i+n),r=r===o||r>i?i:Wl(r),r<0&&(r+=i),r=n>r?0:Jl(r);while(n<r)t[n++]=e;return t}function xi(t,e){var n=[];return Ei(t,(function(t,r,i){e(t,r,i)&&n.push(t)})),n}function ki(t,e,n,r,i){var o=-1,s=t.length;n||(n=oa),i||(i=[]);while(++o<s){var a=t[o];e>0&&n(a)?e>1?ki(a,e-1,n,r,i):An(i,a):r||(i[i.length]=a)}return i}var Ai=hs(),Ci=hs(!0);function ji(t,e){return t&&Ai(t,e,Eh)}function Ri(t,e){return t&&Ci(t,e,Eh)}function Ni(t,e){return Tn(e,(function(e){return _l(t[e])}))}function Pi(t,e){e=zo(e,t);var n=0,r=e.length;while(null!=t&&n<r)t=t[ja(e[n++])];return n&&n==r?t:o}function Di(t,e,n){var r=e(t);return cl(t)?r:An(r,n(t))}function Li(t){return null==t?t===o?ut:et:ke&&ke in ne(t)?Ws(t):ba(t)}function Mi(t,e){return t>e}function Ui(t,e){return null!=t&&he.call(t,e)}function Fi(t,e){return null!=t&&e in ne(t)}function Vi(t,e,n){return t>=Be(e,n)&&t<Ve(e,n)}function Bi(t,e,r){var i=r?xn:Sn,s=t[0].length,a=t.length,c=a,u=n(a),l=1/0,h=[];while(c--){var f=t[c];c&&e&&(f=kn(f,Xn(e))),l=Be(f.length,l),u[c]=!r&&(e||s>=120&&f.length>=120)?new Jr(c&&f):o}f=t[0];var d=-1,p=u[0];t:while(++d<s&&h.length<l){var g=f[d],m=e?e(g):g;if(g=r||0!==g?g:0,!(p?Yn(p,m):i(h,m,r))){c=a;while(--c){var v=u[c];if(!(v?Yn(v,m):i(t[c],m,r)))continue t}p&&p.push(m),h.push(g)}}return h}function $i(t,e,n,r){return ji(t,(function(t,i,o){e(r,n(t),i,o)})),r}function qi(t,e,n){e=zo(e,t),t=_a(t,e);var r=null==t?t:t[ja(oc(e))];return null==r?o:wn(r,t,n)}function zi(t){return Tl(t)&&Li(t)==z}function Gi(t){return Tl(t)&&Li(t)==ft}function Hi(t){return Tl(t)&&Li(t)==W}function Ki(t,e,n,r,i){return t===e||(null==t||null==e||!Tl(t)&&!Tl(e)?t!==t&&e!==e:Wi(t,e,n,r,Ki,i))}function Wi(t,e,n,r,i,o){var s=cl(t),a=cl(e),c=s?G:Qs(t),u=a?G:Qs(e);c=c==z?nt:c,u=u==z?nt:u;var l=c==nt,h=u==nt,f=c==u;if(f&&dl(t)){if(!dl(e))return!1;s=!0,l=!1}if(f&&!l)return o||(o=new Yr),s||Vl(t)?Ds(t,e,n,r,i,o):Ls(t,e,c,n,r,i,o);if(!(n&v)){var d=l&&he.call(t,"__wrapped__"),p=h&&he.call(e,"__wrapped__");if(d||p){var g=d?t.value():t,m=p?e.value():e;return o||(o=new Yr),i(g,m,n,r,o)}}return!!f&&(o||(o=new Yr),Ms(t,e,n,r,i,o))}function Ji(t){return Tl(t)&&Qs(t)==Z}function Xi(t,e,n,r){var i=n.length,s=i,a=!r;if(null==t)return!s;t=ne(t);while(i--){var c=n[i];if(a&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}while(++i<s){c=n[i];var u=c[0],l=t[u],h=c[1];if(a&&c[2]){if(l===o&&!(u in t))return!1}else{var f=new Yr;if(r)var d=r(l,h,u,t,e,f);if(!(d===o?Ki(h,l,v|y,r,f):d))return!1}}return!0}function Qi(t){if(!Ol(t)||ha(t))return!1;var e=_l(t)?ve:Xt;return e.test(Ra(t))}function Yi(t){return Tl(t)&&Li(t)==ot}function Zi(t){return Tl(t)&&Qs(t)==st}function to(t){return Tl(t)&&Il(t.length)&&!!Qe[Li(t)]}function eo(t){return"function"==typeof t?t:null==t?jf:"object"==typeof t?cl(t)?ao(t[0],t[1]):so(t):zf(t)}function no(t){if(!da(t))return Fe(t);var e=[];for(var n in ne(t))he.call(t,n)&&"constructor"!=n&&e.push(n);return e}function ro(t){if(!Ol(t))return ya(t);var e=da(t),n=[];for(var r in t)("constructor"!=r||!e&&he.call(t,r))&&n.push(r);return n}function io(t,e){return t<e}function oo(t,e){var r=-1,i=ll(t)?n(t.length):[];return Ei(t,(function(t,n,o){i[++r]=e(t,n,o)})),i}function so(t){var e=Hs(t);return 1==e.length&&e[0][2]?ga(e[0][0],e[0][1]):function(n){return n===t||Xi(n,t,e)}}function ao(t,e){return ca(t)&&pa(e)?ga(ja(t),e):function(n){var r=mh(n,t);return r===o&&r===e?yh(n,t):Ki(e,r,v|y)}}function co(t,e,n,r,i){t!==e&&Ai(e,(function(s,a){if(i||(i=new Yr),Ol(s))uo(t,e,a,n,co,r,i);else{var c=r?r(Ia(t,a),s,a+"",t,e,i):o;c===o&&(c=s),ci(t,a,c)}}),Ih)}function uo(t,e,n,r,i,s,a){var c=Ia(t,n),u=Ia(e,n),l=a.get(u);if(l)ci(t,n,l);else{var h=s?s(c,u,n+"",t,e,a):o,f=h===o;if(f){var d=cl(u),p=!d&&dl(u),g=!d&&!p&&Vl(u);h=u,d||p||g?cl(c)?h=c:hl(c)?h=is(c):p?(f=!1,h=Wo(u,!0)):g?(f=!1,h=Zo(u,!0)):h=[]:Pl(u)||al(u)?(h=c,al(c)?h=Ql(c):Ol(c)&&!_l(c)||(h=na(u))):f=!1}f&&(a.set(u,h),i(h,u,r,s,a),a["delete"](u)),ci(t,n,h)}}function lo(t,e){var n=t.length;if(n)return e+=e<0?n:0,sa(e,n)?t[e]:o}function ho(t,e,n){e=e.length?kn(e,(function(t){return cl(t)?function(e){return Pi(e,1===t.length?t[0]:t)}:t})):[jf];var r=-1;e=kn(e,Xn(zs()));var i=oo(t,(function(t,n,i){var o=kn(e,(function(e){return e(t)}));return{criteria:o,index:++r,value:t}}));return Gn(i,(function(t,e){return es(t,e,n)}))}function fo(t,e){return po(t,e,(function(e,n){return yh(t,n)}))}function po(t,e,n){var r=-1,i=e.length,o={};while(++r<i){var s=e[r],a=Pi(t,s);n(a,s)&&Oo(o,zo(s,t),a)}return o}function go(t){return function(e){return Pi(e,t)}}function mo(t,e,n,r){var i=r?Fn:Un,o=-1,s=e.length,a=t;t===e&&(e=is(e)),n&&(a=kn(t,Xn(n)));while(++o<s){var c=0,u=e[o],l=n?n(u):u;while((c=i(a,l,c,r))>-1)a!==t&&Te.call(a,c,1),Te.call(t,c,1)}return t}function vo(t,e){var n=t?e.length:0,r=n-1;while(n--){var i=e[n];if(n==r||i!==o){var o=i;sa(i)?Te.call(t,i,1):Lo(t,i)}}return t}function yo(t,e){return t+Pe(He()*(e-t+1))}function bo(t,e,r,i){var o=-1,s=Ve(Ne((e-t)/(r||1)),0),a=n(s);while(s--)a[i?s:++o]=t,t+=r;return a}function wo(t,e){var n="";if(!t||e<1||e>M)return n;do{e%2&&(n+=t),e=Pe(e/2),e&&(t+=t)}while(e);return n}function _o(t,e){return Sa(wa(t,e,jf),t+"")}function Eo(t){return oi(Bh(t))}function Io(t,e){var n=Bh(t);return Aa(n,mi(e,0,n.length))}function Oo(t,e,n,r){if(!Ol(t))return t;e=zo(e,t);var i=-1,s=e.length,a=s-1,c=t;while(null!=c&&++i<s){var u=ja(e[i]),l=n;if("__proto__"===u||"constructor"===u||"prototype"===u)return t;if(i!=a){var h=c[u];l=r?r(h,u,c):o,l===o&&(l=Ol(h)?h:sa(e[i+1])?[]:{})}ui(c,u,l),c=c[u]}return t}var To=an?function(t,e){return an.set(t,e),t}:jf,So=Ae?function(t,e){return Ae(t,"toString",{configurable:!0,enumerable:!1,value:xf(e),writable:!0})}:jf;function xo(t){return Aa(Bh(t))}function ko(t,e,r){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),r=r>o?o:r,r<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;var s=n(o);while(++i<o)s[i]=t[i+e];return s}function Ao(t,e){var n;return Ei(t,(function(t,r,i){return n=e(t,r,i),!n})),!!n}function Co(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e===e&&i<=$){while(r<i){var o=r+i>>>1,s=t[o];null!==s&&!Fl(s)&&(n?s<=e:s<e)?r=o+1:i=o}return i}return jo(t,e,jf,n)}function jo(t,e,n,r){var i=0,s=null==t?0:t.length;if(0===s)return 0;e=n(e);var a=e!==e,c=null===e,u=Fl(e),l=e===o;while(i<s){var h=Pe((i+s)/2),f=n(t[h]),d=f!==o,p=null===f,g=f===f,m=Fl(f);if(a)var v=r||g;else v=l?g&&(r||d):c?g&&d&&(r||!p):u?g&&d&&!p&&(r||!m):!p&&!m&&(r?f<=e:f<e);v?i=h+1:s=h}return Be(s,B)}function Ro(t,e){var n=-1,r=t.length,i=0,o=[];while(++n<r){var s=t[n],a=e?e(s):s;if(!n||!il(a,c)){var c=a;o[i++]=0===s?0:s}}return o}function No(t){return"number"==typeof t?t:Fl(t)?F:+t}function Po(t){if("string"==typeof t)return t;if(cl(t))return kn(t,Po)+"";if(Fl(t))return wr?wr.call(t):"";var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Do(t,e,n){var r=-1,i=Sn,o=t.length,s=!0,c=[],u=c;if(n)s=!1,i=xn;else if(o>=a){var l=e?null:As(t);if(l)return fr(l);s=!1,i=Yn,u=new Jr}else u=e?[]:c;t:while(++r<o){var h=t[r],f=e?e(h):h;if(h=n||0!==h?h:0,s&&f===f){var d=u.length;while(d--)if(u[d]===f)continue t;e&&u.push(f),c.push(h)}else i(u,f,n)||(u!==c&&u.push(f),c.push(h))}return c}function Lo(t,e){return e=zo(e,t),t=_a(t,e),null==t||delete t[ja(oc(e))]}function Mo(t,e,n,r){return Oo(t,e,n(Pi(t,e)),r)}function Uo(t,e,n,r){var i=t.length,o=r?i:-1;while((r?o--:++o<i)&&e(t[o],o,t));return n?ko(t,r?0:o,r?o+1:i):ko(t,r?o+1:0,r?i:o)}function Fo(t,e){var n=t;return n instanceof xr&&(n=n.value()),Cn(e,(function(t,e){return e.func.apply(e.thisArg,An([t],e.args))}),n)}function Vo(t,e,r){var i=t.length;if(i<2)return i?Do(t[0]):[];var o=-1,s=n(i);while(++o<i){var a=t[o],c=-1;while(++c<i)c!=o&&(s[o]=_i(s[o]||a,t[c],e,r))}return Do(ki(s,1),e,r)}function Bo(t,e,n){var r=-1,i=t.length,s=e.length,a={};while(++r<i){var c=r<s?e[r]:o;n(a,t[r],c)}return a}function $o(t){return hl(t)?t:[]}function qo(t){return"function"==typeof t?t:jf}function zo(t,e){return cl(t)?t:ca(t,e)?[t]:Ca(Zl(t))}var Go=_o;function Ho(t,e,n){var r=t.length;return n=n===o?r:n,!e&&n>=r?t:ko(t,e,n)}var Ko=Ce||function(t){return cn.clearTimeout(t)};function Wo(t,e){if(e)return t.slice();var n=t.length,r=_e?_e(n):new t.constructor(n);return t.copy(r),r}function Jo(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e}function Xo(t,e){var n=e?Jo(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function Qo(t){var e=new t.constructor(t.source,Kt.exec(t));return e.lastIndex=t.lastIndex,e}function Yo(t){return pr?ne(pr.call(t)):{}}function Zo(t,e){var n=e?Jo(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function ts(t,e){if(t!==e){var n=t!==o,r=null===t,i=t===t,s=Fl(t),a=e!==o,c=null===e,u=e===e,l=Fl(e);if(!c&&!l&&!s&&t>e||s&&a&&u&&!c&&!l||r&&a&&u||!n&&u||!i)return 1;if(!r&&!s&&!l&&t<e||l&&n&&i&&!r&&!s||c&&n&&i||!a&&i||!u)return-1}return 0}function es(t,e,n){var r=-1,i=t.criteria,o=e.criteria,s=i.length,a=n.length;while(++r<s){var c=ts(i[r],o[r]);if(c){if(r>=a)return c;var u=n[r];return c*("desc"==u?-1:1)}}return t.index-e.index}function ns(t,e,r,i){var o=-1,s=t.length,a=r.length,c=-1,u=e.length,l=Ve(s-a,0),h=n(u+l),f=!i;while(++c<u)h[c]=e[c];while(++o<a)(f||o<s)&&(h[r[o]]=t[o]);while(l--)h[c++]=t[o++];return h}function rs(t,e,r,i){var o=-1,s=t.length,a=-1,c=r.length,u=-1,l=e.length,h=Ve(s-c,0),f=n(h+l),d=!i;while(++o<h)f[o]=t[o];var p=o;while(++u<l)f[p+u]=e[u];while(++a<c)(d||o<s)&&(f[p+r[a]]=t[o++]);return f}function is(t,e){var r=-1,i=t.length;e||(e=n(i));while(++r<i)e[r]=t[r];return e}function os(t,e,n,r){var i=!n;n||(n={});var s=-1,a=e.length;while(++s<a){var c=e[s],u=r?r(n[c],t[c],c,n,t):o;u===o&&(u=t[c]),i?pi(n,c,u):ui(n,c,u)}return n}function ss(t,e){return os(t,Js(t),e)}function as(t,e){return os(t,Xs(t),e)}function cs(t,e){return function(n,r){var i=cl(n)?_n:hi,o=e?e():{};return i(n,t,zs(r,2),o)}}function us(t){return _o((function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:o,a=i>2?n[2]:o;s=t.length>3&&"function"==typeof s?(i--,s):o,a&&aa(n[0],n[1],a)&&(s=i<3?o:s,i=1),e=ne(e);while(++r<i){var c=n[r];c&&t(e,c,r,s)}return e}))}function ls(t,e){return function(n,r){if(null==n)return n;if(!ll(n))return t(n,r);var i=n.length,o=e?i:-1,s=ne(n);while(e?o--:++o<i)if(!1===r(s[o],o,s))break;return n}}function hs(t){return function(e,n,r){var i=-1,o=ne(e),s=r(e),a=s.length;while(a--){var c=s[t?a:++i];if(!1===n(o[c],c,o))break}return e}}function fs(t,e,n){var r=e&b,i=gs(t);function o(){var e=this&&this!==cn&&this instanceof o?i:t;return e.apply(r?n:this,arguments)}return o}function ds(t){return function(e){e=Zl(e);var n=sr(e)?vr(e):o,r=n?n[0]:e.charAt(0),i=n?Ho(n,1).join(""):e.slice(1);return r[t]()+i}}function ps(t){return function(e){return Cn(Ef(Wh(e).replace(qe,"")),t,"")}}function gs(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Ir(t.prototype),r=t.apply(n,e);return Ol(r)?r:n}}function ms(t,e,r){var i=gs(t);function s(){var a=arguments.length,c=n(a),u=a,l=qs(s);while(u--)c[u]=arguments[u];var h=a<3&&c[0]!==l&&c[a-1]!==l?[]:hr(c,l);if(a-=h.length,a<r)return xs(t,e,bs,s.placeholder,o,c,h,o,o,r-a);var f=this&&this!==cn&&this instanceof s?i:t;return wn(f,this,c)}return s}function vs(t){return function(e,n,r){var i=ne(e);if(!ll(e)){var s=zs(n,3);e=Eh(e),n=function(t){return s(i[t],t,i)}}var a=t(e,n,r);return a>-1?i[s?e[a]:a]:o}}function ys(t){return Us((function(e){var n=e.length,r=n,i=Sr.prototype.thru;t&&e.reverse();while(r--){var s=e[r];if("function"!=typeof s)throw new oe(u);if(i&&!a&&"wrapper"==$s(s))var a=new Sr([],!0)}r=a?r:n;while(++r<n){s=e[r];var c=$s(s),l="wrapper"==c?Bs(s):o;a=l&&la(l[0])&&l[1]==(S|E|O|x)&&!l[4].length&&1==l[9]?a[$s(l[0])].apply(a,l[3]):1==s.length&&la(s)?a[c]():a.thru(s)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&cl(r))return a.plant(r).value();var i=0,o=n?e[i].apply(this,t):r;while(++i<n)o=e[i].call(this,o);return o}}))}function bs(t,e,r,i,s,a,c,u,l,h){var f=e&S,d=e&b,p=e&w,g=e&(E|I),m=e&k,v=p?o:gs(t);function y(){var o=arguments.length,b=n(o),w=o;while(w--)b[w]=arguments[w];if(g)var _=qs(y),E=er(b,_);if(i&&(b=ns(b,i,s,g)),a&&(b=rs(b,a,c,g)),o-=E,g&&o<h){var I=hr(b,_);return xs(t,e,bs,y.placeholder,r,b,I,u,l,h-o)}var O=d?r:this,T=p?O[t]:t;return o=b.length,u?b=Ea(b,u):m&&o>1&&b.reverse(),f&&l<o&&(b.length=l),this&&this!==cn&&this instanceof y&&(T=v||gs(T)),T.apply(O,b)}return y}function ws(t,e){return function(n,r){return $i(n,t,e(r),{})}}function _s(t,e){return function(n,r){var i;if(n===o&&r===o)return e;if(n!==o&&(i=n),r!==o){if(i===o)return r;"string"==typeof n||"string"==typeof r?(n=Po(n),r=Po(r)):(n=No(n),r=No(r)),i=t(n,r)}return i}}function Es(t){return Us((function(e){return e=kn(e,Xn(zs())),_o((function(n){var r=this;return t(e,(function(t){return wn(t,r,n)}))}))}))}function Is(t,e){e=e===o?" ":Po(e);var n=e.length;if(n<2)return n?wo(e,t):e;var r=wo(e,Ne(t/mr(e)));return sr(e)?Ho(vr(r),0,t).join(""):r.slice(0,t)}function Os(t,e,r,i){var o=e&b,s=gs(t);function a(){var e=-1,c=arguments.length,u=-1,l=i.length,h=n(l+c),f=this&&this!==cn&&this instanceof a?s:t;while(++u<l)h[u]=i[u];while(c--)h[u++]=arguments[++e];return wn(f,o?r:this,h)}return a}function Ts(t){return function(e,n,r){return r&&"number"!=typeof r&&aa(e,n,r)&&(n=r=o),e=Kl(e),n===o?(n=e,e=0):n=Kl(n),r=r===o?e<n?1:-1:Kl(r),bo(e,n,r,t)}}function Ss(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Xl(e),n=Xl(n)),t(e,n)}}function xs(t,e,n,r,i,s,a,c,u,l){var h=e&E,f=h?a:o,d=h?o:a,p=h?s:o,g=h?o:s;e|=h?O:T,e&=~(h?T:O),e&_||(e&=~(b|w));var m=[t,e,i,p,f,g,d,c,u,l],v=n.apply(o,m);return la(t)&&Oa(v,m),v.placeholder=r,xa(v,t,e)}function ks(t){var e=qt[t];return function(t,n){if(t=Xl(t),n=null==n?0:Be(Wl(n),292),n&&Me(t)){var r=(Zl(t)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(Zl(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(t)}}var As=en&&1/fr(new en([,-0]))[1]==L?function(t){return new en(t)}:Ff;function Cs(t){return function(e){var n=Qs(e);return n==Z?ur(e):n==st?dr(e):Wn(e,t(e))}}function js(t,e,n,r,i,s,a,c){var l=e&w;if(!l&&"function"!=typeof t)throw new oe(u);var h=r?r.length:0;if(h||(e&=~(O|T),r=i=o),a=a===o?a:Ve(Wl(a),0),c=c===o?c:Wl(c),h-=i?i.length:0,e&T){var f=r,d=i;r=i=o}var p=l?o:Bs(t),g=[t,e,n,r,i,f,d,s,a,c];if(p&&va(g,p),t=g[0],e=g[1],n=g[2],r=g[3],i=g[4],c=g[9]=g[9]===o?l?0:t.length:Ve(g[9]-h,0),!c&&e&(E|I)&&(e&=~(E|I)),e&&e!=b)m=e==E||e==I?ms(t,e,c):e!=O&&e!=(b|O)||i.length?bs.apply(o,g):Os(t,e,n,r);else var m=fs(t,e,n);var v=p?To:Oa;return xa(v(m,g),t,e)}function Rs(t,e,n,r){return t===o||il(t,ce[n])&&!he.call(r,n)?e:t}function Ns(t,e,n,r,i,s){return Ol(t)&&Ol(e)&&(s.set(e,t),co(t,e,o,Ns,s),s["delete"](e)),t}function Ps(t){return Pl(t)?o:t}function Ds(t,e,n,r,i,s){var a=n&v,c=t.length,u=e.length;if(c!=u&&!(a&&u>c))return!1;var l=s.get(t),h=s.get(e);if(l&&h)return l==e&&h==t;var f=-1,d=!0,p=n&y?new Jr:o;s.set(t,e),s.set(e,t);while(++f<c){var g=t[f],m=e[f];if(r)var b=a?r(m,g,f,e,t,s):r(g,m,f,t,e,s);if(b!==o){if(b)continue;d=!1;break}if(p){if(!Rn(e,(function(t,e){if(!Yn(p,e)&&(g===t||i(g,t,n,r,s)))return p.push(e)}))){d=!1;break}}else if(g!==m&&!i(g,m,n,r,s)){d=!1;break}}return s["delete"](t),s["delete"](e),d}function Ls(t,e,n,r,i,o,s){switch(n){case dt:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ft:return!(t.byteLength!=e.byteLength||!o(new we(t),new we(e)));case K:case W:case tt:return il(+t,+e);case X:return t.name==e.name&&t.message==e.message;case ot:case at:return t==e+"";case Z:var a=ur;case st:var c=r&v;if(a||(a=fr),t.size!=e.size&&!c)return!1;var u=s.get(t);if(u)return u==e;r|=y,s.set(t,e);var l=Ds(a(t),a(e),r,i,o,s);return s["delete"](t),l;case ct:if(pr)return pr.call(t)==pr.call(e)}return!1}function Ms(t,e,n,r,i,s){var a=n&v,c=Fs(t),u=c.length,l=Fs(e),h=l.length;if(u!=h&&!a)return!1;var f=u;while(f--){var d=c[f];if(!(a?d in e:he.call(e,d)))return!1}var p=s.get(t),g=s.get(e);if(p&&g)return p==e&&g==t;var m=!0;s.set(t,e),s.set(e,t);var y=a;while(++f<u){d=c[f];var b=t[d],w=e[d];if(r)var _=a?r(w,b,d,e,t,s):r(b,w,d,t,e,s);if(!(_===o?b===w||i(b,w,n,r,s):_)){m=!1;break}y||(y="constructor"==d)}if(m&&!y){var E=t.constructor,I=e.constructor;E==I||!("constructor"in t)||!("constructor"in e)||"function"==typeof E&&E instanceof E&&"function"==typeof I&&I instanceof I||(m=!1)}return s["delete"](t),s["delete"](e),m}function Us(t){return Sa(wa(t,o,Wa),t+"")}function Fs(t){return Di(t,Eh,Js)}function Vs(t){return Di(t,Ih,Xs)}var Bs=an?function(t){return an.get(t)}:Ff;function $s(t){var e=t.name+"",n=un[e],r=he.call(un,e)?n.length:0;while(r--){var i=n[r],o=i.func;if(null==o||o==t)return i.name}return e}function qs(t){var e=he.call(_r,"placeholder")?_r:t;return e.placeholder}function zs(){var t=_r.iteratee||Rf;return t=t===Rf?eo:t,arguments.length?t(arguments[0],arguments[1]):t}function Gs(t,e){var n=t.__data__;return ua(e)?n["string"==typeof e?"string":"hash"]:n.map}function Hs(t){var e=Eh(t),n=e.length;while(n--){var r=e[n],i=t[r];e[n]=[r,i,pa(i)]}return e}function Ks(t,e){var n=or(t,e);return Qi(n)?n:o}function Ws(t){var e=he.call(t,ke),n=t[ke];try{t[ke]=o;var r=!0}catch(s){}var i=pe.call(t);return r&&(e?t[ke]=n:delete t[ke]),i}var Js=De?function(t){return null==t?[]:(t=ne(t),Tn(De(t),(function(e){return Oe.call(t,e)})))}:Wf,Xs=De?function(t){var e=[];while(t)An(e,Js(t)),t=Ee(t);return e}:Wf,Qs=Li;function Ys(t,e,n){var r=-1,i=n.length;while(++r<i){var o=n[r],s=o.size;switch(o.type){case"drop":t+=s;break;case"dropRight":e-=s;break;case"take":e=Be(e,t+s);break;case"takeRight":t=Ve(t,e-s);break}}return{start:t,end:e}}function Zs(t){var e=t.match(Bt);return e?e[1].split($t):[]}function ta(t,e,n){e=zo(e,t);var r=-1,i=e.length,o=!1;while(++r<i){var s=ja(e[r]);if(!(o=null!=t&&n(t,s)))break;t=t[s]}return o||++r!=i?o:(i=null==t?0:t.length,!!i&&Il(i)&&sa(s,i)&&(cl(t)||al(t)))}function ea(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&he.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function na(t){return"function"!=typeof t.constructor||da(t)?{}:Ir(Ee(t))}function ra(t,e,n){var r=t.constructor;switch(e){case ft:return Jo(t);case K:case W:return new r(+t);case dt:return Xo(t,n);case pt:case gt:case mt:case vt:case yt:case bt:case wt:case _t:case Et:return Zo(t,n);case Z:return new r;case tt:case at:return new r(t);case ot:return Qo(t);case st:return new r;case ct:return Yo(t)}}function ia(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Vt,"{\n/* [wrapped with "+e+"] */\n")}function oa(t){return cl(t)||al(t)||!!(Se&&t&&t[Se])}function sa(t,e){var n=typeof t;return e=null==e?M:e,!!e&&("number"==n||"symbol"!=n&&Yt.test(t))&&t>-1&&t%1==0&&t<e}function aa(t,e,n){if(!Ol(n))return!1;var r=typeof e;return!!("number"==r?ll(n)&&sa(e,n.length):"string"==r&&e in n)&&il(n[e],t)}function ca(t,e){if(cl(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fl(t))||(Pt.test(t)||!Nt.test(t)||null!=e&&t in ne(e))}function ua(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function la(t){var e=$s(t),n=_r[e];if("function"!=typeof n||!(e in xr.prototype))return!1;if(t===n)return!0;var r=Bs(n);return!!r&&t===r[0]}function ha(t){return!!de&&de in t}(We&&Qs(new We(new ArrayBuffer(1)))!=dt||Ze&&Qs(new Ze)!=Z||tn&&Qs(tn.resolve())!=rt||en&&Qs(new en)!=st||nn&&Qs(new nn)!=lt)&&(Qs=function(t){var e=Li(t),n=e==nt?t.constructor:o,r=n?Ra(n):"";if(r)switch(r){case ln:return dt;case fn:return Z;case dn:return rt;case Nn:return st;case Pn:return lt}return e});var fa=ue?_l:Jf;function da(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||ce;return t===n}function pa(t){return t===t&&!Ol(t)}function ga(t,e){return function(n){return null!=n&&(n[t]===e&&(e!==o||t in ne(n)))}}function ma(t){var e=Vu(t,(function(t){return n.size===f&&n.clear(),t})),n=e.cache;return e}function va(t,e){var n=t[1],r=e[1],i=n|r,o=i<(b|w|S),s=r==S&&n==E||r==S&&n==x&&t[7].length<=e[8]||r==(S|x)&&e[7].length<=e[8]&&n==E;if(!o&&!s)return t;r&b&&(t[2]=e[2],i|=n&b?0:_);var a=e[3];if(a){var c=t[3];t[3]=c?ns(c,a,e[4]):a,t[4]=c?hr(t[3],d):e[4]}return a=e[5],a&&(c=t[5],t[5]=c?rs(c,a,e[6]):a,t[6]=c?hr(t[5],d):e[6]),a=e[7],a&&(t[7]=a),r&S&&(t[8]=null==t[8]?e[8]:Be(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function ya(t){var e=[];if(null!=t)for(var n in ne(t))e.push(n);return e}function ba(t){return pe.call(t)}function wa(t,e,r){return e=Ve(e===o?t.length-1:e,0),function(){var i=arguments,o=-1,s=Ve(i.length-e,0),a=n(s);while(++o<s)a[o]=i[e+o];o=-1;var c=n(e+1);while(++o<e)c[o]=i[o];return c[e]=r(a),wn(t,this,c)}}function _a(t,e){return e.length<2?t:Pi(t,ko(e,0,-1))}function Ea(t,e){var n=t.length,r=Be(e.length,n),i=is(t);while(r--){var s=e[r];t[r]=sa(s,n)?i[s]:o}return t}function Ia(t,e){if(("constructor"!==e||"function"!==typeof t[e])&&"__proto__"!=e)return t[e]}var Oa=ka(To),Ta=Re||function(t,e){return cn.setTimeout(t,e)},Sa=ka(So);function xa(t,e,n){var r=e+"";return Sa(t,ia(r,Na(Zs(r),n)))}function ka(t){var e=0,n=0;return function(){var r=$e(),i=R-(r-n);if(n=r,i>0){if(++e>=j)return arguments[0]}else e=0;return t.apply(o,arguments)}}function Aa(t,e){var n=-1,r=t.length,i=r-1;e=e===o?r:e;while(++n<e){var s=yo(n,i),a=t[s];t[s]=t[n],t[n]=a}return t.length=e,t}var Ca=ma((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Dt,(function(t,n,r,i){e.push(r?i.replace(Gt,"$1"):n||t)})),e}));function ja(t){if("string"==typeof t||Fl(t))return t;var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Ra(t){if(null!=t){try{return le.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Na(t,e){return En(q,(function(n){var r="_."+n[0];e&n[1]&&!Sn(t,r)&&t.push(r)})),t.sort()}function Pa(t){if(t instanceof xr)return t.clone();var e=new Sr(t.__wrapped__,t.__chain__);return e.__actions__=is(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Da(t,e,r){e=(r?aa(t,e,r):e===o)?1:Ve(Wl(e),0);var i=null==t?0:t.length;if(!i||e<1)return[];var s=0,a=0,c=n(Ne(i/e));while(s<i)c[a++]=ko(t,s,s+=e);return c}function La(t){var e=-1,n=null==t?0:t.length,r=0,i=[];while(++e<n){var o=t[e];o&&(i[r++]=o)}return i}function Ma(){var t=arguments.length;if(!t)return[];var e=n(t-1),r=arguments[0],i=t;while(i--)e[i-1]=arguments[i];return An(cl(r)?is(r):[r],ki(e,1))}var Ua=_o((function(t,e){return hl(t)?_i(t,ki(e,1,hl,!0)):[]})),Fa=_o((function(t,e){var n=oc(e);return hl(n)&&(n=o),hl(t)?_i(t,ki(e,1,hl,!0),zs(n,2)):[]})),Va=_o((function(t,e){var n=oc(e);return hl(n)&&(n=o),hl(t)?_i(t,ki(e,1,hl,!0),o,n):[]}));function Ba(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===o?1:Wl(e),ko(t,e<0?0:e,r)):[]}function $a(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===o?1:Wl(e),e=r-e,ko(t,0,e<0?0:e)):[]}function qa(t,e){return t&&t.length?Uo(t,zs(e,3),!0,!0):[]}function za(t,e){return t&&t.length?Uo(t,zs(e,3),!0):[]}function Ga(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&aa(t,e,n)&&(n=0,r=i),Si(t,e,n,r)):[]}function Ha(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Wl(n);return i<0&&(i=Ve(r+i,0)),Mn(t,zs(e,3),i)}function Ka(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return n!==o&&(i=Wl(n),i=n<0?Ve(r+i,0):Be(i,r-1)),Mn(t,zs(e,3),i,!0)}function Wa(t){var e=null==t?0:t.length;return e?ki(t,1):[]}function Ja(t){var e=null==t?0:t.length;return e?ki(t,L):[]}function Xa(t,e){var n=null==t?0:t.length;return n?(e=e===o?1:Wl(e),ki(t,e)):[]}function Qa(t){var e=-1,n=null==t?0:t.length,r={};while(++e<n){var i=t[e];r[i[0]]=i[1]}return r}function Ya(t){return t&&t.length?t[0]:o}function Za(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Wl(n);return i<0&&(i=Ve(r+i,0)),Un(t,e,i)}function tc(t){var e=null==t?0:t.length;return e?ko(t,0,-1):[]}var ec=_o((function(t){var e=kn(t,$o);return e.length&&e[0]===t[0]?Bi(e):[]})),nc=_o((function(t){var e=oc(t),n=kn(t,$o);return e===oc(n)?e=o:n.pop(),n.length&&n[0]===t[0]?Bi(n,zs(e,2)):[]})),rc=_o((function(t){var e=oc(t),n=kn(t,$o);return e="function"==typeof e?e:o,e&&n.pop(),n.length&&n[0]===t[0]?Bi(n,o,e):[]}));function ic(t,e){return null==t?"":Ue.call(t,e)}function oc(t){var e=null==t?0:t.length;return e?t[e-1]:o}function sc(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r;return n!==o&&(i=Wl(n),i=i<0?Ve(r+i,0):Be(i,r-1)),e===e?gr(t,e,i):Mn(t,Vn,i,!0)}function ac(t,e){return t&&t.length?lo(t,Wl(e)):o}var cc=_o(uc);function uc(t,e){return t&&t.length&&e&&e.length?mo(t,e):t}function lc(t,e,n){return t&&t.length&&e&&e.length?mo(t,e,zs(n,2)):t}function hc(t,e,n){return t&&t.length&&e&&e.length?mo(t,e,o,n):t}var fc=Us((function(t,e){var n=null==t?0:t.length,r=gi(t,e);return vo(t,kn(e,(function(t){return sa(t,n)?+t:t})).sort(ts)),r}));function dc(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;e=zs(e,3);while(++r<o){var s=t[r];e(s,r,t)&&(n.push(s),i.push(r))}return vo(t,i),n}function pc(t){return null==t?t:Ke.call(t)}function gc(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&aa(t,e,n)?(e=0,n=r):(e=null==e?0:Wl(e),n=n===o?r:Wl(n)),ko(t,e,n)):[]}function mc(t,e){return Co(t,e)}function vc(t,e,n){return jo(t,e,zs(n,2))}function yc(t,e){var n=null==t?0:t.length;if(n){var r=Co(t,e);if(r<n&&il(t[r],e))return r}return-1}function bc(t,e){return Co(t,e,!0)}function wc(t,e,n){return jo(t,e,zs(n,2),!0)}function _c(t,e){var n=null==t?0:t.length;if(n){var r=Co(t,e,!0)-1;if(il(t[r],e))return r}return-1}function Ec(t){return t&&t.length?Ro(t):[]}function Ic(t,e){return t&&t.length?Ro(t,zs(e,2)):[]}function Oc(t){var e=null==t?0:t.length;return e?ko(t,1,e):[]}function Tc(t,e,n){return t&&t.length?(e=n||e===o?1:Wl(e),ko(t,0,e<0?0:e)):[]}function Sc(t,e,n){var r=null==t?0:t.length;return r?(e=n||e===o?1:Wl(e),e=r-e,ko(t,e<0?0:e,r)):[]}function xc(t,e){return t&&t.length?Uo(t,zs(e,3),!1,!0):[]}function kc(t,e){return t&&t.length?Uo(t,zs(e,3)):[]}var Ac=_o((function(t){return Do(ki(t,1,hl,!0))})),Cc=_o((function(t){var e=oc(t);return hl(e)&&(e=o),Do(ki(t,1,hl,!0),zs(e,2))})),jc=_o((function(t){var e=oc(t);return e="function"==typeof e?e:o,Do(ki(t,1,hl,!0),o,e)}));function Rc(t){return t&&t.length?Do(t):[]}function Nc(t,e){return t&&t.length?Do(t,zs(e,2)):[]}function Pc(t,e){return e="function"==typeof e?e:o,t&&t.length?Do(t,o,e):[]}function Dc(t){if(!t||!t.length)return[];var e=0;return t=Tn(t,(function(t){if(hl(t))return e=Ve(t.length,e),!0})),Kn(e,(function(e){return kn(t,$n(e))}))}function Lc(t,e){if(!t||!t.length)return[];var n=Dc(t);return null==e?n:kn(n,(function(t){return wn(e,o,t)}))}var Mc=_o((function(t,e){return hl(t)?_i(t,e):[]})),Uc=_o((function(t){return Vo(Tn(t,hl))})),Fc=_o((function(t){var e=oc(t);return hl(e)&&(e=o),Vo(Tn(t,hl),zs(e,2))})),Vc=_o((function(t){var e=oc(t);return e="function"==typeof e?e:o,Vo(Tn(t,hl),o,e)})),Bc=_o(Dc);function $c(t,e){return Bo(t||[],e||[],ui)}function qc(t,e){return Bo(t||[],e||[],Oo)}var zc=_o((function(t){var e=t.length,n=e>1?t[e-1]:o;return n="function"==typeof n?(t.pop(),n):o,Lc(t,n)}));function Gc(t){var e=_r(t);return e.__chain__=!0,e}function Hc(t,e){return e(t),t}function Kc(t,e){return e(t)}var Wc=Us((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,i=function(e){return gi(e,t)};return!(e>1||this.__actions__.length)&&r instanceof xr&&sa(n)?(r=r.slice(n,+n+(e?1:0)),r.__actions__.push({func:Kc,args:[i],thisArg:o}),new Sr(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(o),t}))):this.thru(i)}));function Jc(){return Gc(this)}function Xc(){return new Sr(this.value(),this.__chain__)}function Qc(){this.__values__===o&&(this.__values__=Hl(this.value()));var t=this.__index__>=this.__values__.length,e=t?o:this.__values__[this.__index__++];return{done:t,value:e}}function Yc(){return this}function Zc(t){var e,n=this;while(n instanceof Tr){var r=Pa(n);r.__index__=0,r.__values__=o,e?i.__wrapped__=r:e=r;var i=r;n=n.__wrapped__}return i.__wrapped__=t,e}function tu(){var t=this.__wrapped__;if(t instanceof xr){var e=t;return this.__actions__.length&&(e=new xr(this)),e=e.reverse(),e.__actions__.push({func:Kc,args:[pc],thisArg:o}),new Sr(e,this.__chain__)}return this.thru(pc)}function eu(){return Fo(this.__wrapped__,this.__actions__)}var nu=cs((function(t,e,n){he.call(t,n)?++t[n]:pi(t,n,1)}));function ru(t,e,n){var r=cl(t)?On:Oi;return n&&aa(t,e,n)&&(e=o),r(t,zs(e,3))}function iu(t,e){var n=cl(t)?Tn:xi;return n(t,zs(e,3))}var ou=vs(Ha),su=vs(Ka);function au(t,e){return ki(mu(t,e),1)}function cu(t,e){return ki(mu(t,e),L)}function uu(t,e,n){return n=n===o?1:Wl(n),ki(mu(t,e),n)}function lu(t,e){var n=cl(t)?En:Ei;return n(t,zs(e,3))}function hu(t,e){var n=cl(t)?In:Ii;return n(t,zs(e,3))}var fu=cs((function(t,e,n){he.call(t,n)?t[n].push(e):pi(t,n,[e])}));function du(t,e,n,r){t=ll(t)?t:Bh(t),n=n&&!r?Wl(n):0;var i=t.length;return n<0&&(n=Ve(i+n,0)),Ul(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Un(t,e,n)>-1}var pu=_o((function(t,e,r){var i=-1,o="function"==typeof e,s=ll(t)?n(t.length):[];return Ei(t,(function(t){s[++i]=o?wn(e,t,r):qi(t,e,r)})),s})),gu=cs((function(t,e,n){pi(t,n,e)}));function mu(t,e){var n=cl(t)?kn:oo;return n(t,zs(e,3))}function vu(t,e,n,r){return null==t?[]:(cl(e)||(e=null==e?[]:[e]),n=r?o:n,cl(n)||(n=null==n?[]:[n]),ho(t,e,n))}var yu=cs((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));function bu(t,e,n){var r=cl(t)?Cn:zn,i=arguments.length<3;return r(t,zs(e,4),n,i,Ei)}function wu(t,e,n){var r=cl(t)?jn:zn,i=arguments.length<3;return r(t,zs(e,4),n,i,Ii)}function _u(t,e){var n=cl(t)?Tn:xi;return n(t,Bu(zs(e,3)))}function Eu(t){var e=cl(t)?oi:Eo;return e(t)}function Iu(t,e,n){e=(n?aa(t,e,n):e===o)?1:Wl(e);var r=cl(t)?si:Io;return r(t,e)}function Ou(t){var e=cl(t)?ai:xo;return e(t)}function Tu(t){if(null==t)return 0;if(ll(t))return Ul(t)?mr(t):t.length;var e=Qs(t);return e==Z||e==st?t.size:no(t).length}function Su(t,e,n){var r=cl(t)?Rn:Ao;return n&&aa(t,e,n)&&(e=o),r(t,zs(e,3))}var xu=_o((function(t,e){if(null==t)return[];var n=e.length;return n>1&&aa(t,e[0],e[1])?e=[]:n>2&&aa(e[0],e[1],e[2])&&(e=[e[0]]),ho(t,ki(e,1),[])})),ku=je||function(){return cn.Date.now()};function Au(t,e){if("function"!=typeof e)throw new oe(u);return t=Wl(t),function(){if(--t<1)return e.apply(this,arguments)}}function Cu(t,e,n){return e=n?o:e,e=t&&null==e?t.length:e,js(t,S,o,o,o,o,e)}function ju(t,e){var n;if("function"!=typeof e)throw new oe(u);return t=Wl(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=o),n}}var Ru=_o((function(t,e,n){var r=b;if(n.length){var i=hr(n,qs(Ru));r|=O}return js(t,r,e,n,i)})),Nu=_o((function(t,e,n){var r=b|w;if(n.length){var i=hr(n,qs(Nu));r|=O}return js(e,r,t,n,i)}));function Pu(t,e,n){e=n?o:e;var r=js(t,E,o,o,o,o,o,e);return r.placeholder=Pu.placeholder,r}function Du(t,e,n){e=n?o:e;var r=js(t,I,o,o,o,o,o,e);return r.placeholder=Du.placeholder,r}function Lu(t,e,n){var r,i,s,a,c,l,h=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new oe(u);function g(e){var n=r,s=i;return r=i=o,h=e,a=t.apply(s,n),a}function m(t){return h=t,c=Ta(b,e),f?g(t):a}function v(t){var n=t-l,r=t-h,i=e-n;return d?Be(i,s-r):i}function y(t){var n=t-l,r=t-h;return l===o||n>=e||n<0||d&&r>=s}function b(){var t=ku();if(y(t))return w(t);c=Ta(b,v(t))}function w(t){return c=o,p&&r?g(t):(r=i=o,a)}function _(){c!==o&&Ko(c),h=0,r=l=i=c=o}function E(){return c===o?a:w(ku())}function I(){var t=ku(),n=y(t);if(r=arguments,i=this,l=t,n){if(c===o)return m(l);if(d)return Ko(c),c=Ta(b,e),g(l)}return c===o&&(c=Ta(b,e)),a}return e=Xl(e)||0,Ol(n)&&(f=!!n.leading,d="maxWait"in n,s=d?Ve(Xl(n.maxWait)||0,e):s,p="trailing"in n?!!n.trailing:p),I.cancel=_,I.flush=E,I}var Mu=_o((function(t,e){return wi(t,1,e)})),Uu=_o((function(t,e,n){return wi(t,Xl(e)||0,n)}));function Fu(t){return js(t,k)}function Vu(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new oe(u);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=t.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Vu.Cache||qr),n}function Bu(t){if("function"!=typeof t)throw new oe(u);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function $u(t){return ju(2,t)}Vu.Cache=qr;var qu=Go((function(t,e){e=1==e.length&&cl(e[0])?kn(e[0],Xn(zs())):kn(ki(e,1),Xn(zs()));var n=e.length;return _o((function(r){var i=-1,o=Be(r.length,n);while(++i<o)r[i]=e[i].call(this,r[i]);return wn(t,this,r)}))})),zu=_o((function(t,e){var n=hr(e,qs(zu));return js(t,O,o,e,n)})),Gu=_o((function(t,e){var n=hr(e,qs(Gu));return js(t,T,o,e,n)})),Hu=Us((function(t,e){return js(t,x,o,o,o,e)}));function Ku(t,e){if("function"!=typeof t)throw new oe(u);return e=e===o?e:Wl(e),_o(t,e)}function Wu(t,e){if("function"!=typeof t)throw new oe(u);return e=null==e?0:Ve(Wl(e),0),_o((function(n){var r=n[e],i=Ho(n,0,e);return r&&An(i,r),wn(t,this,i)}))}function Ju(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new oe(u);return Ol(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Lu(t,e,{leading:r,maxWait:e,trailing:i})}function Xu(t){return Cu(t,1)}function Qu(t,e){return zu(qo(e),t)}function Yu(){if(!arguments.length)return[];var t=arguments[0];return cl(t)?t:[t]}function Zu(t){return vi(t,m)}function tl(t,e){return e="function"==typeof e?e:o,vi(t,m,e)}function el(t){return vi(t,p|m)}function nl(t,e){return e="function"==typeof e?e:o,vi(t,p|m,e)}function rl(t,e){return null==e||bi(t,e,Eh(e))}function il(t,e){return t===e||t!==t&&e!==e}var ol=Ss(Mi),sl=Ss((function(t,e){return t>=e})),al=zi(function(){return arguments}())?zi:function(t){return Tl(t)&&he.call(t,"callee")&&!Oe.call(t,"callee")},cl=n.isArray,ul=pn?Xn(pn):Gi;function ll(t){return null!=t&&Il(t.length)&&!_l(t)}function hl(t){return Tl(t)&&ll(t)}function fl(t){return!0===t||!1===t||Tl(t)&&Li(t)==K}var dl=Le||Jf,pl=gn?Xn(gn):Hi;function gl(t){return Tl(t)&&1===t.nodeType&&!Pl(t)}function ml(t){if(null==t)return!0;if(ll(t)&&(cl(t)||"string"==typeof t||"function"==typeof t.splice||dl(t)||Vl(t)||al(t)))return!t.length;var e=Qs(t);if(e==Z||e==st)return!t.size;if(da(t))return!no(t).length;for(var n in t)if(he.call(t,n))return!1;return!0}function vl(t,e){return Ki(t,e)}function yl(t,e,n){n="function"==typeof n?n:o;var r=n?n(t,e):o;return r===o?Ki(t,e,o,n):!!r}function bl(t){if(!Tl(t))return!1;var e=Li(t);return e==X||e==J||"string"==typeof t.message&&"string"==typeof t.name&&!Pl(t)}function wl(t){return"number"==typeof t&&Me(t)}function _l(t){if(!Ol(t))return!1;var e=Li(t);return e==Q||e==Y||e==H||e==it}function El(t){return"number"==typeof t&&t==Wl(t)}function Il(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=M}function Ol(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Tl(t){return null!=t&&"object"==typeof t}var Sl=mn?Xn(mn):Ji;function xl(t,e){return t===e||Xi(t,e,Hs(e))}function kl(t,e,n){return n="function"==typeof n?n:o,Xi(t,e,Hs(e),n)}function Al(t){return Nl(t)&&t!=+t}function Cl(t){if(fa(t))throw new i(c);return Qi(t)}function jl(t){return null===t}function Rl(t){return null==t}function Nl(t){return"number"==typeof t||Tl(t)&&Li(t)==tt}function Pl(t){if(!Tl(t)||Li(t)!=nt)return!1;var e=Ee(t);if(null===e)return!0;var n=he.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&le.call(n)==ge}var Dl=vn?Xn(vn):Yi;function Ll(t){return El(t)&&t>=-M&&t<=M}var Ml=yn?Xn(yn):Zi;function Ul(t){return"string"==typeof t||!cl(t)&&Tl(t)&&Li(t)==at}function Fl(t){return"symbol"==typeof t||Tl(t)&&Li(t)==ct}var Vl=bn?Xn(bn):to;function Bl(t){return t===o}function $l(t){return Tl(t)&&Qs(t)==lt}function ql(t){return Tl(t)&&Li(t)==ht}var zl=Ss(io),Gl=Ss((function(t,e){return t<=e}));function Hl(t){if(!t)return[];if(ll(t))return Ul(t)?vr(t):is(t);if(xe&&t[xe])return cr(t[xe]());var e=Qs(t),n=e==Z?ur:e==st?fr:Bh;return n(t)}function Kl(t){if(!t)return 0===t?t:0;if(t=Xl(t),t===L||t===-L){var e=t<0?-1:1;return e*U}return t===t?t:0}function Wl(t){var e=Kl(t),n=e%1;return e===e?n?e-n:e:0}function Jl(t){return t?mi(Wl(t),0,V):0}function Xl(t){if("number"==typeof t)return t;if(Fl(t))return F;if(Ol(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ol(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Jn(t);var n=Jt.test(t);return n||Qt.test(t)?on(t.slice(2),n?2:8):Wt.test(t)?F:+t}function Ql(t){return os(t,Ih(t))}function Yl(t){return t?mi(Wl(t),-M,M):0===t?t:0}function Zl(t){return null==t?"":Po(t)}var th=us((function(t,e){if(da(e)||ll(e))os(e,Eh(e),t);else for(var n in e)he.call(e,n)&&ui(t,n,e[n])})),eh=us((function(t,e){os(e,Ih(e),t)})),nh=us((function(t,e,n,r){os(e,Ih(e),t,r)})),rh=us((function(t,e,n,r){os(e,Eh(e),t,r)})),ih=Us(gi);function oh(t,e){var n=Ir(t);return null==e?n:fi(n,e)}var sh=_o((function(t,e){t=ne(t);var n=-1,r=e.length,i=r>2?e[2]:o;i&&aa(e[0],e[1],i)&&(r=1);while(++n<r){var s=e[n],a=Ih(s),c=-1,u=a.length;while(++c<u){var l=a[c],h=t[l];(h===o||il(h,ce[l])&&!he.call(t,l))&&(t[l]=s[l])}}return t})),ah=_o((function(t){return t.push(o,Ns),wn(xh,o,t)}));function ch(t,e){return Ln(t,zs(e,3),ji)}function uh(t,e){return Ln(t,zs(e,3),Ri)}function lh(t,e){return null==t?t:Ai(t,zs(e,3),Ih)}function hh(t,e){return null==t?t:Ci(t,zs(e,3),Ih)}function fh(t,e){return t&&ji(t,zs(e,3))}function dh(t,e){return t&&Ri(t,zs(e,3))}function ph(t){return null==t?[]:Ni(t,Eh(t))}function gh(t){return null==t?[]:Ni(t,Ih(t))}function mh(t,e,n){var r=null==t?o:Pi(t,e);return r===o?n:r}function vh(t,e){return null!=t&&ta(t,e,Ui)}function yh(t,e){return null!=t&&ta(t,e,Fi)}var bh=ws((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),t[e]=n}),xf(jf)),wh=ws((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=pe.call(e)),he.call(t,e)?t[e].push(n):t[e]=[n]}),zs),_h=_o(qi);function Eh(t){return ll(t)?ii(t):no(t)}function Ih(t){return ll(t)?ii(t,!0):ro(t)}function Oh(t,e){var n={};return e=zs(e,3),ji(t,(function(t,r,i){pi(n,e(t,r,i),t)})),n}function Th(t,e){var n={};return e=zs(e,3),ji(t,(function(t,r,i){pi(n,r,e(t,r,i))})),n}var Sh=us((function(t,e,n){co(t,e,n)})),xh=us((function(t,e,n,r){co(t,e,n,r)})),kh=Us((function(t,e){var n={};if(null==t)return n;var r=!1;e=kn(e,(function(e){return e=zo(e,t),r||(r=e.length>1),e})),os(t,Vs(t),n),r&&(n=vi(n,p|g|m,Ps));var i=e.length;while(i--)Lo(n,e[i]);return n}));function Ah(t,e){return jh(t,Bu(zs(e)))}var Ch=Us((function(t,e){return null==t?{}:fo(t,e)}));function jh(t,e){if(null==t)return{};var n=kn(Vs(t),(function(t){return[t]}));return e=zs(e),po(t,n,(function(t,n){return e(t,n[0])}))}function Rh(t,e,n){e=zo(e,t);var r=-1,i=e.length;i||(i=1,t=o);while(++r<i){var s=null==t?o:t[ja(e[r])];s===o&&(r=i,s=n),t=_l(s)?s.call(t):s}return t}function Nh(t,e,n){return null==t?t:Oo(t,e,n)}function Ph(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:Oo(t,e,n,r)}var Dh=Cs(Eh),Lh=Cs(Ih);function Mh(t,e,n){var r=cl(t),i=r||dl(t)||Vl(t);if(e=zs(e,4),null==n){var o=t&&t.constructor;n=i?r?new o:[]:Ol(t)&&_l(o)?Ir(Ee(t)):{}}return(i?En:ji)(t,(function(t,r,i){return e(n,t,r,i)})),n}function Uh(t,e){return null==t||Lo(t,e)}function Fh(t,e,n){return null==t?t:Mo(t,e,qo(n))}function Vh(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:Mo(t,e,qo(n),r)}function Bh(t){return null==t?[]:Qn(t,Eh(t))}function $h(t){return null==t?[]:Qn(t,Ih(t))}function qh(t,e,n){return n===o&&(n=e,e=o),n!==o&&(n=Xl(n),n=n===n?n:0),e!==o&&(e=Xl(e),e=e===e?e:0),mi(Xl(t),e,n)}function zh(t,e,n){return e=Kl(e),n===o?(n=e,e=0):n=Kl(n),t=Xl(t),Vi(t,e,n)}function Gh(t,e,n){if(n&&"boolean"!=typeof n&&aa(t,e,n)&&(e=n=o),n===o&&("boolean"==typeof e?(n=e,e=o):"boolean"==typeof t&&(n=t,t=o)),t===o&&e===o?(t=0,e=1):(t=Kl(t),e===o?(e=t,t=0):e=Kl(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var i=He();return Be(t+i*(e-t+rn("1e-"+((i+"").length-1))),e)}return yo(t,e)}var Hh=ps((function(t,e,n){return e=e.toLowerCase(),t+(n?Kh(e):e)}));function Kh(t){return _f(Zl(t).toLowerCase())}function Wh(t){return t=Zl(t),t&&t.replace(Zt,nr).replace(ze,"")}function Jh(t,e,n){t=Zl(t),e=Po(e);var r=t.length;n=n===o?r:mi(Wl(n),0,r);var i=n;return n-=e.length,n>=0&&t.slice(n,i)==e}function Xh(t){return t=Zl(t),t&&At.test(t)?t.replace(xt,rr):t}function Qh(t){return t=Zl(t),t&&Mt.test(t)?t.replace(Lt,"\\$&"):t}var Yh=ps((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Zh=ps((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),tf=ds("toLowerCase");function ef(t,e,n){t=Zl(t),e=Wl(e);var r=e?mr(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return Is(Pe(i),n)+t+Is(Ne(i),n)}function nf(t,e,n){t=Zl(t),e=Wl(e);var r=e?mr(t):0;return e&&r<e?t+Is(e-r,n):t}function rf(t,e,n){t=Zl(t),e=Wl(e);var r=e?mr(t):0;return e&&r<e?Is(e-r,n)+t:t}function of(t,e,n){return n||null==e?e=0:e&&(e=+e),Ge(Zl(t).replace(Ut,""),e||0)}function sf(t,e,n){return e=(n?aa(t,e,n):e===o)?1:Wl(e),wo(Zl(t),e)}function af(){var t=arguments,e=Zl(t[0]);return t.length<3?e:e.replace(t[1],t[2])}var cf=ps((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));function uf(t,e,n){return n&&"number"!=typeof n&&aa(t,e,n)&&(e=n=o),n=n===o?V:n>>>0,n?(t=Zl(t),t&&("string"==typeof e||null!=e&&!Dl(e))&&(e=Po(e),!e&&sr(t))?Ho(vr(t),0,n):t.split(e,n)):[]}var lf=ps((function(t,e,n){return t+(n?" ":"")+_f(e)}));function hf(t,e,n){return t=Zl(t),n=null==n?0:mi(Wl(n),0,t.length),e=Po(e),t.slice(n,n+e.length)==e}function ff(t,e,n){var r=_r.templateSettings;n&&aa(t,e,n)&&(e=o),t=Zl(t),e=nh({},e,r,Rs);var s,a,c=nh({},e.imports,r.imports,Rs),u=Eh(c),h=Qn(c,u),f=0,d=e.interpolate||te,p="__p += '",g=re((e.escape||te).source+"|"+d.source+"|"+(d===Rt?Ht:te).source+"|"+(e.evaluate||te).source+"|$","g"),m="//# sourceURL="+(he.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Xe+"]")+"\n";t.replace(g,(function(e,n,r,i,o,c){return r||(r=i),p+=t.slice(f,c).replace(ee,ir),n&&(s=!0,p+="' +\n__e("+n+") +\n'"),o&&(a=!0,p+="';\n"+o+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),f=c+e.length,e})),p+="';\n";var v=he.call(e,"variable")&&e.variable;if(v){if(zt.test(v))throw new i(l)}else p="with (obj) {\n"+p+"\n}\n";p=(a?p.replace(It,""):p).replace(Ot,"$1").replace(Tt,"$1;"),p="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var y=If((function(){return Ft(u,m+"return "+p).apply(o,h)}));if(y.source=p,bl(y))throw y;return y}function df(t){return Zl(t).toLowerCase()}function pf(t){return Zl(t).toUpperCase()}function gf(t,e,n){if(t=Zl(t),t&&(n||e===o))return Jn(t);if(!t||!(e=Po(e)))return t;var r=vr(t),i=vr(e),s=Zn(r,i),a=tr(r,i)+1;return Ho(r,s,a).join("")}function mf(t,e,n){if(t=Zl(t),t&&(n||e===o))return t.slice(0,yr(t)+1);if(!t||!(e=Po(e)))return t;var r=vr(t),i=tr(r,vr(e))+1;return Ho(r,0,i).join("")}function vf(t,e,n){if(t=Zl(t),t&&(n||e===o))return t.replace(Ut,"");if(!t||!(e=Po(e)))return t;var r=vr(t),i=Zn(r,vr(e));return Ho(r,i).join("")}function yf(t,e){var n=A,r=C;if(Ol(e)){var i="separator"in e?e.separator:i;n="length"in e?Wl(e.length):n,r="omission"in e?Po(e.omission):r}t=Zl(t);var s=t.length;if(sr(t)){var a=vr(t);s=a.length}if(n>=s)return t;var c=n-mr(r);if(c<1)return r;var u=a?Ho(a,0,c).join(""):t.slice(0,c);if(i===o)return u+r;if(a&&(c+=u.length-c),Dl(i)){if(t.slice(c).search(i)){var l,h=u;i.global||(i=re(i.source,Zl(Kt.exec(i))+"g")),i.lastIndex=0;while(l=i.exec(h))var f=l.index;u=u.slice(0,f===o?c:f)}}else if(t.indexOf(Po(i),c)!=c){var d=u.lastIndexOf(i);d>-1&&(u=u.slice(0,d))}return u+r}function bf(t){return t=Zl(t),t&&kt.test(t)?t.replace(St,br):t}var wf=ps((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),_f=ds("toUpperCase");function Ef(t,e,n){return t=Zl(t),e=n?o:e,e===o?ar(t)?Er(t):Dn(t):t.match(e)||[]}var If=_o((function(t,e){try{return wn(t,o,e)}catch(n){return bl(n)?n:new i(n)}})),Of=Us((function(t,e){return En(e,(function(e){e=ja(e),pi(t,e,Ru(t[e],t))})),t}));function Tf(t){var e=null==t?0:t.length,n=zs();return t=e?kn(t,(function(t){if("function"!=typeof t[1])throw new oe(u);return[n(t[0]),t[1]]})):[],_o((function(n){var r=-1;while(++r<e){var i=t[r];if(wn(i[0],this,n))return wn(i[1],this,n)}}))}function Sf(t){return yi(vi(t,p))}function xf(t){return function(){return t}}function kf(t,e){return null==t||t!==t?e:t}var Af=ys(),Cf=ys(!0);function jf(t){return t}function Rf(t){return eo("function"==typeof t?t:vi(t,p))}function Nf(t){return so(vi(t,p))}function Pf(t,e){return ao(t,vi(e,p))}var Df=_o((function(t,e){return function(n){return qi(n,t,e)}})),Lf=_o((function(t,e){return function(n){return qi(t,n,e)}}));function Mf(t,e,n){var r=Eh(e),i=Ni(e,r);null!=n||Ol(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Ni(e,Eh(e)));var o=!(Ol(n)&&"chain"in n)||!!n.chain,s=_l(t);return En(i,(function(n){var r=e[n];t[n]=r,s&&(t.prototype[n]=function(){var e=this.__chain__;if(o||e){var n=t(this.__wrapped__),i=n.__actions__=is(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,An([this.value()],arguments))})})),t}function Uf(){return cn._===this&&(cn._=me),this}function Ff(){}function Vf(t){return t=Wl(t),_o((function(e){return lo(e,t)}))}var Bf=Es(kn),$f=Es(On),qf=Es(Rn);function zf(t){return ca(t)?$n(ja(t)):go(t)}function Gf(t){return function(e){return null==t?o:Pi(t,e)}}var Hf=Ts(),Kf=Ts(!0);function Wf(){return[]}function Jf(){return!1}function Xf(){return{}}function Qf(){return""}function Yf(){return!0}function Zf(t,e){if(t=Wl(t),t<1||t>M)return[];var n=V,r=Be(t,V);e=zs(e),t-=V;var i=Kn(r,e);while(++n<t)e(n);return i}function td(t){return cl(t)?kn(t,ja):Fl(t)?[t]:is(Ca(Zl(t)))}function ed(t){var e=++fe;return Zl(t)+e}var nd=_s((function(t,e){return t+e}),0),rd=ks("ceil"),id=_s((function(t,e){return t/e}),1),od=ks("floor");function sd(t){return t&&t.length?Ti(t,jf,Mi):o}function ad(t,e){return t&&t.length?Ti(t,zs(e,2),Mi):o}function cd(t){return Bn(t,jf)}function ud(t,e){return Bn(t,zs(e,2))}function ld(t){return t&&t.length?Ti(t,jf,io):o}function hd(t,e){return t&&t.length?Ti(t,zs(e,2),io):o}var fd=_s((function(t,e){return t*e}),1),dd=ks("round"),pd=_s((function(t,e){return t-e}),0);function gd(t){return t&&t.length?Hn(t,jf):0}function md(t,e){return t&&t.length?Hn(t,zs(e,2)):0}return _r.after=Au,_r.ary=Cu,_r.assign=th,_r.assignIn=eh,_r.assignInWith=nh,_r.assignWith=rh,_r.at=ih,_r.before=ju,_r.bind=Ru,_r.bindAll=Of,_r.bindKey=Nu,_r.castArray=Yu,_r.chain=Gc,_r.chunk=Da,_r.compact=La,_r.concat=Ma,_r.cond=Tf,_r.conforms=Sf,_r.constant=xf,_r.countBy=nu,_r.create=oh,_r.curry=Pu,_r.curryRight=Du,_r.debounce=Lu,_r.defaults=sh,_r.defaultsDeep=ah,_r.defer=Mu,_r.delay=Uu,_r.difference=Ua,_r.differenceBy=Fa,_r.differenceWith=Va,_r.drop=Ba,_r.dropRight=$a,_r.dropRightWhile=qa,_r.dropWhile=za,_r.fill=Ga,_r.filter=iu,_r.flatMap=au,_r.flatMapDeep=cu,_r.flatMapDepth=uu,_r.flatten=Wa,_r.flattenDeep=Ja,_r.flattenDepth=Xa,_r.flip=Fu,_r.flow=Af,_r.flowRight=Cf,_r.fromPairs=Qa,_r.functions=ph,_r.functionsIn=gh,_r.groupBy=fu,_r.initial=tc,_r.intersection=ec,_r.intersectionBy=nc,_r.intersectionWith=rc,_r.invert=bh,_r.invertBy=wh,_r.invokeMap=pu,_r.iteratee=Rf,_r.keyBy=gu,_r.keys=Eh,_r.keysIn=Ih,_r.map=mu,_r.mapKeys=Oh,_r.mapValues=Th,_r.matches=Nf,_r.matchesProperty=Pf,_r.memoize=Vu,_r.merge=Sh,_r.mergeWith=xh,_r.method=Df,_r.methodOf=Lf,_r.mixin=Mf,_r.negate=Bu,_r.nthArg=Vf,_r.omit=kh,_r.omitBy=Ah,_r.once=$u,_r.orderBy=vu,_r.over=Bf,_r.overArgs=qu,_r.overEvery=$f,_r.overSome=qf,_r.partial=zu,_r.partialRight=Gu,_r.partition=yu,_r.pick=Ch,_r.pickBy=jh,_r.property=zf,_r.propertyOf=Gf,_r.pull=cc,_r.pullAll=uc,_r.pullAllBy=lc,_r.pullAllWith=hc,_r.pullAt=fc,_r.range=Hf,_r.rangeRight=Kf,_r.rearg=Hu,_r.reject=_u,_r.remove=dc,_r.rest=Ku,_r.reverse=pc,_r.sampleSize=Iu,_r.set=Nh,_r.setWith=Ph,_r.shuffle=Ou,_r.slice=gc,_r.sortBy=xu,_r.sortedUniq=Ec,_r.sortedUniqBy=Ic,_r.split=uf,_r.spread=Wu,_r.tail=Oc,_r.take=Tc,_r.takeRight=Sc,_r.takeRightWhile=xc,_r.takeWhile=kc,_r.tap=Hc,_r.throttle=Ju,_r.thru=Kc,_r.toArray=Hl,_r.toPairs=Dh,_r.toPairsIn=Lh,_r.toPath=td,_r.toPlainObject=Ql,_r.transform=Mh,_r.unary=Xu,_r.union=Ac,_r.unionBy=Cc,_r.unionWith=jc,_r.uniq=Rc,_r.uniqBy=Nc,_r.uniqWith=Pc,_r.unset=Uh,_r.unzip=Dc,_r.unzipWith=Lc,_r.update=Fh,_r.updateWith=Vh,_r.values=Bh,_r.valuesIn=$h,_r.without=Mc,_r.words=Ef,_r.wrap=Qu,_r.xor=Uc,_r.xorBy=Fc,_r.xorWith=Vc,_r.zip=Bc,_r.zipObject=$c,_r.zipObjectDeep=qc,_r.zipWith=zc,_r.entries=Dh,_r.entriesIn=Lh,_r.extend=eh,_r.extendWith=nh,Mf(_r,_r),_r.add=nd,_r.attempt=If,_r.camelCase=Hh,_r.capitalize=Kh,_r.ceil=rd,_r.clamp=qh,_r.clone=Zu,_r.cloneDeep=el,_r.cloneDeepWith=nl,_r.cloneWith=tl,_r.conformsTo=rl,_r.deburr=Wh,_r.defaultTo=kf,_r.divide=id,_r.endsWith=Jh,_r.eq=il,_r.escape=Xh,_r.escapeRegExp=Qh,_r.every=ru,_r.find=ou,_r.findIndex=Ha,_r.findKey=ch,_r.findLast=su,_r.findLastIndex=Ka,_r.findLastKey=uh,_r.floor=od,_r.forEach=lu,_r.forEachRight=hu,_r.forIn=lh,_r.forInRight=hh,_r.forOwn=fh,_r.forOwnRight=dh,_r.get=mh,_r.gt=ol,_r.gte=sl,_r.has=vh,_r.hasIn=yh,_r.head=Ya,_r.identity=jf,_r.includes=du,_r.indexOf=Za,_r.inRange=zh,_r.invoke=_h,_r.isArguments=al,_r.isArray=cl,_r.isArrayBuffer=ul,_r.isArrayLike=ll,_r.isArrayLikeObject=hl,_r.isBoolean=fl,_r.isBuffer=dl,_r.isDate=pl,_r.isElement=gl,_r.isEmpty=ml,_r.isEqual=vl,_r.isEqualWith=yl,_r.isError=bl,_r.isFinite=wl,_r.isFunction=_l,_r.isInteger=El,_r.isLength=Il,_r.isMap=Sl,_r.isMatch=xl,_r.isMatchWith=kl,_r.isNaN=Al,_r.isNative=Cl,_r.isNil=Rl,_r.isNull=jl,_r.isNumber=Nl,_r.isObject=Ol,_r.isObjectLike=Tl,_r.isPlainObject=Pl,_r.isRegExp=Dl,_r.isSafeInteger=Ll,_r.isSet=Ml,_r.isString=Ul,_r.isSymbol=Fl,_r.isTypedArray=Vl,_r.isUndefined=Bl,_r.isWeakMap=$l,_r.isWeakSet=ql,_r.join=ic,_r.kebabCase=Yh,_r.last=oc,_r.lastIndexOf=sc,_r.lowerCase=Zh,_r.lowerFirst=tf,_r.lt=zl,_r.lte=Gl,_r.max=sd,_r.maxBy=ad,_r.mean=cd,_r.meanBy=ud,_r.min=ld,_r.minBy=hd,_r.stubArray=Wf,_r.stubFalse=Jf,_r.stubObject=Xf,_r.stubString=Qf,_r.stubTrue=Yf,_r.multiply=fd,_r.nth=ac,_r.noConflict=Uf,_r.noop=Ff,_r.now=ku,_r.pad=ef,_r.padEnd=nf,_r.padStart=rf,_r.parseInt=of,_r.random=Gh,_r.reduce=bu,_r.reduceRight=wu,_r.repeat=sf,_r.replace=af,_r.result=Rh,_r.round=dd,_r.runInContext=t,_r.sample=Eu,_r.size=Tu,_r.snakeCase=cf,_r.some=Su,_r.sortedIndex=mc,_r.sortedIndexBy=vc,_r.sortedIndexOf=yc,_r.sortedLastIndex=bc,_r.sortedLastIndexBy=wc,_r.sortedLastIndexOf=_c,_r.startCase=lf,_r.startsWith=hf,_r.subtract=pd,_r.sum=gd,_r.sumBy=md,_r.template=ff,_r.times=Zf,_r.toFinite=Kl,_r.toInteger=Wl,_r.toLength=Jl,_r.toLower=df,_r.toNumber=Xl,_r.toSafeInteger=Yl,_r.toString=Zl,_r.toUpper=pf,_r.trim=gf,_r.trimEnd=mf,_r.trimStart=vf,_r.truncate=yf,_r.unescape=bf,_r.uniqueId=ed,_r.upperCase=wf,_r.upperFirst=_f,_r.each=lu,_r.eachRight=hu,_r.first=Ya,Mf(_r,function(){var t={};return ji(_r,(function(e,n){he.call(_r.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),_r.VERSION=s,En(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){_r[t].placeholder=_r})),En(["drop","take"],(function(t,e){xr.prototype[t]=function(n){n=n===o?1:Ve(Wl(n),0);var r=this.__filtered__&&!e?new xr(this):this.clone();return r.__filtered__?r.__takeCount__=Be(n,r.__takeCount__):r.__views__.push({size:Be(n,V),type:t+(r.__dir__<0?"Right":"")}),r},xr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),En(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=n==N||n==D;xr.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:zs(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),En(["head","last"],(function(t,e){var n="take"+(e?"Right":"");xr.prototype[t]=function(){return this[n](1).value()[0]}})),En(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");xr.prototype[t]=function(){return this.__filtered__?new xr(this):this[n](1)}})),xr.prototype.compact=function(){return this.filter(jf)},xr.prototype.find=function(t){return this.filter(t).head()},xr.prototype.findLast=function(t){return this.reverse().find(t)},xr.prototype.invokeMap=_o((function(t,e){return"function"==typeof t?new xr(this):this.map((function(n){return qi(n,t,e)}))})),xr.prototype.reject=function(t){return this.filter(Bu(zs(t)))},xr.prototype.slice=function(t,e){t=Wl(t);var n=this;return n.__filtered__&&(t>0||e<0)?new xr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==o&&(e=Wl(e),n=e<0?n.dropRight(-e):n.take(e-t)),n)},xr.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},xr.prototype.toArray=function(){return this.take(V)},ji(xr.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),i=_r[r?"take"+("last"==e?"Right":""):e],s=r||/^find/.test(e);i&&(_r.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,c=e instanceof xr,u=a[0],l=c||cl(e),h=function(t){var e=i.apply(_r,An([t],a));return r&&f?e[0]:e};l&&n&&"function"==typeof u&&1!=u.length&&(c=l=!1);var f=this.__chain__,d=!!this.__actions__.length,p=s&&!f,g=c&&!d;if(!s&&l){e=g?e:new xr(this);var m=t.apply(e,a);return m.__actions__.push({func:Kc,args:[h],thisArg:o}),new Sr(m,f)}return p&&g?t.apply(this,a):(m=this.thru(h),p?r?m.value()[0]:m.value():m)})})),En(["pop","push","shift","sort","splice","unshift"],(function(t){var e=se[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);_r.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(cl(i)?i:[],t)}return this[n]((function(n){return e.apply(cl(n)?n:[],t)}))}})),ji(xr.prototype,(function(t,e){var n=_r[e];if(n){var r=n.name+"";he.call(un,r)||(un[r]=[]),un[r].push({name:e,func:n})}})),un[bs(o,w).name]=[{name:"wrapper",func:o}],xr.prototype.clone=kr,xr.prototype.reverse=Ar,xr.prototype.value=Cr,_r.prototype.at=Wc,_r.prototype.chain=Jc,_r.prototype.commit=Xc,_r.prototype.next=Qc,_r.prototype.plant=Zc,_r.prototype.reverse=tu,_r.prototype.toJSON=_r.prototype.valueOf=_r.prototype.value=eu,_r.prototype.first=_r.prototype.head,xe&&(_r.prototype[xe]=Yc),_r},Or=Ir();cn._=Or,i=function(){return Or}.call(e,n,e,r),i===o||(r.exports=i)}).call(this)}).call(this,n("c8ba"),n("62e4")(t))},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||o[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("1626");t.exports=function(t){if("object"===typeof t||r(t))return t;throw TypeError("Can't set "+String(t)+" as a prototype")}},"3f4e":function(t,e,n){"use strict";n.d(e,"setupDevtoolsPlugin",(function(){return s}));var r=n("abc5"),i=n("b774"),o=n("f30a");function s(t,e){const n=Object(r["b"])(),s=Object(r["a"])(),a=r["c"]&&t.enableEarlyProxy;if(!s||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new o["a"](t,s):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:t,setupFn:e,proxy:r}),r&&e(r.proxiedTarget)}else s.emit(i["b"],t,e)}},"3f8c":function(t,e){t.exports={}},"408a":function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),t.exports=function(t){a[s][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||void 0==(n=r(o)[s])?e:i(n)}},"485a":function(t,e,n){var r=n("1626"),i=n("861d");t.exports=function(t,e){var n,o;if("string"===e&&r(n=t.toString)&&!i(o=n.call(t)))return o;if(r(n=t.valueOf)&&!i(o=n.call(t)))return o;if("string"!==e&&r(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,n){"use strict";var r=n("23e7"),i=n("59ed"),o=n("7b0b"),s=n("50c4"),a=n("577e"),c=n("d039"),u=n("addb"),l=n("a640"),h=n("04d1"),f=n("d998"),d=n("2d00"),p=n("512c"),g=[],m=g.sort,v=c((function(){g.sort(void 0)})),y=c((function(){g.sort(null)})),b=l("sort"),w=!c((function(){if(d)return d<70;if(!(h&&h>3)){if(f)return!0;if(p)return p<603;var t,e,n,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)g.push({k:e+r,v:n})}for(g.sort((function(t,e){return e.v-t.v})),r=0;r<g.length;r++)e=g[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),_=v||!y||!b||!w,E=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:a(e)>a(n)?1:-1}};r({target:"Array",proto:!0,forced:_},{sort:function(t){void 0!==t&&i(t);var e=o(this);if(w)return void 0===t?m.call(e):m.call(e,t);var n,r,a=[],c=s(e.length);for(r=0;r<c;r++)r in e&&a.push(e[r]);a=u(a,E(t)),n=a.length,r=0;while(r<n)e[r]=a[r++];while(r<c)delete e[r++];return e}})},"4fc1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...o)=>{const s=o.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:s,args:o,type:e.name})}}}},5087:function(t,e,n){var r=n("68ee"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"512c":function(t,e,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},5135:function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("d039"),o=n("825a"),s=n("1626"),a=n("a691"),c=n("50c4"),u=n("577e"),l=n("1d80"),h=n("8aa5"),f=n("dc4a"),d=n("0cb2"),p=n("14c3"),g=n("b622"),m=g("replace"),v=Math.max,y=Math.min,b=function(t){return void 0===t?t:String(t)},w=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),E=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=_?"$":"$0";return[function(t,n){var r=l(this),i=void 0==t?void 0:f(t,m);return i?i.call(t,r,n):e.call(u(r),t,n)},function(t,i){var l=o(this),f=u(t);if("string"===typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var g=n(e,l,f,i);if(g.done)return g.value}var m=s(i);m||(i=u(i));var w=l.global;if(w){var _=l.unicode;l.lastIndex=0}var E=[];while(1){var I=p(l,f);if(null===I)break;if(E.push(I),!w)break;var O=u(I[0]);""===O&&(l.lastIndex=h(f,c(l.lastIndex),_))}for(var T="",S=0,x=0;x<E.length;x++){I=E[x];for(var k=u(I[0]),A=v(y(a(I.index),f.length),0),C=[],j=1;j<I.length;j++)C.push(b(I[j]));var R=I.groups;if(m){var N=[k].concat(C,A,f);void 0!==R&&N.push(R);var P=u(i.apply(void 0,N))}else P=d(k,f,A,C,R,i);A>=S&&(T+=f.slice(S,A)+P,S=A+k.length)}return T+f.slice(S)}]}),!E||!w||_)},5502:function(t,e,n){"use strict";n.d(e,"a",(function(){return J}));var r=n("7a23"),i=n("3f4e"),o="store";function s(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function a(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function l(t,e){return function(){return t(e)}}function h(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function f(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;p(t,n,[],t._modules.root,!0),d(t,n,e)}function d(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,a={};s(o,(function(e,n){a[n]=l(e,t),Object.defineProperty(t.getters,n,{get:function(){return a[n]()},enumerable:!0})})),t._state=Object(r["v"])({data:e}),t.strict&&w(t),i&&n&&t._withCommit((function(){i.data=null}))}function p(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),t._modulesNamespaceMap[s]=r),!o&&!i){var a=_(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=g(t,s,n);r.forEachMutation((function(e,n){var r=s+n;v(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;y(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;b(t,r,e,u)})),r.forEachChild((function(r,o){p(t,e,n.concat(o),r,i)}))}function g(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=E(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=e+c,t._actions[c]))return t.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?t.commit:function(n,r,i){var o=E(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c,t._mutations[c])?t.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return m(t,e)}},state:{get:function(){return _(t.state,n)}}}),i}function m(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function v(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function y(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function b(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function w(t){Object(r["G"])((function(){return t._state.data}),(function(){u(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function _(t,e){return e.reduce((function(t,e){return t[e]}),t)}function E(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),u("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}var I="vuex bindings",O="vuex:mutations",T="vuex:actions",S="vuex",x=0;function k(t,e){Object(i["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[I]},(function(n){n.addTimelineLayer({id:O,label:"Vuex Mutations",color:A}),n.addTimelineLayer({id:T,label:"Vuex Actions",color:A}),n.addInspector({id:S,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===S)if(n.filter){var r=[];D(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[P(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===S){var r=n.nodeId;m(e,r),n.state=L(U(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===S){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(S),n.sendInspectorState(S),n.addTimelineEvent({layerId:O,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=x++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:T,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var A=8702998,C=6710886,j=16777215,R={label:"namespaced",textColor:j,backgroundColor:C};function N(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function P(t,e){return{id:e||"root",label:N(e),tags:t.namespaced?[R]:[],children:Object.keys(t._children).map((function(n){return P(t._children[n],e+n+"/")}))}}function D(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[R]:[]}),Object.keys(e._children).forEach((function(i){D(t,e._children[i],n,r+i+"/")}))}function L(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var o=M(e);i.getters=Object.keys(o).map((function(t){return{key:t.endsWith("/")?N(t):t,editable:!1,value:F((function(){return o[t]}))}}))}return i}function M(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,o=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[o]=F((function(){return t[n]}))}else e[n]=F((function(){return t[n]}))})),e}function U(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var o=t[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children}),"root"===e?t:t.root._children)}function F(t){try{return t()}catch(e){return e}}var V=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},V.prototype.addChild=function(t,e){this._children[t]=e},V.prototype.removeChild=function(t){delete this._children[t]},V.prototype.getChild=function(t){return this._children[t]},V.prototype.hasChild=function(t){return t in this._children},V.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},V.prototype.forEachChild=function(t){s(this._children,t)},V.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},V.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},V.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(V.prototype,B);var $=function(t){this.register([],t,!1)};function q(t,e,n){if(K(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");q(t.concat(r),e.getChild(r),n.modules[r])}}$.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},$.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},$.prototype.update=function(t){q([],this.root,t)},$.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),K(t,e);var i=new V(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&s(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},$.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r?r.runtime&&e.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},$.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var z={assert:function(t){return"function"===typeof t},expected:"function"},G={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},H={getters:z,mutations:z,actions:G};function K(t,e){Object.keys(H).forEach((function(n){if(e[n]){var r=H[n];s(e[n],(function(e,i){u(r.assert(e),W(t,n,i,e,r.expected))}))}}))}function W(t,e,n,r,i){var o=e+" should be "+i+' but "'+e+"."+n+'"';return t.length>0&&(o+=' in module "'+t.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function J(t){return new X(t)}var X=function t(e){var n=this;void 0===e&&(e={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof t,"store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var i=e.strict;void 0===i&&(i=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new $(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(t,e){return c.call(s,t,e)},this.commit=function(t,e,n){return l.call(s,t,e,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),d(this,h),r.forEach((function(t){return t(n)}))},Q={state:{configurable:!0}};X.prototype.install=function(t,e){t.provide(e||o,this),t.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&k(t,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(t){u(!1,"use store.replaceState() to explicit replace store state.")},X.prototype.commit=function(t,e,n){var r=this,i=E(t,e,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},X.prototype.dispatch=function(t,e){var n=this,r=E(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+i)},X.prototype.subscribe=function(t,e){return h(t,this._subscribers,e)},X.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return h(n,this._actionSubscribers,e)},X.prototype.watch=function(t,e,n){var i=this;return u("function"===typeof t,"store.watch only accepts a function."),Object(r["G"])((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},X.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},X.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),u(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},X.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var n=_(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),f(this)},X.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},X.prototype.hotUpdate=function(t){this._modules.update(t),f(this,!0)},X.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(X.prototype,Q);tt((function(t,e){var n={};return Z(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Y(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=et(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),tt((function(t,e){var n={};return Z(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Y(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=et(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),tt((function(t,e){var n={};return Z(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Y(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||et(this.$store,"mapGetters",t)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),tt((function(t,e){var n={};return Z(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Y(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=et(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function Y(t){return Z(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function Z(t){return Array.isArray(t)||a(t)}function tt(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function et(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}},5606:function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return $})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return q})),n.d(e,"e",(function(){return J})),n.d(e,"f",(function(){return W})),n.d(e,"g",(function(){return X}));var r=n("ffa6"),i=n("4fc1"),o=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.1",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",E="@firebase/installations",I="@firebase/installations-compat",O="@firebase/messaging",T="@firebase/messaging-compat",S="@firebase/performance",x="@firebase/performance-compat",k="@firebase/remote-config",A="@firebase/remote-config-compat",C="@firebase/storage",j="@firebase/storage-compat",R="@firebase/firestore",N="@firebase/firestore-compat",P="firebase",D="9.1.0",L="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[E]:"fire-iid",[I]:"fire-iid-compat",[O]:"fire-fcm",[T]:"fire-fcm-compat",[S]:"fire-perf",[x]:"fire-perf-compat",[k]:"fire-rc",[A]:"fire-rc-compat",[C]:"fire-gcs",[j]:"fire-gcs-compat",[R]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},U=new Map,F=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(F.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of U.values())V(n,t);return!0}function $(t,e){return t.container.getProvider(e)}function q(t,e,n=L){$(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new o["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=D;function W(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const s=U.get(i);if(s){if(Object(o["i"])(t,s.options)&&Object(o["i"])(n,s.config))return s;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of F.values())a.addComponent(r);const c=new H(t,n,a);return U.set(i,c),c}function J(t=L){const e=U.get(t);if(!e)throw G.create("no-app",{appName:t});return e}function X(t,e,n){var i;let o=null!==(i=M[t])&&void 0!==i?i:t;n&&(o+="-"+n);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](o+"-version",()=>({library:o,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(t){B(new r["a"]("platform-logger",t=>new s(t),"PRIVATE")),X(c,u,t),X("fire-js","")}Q()},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("f5df");t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"588e":function(t,e,n){"use strict";n.d(e,"a",(function(){return Lt})),n.d(e,"b",(function(){return Ut})),n.d(e,"c",(function(){return Dt})),n.d(e,"d",(function(){return Mt}));var r,i=n("5606"),o=n("1fd5"),s=n("ffa6");(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(r||(r={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5;class h extends o["c"]{constructor(t,e){super(f(t),`Firebase Storage: ${e} (${f(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return f(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(t){return"storage/"+t}function d(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function p(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function g(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function v(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function b(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new h("canceled","User canceled the upload/download.")}function _(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function E(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function I(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function O(){return new h("no-download-url","The given file does not have any download URLs.")}function T(t){return new h("invalid-argument",t)}function S(){return new h("app-deleted","The Firebase app was deleted.")}function x(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function k(t){throw new h("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=r.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=r.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=r.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw k("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw k("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw k("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponseText(){if(!this.sent_)throw k("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}function C(){return new A}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{createConnection(){return C()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=R.makeFromUrl(t,e)}catch(r){return new R(t,"")}if(""===n.path)return n;throw E(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const o="(/(.*))?$",s=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===a?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},b=[{regex:s,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let a=0;a<b.length;a++){const e=b[a],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new R(t,i),e.postModify(n);break}}if(null==n)throw _(t);return n}}class N{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e,n){let r=1,i=null,o=!1,s=0;function a(){return 2===s}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function l(e){i=setTimeout(()=>{i=null,t(h,a())},e)}function h(t,...e){if(c)return;if(t)return void u.call(null,t,...e);const n=a()||o;if(n)return void u.call(null,t,...e);let i;r<64&&(r*=2),1===s?(s=2,i=0):i=1e3*(r+Math.random()),l(i)}let f=!1;function d(t){f||(f=!0,c||(null!==i?(t||(s=2),clearTimeout(i),l(0)):t||(s=1)))}return l(0),setTimeout(()=>{o=!0,d(!0)},n),d}function D(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){return void 0!==t}function M(t){return"object"===typeof t&&!Array.isArray(t)}function U(t){return"string"===typeof t||t instanceof String}function F(t,e,n,r){if(r<e)throw T(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw T(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function B(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e,n,r,i,o,s,a,c,u,l){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=s,this.errorCallback_=a,this.progressCallback_=u,this.timeout_=c,this.pool_=l,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=this;function e(e,n){if(n)return void e(!1,new q(!1,null,!0));const i=t.pool_.createConnection();function o(e){const n=e.loaded,r=e.lengthComputable?e.total:-1;null!==t.progressCallback_&&t.progressCallback_(n,r)}t.pendingConnection_=i,null!==t.progressCallback_&&i.addUploadProgressListener(o),i.send(t.url_,t.method_,t.body_,t.headers_).then(()=>{null!==t.progressCallback_&&i.removeUploadProgressListener(o),t.pendingConnection_=null;const n=i.getErrorCode()===r.NO_ERROR,s=i.getStatus();if(!n||t.isRetryStatusCode_(s)){const t=i.getErrorCode()===r.ABORT;return void e(!1,new q(!1,null,t))}const a=-1!==t.successCodes_.indexOf(s);e(!0,new q(a,i))})}function n(e,n){const r=t.resolve_,i=t.reject_,o=n.connection;if(n.wasSuccessCode)try{const e=t.callback_(o,o.getResponseText());L(e)?r(e):r()}catch(s){i(s)}else if(null!==o){const e=d();e.serverResponse=o.getResponseText(),t.errorCallback_?i(t.errorCallback_(o,e)):i(e)}else if(n.canceled){const e=t.appDelete_?S():w();i(e)}else{const t=b();i(t)}}this.canceled_?n(!1,new q(!1,null,!0)):this.backoffId_=P(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i}}class q{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function z(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function G(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function H(t,e){e&&(t["X-Firebase-GMPID"]=e)}function K(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function W(t,e,n,r,i,o){const s=B(t.urlParams),a=t.url+s,c=Object.assign({},t.headers);return H(c,e),z(c,n),G(c,o),K(c,r),new $(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(t){let e;try{e=JSON.parse(t)}catch(n){return null}return M(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function Q(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function Y(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e){return e}class tt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||Z}}let et=null;function nt(t){return!U(t)||t.length<2?t:Y(t)}function rt(){if(et)return et;const t=[];function e(t,e){return nt(e)}t.push(new tt("bucket")),t.push(new tt("generation")),t.push(new tt("metageneration")),t.push(new tt("name","fullPath",!0));const n=new tt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new tt("size");return i.xform=r,t.push(i),t.push(new tt("timeCreated")),t.push(new tt("updated")),t.push(new tt("md5Hash",null,!0)),t.push(new tt("cacheControl",null,!0)),t.push(new tt("contentDisposition",null,!0)),t.push(new tt("contentEncoding",null,!0)),t.push(new tt("contentLanguage",null,!0)),t.push(new tt("contentType",null,!0)),t.push(new tt("metadata","customMetadata",!0)),et=t,et}function it(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new R(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ot(t,e,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const t=n[o];r[t.local]=t.xform(r,e[t.server])}return it(r,t),r}function st(t,e,n){const r=J(e);if(null===r)return null;const i=r;return ot(t,i,n)}function at(t,e,n,r){const i=J(e);if(null===i)return null;if(!U(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map(e=>{const i=t["bucket"],o=t["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=V(a,n,r),u=B({alt:"media",token:e});return c+u});return c[0]}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ct="prefixes",ut="items";function lt(t,e,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[ct])for(const i of n[ct]){const n=i.replace(/\/$/,""),o=t._makeStorageReference(new R(e,n));r.prefixes.push(o)}if(n[ut])for(const i of n[ut]){const n=t._makeStorageReference(new R(e,i["name"]));r.items.push(n)}return r}function ht(t,e,n){const r=J(n);if(null===r)return null;const i=r;return lt(t,e,i)}class ft{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){if(!t)throw d()}function pt(t,e){function n(n,r){const i=ht(t,e,r);return dt(null!==i),i}return n}function gt(t,e){function n(n,r){const i=st(t,r,e);return dt(null!==i),at(i,r,t.host,t._protocol)}return n}function mt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getResponseText().includes("Firebase App Check token is invalid")?v():m():402===e.getStatus()?g(t.bucket):403===e.getStatus()?y(t.path):n,r.serverResponse=n.serverResponse,r}return e}function vt(t){const e=mt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=p(t.path)),i.serverResponse=r.serverResponse,i}return n}function yt(t,e,n,r,i){const o={};e.isRoot?o["prefix"]="":o["prefix"]=e.path+"/",n&&n.length>0&&(o["delimiter"]=n),r&&(o["pageToken"]=r),i&&(o["maxResults"]=i);const s=e.bucketOnlyServerUrl(),a=V(s,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new ft(a,c,pt(t,e.bucket),u);return l.urlParams=o,l.errorHandler=mt(e),l}function bt(t,e,n){const r=e.fullServerUrl(),i=V(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new ft(i,o,gt(t,n),s);return a.errorHandler=vt(e),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(t,e){this._service=t,this._location=e instanceof R?e:R.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new wt(t,e)}get root(){const t=new R(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y(this._location.path)}get storage(){return this._service}get parent(){const t=X(this._location.path);if(null===t)return null;const e=new R(this._location.bucket,t);return new wt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw x(t)}}function _t(t){const e={prefixes:[],items:[]};return Et(t,e).then(()=>e)}async function Et(t,e,n){const r={pageToken:n},i=await It(t,r);e.prefixes.push(...i.prefixes),e.items.push(...i.items),null!=i.nextPageToken&&await Et(t,e,i.nextPageToken)}async function It(t,e){null!=e&&"number"===typeof e.maxResults&&F("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=yt(t.storage,t._location,"/",n.pageToken,n.maxResults);return(await t.storage.makeRequestWithTokens(r)).getPromise()}async function Ot(t){t._throwIfRoot("getDownloadURL");const e=bt(t.storage,t._location,rt());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(t=>{if(null===t)throw O();return t})}function Tt(t,e){const n=Q(t._location.path,e),r=new R(t._location.bucket,n);return new wt(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return/^[A-Za-z]+:\/\//.test(t)}function xt(t,e){return new wt(t,e)}function kt(t,e){if(t instanceof jt){const n=t;if(null==n._bucket)throw I();const r=new wt(n,n._bucket);return null!=e?kt(r,e):r}return void 0!==e?Tt(t,e):t}function At(t,e){if(e&&St(e)){if(t instanceof jt)return xt(t,e);throw T("To use ref(service, url), the first argument must be a Storage instance.")}return kt(t,e)}function Ct(t,e){const n=null===e||void 0===e?void 0:e[c];return null==n?null:R.makeFromBucketSpec(n,t)}class jt{constructor(t,e,n,r,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?R.makeFromBucketSpec(i,this._host):Ct(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=R.makeFromBucketSpec(this._url,t):this._bucket=Ct(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){F("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new wt(this,t)}_makeRequest(t,e,n){if(this._deleted)return new N(S());{const r=W(t,this._appId,e,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t){const[e,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n)}}const Rt="@firebase/storage",Nt="0.8.3",Pt="storage";function Dt(t){return t=Object(o["k"])(t),_t(t)}function Lt(t){return t=Object(o["k"])(t),Ot(t)}function Mt(t,e){return t=Object(o["k"])(t),At(t,e)}function Ut(t=Object(i["e"])(),e){t=Object(o["k"])(t);const n=Object(i["b"])(t,Pt),r=n.getImmediate({identifier:e});return r}function Ft(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new jt(n,r,o,new j,e,i["a"])}function Vt(){Object(i["c"])(new s["a"](Pt,Ft,"PUBLIC").setMultipleInstances(!0)),Object(i["g"])(Rt,Nt)}Vt()},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("577e"),o=n("5899"),s="["+o+"]",a=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t){return function(e){var n=i(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"59ed":function(t,e,n){var r=n("1626"),i=n("0d51");t.exports=function(t){if(r(t))return t;throw TypeError(i(t)+" is not a function")}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("5135"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;t.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||o(l({},e)).join("")!=i}))?function(t,e){var n=c(t),i=arguments.length,l=1,h=s.f,f=a.f;while(i>l){var d,p=u(arguments[l++]),g=h?o(p).concat(h(p)):o(p),m=g.length,v=0;while(m>v)d=g[v++],r&&!f.call(p,d)||(n[d]=p[d])}return n}:l},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},6547:function(t,e,n){var r=n("a691"),i=n("577e"),o=n("1d80"),s=function(t){return function(e,n){var s,a,c=i(o(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(s=c.charCodeAt(u),s<55296||s>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):s:t?c.slice(u,u+2):a-56320+(s-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("d039"),i=n("1626"),o=n("f5df"),s=n("d066"),a=n("8925"),c=[],u=s("Reflect","construct"),l=/^\s*(?:class|function)\b/,h=l.exec,f=!l.exec((function(){})),d=function(t){if(!i(t))return!1;try{return u(Object,c,t),!0}catch(e){return!1}},p=function(t){if(!i(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return f||!!h.call(l,a(t))};t.exports=!u||r((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?p:d},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),f=n("f772"),d=n("d012"),p="Object already initialized",g=a.WeakMap,m=function(t){return o(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var y=h.state||(h.state=new g),b=y.get,w=y.has,_=y.set;r=function(t,e){if(w.call(y,t))throw new TypeError(p);return e.facade=t,_.call(y,t,e),e},i=function(t){return b.call(y,t)||{}},o=function(t){return w.call(y,t)}}else{var E=f("state");d[E]=!0,r=function(t,e){if(l(t,E))throw new TypeError(p);return e.facade=t,u(t,E,e),e},i=function(t){return l(t,E)?t[E]:{}},o=function(t){return l(t,E)}}t.exports={set:r,get:i,has:o,enforce:m,getterFor:v}},"6b0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{for(const[n,r]of e)t[n]=r;return t}},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return z}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>i?Symbol(t):"_vr_"+t,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function f(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const d=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const g=()=>{};const m=/\/$/,v=t=>t.replace(m,"");function y(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),o=e.slice(a+1,c>-1?c:e.length),i=t(o)),c>-1&&(r=r||e.slice(0,c),s=e.slice(c,e.length)),r=S(null!=r?r:e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function _(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&E(e.matched[r],n.matched[i])&&I(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function E(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function I(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!O(t[n],e[n]))return!1;return!0}function O(t,e){return Array.isArray(t)?T(t,e):Array.isArray(e)?T(e,t):t===e}function T(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function S(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var x,k;(function(t){t["pop"]="pop",t["push"]="push"})(x||(x={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(k||(k={}));function A(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const C=/^[^#]+#/;function j(t,e){return t.replace(C,"#")+e}function R(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const N=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=R(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function D(t,e){const n=history.state?history.state.position-e:-1;return n+t}const L=new Map;function M(t,e){L.set(t,e)}function U(t){const e=L.get(t);return L.delete(t),e}let F=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let e=i.includes(t.slice(o))?t.slice(o).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),w(n,"")}const s=w(n,t);return s+r+i}function B(t,e,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=V(t,location),c=n.value,u=e.value;let l=0;if(o){if(n.value=a,e.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:x.pop,direction:l?l>0?k.forward:k.back:k.unknown})})};function c(){s=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return o.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(d({},t.state,{scroll:N()}),"")}function h(){for(const t of o)t();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function $(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?N():null}}function q(t){const{history:e,location:n}=window,r={value:V(t,n)},i={value:e.state};function o(r,o,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:F()+t+r;try{e[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=d({},e.state,$(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});o(t,s,!0),r.value=t}function a(t,n){const s=d({},i.value,e.state,{forward:t,scroll:N()});o(s.current,s,!0);const a=d({},$(r.value,t,null),{position:s.position+1},n);o(t,a,!1),r.value=t}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function z(t){t=A(t);const e=q(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=d({location:"",base:t,go:r,createHref:j.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function G(t){return"string"===typeof t||t&&"object"===typeof t}function H(t){return"string"===typeof t||"symbol"===typeof t}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=o("nf");var J;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(J||(J={}));function X(t,e){return d(new Error,{type:t,[W]:!0},e)}function Q(t,e){return t instanceof Error&&W in t&&(null==e||!!(t.type&e))}const Y="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=d({},Z,e),r=[];let i=n.start?"^":"";const o=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(tt,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;o.push({name:t,repeatable:n,optional:a});const h=c||Y;if(h!==Y){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=o[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:o,repeatable:s,optional:a}=t,c=o in e?e[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=nt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const it={type:0,value:""},ot=/[a-zA-Z0-9_]/;function st(t){if(!t)return[[]];if("/"===t)return[[it]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:ot.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function at(t,e,n){const r=et(st(t.path),n);const i=d(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function o(t,n,r){const i=!r,a=lt(t);a.aliasOf=r&&r.record;const u=pt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(d({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=at(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!ft(h)&&s(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)o(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{s(f)}:g}function s(t){if(H(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function a(){return n}function c(t){let e=0;while(e<n.length&&rt(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let i,o,s,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw X(1,{location:t});s=i.record.name,a=d(ut(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),o=i.stringify(a)}else if("path"in t)o=t.path,i=n.find(t=>t.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw X(1,{location:t,currentLocation:e});s=i.record.name,a=d({},e.params,t.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:dt(c)}}return e=pt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>o(t)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ut(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dt(t){return t.reduce((t,e)=>d(t,e.meta),{})}function pt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const gt=/#/g,mt=/&/g,vt=/\//g,yt=/=/g,bt=/\?/g,wt=/\+/g,_t=/%5B/g,Et=/%5D/g,It=/%5E/g,Ot=/%60/g,Tt=/%7B/g,St=/%7C/g,xt=/%7D/g,kt=/%20/g;function At(t){return encodeURI(""+t).replace(St,"|").replace(_t,"[").replace(Et,"]")}function Ct(t){return At(t).replace(Tt,"{").replace(xt,"}").replace(It,"^")}function jt(t){return At(t).replace(wt,"%2B").replace(kt,"+").replace(gt,"%23").replace(mt,"%26").replace(Ot,"`").replace(Tt,"{").replace(xt,"}").replace(It,"^")}function Rt(t){return jt(t).replace(yt,"%3D")}function Nt(t){return At(t).replace(gt,"%23").replace(bt,"%3F")}function Pt(t){return null==t?"":Nt(t).replace(vt,"%2F")}function Dt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Lt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(wt," "),n=t.indexOf("="),o=Dt(n<0?t:t.slice(0,n)),s=n<0?null:Dt(t.slice(n+1));if(o in e){let t=e[o];Array.isArray(t)||(t=e[o]=[t]),t.push(s)}else e[o]=s}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=Rt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(t=>t&&jt(t)):[r&&jt(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Ut(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Ft(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vt(t,e,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=t=>{!1===t?a(X(4,{from:n,to:e})):t instanceof Error?a(t):G(t)?a(X(2,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),s())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function Bt(t,e,n,r){const i=[];for(const o of t)for(const t in o.components){let s=o.components[t];if("beforeRouteEnter"===e||o.instances[t])if($t(s)){const a=s.__vccOpts||s,c=a[e];c&&i.push(Vt(c,n,r,o,t))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${o.path}"`));const s=f(i)?i.default:i;o.components[t]=s;const a=s.__vccOpts||s,c=a[e];return c&&Vt(c,n,r,o,t)()}))}}return i}function $t(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function qt(t){const e=Object(r["n"])(c),n=Object(r["n"])(u),i=Object(r["b"])(()=>e.resolve(Object(r["B"])(t.to))),o=Object(r["b"])(()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(E.bind(null,r));if(s>-1)return s;const a=Wt(t[e-2]);return e>1&&Wt(r)===a&&o[o.length-1].path!==a?o.findIndex(E.bind(null,t[e-2])):s}),s=Object(r["b"])(()=>o.value>-1&&Kt(n.params,i.value.params)),a=Object(r["b"])(()=>o.value>-1&&o.value===n.matched.length-1&&I(n.params,i.value.params));function l(n={}){return Ht(n)?e[Object(r["B"])(t.replace)?"replace":"push"](Object(r["B"])(t.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const zt=Object(r["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qt,setup(t,{slots:e}){const n=Object(r["v"])(qt(t)),{options:i}=Object(r["n"])(c),o=Object(r["b"])(()=>({[Jt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Jt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Object(r["m"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Gt=zt;function Ht(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Wt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jt=(t,e,n)=>null!=t?t:null!=e?e:n,Xt=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Object(r["n"])(l),o=Object(r["b"])(()=>t.route||i.value),c=Object(r["n"])(a,0),u=Object(r["b"])(()=>o.value.matched[c]);Object(r["u"])(a,c+1),Object(r["u"])(s,u),Object(r["u"])(l,o);const h=Object(r["w"])();return Object(r["G"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,o])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&E(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[t.name],c=t.name;if(!a)return Qt(n.default,{Component:a,route:i});const l=s.props[t.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(s.instances[c]=null)},g=Object(r["m"])(a,d({},f,e,{onVnodeUnmounted:p,ref:h}));return Qt(n.default,{Component:g,route:i})||g}}});function Qt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Yt=Xt;function Zt(t){const e=ct(t.routes,t),n=t.parseQuery||Lt,i=t.stringifyQuery||Mt,o=t.history;const s=Ft(),a=Ft(),f=Ft(),m=Object(r["z"])(K);let v=K;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,t=>""+t),E=p.bind(null,Pt),I=p.bind(null,Dt);function O(t,n){let r,i;return H(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function T(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map(t=>t.record)}function k(t){return!!e.getRecordMatcher(t)}function A(t,r){if(r=d({},r||m.value),"string"===typeof t){const i=y(n,t,r.path),s=e.resolve({path:i.path},r),a=o.createHref(i.fullPath);return d(i,s,{params:I(s.params),hash:Dt(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in t)s=d({},t,{path:y(n,t.path,r.path).path});else{const e=d({},t.params);for(const t in e)null==e[t]&&delete e[t];s=d({},t,{params:E(t.params)}),r.params=E(r.params)}const a=e.resolve(s,r),c=t.hash||"";a.params=w(I(a.params));const u=b(i,d({},t,{hash:Ct(c),path:a.path})),l=o.createHref(u);return d({fullPath:u,hash:c,query:i===Mt?Ut(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function C(t){return"string"===typeof t?y(n,t,m.value.path):d({},t)}function j(t,e){if(v!==t)return X(8,{from:e,to:t})}function R(t){return V(t)}function L(t){return R(d(C(t),{replace:!0}))}function F(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),d({query:t.query,hash:t.hash,params:t.params},r)}}function V(t,e){const n=v=A(t),r=m.value,o=t.state,s=t.force,a=!0===t.replace,c=F(n);if(c)return V(d(C(c),{state:o,force:s,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!s&&_(i,r,n)&&(l=X(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):$(u,r)).catch(t=>Q(t)?t:tt(t,u,r)).then(t=>{if(t){if(Q(t,2))return V(d(C(t.to),{state:o,force:s,replace:a}),e||u)}else t=z(u,r,!0,a,o);return q(u,r,t),t})}function B(t,e){const n=j(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t,e){let n;const[r,i,o]=ee(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Vt(r,t,e))});const c=B.bind(null,t,e);return n.push(c),te(n).then(()=>{n=[];for(const r of s.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).then(()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(Vt(r,t,e))});return n.push(c),te(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Vt(i,t,e));else n.push(Vt(r.beforeEnter,t,e));return n.push(c),te(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=Bt(o,"beforeRouteEnter",t,e),n.push(c),te(n))).then(()=>{n=[];for(const r of a.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).catch(t=>Q(t,8)?t:Promise.reject(t))}function q(t,e,n){for(const r of f.list())r(t,e,n)}function z(t,e,n,r,i){const s=j(t,e);if(s)return s;const a=e===K,c=h?history.state:{};n&&(r||a?o.replace(t.fullPath,d({scroll:a&&c&&c.scroll},i)):o.push(t.fullPath,i)),m.value=t,rt(t,e,n,a),nt()}let G;function W(){G=o.listen((t,e,n)=>{const r=A(t),i=F(r);if(i)return void V(d(i,{replace:!0}),r).catch(g);v=r;const s=m.value;h&&M(D(s.fullPath,n.delta),N()),$(r,s).catch(t=>Q(t,12)?t:Q(t,2)?(V(t.to,r).then(t=>{Q(t,20)&&!n.delta&&n.type===x.pop&&o.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),tt(t,r,s))).then(t=>{t=t||z(r,s,!1),t&&(n.delta?o.go(-n.delta,!1):n.type===x.pop&&Q(t,20)&&o.go(-1,!1)),q(r,s,t)}).catch(g)})}let J,Y=Ft(),Z=Ft();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return J&&m.value!==K?Promise.resolve():new Promise((t,e)=>{Y.add([t,e])})}function nt(t){J||(J=!0,W(),Y.list().forEach(([e,n])=>t?n(t):e()),Y.reset())}function rt(e,n,i,o){const{scrollBehavior:s}=t;if(!h||!s)return Promise.resolve();const a=!i&&U(D(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["o"])().then(()=>s(e,n,a)).then(t=>t&&P(t)).catch(t=>tt(t,e,n))}const it=t=>o.go(t);let ot;const st=new Set,at={currentRoute:m,addRoute:O,removeRoute:T,hasRoute:k,getRoutes:S,resolve:A,options:t,push:R,replace:L,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",Yt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["B"])(m)}),h&&!ot&&m.value===K&&(ot=!0,R(o.location).catch(t=>{0}));const n={};for(const o in K)n[o]=Object(r["b"])(()=>m.value[o]);t.provide(c,e),t.provide(u,Object(r["v"])(n)),t.provide(l,m);const i=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(v=K,G&&G(),m.value=K,ot=!1,J=!1),i()}}};return at}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const o=e.matched[s];o&&(t.matched.find(t=>E(t,o))?r.push(o):n.push(o));const a=t.matched[s];a&&(e.matched.find(t=>E(t,a))||i.push(a))}return[n,r,i]}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("5135"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=f(n),u.source||(u.source=d.join("string"==typeof m?m:""))),t!==r?(h?!g&&t[e]&&(p=!0):delete t[e],p?t[e]=n:s(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7156:function(t,e,n){var r=n("1626"),i=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;t.exports=o===Object.prototype?void 0:o},"7a23":function(t,e,n){"use strict";n.d(e,"b",(function(){return Gt})),n.d(e,"v",(function(){return It})),n.d(e,"w",(function(){return Mt})),n.d(e,"z",(function(){return Ut})),n.d(e,"B",(function(){return Bt})),n.d(e,"p",(function(){return r["I"]})),n.d(e,"A",(function(){return r["L"]})),n.d(e,"a",(function(){return Mn})),n.d(e,"d",(function(){return Jn})),n.d(e,"e",(function(){return cr})),n.d(e,"f",(function(){return Wn})),n.d(e,"g",(function(){return er})),n.d(e,"h",(function(){return ar})),n.d(e,"i",(function(){return sr})),n.d(e,"j",(function(){return nr})),n.d(e,"k",(function(){return be})),n.d(e,"l",(function(){return _r})),n.d(e,"m",(function(){return yi})),n.d(e,"n",(function(){return ce})),n.d(e,"o",(function(){return ti})),n.d(e,"q",(function(){return Ie})),n.d(e,"r",(function(){return Oe})),n.d(e,"s",(function(){return Le})),n.d(e,"t",(function(){return qn})),n.d(e,"u",(function(){return ae})),n.d(e,"x",(function(){return dr})),n.d(e,"y",(function(){return Nn})),n.d(e,"G",(function(){return di})),n.d(e,"H",(function(){return Yt})),n.d(e,"I",(function(){return yn})),n.d(e,"c",(function(){return Ro})),n.d(e,"C",(function(){return wo})),n.d(e,"D",(function(){return Eo})),n.d(e,"E",(function(){return Io})),n.d(e,"F",(function(){return bo})),n.d(e,"J",(function(){return ko}));var r=n("9ff4");let i;const o=[];class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t,e){e=e||i,e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},d=new WeakMap;let p=0,g=1;const m=30,v=[];let y;const b=Symbol(""),w=Symbol("");class _{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),S(),g=1<<++p,p<=m?h(this):E(this),this.fn()}finally{p<=m&&f(this),g=1<<--p,x(),v.pop();const t=v.length;y=t>0?v[t-1]:void 0}}stop(){this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let I=!0;const O=[];function T(){O.push(I),I=!1}function S(){O.push(I),I=!0}function x(){const t=O.pop();I=void 0===t||t}function k(t,e,n){if(!A())return;let r=d.get(t);r||d.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;C(i,o)}function A(){return I&&void 0!==y}function C(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function j(t,e,n,i,o,s){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&Object(r["o"])(t))a.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(a.get(n)),e){case"add":Object(r["o"])(t)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["t"])(t)&&u.push(a.get(w)));break;case"delete":Object(r["o"])(t)||(u.push(a.get(b)),Object(r["t"])(t)&&u.push(a.get(w)));break;case"set":Object(r["t"])(t)&&u.push(a.get(b));break}if(1===u.length)u[0]&&R(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);R(c(t))}}function R(t,e){for(const n of Object(r["o"])(t)?t:[...t])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=Object(r["H"])("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["E"])),D=V(),L=V(!1,!0),M=V(!0),U=F();function F(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=Ct(this);for(let e=0,i=this.length;e<i;e++)k(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Ct)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){T();const n=Ct(this)[e].apply(this,t);return x(),n}}),t}function V(t=!1,e=!1){return function(n,i,o){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_raw"===i&&o===(t?e?wt:bt:e?yt:vt).get(n))return n;const s=Object(r["o"])(n);if(!t&&s&&Object(r["k"])(U,i))return Reflect.get(U,i,o);const a=Reflect.get(n,i,o);if(Object(r["E"])(i)?P.has(i):N(i))return a;if(t||k(n,"get",i),e)return a;if(Lt(a)){const t=!s||!Object(r["s"])(i);return t?a.value:a}return Object(r["v"])(a)?t?Tt(a):It(a):a}}const B=q(),$=q(!0);function q(t=!1){return function(e,n,i,o){let s=e[n];if(!t&&(i=Ct(i),s=Ct(s),!Object(r["o"])(e)&&Lt(s)&&!Lt(i)))return s.value=i,!0;const a=Object(r["o"])(e)&&Object(r["s"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,i,o);return e===Ct(o)&&(a?Object(r["j"])(i,s)&&j(e,"set",n,i,s):j(e,"add",n,i)),c}}function z(t,e){const n=Object(r["k"])(t,e),i=t[e],o=Reflect.deleteProperty(t,e);return o&&n&&j(t,"delete",e,void 0,i),o}function G(t,e){const n=Reflect.has(t,e);return Object(r["E"])(e)&&P.has(e)||k(t,"has",e),n}function H(t){return k(t,"iterate",Object(r["o"])(t)?"length":b),Reflect.ownKeys(t)}const K={get:D,set:B,deleteProperty:z,has:G,ownKeys:H},W={get:M,set(t,e){return!0},deleteProperty(t,e){return!0}},J=Object(r["h"])({},K,{get:L,set:$}),X=t=>t,Q=t=>Reflect.getPrototypeOf(t);function Y(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Ct(t),o=Ct(e);e!==o&&!n&&k(i,"get",e),!n&&k(i,"get",o);const{has:s}=Q(i),a=r?X:n?Nt:Rt;return s.call(i,e)?a(t.get(e)):s.call(i,o)?a(t.get(o)):void(t!==i&&t.get(e))}function Z(t,e=!1){const n=this["__v_raw"],r=Ct(n),i=Ct(t);return t!==i&&!e&&k(r,"has",t),!e&&k(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function tt(t,e=!1){return t=t["__v_raw"],!e&&k(Ct(t),"iterate",b),Reflect.get(t,"size",t)}function et(t){t=Ct(t);const e=Ct(this),n=Q(e),r=n.has.call(e,t);return r||(e.add(t),j(e,"add",t,t)),this}function nt(t,e){e=Ct(e);const n=Ct(this),{has:i,get:o}=Q(n);let s=i.call(n,t);s||(t=Ct(t),s=i.call(n,t));const a=o.call(n,t);return n.set(t,e),s?Object(r["j"])(e,a)&&j(n,"set",t,e,a):j(n,"add",t,e),this}function rt(t){const e=Ct(this),{has:n,get:r}=Q(e);let i=n.call(e,t);i||(t=Ct(t),i=n.call(e,t));const o=r?r.call(e,t):void 0,s=e.delete(t);return i&&j(e,"delete",t,void 0,o),s}function it(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&j(t,"clear",void 0,void 0,n),r}function ot(t,e){return function(n,r){const i=this,o=i["__v_raw"],s=Ct(o),a=e?X:t?Nt:Rt;return!t&&k(s,"iterate",b),o.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function st(t,e,n){return function(...i){const o=this["__v_raw"],s=Ct(o),a=Object(r["t"])(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=o[t](...i),h=n?X:e?Nt:Rt;return!e&&k(s,"iterate",u?w:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return"delete"!==t&&this}}function ct(){const t={get(t){return Y(this,t)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:ot(!1,!1)},e={get(t){return Y(this,t,!1,!0)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:ot(!1,!0)},n={get(t){return Y(this,t,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:ot(!0,!1)},r={get(t){return Y(this,t,!0,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:ot(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=st(i,!1,!1),n[i]=st(i,!0,!1),e[i]=st(i,!1,!0),r[i]=st(i,!0,!0)}),[t,n,e,r]}const[ut,lt,ht,ft]=ct();function dt(t,e){const n=e?t?ft:ht:t?lt:ut;return(e,i,o)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["k"])(n,i)&&i in e?n:e,i,o)}const pt={get:dt(!1,!1)},gt={get:dt(!1,!0)},mt={get:dt(!0,!1)};const vt=new WeakMap,yt=new WeakMap,bt=new WeakMap,wt=new WeakMap;function _t(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Et(t){return t["__v_skip"]||!Object.isExtensible(t)?0:_t(Object(r["O"])(t))}function It(t){return t&&t["__v_isReadonly"]?t:St(t,!1,K,pt,vt)}function Ot(t){return St(t,!1,J,gt,yt)}function Tt(t){return St(t,!0,W,mt,bt)}function St(t,e,n,i,o){if(!Object(r["v"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=o.get(t);if(s)return s;const a=Et(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return o.set(t,c),c}function xt(t){return kt(t)?xt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function kt(t){return!(!t||!t["__v_isReadonly"])}function At(t){return xt(t)||kt(t)}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function jt(t){return Object(r["g"])(t,"__v_skip",!0),t}const Rt=t=>Object(r["v"])(t)?It(t):t,Nt=t=>Object(r["v"])(t)?Tt(t):t;function Pt(t){A()&&(t=Ct(t),t.dep||(t.dep=c()),C(t.dep))}function Dt(t,e){t=Ct(t),t.dep&&R(t.dep)}function Lt(t){return Boolean(t&&!0===t.__v_isRef)}function Mt(t){return Ft(t,!1)}function Ut(t){return Ft(t,!0)}function Ft(t,e){return Lt(t)?t:new Vt(t,e)}class Vt{constructor(t,e){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ct(t),this._value=e?t:Rt(t)}get value(){return Pt(this),this._value}set value(t){t=this._shallow?t:Ct(t),Object(r["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Rt(t),Dt(this,t))}}function Bt(t){return Lt(t)?t.value:t}const $t={get:(t,e,n)=>Bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Lt(i)&&!Lt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function qt(t){return xt(t)?t:new Proxy(t,$t)}class zt{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _(t,()=>{this._dirty||(this._dirty=!0,Dt(this))}),this["__v_isReadonly"]=n}get value(){const t=Ct(this);return Pt(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gt(t,e){let n,i;const o=Object(r["p"])(t);o?(n=t,i=r["d"]):(n=t.get,i=t.set);const s=new zt(n,i,o||!i);return s}Promise.resolve();new Set;new Map;function Ht(t,e,...n){const i=t.vnode.props||r["b"];let o=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:s}=i[t]||r["b"];s?o=n.map(t=>t.trim()):e&&(o=n.map(r["N"]))}let c;let u=i[c=Object(r["M"])(e)]||i[c=Object(r["M"])(Object(r["e"])(e))];!u&&s&&(u=i[c=Object(r["M"])(Object(r["l"])(e))]),u&&Ur(u,t,6,o);const l=i[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,Ur(l,t,6,o)}}function Kt(t,e,n=!1){const i=e.emitsCache,o=i.get(t);if(void 0!==o)return o;const s=t.emits;let a={},c=!1;if(!Object(r["p"])(t)){const i=t=>{const n=Kt(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(t=>a[t]=null):Object(r["h"])(a,s),i.set(t,a),a):(i.set(t,null),null)}function Wt(t,e){return!(!t||!Object(r["w"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["k"])(t,Object(r["l"])(e))||Object(r["k"])(t,e))}let Jt=null,Xt=null;function Qt(t){const e=Jt;return Jt=t,Xt=t&&t.type.__scopeId||null,e}function Yt(t,e=Jt,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Hn(-1);const i=Qt(e),o=t(...n);return Qt(i),r._d&&Hn(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Zt(t){const{type:e,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let v,y;const b=Qt(t);try{if(4&n.shapeFlag){const t=o||i;v=ur(h.call(t,t,f,s,p,d,g)),y=u}else{const t=e;0,v=ur(t.length>1?t(s,{attrs:u,slots:c,emit:l}):t(s,null)),y=e.props?u:te(u)}}catch(_){Bn.length=0,Fr(_,t,1),v=nr(Fn)}let w=v;if(y&&!1!==m){const t=Object.keys(y),{shapeFlag:e}=w;t.length&&7&e&&(a&&t.some(r["u"])&&(y=ee(y,a)),w=or(w,y))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,Qt(b),v}const te=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["w"])(n))&&((e||(e={}))[n]=t[n]);return e},ee=(t,e)=>{const n={};for(const i in t)Object(r["u"])(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function ne(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:c}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||re(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?re(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!Wt(u,n))return!0}}return!1}function re(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!Wt(n,o))return!0}return!1}function ie({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const oe=t=>t.__isSuspense;function se(t,e){e&&e.pendingBranch?Object(r["o"])(t)?e.effects.push(...t):e.effects.push(t):ai(t)}function ae(t,e){if(wr){let n=wr.provides;const r=wr.parent&&wr.parent.provides;r===n&&(n=wr.provides=Object.create(r)),n[t]=e}else 0}function ce(t,e,n=!1){const i=wr||Jt;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&Object(r["p"])(e)?e.call(i.proxy):e}else 0}function ue(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Re(()=>{t.isMounted=!0}),De(()=>{t.isUnmounting=!0}),t}const le=[Function,Array],he={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:le,onEnter:le,onAfterEnter:le,onEnterCancelled:le,onBeforeLeave:le,onLeave:le,onAfterLeave:le,onLeaveCancelled:le,onBeforeAppear:le,onAppear:le,onAfterAppear:le,onAppearCancelled:le},setup(t,{slots:e}){const n=_r(),r=ue();let i;return()=>{const o=e.default&&ye(e.default(),!0);if(!o||!o.length)return;const s=Ct(t),{mode:a}=s;const c=o[0];if(r.isLeaving)return ge(c);const u=me(c);if(!u)return ge(c);const l=pe(u,s,r,n);ve(u,l);const h=n.subTree,f=h&&me(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,d=!0)}if(f&&f.type!==Fn&&(!Qn(u,f)||d)){const t=pe(f,s,r,n);if(ve(f,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},ge(c);"in-out"===a&&u.type!==Fn&&(t.delayLeave=(t,e,n)=>{const i=de(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},fe=he;function de(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function pe(t,e,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=e,b=String(t.key),w=de(n,t),_=(t,e)=>{t&&Ur(t,r,9,e)},E={mode:o,persisted:s,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=g||a}e._leaveCb&&e._leaveCb(!0);const o=w[b];o&&Qn(t,o)&&o.el._leaveCb&&o.el._leaveCb(),_(r,[e])},enter(t){let e=c,r=u,o=l;if(!n.isMounted){if(!i)return;e=m||c,r=v||u,o=y||l}let s=!1;const a=t._enterCb=e=>{s||(s=!0,_(e?o:r,[t]),E.delayedLeave&&E.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();_(h,[e]);let o=!1;const s=e._leaveCb=n=>{o||(o=!0,r(),_(n?p:d,[e]),e._leaveCb=void 0,w[i]===t&&delete w[i])};w[i]=t,f?(f(e,s),f.length<=1&&s()):s()},clone(t){return pe(t,e,n,r)}};return E}function ge(t){if(_e(t))return t=or(t),t.children=null,t}function me(t){return _e(t)?t.children?t.children[0]:void 0:t}function ve(t,e){6&t.shapeFlag&&t.component?ve(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ye(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const o=t[i];o.type===Mn?(128&o.patchFlag&&r++,n=n.concat(ye(o.children,e))):(e||o.type!==Fn)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function be(t){return Object(r["p"])(t)?{setup:t,name:t.name}:t}const we=t=>!!t.type.__asyncLoader;const _e=t=>t.type.__isKeepAlive;RegExp,RegExp;function Ee(t,e){return Object(r["o"])(t)?t.some(t=>Ee(t,e)):Object(r["D"])(t)?t.split(",").indexOf(e)>-1:!!t.test&&t.test(e)}function Ie(t,e){Te(t,"a",e)}function Oe(t,e){Te(t,"da",e)}function Te(t,e,n=wr){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}t()});if(Ae(e,r,n),n){let t=n.parent;while(t&&t.parent)_e(t.parent.vnode)&&Se(r,e,n,t),t=t.parent}}function Se(t,e,n,i){const o=Ae(e,t,i,!0);Le(()=>{Object(r["K"])(i[e],o)},n)}function xe(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function ke(t){return 128&t.shapeFlag?t.ssContent:t}function Ae(t,e,n=wr,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;T(),Er(n);const i=Ur(e,n,t,r);return Ir(),x(),i});return r?i.unshift(o):i.push(o),o}}const Ce=t=>(e,n=wr)=>(!xr||"sp"===t)&&Ae(t,e,n),je=Ce("bm"),Re=Ce("m"),Ne=Ce("bu"),Pe=Ce("u"),De=Ce("bum"),Le=Ce("um"),Me=Ce("sp"),Ue=Ce("rtg"),Fe=Ce("rtc");function Ve(t,e=wr){Ae("ec",t,e)}let Be=!0;function $e(t){const e=He(t),n=t.proxy,i=t.ctx;Be=!1,e.beforeCreate&&ze(e.beforeCreate,t,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:_,render:E,renderTracked:I,renderTriggered:O,errorCaptured:T,serverPrefetch:S,expose:x,inheritAttrs:k,components:A,directives:C,filters:j}=e,R=null;if(l&&qe(l,i,R,t.appContext.config.unwrapInjectedRef),a)for(const P in a){const t=a[P];Object(r["p"])(t)&&(i[P]=t.bind(n))}if(o){0;const e=o.call(n,n);0,Object(r["v"])(e)&&(t.data=It(e))}if(Be=!0,s)for(const P in s){const t=s[P],e=Object(r["p"])(t)?t.bind(n,n):Object(r["p"])(t.get)?t.get.bind(n,n):r["d"];0;const o=!Object(r["p"])(t)&&Object(r["p"])(t.set)?t.set.bind(n):r["d"],a=Gt({get:e,set:o});Object.defineProperty(i,P,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)Ge(c[r],i,n,r);if(u){const t=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{ae(e,t[e])})}function N(t,e){Object(r["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&ze(h,t,"c"),N(je,f),N(Re,d),N(Ne,p),N(Pe,g),N(Ie,m),N(Oe,v),N(Ve,T),N(Fe,I),N(Ue,O),N(De,b),N(Le,_),N(Me,S),Object(r["o"])(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});E&&t.render===r["d"]&&(t.render=E),null!=k&&(t.inheritAttrs=k),A&&(t.components=A),C&&(t.directives=C)}function qe(t,e,n=r["d"],i=!1){Object(r["o"])(t)&&(t=Qe(t));for(const o in t){const n=t[o];let s;s=Object(r["v"])(n)?"default"in n?ce(n.from||o,n.default,!0):ce(n.from||o):ce(n),Lt(s)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:t=>s.value=t}):e[o]=s}}function ze(t,e,n){Ur(Object(r["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ge(t,e,n,i){const o=i.includes(".")?mi(n,i):()=>n[i];if(Object(r["D"])(t)){const n=e[t];Object(r["p"])(n)&&di(o,n)}else if(Object(r["p"])(t))di(o,t.bind(n));else if(Object(r["v"])(t))if(Object(r["o"])(t))t.forEach(t=>Ge(t,e,n,i));else{const i=Object(r["p"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["p"])(i)&&di(o,i,t)}else 0}function He(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>Ke(c,t,s,!0)),Ke(c,e,s)):c=e,o.set(e,c),c}function Ke(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&Ke(t,o,n,!0),i&&i.forEach(e=>Ke(t,e,n,!0));for(const s in e)if(r&&"expose"===s);else{const r=We[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const We={data:Je,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Ze,directives:Ze,watch:tn,provide:Je,inject:Xe};function Je(t,e){return e?t?function(){return Object(r["h"])(Object(r["p"])(t)?t.call(this,this):t,Object(r["p"])(e)?e.call(this,this):e)}:e:t}function Xe(t,e){return Ze(Qe(t),Qe(e))}function Qe(t){if(Object(r["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Ze(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function tn(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=Ye(t[r],e[r]);return n}function en(t,e,n,i=!1){const o={},s={};Object(r["g"])(s,Yn,1),t.propsDefaults=Object.create(null),rn(t,e,o,s);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:Ot(o):t.type.props?t.props=o:t.props=s,t.attrs=s}function nn(t,e,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=t,c=Ct(o),[u]=t.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;rn(t,e,o,s)&&(l=!0);for(const s in c)e&&(Object(r["k"])(e,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(e,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=on(u,c,s,void 0,t,!0)):delete o[s]);if(s!==c)for(const t in s)e&&Object(r["k"])(e,t)||(delete s[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=e[a];if(u)if(Object(r["k"])(s,a))h!==s[a]&&(s[a]=h,l=!0);else{const e=Object(r["e"])(a);o[e]=on(u,c,e,h,t,!1)}else h!==s[a]&&(s[a]=h,l=!0)}}l&&j(t,"set","$attrs")}function rn(t,e,n,i){const[o,s]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["z"])(u))continue;const l=e[u];let h;o&&Object(r["k"])(o,h=Object(r["e"])(u))?s&&s.includes(h)?(a||(a={}))[h]=l:n[h]=l:Wt(t.emitsOptions,u)||l!==i[u]&&(i[u]=l,c=!0)}if(s){const e=Ct(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=on(o,e,c,i[c],t,!Object(r["k"])(i,c))}}return c}function on(t,e,n,i,o,s){const a=t[n];if(null!=a){const t=Object(r["k"])(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&Object(r["p"])(t)){const{propsDefaults:r}=o;n in r?i=r[n]:(Er(o),i=r[n]=t.call(null,e),Ir())}else i=t}a[0]&&(s&&!t?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function sn(t,e,n=!1){const i=e.propsCache,o=i.get(t);if(o)return o;const s=t.props,a={},c=[];let u=!1;if(!Object(r["p"])(t)){const i=t=>{u=!0;const[n,i]=sn(t,e,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!s&&!u)return i.set(t,r["a"]),r["a"];if(Object(r["o"])(s))for(let h=0;h<s.length;h++){0;const t=Object(r["e"])(s[h]);an(t)&&(a[t]=r["b"])}else if(s){0;for(const t in s){const e=Object(r["e"])(t);if(an(e)){const n=s[t],i=a[e]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const t=ln(Boolean,i.type),n=ln(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||Object(r["k"])(i,"default"))&&c.push(e)}}}}const l=[a,c];return i.set(t,l),l}function an(t){return"$"!==t[0]}function cn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function un(t,e){return cn(t)===cn(e)}function ln(t,e){return Object(r["o"])(e)?e.findIndex(e=>un(e,t)):Object(r["p"])(e)&&un(e,t)?0:-1}const hn=t=>"_"===t[0]||"$stable"===t,fn=t=>Object(r["o"])(t)?t.map(ur):[ur(t)],dn=(t,e,n)=>{const r=Yt((...t)=>fn(e(...t)),n);return r._c=!1,r},pn=(t,e,n)=>{const i=t._ctx;for(const o in t){if(hn(o))continue;const n=t[o];if(Object(r["p"])(n))e[o]=dn(o,n,i);else if(null!=n){0;const t=fn(n);e[o]=()=>t}}},gn=(t,e)=>{const n=fn(e);t.slots.default=()=>n},mn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=Ct(e),Object(r["g"])(e,"_",n)):pn(e,t.slots={})}else t.slots={},e&&gn(t,e);Object(r["g"])(t.slots,Yn,1)},vn=(t,e,n)=>{const{vnode:i,slots:o}=t;let s=!0,a=r["b"];if(32&i.shapeFlag){const t=e._;t?n&&1===t?s=!1:(Object(r["h"])(o,e),n||1!==t||delete o._):(s=!e.$stable,pn(e,o)),a=e}else e&&(gn(t,e),a={default:1});if(s)for(const r in o)hn(r)||r in a||delete o[r]};function yn(t,e){const n=Jt;if(null===n)return t;const i=n.proxy,o=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=r["b"]]=e[s];Object(r["p"])(t)&&(t={mounted:t,updated:t}),t.deep&&vi(n),o.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function bn(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(T(),Ur(c,n,8,[t.el,a,t,e]),x())}}function wn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _n=0;function En(t,e){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const o=wn(),s=new Set;let a=!1;const c=o.app={_uid:_n++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:bi,get config(){return o.config},set config(t){0},use(t,...e){return s.has(t)||(t&&Object(r["p"])(t.install)?(s.add(t),t.install(c,...e)):Object(r["p"])(t)&&(s.add(t),t(c,...e))),c},mixin(t){return o.mixins.includes(t)||o.mixins.push(t),c},component(t,e){return e?(o.components[t]=e,c):o.components[t]},directive(t,e){return e?(o.directives[t]=e,c):o.directives[t]},mount(r,s,u){if(!a){const l=nr(n,i);return l.appContext=o,s&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Pr(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return o.provides[t]=e,c}};return c}}function In(){}const On=se;function Tn(t){return Sn(t)}function Sn(t,e){In();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:f,nextSibling:d,setScopeId:p=r["d"],cloneNode:g,insertStaticContent:m}=t,v=(t,e,n,r=null,i=null,o=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Qn(t,e)&&(r=W(t),q(t,i,o,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Un:y(t,e,n,r);break;case Fn:b(t,e,n,r);break;case Vn:null==t&&w(e,n,r,s);break;case Mn:N(t,e,n,r,i,o,s,a,c);break;default:1&h?O(t,e,n,r,i,o,s,a,c):6&h?P(t,e,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,o,s,a,c,X)}null!=l&&i&&xn(l,t&&t.ref,o,e||t,!e)},y=(t,e,n,r)=>{if(null==t)i(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=u(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r)},E=({el:t,anchor:e},n,r)=>{let o;while(t&&t!==e)o=d(t),i(t,n,r),t=o;i(e,n,r)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=d(t),o(t),t=n;o(e)},O=(t,e,n,r,i,o,s,a,c)=>{s=s||"svg"===e.type,null==t?S(e,n,r,i,o,s,a,c):C(t,e,i,o,s,a,c)},S=(t,e,n,o,c,u,l,f)=>{let d,p;const{type:m,props:v,shapeFlag:y,transition:b,patchFlag:w,dirs:_}=t;if(t.el&&void 0!==g&&-1===w)d=t.el=g(t.el);else{if(d=t.el=a(t.type,u,v&&v.is,v),8&y?h(d,t.children):16&y&&A(t.children,d,null,o,c,u&&"foreignObject"!==m,l,f),_&&bn(t,null,o,"created"),v){for(const e in v)"value"===e||Object(r["z"])(e)||s(d,e,null,v[e],u,t.children,o,c,K);"value"in v&&s(d,"value",null,v.value),(p=v.onVnodeBeforeMount)&&kn(p,o,t)}k(d,t,t.scopeId,l,o)}_&&bn(t,null,o,"beforeMount");const E=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;E&&b.beforeEnter(d),i(d,e,n),((p=v&&v.onVnodeMounted)||E||_)&&On(()=>{p&&kn(p,o,t),E&&b.enter(d),_&&bn(t,null,o,"mounted")},c)},k=(t,e,n,r,i)=>{if(n&&p(t,n),r)for(let o=0;o<r.length;o++)p(t,r[o]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;k(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},A=(t,e,n,r,i,o,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?lr(t[u]):ur(t[u]);v(null,c,e,n,r,i,o,s,a)}},C=(t,e,n,i,o,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||r["b"],g=e.props||r["b"];let m;(m=g.onVnodeBeforeUpdate)&&kn(m,n,e,t),d&&bn(e,t,n,"beforeUpdate");const v=o&&"foreignObject"!==e.type;if(f?j(t.dynamicChildren,f,u,n,i,v,a):c||F(t,e,u,null,n,i,v,a,!1),l>0){if(16&l)R(u,e,p,g,n,i,o);else if(2&l&&p.class!==g.class&&s(u,"class",null,g.class,o),4&l&&s(u,"style",p.style,g.style,o),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=g[a];l===c&&"value"!==a||s(u,a,c,l,o,t.children,n,i,K)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=f||R(u,e,p,g,n,i,o);((m=g.onVnodeUpdated)||d)&&On(()=>{m&&kn(m,n,e,t),d&&bn(e,t,n,"updated")},i)},j=(t,e,n,r,i,o,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Mn||!Qn(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,o,s,!0)}},R=(t,e,n,i,o,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&s(t,u,h,l,c,e.children,o,a,K)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||s(t,u,n[u],null,c,e.children,o,a,K);"value"in i&&s(t,"value",n.value,i.value)}},N=(t,e,n,r,o,s,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(i(h,n,r),i(f,n,r),A(e.children,n,f,o,s,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(j(t.dynamicChildren,p,n,o,s,a,u),(null!=e.key||o&&e===o.subTree)&&An(t,e,!0)):F(t,e,n,f,o,s,a,u,l)},P=(t,e,n,r,i,o,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,s,c):D(e,n,r,i,o,s,c):L(t,e,c)},D=(t,e,n,r,i,o,s)=>{const a=t.component=br(t,r,i);if(_e(t)&&(a.ctx.renderer=X),kr(a),a.asyncDep){if(i&&i.registerDep(a,M),!t.el){const t=a.subTree=nr(Fn);b(null,t,e,n)}}else M(a,t,e,n,i,o,s)},L=(t,e,n)=>{const r=e.component=t.component;if(ne(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,e,n);r.next=e,ii(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},M=(t,e,n,i,o,s,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:c,parent:l,vnode:h}=t,d=n;0,u.allowRecurse=!1,n?(n.el=h.el,U(t,n,a)):n=h,i&&Object(r["n"])(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&kn(e,l,n,h),u.allowRecurse=!0;const p=Zt(t);0;const g=t.subTree;t.subTree=p,v(g,p,f(g.el),W(g),t,o,s),n.el=p.el,null===d&&ie(t,p.el),c&&On(c,o),(e=n.props&&n.props.onVnodeUpdated)&&On(()=>kn(e,l,n,h),o)}else{let a;const{el:c,props:l}=e,{bm:h,m:f,parent:d}=t,p=we(e);if(u.allowRecurse=!1,h&&Object(r["n"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&kn(a,d,e),u.allowRecurse=!0,c&&Y){const n=()=>{t.subTree=Zt(t),Y(c,t.subTree,t,o,null)};p?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=Zt(t);0,v(null,r,n,i,t,o,s),e.el=r.el}if(f&&On(f,o),!p&&(a=l&&l.onVnodeMounted)){const t=e;On(()=>kn(a,d,t),o)}256&e.shapeFlag&&t.a&&On(t.a,o),t.isMounted=!0,e=n=i=null}},u=new _(c,()=>ni(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,u.allowRecurse=l.allowRecurse=!0,l()},U=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,nn(t,e.props,r,n),vn(t,e.children,n),T(),ci(void 0,t.update),x()},F=(t,e,n,r,i,o,s,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void B(u,f,n,r,i,o,s,a,c);if(256&d)return void V(u,f,n,r,i,o,s,a,c)}8&p?(16&l&&K(u,i,o),f!==u&&h(n,f)):16&l?16&p?B(u,f,n,r,i,o,s,a,c):K(u,i,o,!0):(8&l&&h(n,""),16&p&&A(f,n,r,i,o,s,a,c))},V=(t,e,n,i,o,s,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?lr(e[d]):ur(e[d]);v(t[d],r,n,null,o,s,a,c,u)}l>h?K(t,o,s,!0,!1,f):A(e,n,i,o,s,a,c,u,f)},B=(t,e,n,i,o,s,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?lr(e[l]):ur(e[l]);if(!Qn(r,i))break;v(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?lr(e[d]):ur(e[d]);if(!Qn(r,i))break;v(r,i,n,null,o,s,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:i;while(l<=d)v(null,e[l]=u?lr(e[l]):ur(e[l]),n,r,o,s,a,c,u),l++}}else if(l>d)while(l<=f)q(t[l],o,s,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?lr(e[l]):ur(e[l]);null!=t.key&&m.set(t.key,l)}let y,b=0;const w=d-g+1;let _=!1,E=0;const I=new Array(w);for(l=0;l<w;l++)I[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=w){q(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=d;y++)if(0===I[y-g]&&Qn(r,e[y])){i=y;break}void 0===i?q(r,o,s,!0):(I[i-g]=l+1,i>=E?E=i:_=!0,v(r,e[i],n,null,o,s,a,c,u),b++)}const O=_?Cn(I):r["a"];for(y=O.length-1,l=w-1;l>=0;l--){const t=g+l,r=e[t],f=t+1<h?e[t+1].el:i;0===I[l]?v(null,r,n,f,o,s,a,c,u):_&&(y<0||l!==O[y]?$(r,n,f,2):y--)}}},$=(t,e,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void $(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,X);if(a===Mn){i(s,e,n);for(let t=0;t<u.length;t++)$(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Vn)return void E(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),i(s,e,n),On(()=>c.enter(s),o);else{const{leave:t,delayLeave:r,afterLeave:o}=c,a=()=>i(s,e,n),u=()=>{t(s,()=>{a(),o&&o()})};r?r(s,a,u):u()}else i(s,e,n)},q=(t,e,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&xn(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!we(t);let g;if(p&&(g=s&&s.onVnodeBeforeUnmount)&&kn(g,e,t),6&l)H(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&bn(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,X,r):u&&(o!==Mn||h>0&&64&h)?K(u,e,n,!1,!0):(o===Mn&&384&h||!i&&16&l)&&K(c,e,n),r&&z(t)}(p&&(g=s&&s.onVnodeUnmounted)||d)&&On(()=>{g&&kn(g,e,t),d&&bn(t,null,e,"unmounted")},n)},z=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Mn)return void G(n,r);if(e===Vn)return void I(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},G=(t,e)=>{let n;while(t!==e)n=d(t),o(t),t=n;o(e)},H=(t,e,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=t;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,q(a,t,e,n)),c&&On(c,e),On(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},K=(t,e,n,r=!1,i=!1,o=0)=>{for(let s=o;s<t.length;s++)q(t[s],e,n,r,i)},W=t=>6&t.shapeFlag?W(t.component.subTree):128&t.shapeFlag?t.suspense.next():d(t.anchor||t.el),J=(t,e,n)=>{null==t?e._vnode&&q(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),ui(),e._vnode=t},X={p:v,um:q,m:$,r:z,mt:D,mc:A,pc:F,pbc:j,n:W,o:t};let Q,Y;return e&&([Q,Y]=e(X)),{render:J,hydrate:Q,createApp:En(J,Q)}}function xn(t,e,n,i,o=!1){if(Object(r["o"])(t))return void t.forEach((t,s)=>xn(t,e&&(Object(r["o"])(e)?e[s]:e),n,i,o));if(we(i)&&!o)return;const s=4&i.shapeFlag?Pr(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(h[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):Lt(l)&&(l.value=null)),Object(r["D"])(u)){const t=()=>{h[u]=a,Object(r["k"])(f,u)&&(f[u]=a)};a?(t.id=-1,On(t,n)):t()}else if(Lt(u)){const t=()=>{u.value=a};a?(t.id=-1,On(t,n)):t()}else Object(r["p"])(u)&&Mr(u,c,12,[a,h])}function kn(t,e,n,r=null){Ur(t,e,7,[n,r])}function An(t,e,n=!1){const i=t.children,o=e.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const t=i[r];let e=o[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=o[r]=lr(o[r]),e.el=t.el),n||An(t,e))}}function Cn(t){const e=t.slice(),n=[0];let r,i,o,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=e[s];return n}const jn=t=>t.__isTeleport;const Rn="components";function Nn(t,e){return Dn(Rn,t,!0,e)||t}const Pn=Symbol();function Dn(t,e,n=!0,i=!1){const o=Jt||wr;if(o){const n=o.type;if(t===Rn){const t=Dr(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const s=Ln(o[t]||n[t],e)||Ln(o.appContext[t],e);return!s&&i?n:s}}function Ln(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const Mn=Symbol(void 0),Un=Symbol(void 0),Fn=Symbol(void 0),Vn=Symbol(void 0),Bn=[];let $n=null;function qn(t=!1){Bn.push($n=t?null:[])}function zn(){Bn.pop(),$n=Bn[Bn.length-1]||null}let Gn=1;function Hn(t){Gn+=t}function Kn(t){return t.dynamicChildren=Gn>0?$n||r["a"]:null,zn(),Gn>0&&$n&&$n.push(t),t}function Wn(t,e,n,r,i,o){return Kn(er(t,e,n,r,i,o,!0))}function Jn(t,e,n,r,i){return Kn(nr(t,e,n,r,i,!0))}function Xn(t){return!!t&&!0===t.__v_isVNode}function Qn(t,e){return t.type===e.type&&t.key===e.key}const Yn="__vInternal",Zn=({key:t})=>null!=t?t:null,tr=({ref:t})=>null!=t?Object(r["D"])(t)||Lt(t)||Object(r["p"])(t)?{i:Jt,r:t}:t:null;function er(t,e=null,n=null,i=0,o=null,s=(t===Mn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zn(e),ref:e&&tr(e),scopeId:Xt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(hr(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),Gn>0&&!a&&$n&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&$n.push(u),u}const nr=rr;function rr(t,e=null,n=null,i=0,o=null,s=!1){if(t&&t!==Pn||(t=Fn),Xn(t)){const r=or(t,e,!0);return n&&hr(r,n),r}if(Lr(t)&&(t=t.__vccOpts),e){e=ir(e);let{class:t,style:n}=e;t&&!Object(r["D"])(t)&&(e.class=Object(r["I"])(t)),Object(r["v"])(n)&&(At(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["J"])(n))}const a=Object(r["D"])(t)?1:oe(t)?128:jn(t)?64:Object(r["v"])(t)?4:Object(r["p"])(t)?2:0;return er(t,e,n,i,o,a,s,!0)}function ir(t){return t?At(t)||Yn in t?Object(r["h"])({},t):t:null}function or(t,e,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=t,c=e?fr(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zn(c),ref:e&&e.ref?n&&o?Object(r["o"])(o)?o.concat(tr(e)):[o,tr(e)]:tr(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mn?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&or(t.ssContent),ssFallback:t.ssFallback&&or(t.ssFallback),el:t.el,anchor:t.anchor};return u}function sr(t=" ",e=0){return nr(Un,null,t,e)}function ar(t,e){const n=nr(Vn,null,t);return n.staticCount=e,n}function cr(t="",e=!1){return e?(qn(),Jn(Fn,null,t)):nr(Fn,null,t)}function ur(t){return null==t||"boolean"===typeof t?nr(Fn):Object(r["o"])(t)?nr(Mn,null,t.slice()):"object"===typeof t?lr(t):nr(Un,null,String(t))}function lr(t){return null===t.el||t.memo?t:or(t)}function hr(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(Object(r["o"])(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),hr(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Yn in e?3===r&&Jt&&(1===Jt.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=Jt}}else Object(r["p"])(e)?(e={default:e,_ctx:Jt},n=32):(e=String(e),64&i?(n=16,e=[sr(e)]):n=8);t.children=e,t.shapeFlag|=n}function fr(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=Object(r["I"])([e.class,i.class]));else if("style"===t)e.style=Object(r["J"])([e.style,i.style]);else if(Object(r["w"])(t)){const n=e[t],r=i[t];n!==r&&(e[t]=n?[].concat(n,r):r)}else""!==t&&(e[t]=i[t])}return e}function dr(t,e,n,i){let o;const s=n&&n[i];if(Object(r["o"])(t)||Object(r["D"])(t)){o=new Array(t.length);for(let n=0,r=t.length;n<r;n++)o[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,s&&s[n])}else if(Object(r["v"])(t))if(t[Symbol.iterator])o=Array.from(t,(t,n)=>e(t,n,void 0,s&&s[n]));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}const pr=t=>t?Or(t)?Pr(t)||t.proxy:pr(t.parent):null,gr=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pr(t.parent),$root:t=>pr(t.root),$emit:t=>t.emit,$options:t=>He(t),$forceUpdate:t=>()=>ni(t.update),$nextTick:t=>ti.bind(t.proxy),$watch:t=>gi.bind(t)}),mr={get({_:t},e){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 0:return i[e];case 1:return o[e];case 3:return n[e];case 2:return s[e]}else{if(i!==r["b"]&&Object(r["k"])(i,e))return a[e]=0,i[e];if(o!==r["b"]&&Object(r["k"])(o,e))return a[e]=1,o[e];if((l=t.propsOptions[0])&&Object(r["k"])(l,e))return a[e]=2,s[e];if(n!==r["b"]&&Object(r["k"])(n,e))return a[e]=3,n[e];Be&&(a[e]=4)}}const h=gr[e];let f,d;return h?("$attrs"===e&&k(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["k"])(n,e)?(a[e]=3,n[e]):(d=u.config.globalProperties,Object(r["k"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:i,setupState:o,ctx:s}=t;if(o!==r["b"]&&Object(r["k"])(o,e))o[e]=n;else if(i!==r["b"]&&Object(r["k"])(i,e))i[e]=n;else if(Object(r["k"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return void 0!==n[a]||t!==r["b"]&&Object(r["k"])(t,a)||e!==r["b"]&&Object(r["k"])(e,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(gr,a)||Object(r["k"])(o.config.globalProperties,a)}};const vr=wn();let yr=0;function br(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||vr,a={uid:yr++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sn(i,o),emitsOptions:Kt(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Ht.bind(null,a),t.ce&&t.ce(a),a}let wr=null;const _r=()=>wr||Jt,Er=t=>{wr=t,t.scope.on()},Ir=()=>{wr&&wr.scope.off(),wr=null};function Or(t){return 4&t.vnode.shapeFlag}let Tr,Sr,xr=!1;function kr(t,e=!1){xr=e;const{props:n,children:r}=t.vnode,i=Or(t);en(t,n,i,e),mn(t,r);const o=i?Ar(t,e):void 0;return xr=!1,o}function Ar(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jt(new Proxy(t.ctx,mr));const{setup:i}=n;if(i){const n=t.setupContext=i.length>1?Nr(t):null;Er(t),T();const o=Mr(i,t,0,[t.props,n]);if(x(),Ir(),Object(r["y"])(o)){if(o.then(Ir,Ir),e)return o.then(n=>{Cr(t,n,e)}).catch(e=>{Fr(e,t,0)});t.asyncDep=o}else Cr(t,o,e)}else jr(t,e)}function Cr(t,e,n){Object(r["p"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(r["v"])(e)&&(t.setupState=qt(e)),jr(t,n)}function jr(t,e,n){const i=t.type;if(!t.render){if(!e&&Tr&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=Tr(e,c)}}t.render=i.render||r["d"],Sr&&Sr(t)}Er(t),T(),$e(t),x(),Ir()}function Rr(t){return new Proxy(t.attrs,{get(e,n){return k(t,"get","$attrs"),e[n]}})}function Nr(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Rr(t))},slots:t.slots,emit:t.emit,expose:e}}function Pr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qt(jt(t.exposed)),{get(e,n){return n in e?e[n]:n in gr?gr[n](t):void 0}}))}function Dr(t){return Object(r["p"])(t)&&t.displayName||t.name}function Lr(t){return Object(r["p"])(t)&&"__vccOpts"in t}function Mr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){Fr(o,e,n)}return i}function Ur(t,e,n,i){if(Object(r["p"])(t)){const o=Mr(t,e,n,i);return o&&Object(r["y"])(o)&&o.catch(t=>{Fr(t,e,n)}),o}const o=[];for(let r=0;r<t.length;r++)o.push(Ur(t[r],e,n,i));return o}function Fr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const s=e.appContext.config.errorHandler;if(s)return void Mr(s,null,10,[t,i,o])}Vr(t,n,i,r)}function Vr(t,e,n,r=!0){console.error(t)}let Br=!1,$r=!1;const qr=[];let zr=0;const Gr=[];let Hr=null,Kr=0;const Wr=[];let Jr=null,Xr=0;const Qr=Promise.resolve();let Yr=null,Zr=null;function ti(t){const e=Yr||Qr;return t?e.then(this?t.bind(this):t):e}function ei(t){let e=zr+1,n=qr.length;while(e<n){const r=e+n>>>1,i=li(qr[r]);i<t?e=r+1:n=r}return e}function ni(t){qr.length&&qr.includes(t,Br&&t.allowRecurse?zr+1:zr)||t===Zr||(null==t.id?qr.push(t):qr.splice(ei(t.id),0,t),ri())}function ri(){Br||$r||($r=!0,Yr=Qr.then(hi))}function ii(t){const e=qr.indexOf(t);e>zr&&qr.splice(e,1)}function oi(t,e,n,i){Object(r["o"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),ri()}function si(t){oi(t,Hr,Gr,Kr)}function ai(t){oi(t,Jr,Wr,Xr)}function ci(t,e=null){if(Gr.length){for(Zr=e,Hr=[...new Set(Gr)],Gr.length=0,Kr=0;Kr<Hr.length;Kr++)Hr[Kr]();Hr=null,Kr=0,Zr=null,ci(t,e)}}function ui(t){if(Wr.length){const t=[...new Set(Wr)];if(Wr.length=0,Jr)return void Jr.push(...t);for(Jr=t,Jr.sort((t,e)=>li(t)-li(e)),Xr=0;Xr<Jr.length;Xr++)Jr[Xr]();Jr=null,Xr=0}}const li=t=>null==t.id?1/0:t.id;function hi(t){$r=!1,Br=!0,ci(t),qr.sort((t,e)=>li(t)-li(e));r["d"];try{for(zr=0;zr<qr.length;zr++){const t=qr[zr];t&&!1!==t.active&&Mr(t,null,14)}}finally{zr=0,qr.length=0,ui(t),Br=!1,Yr=null,(qr.length||Gr.length||Wr.length)&&hi(t)}}const fi={};function di(t,e,n){return pi(t,e,n)}function pi(t,e,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=wr;let u,l,h=!1,f=!1;if(Lt(t)?(u=()=>t.value,h=!!t._shallow):xt(t)?(u=()=>t,i=!0):Object(r["o"])(t)?(f=!0,h=t.some(xt),u=()=>t.map(t=>Lt(t)?t.value:xt(t)?vi(t):Object(r["p"])(t)?Mr(t,c,2):void 0)):u=Object(r["p"])(t)?e?()=>Mr(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Ur(t,c,3,[d])}:r["d"],e&&i){const t=u;u=()=>vi(t())}let d=t=>{l=v.onStop=()=>{Mr(t,c,4)}};if(xr)return d=r["d"],e?n&&Ur(e,c,3,[u(),f?[]:void 0,d]):u(),r["d"];let p=f?[]:fi;const g=()=>{if(v.active)if(e){const t=v.run();(i||h||(f?t.some((t,e)=>Object(r["j"])(t,p[e])):Object(r["j"])(t,p)))&&(l&&l(),Ur(e,c,3,[t,p===fi?void 0:p,d]),p=t)}else v.run()};let m;g.allowRecurse=!!e,m="sync"===o?g:"post"===o?()=>On(g,c&&c.suspense):()=>{!c||c.isMounted?si(g):g()};const v=new _(u,m);return e?n?g():p=v.run():"post"===o?On(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,v)}}function gi(t,e,n){const i=this.proxy,o=Object(r["D"])(t)?t.includes(".")?mi(i,t):()=>i[t]:t.bind(i,i);let s;Object(r["p"])(e)?s=e:(s=e.handler,n=e);const a=wr;Er(this);const c=pi(o,s.bind(i),n);return a?Er(a):Ir(),c}function mi(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function vi(t,e){if(!Object(r["v"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Lt(t))vi(t.value,e);else if(Object(r["o"])(t))for(let n=0;n<t.length;n++)vi(t[n],e);else if(Object(r["B"])(t)||Object(r["t"])(t))t.forEach(t=>{vi(t,e)});else if(Object(r["x"])(t))for(const n in t)vi(t[n],e);return t}function yi(t,e,n){const i=arguments.length;return 2===i?Object(r["v"])(e)&&!Object(r["o"])(e)?Xn(e)?nr(t,null,[e]):nr(t,e):nr(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Xn(n)&&(n=[n]),nr(t,e,n))}Symbol("");const bi="3.2.18",wi="http://www.w3.org/2000/svg",_i="undefined"!==typeof document?document:null,Ei=new Map,Ii={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?_i.createElementNS(wi,t):_i.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>_i.createTextNode(t),createComment:t=>_i.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_i.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let o=Ei.get(t);if(!o){const e=_i.createElement("template");if(e.innerHTML=r?`<svg>${t}</svg>`:t,o=e.content,r){const t=o.firstChild;while(t.firstChild)o.appendChild(t.firstChild);o.removeChild(t)}Ei.set(t,o)}return e.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Oi(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ti(t,e,n){const i=t.style,o=i.display;if(n)if(Object(r["D"])(n))e!==n&&(i.cssText=n);else{for(const t in n)xi(i,t,n[t]);if(e&&!Object(r["D"])(e))for(const t in e)null==n[t]&&xi(i,t,"")}else t.removeAttribute("style");"_vod"in t&&(i.display=o)}const Si=/\s*!important$/;function xi(t,e,n){if(Object(r["o"])(n))n.forEach(n=>xi(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=Ci(t,e);Si.test(n)?t.setProperty(Object(r["l"])(i),n.replace(Si,""),"important"):t[i]=n}}const ki=["Webkit","Moz","ms"],Ai={};function Ci(t,e){const n=Ai[e];if(n)return n;let i=Object(r["e"])(e);if("filter"!==i&&i in t)return Ai[e]=i;i=Object(r["f"])(i);for(let r=0;r<ki.length;r++){const n=ki[r]+i;if(n in t)return Ai[e]=n}return e}const ji="http://www.w3.org/1999/xlink";function Ri(t,e,n,i,o){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(ji,e.slice(6,e.length)):t.setAttributeNS(ji,e,n);else{const i=Object(r["C"])(e);null==n||i&&!Object(r["m"])(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ni(t,e,n,i,o,s,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,o,s),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName){t._value=n;const r=null==n?"":n;return t.value!==r&&(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=Object(r["m"])(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let Pi=Date.now,Di=!1;if("undefined"!==typeof window){Pi()>document.createEvent("Event").timeStamp&&(Pi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Di=!!(t&&Number(t[1])<=53)}let Li=0;const Mi=Promise.resolve(),Ui=()=>{Li=0},Fi=()=>Li||(Mi.then(Ui),Li=Pi());function Vi(t,e,n,r){t.addEventListener(e,n,r)}function Bi(t,e,n,r){t.removeEventListener(e,n,r)}function $i(t,e,n,r,i=null){const o=t._vei||(t._vei={}),s=o[e];if(r&&s)s.value=r;else{const[n,a]=zi(e);if(r){const s=o[e]=Gi(r,i);Vi(t,n,s,a)}else s&&(Bi(t,n,s,a),o[e]=void 0)}}const qi=/(?:Once|Passive|Capture)$/;function zi(t){let e;if(qi.test(t)){let n;e={};while(n=t.match(qi))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["l"])(t.slice(2)),e]}function Gi(t,e){const n=t=>{const r=t.timeStamp||Pi();(Di||r>=n.attached-1)&&Ur(Hi(t,n.value),e,5,[t])};return n.value=t,n.attached=Fi(),n}function Hi(t,e){if(Object(r["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t(e))}return e}const Ki=/^on[a-z]/,Wi=(t,e,n,i,o=!1,s,a,c,u)=>{"class"===e?Oi(t,i,o):"style"===e?Ti(t,n,i):Object(r["w"])(e)?Object(r["u"])(e)||$i(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Ji(t,e,i,o))?Ni(t,e,i,s,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),Ri(t,e,i,o))};function Ji(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&Ki.test(e)&&Object(r["p"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!Ki.test(e)||!Object(r["D"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Xi="transition",Qi="animation",Yi=(t,{slots:e})=>yi(fe,no(t),e);Yi.displayName="Transition";const Zi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},to=(Yi.props=Object(r["h"])({},fe.props,Zi),(t,e=[])=>{Object(r["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),eo=t=>!!t&&(Object(r["o"])(t)?t.some(t=>t.length>1):t.length>1);function no(t){const e={};for(const r in t)r in Zi||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=ro(o),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:E,onBeforeAppear:I=y,onAppear:O=b,onAppearCancelled:T=w}=e,S=(t,e,n)=>{so(t,e?h:c),so(t,e?l:a),n&&n()},x=(t,e)=>{so(t,p),so(t,d),e&&e()},k=t=>(e,n)=>{const r=t?O:b,o=()=>S(e,t,n);to(r,[e,o]),ao(()=>{so(e,t?u:s),oo(e,t?h:c),eo(r)||uo(e,i,m,o)})};return Object(r["h"])(e,{onBeforeEnter(t){to(y,[t]),oo(t,s),oo(t,a)},onBeforeAppear(t){to(I,[t]),oo(t,u),oo(t,l)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){const n=()=>x(t,e);oo(t,f),po(),oo(t,d),ao(()=>{so(t,f),oo(t,p),eo(_)||uo(t,i,v,n)}),to(_,[t,n])},onEnterCancelled(t){S(t,!1),to(w,[t])},onAppearCancelled(t){S(t,!0),to(T,[t])},onLeaveCancelled(t){x(t),to(E,[t])}})}function ro(t){if(null==t)return null;if(Object(r["v"])(t))return[io(t.enter),io(t.leave)];{const e=io(t);return[e,e]}}function io(t){const e=Object(r["N"])(t);return e}function oo(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function so(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ao(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let co=0;function uo(t,e,n,r){const i=t._endId=++co,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=lo(t,e);if(!s)return r();const u=s+"end";let l=0;const h=()=>{t.removeEventListener(u,f),o()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function lo(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(Xi+"Delay"),o=r(Xi+"Duration"),s=ho(i,o),a=r(Qi+"Delay"),c=r(Qi+"Duration"),u=ho(a,c);let l=null,h=0,f=0;e===Xi?s>0&&(l=Xi,h=s,f=o.length):e===Qi?u>0&&(l=Qi,h=u,f=c.length):(h=Math.max(s,u),l=h>0?s>u?Xi:Qi:null,f=l?l===Xi?o.length:c.length:0);const d=l===Xi&&/\b(transform|all)(,|$)/.test(n[Xi+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function ho(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>fo(e)+fo(t[n])))}function fo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function po(){return document.body.offsetHeight}new WeakMap,new WeakMap;const go=t=>{const e=t.props["onUpdate:modelValue"];return Object(r["o"])(e)?t=>Object(r["n"])(e,t):e};function mo(t){t.target.composing=!0}function vo(t){const e=t.target;e.composing&&(e.composing=!1,yo(e,"input"))}function yo(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const bo={created(t,{modifiers:{lazy:e,trim:n,number:i}},o){t._assign=go(o);const s=i||o.props&&"number"===o.props.type;Vi(t,e?"change":"input",e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():s&&(i=Object(r["N"])(i)),t._assign(i)}),n&&Vi(t,"change",()=>{t.value=t.value.trim()}),e||(Vi(t,"compositionstart",mo),Vi(t,"compositionend",vo),Vi(t,"change",vo))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:o}},s){if(t._assign=go(s),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((o||"number"===t.type)&&Object(r["N"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}},wo={deep:!0,created(t,e,n){t._assign=go(n),Vi(t,"change",()=>{const e=t._modelValue,n=To(t),i=t.checked,o=t._assign;if(Object(r["o"])(e)){const t=Object(r["G"])(e,n),s=-1!==t;if(i&&!s)o(e.concat(n));else if(!i&&s){const n=[...e];n.splice(t,1),o(n)}}else if(Object(r["B"])(e)){const t=new Set(e);i?t.add(n):t.delete(n),o(t)}else o(So(t,i))})},mounted:_o,beforeUpdate(t,e,n){t._assign=go(n),_o(t,e,n)}};function _o(t,{value:e,oldValue:n},i){t._modelValue=e,Object(r["o"])(e)?t.checked=Object(r["G"])(e,i.props.value)>-1:Object(r["B"])(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Object(r["F"])(e,So(t,!0)))}const Eo={created(t,{value:e},n){t.checked=Object(r["F"])(e,n.props.value),t._assign=go(n),Vi(t,"change",()=>{t._assign(To(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t._assign=go(i),e!==n&&(t.checked=Object(r["F"])(e,i.props.value))}},Io={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const o=Object(r["B"])(e);Vi(t,"change",()=>{const e=Array.prototype.filter.call(t.options,t=>t.selected).map(t=>n?Object(r["N"])(To(t)):To(t));t._assign(t.multiple?o?new Set(e):e:e[0])}),t._assign=go(i)},mounted(t,{value:e}){Oo(t,e)},beforeUpdate(t,e,n){t._assign=go(n)},updated(t,{value:e}){Oo(t,e)}};function Oo(t,e){const n=t.multiple;if(!n||Object(r["o"])(e)||Object(r["B"])(e)){for(let i=0,o=t.options.length;i<o;i++){const o=t.options[i],s=To(o);if(n)Object(r["o"])(e)?o.selected=Object(r["G"])(e,s)>-1:o.selected=e.has(s);else if(Object(r["F"])(To(o),e))return void(t.selectedIndex!==i&&(t.selectedIndex=i))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function To(t){return"_value"in t?t._value:t.value}function So(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const xo={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ko=(t,e)=>n=>{if(!("key"in n))return;const i=Object(r["l"])(n.key);return e.some(t=>t===i||xo[t]===i)?t(n):void 0};const Ao=Object(r["h"])({patchProp:Wi},Ii);let Co;function jo(){return Co||(Co=Tn(Ao))}const Ro=(...t)=>{const e=jo().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=No(t);if(!i)return;const o=e._component;Object(r["p"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function No(t){if(Object(r["D"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=s.length;while(t--)delete w[d][s[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:o(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("5e77"),s=n("1626"),a=n("9ed3"),c=n("e163"),u=n("d2bb"),l=n("d44e"),h=n("9112"),f=n("6eeb"),d=n("b622"),p=n("3f8c"),g=n("ae93"),m=o.PROPER,v=o.CONFIGURABLE,y=g.IteratorPrototype,b=g.BUGGY_SAFARI_ITERATORS,w=d("iterator"),_="keys",E="values",I="entries",O=function(){return this};t.exports=function(t,e,n,o,d,g,T){a(n,e,o);var S,x,k,A=function(t){if(t===d&&P)return P;if(!b&&t in R)return R[t];switch(t){case _:return function(){return new n(this,t)};case E:return function(){return new n(this,t)};case I:return function(){return new n(this,t)}}return function(){return new n(this)}},C=e+" Iterator",j=!1,R=t.prototype,N=R[w]||R["@@iterator"]||d&&R[d],P=!b&&N||A(d),D="Array"==e&&R.entries||N;if(D&&(S=c(D.call(new t)),S!==Object.prototype&&S.next&&(i||c(S)===y||(u?u(S,y):s(S[w])||f(S,w,O)),l(S,C,!0,!0),i&&(p[C]=O))),m&&d==E&&N&&N.name!==E&&(!i&&v?h(R,"name",E):(j=!0,P=function(){return N.call(this)})),d)if(x={values:A(E),keys:g?P:A(_),entries:A(I)},T)for(k in x)(b||j||!(k in R))&&f(R,k,x[k]);else r({target:e,proto:!0,forced:b||j},x);return i&&!T||R[w]===P||f(R,w,P,{name:d}),p[e]=P,x}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;t.exports=i(s)&&/native code/.test(o(s))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"857a":function(t,e,n){var r=n("1d80"),i=n("577e"),o=/"/g;t.exports=function(t,e,n,s){var a=i(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+i(s).replace(o,"&quot;")+'"'),c+">"+a+"</"+e+">"}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"===typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("1626"),i=n("c6cd"),o=Function.toString;r(i.inspectSource)||(i.inspectSource=function(t){return o.call(t)}),t.exports=i.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return kr})),n.d(e,"b",(function(){return Cr})),n.d(e,"c",(function(){return Ar})),n.d(e,"d",(function(){return Rr})),n.d(e,"e",(function(){return jr})),n.d(e,"f",(function(){return Nr})),n.d(e,"g",(function(){return Pr})),n.d(e,"h",(function(){return Sr})),n.d(e,"i",(function(){return xr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},o={},s=s||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete _[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function O(t){t:{var e=$n;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function T(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function x(t){return/^[\s\xa0]*$/.test(t)}var k,A=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function C(t,e){return-1!=t.indexOf(e)}function j(t,e){return t<e?-1:t>e?1:0}t:{var R=a.navigator;if(R){var N=R.userAgent;if(N){k=N;break t}}k=""}function P(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function D(t){const e={};for(const n in t)e[n]=t[n];return e}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){return U[" "](t),t}function F(t){var e=Y;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}U[" "]=c;var V,B=C(k,"Opera"),$=C(k,"Trident")||C(k,"MSIE"),q=C(k,"Edge"),z=q||$,G=C(k,"Gecko")&&!(C(k.toLowerCase(),"webkit")&&!C(k,"Edge"))&&!(C(k,"Trident")||C(k,"MSIE"))&&!C(k,"Edge"),H=C(k.toLowerCase(),"webkit")&&!C(k,"Edge");function K(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",J=function(){var t=k;return G?/rv:([^\);]+)(\)|;)/.exec(t):q?/Edge\/([\d\.]+)/.exec(t):$?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(J&&(W=J?J[1]:""),$){var X=K();if(null!=X&&X>parseFloat(W)){V=String(X);break t}}V=W}var Q,Y={};function Z(){return F((function(){let t=0;const e=A(String(V)).split("."),n=A("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=j(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||j(0==i[2].length,0==o[2].length)||j(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(a.document&&$){var tt=K();Q=tt||(parseInt(V,10)||void 0)}else Q=void 0;var et=Q,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{U(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ot[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},y(it,rt);var ot={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=E(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=ft(t,e,r,i);return-1<s?(e=t[s],n||(e.fa=!1)):(e=new ct(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)gt(t,e[o],n,r,i);return null}return n=Tt(n),t&&t[st]?t.N(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=l(i)?!!i.capture:!!i,a=It(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=vt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);return null}return n=Tt(n),t&&t[st]?t.O(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)bt(t,e[o],n,r,i);else r=l(r)?!!r.capture:!!r,n=Tt(n),t&&t[st]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=ft(o,n,r,i),-1<n&&(ut(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[st])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):ut(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function It(t){return t=t[dt],t instanceof lt?t:null}var Ot="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"===typeof t?t:(t[Ot]||(t[Ot]=function(e){return t.handleEvent(e)}),t[Ot])}function St(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function xt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),M(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=kt(s,r,!0,e)&&i}if(s=e.g=t,i=kt(s,r,!0,e)&&i,i=kt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=kt(s,r,!1,e)&&i}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,c=s.ia||s.src;s.fa&&ht(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(St,b),St.prototype[st]=!0,St.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=a.JSON.stringify;function Ct(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jt{constructor(){this.h=this.g=null}add(t,e){const n=Nt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Nt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Pt,t=>t.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Dt(t){a.setTimeout(()=>{throw t},0)}function Lt(t,e){Rt||Mt(),Ut||(Rt(),Ut=!0),Ft.add(t,e)}function Mt(){var t=a.Promise.resolve(void 0);Rt=function(){t.then(Vt)}}var Ut=!1,Ft=new jt;function Vt(){for(var t;t=Ct();){try{t.h.call(t.g)}catch(n){Dt(n)}var e=Nt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function Bt(t,e){St.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function $t(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function qt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function zt(t){t.g=qt(()=>{t.g=null,t.i&&(t.i=!1,zt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y(Bt,St),r=Bt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xt(this,"tick"),this.da&&($t(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.Z.M.call(this),$t(this),delete this.g};class Gt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){b.call(this),this.h=t,this.g={}}y(Ht,b);var Kt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var i=0;i<n.length;i++){var o=gt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Jt(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Qt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Yt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return At(n)}catch(a){return e}}Ht.prototype.M=function(){Ht.Z.M.call(this),Jt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new St}function oe(t){rt.call(this,ne.Ma,t)}function se(t){const e=ie();xt(e,new oe(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();xt(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",y(oe,rt),ne.STAT_EVENT="statevent",y(ae,rt),ne.Na="timingevent",y(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}de.prototype.h=null;var me,ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ye(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ht(this),this.P=Ie,t=z?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}y(ye,rt),y(be,rt),y(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Ie=45e3,Oe={},Te={};function Se(t,e,n){t.K=1,t.v=Qe(Ge(e)),t.s=n,t.U=!0,xe(t,null)}function xe(t,e){t.F=Date.now(),je(t),t.A=Ge(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?D(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),se(1),Qt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ae(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Ce(t,n),r==Te){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Oe){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Le(t,r)}ke(t)&&r!=Te&&r!=Oe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),De(t),Pe(t))}function Ce(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Te:(n=Number(e.substring(n,r)),isNaN(n)?Oe:(r+=1,r+n>e.length?Te:(e=e.substr(r,n),t.C=r+n,e)))}function je(t){t.Y=Date.now()+t.P,Re(t,t.P)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function Ne(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Pe(t){0==t.l.G||t.I||pr(t.l,t)}function De(t){Ne(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,$t(t.W),Jt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Le(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||_n(n.i,t)))if(n.I=t.N,!t.J&&_n(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;dr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&dr(n),!x(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.i;!o.g&&(C(t,"spdy")||C(t,"quic")||C(t,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(En(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=t;if(r.oa=yr(r,r.H?r.la:null,r.W),s.J){In(r.i,s);var a=s,c=r.K;c&&a.setTimeout(c),a.B&&(Ne(a),je(a)),r.g=s}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}se(4)}catch(u){}}function Me(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Me(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Fe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Fe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ve(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Be(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Be(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=_e.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Wn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(3!=h||z||this.g&&(this.h.h||this.g.ga()||Jn(this.g)))){this.I||4!=h||7==e||se(8==e||0>=f?3:2),Ne(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var r=Jn(this.g);t="";var i=r.length,o=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){De(this),Pe(this);var s="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),De(this),Pe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Le(this,n)}this.U?(Ae(this,h,s),z&&this.i&&3==h&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,s,null),Le(this,s)),4==h&&De(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,je(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),De(this),Pe(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(Ne(this),Ae(this,t,e),this.i&&4!=t&&je(this))}},r.cancel=function(){this.I=!0,De(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(se(3),ce(17)),De(this),this.o=2,Pe(this)):Re(this,this.Y-t)},r=Fe.prototype,r.R=function(){Ve(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ve(this),this.g.concat()},r.get=function(t,e){return Be(this.h,t)?this.h[t]:e},r.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};var $e=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ze(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ze){this.g=void 0!==e?e:t.g,He(this,t.j),this.s=t.s,Ke(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Fe(e.g),n.h=e.h),Je(this,n),this.o=t.o}else t&&(n=String(t).match($e))?(this.g=!!e,He(this,n[1]||"",!0),this.s=tn(n[2]||""),Ke(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Je(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function Ge(t){return new ze(t)}function He(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ke(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Je(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Qe(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ye(t){return t instanceof ze?Ge(t):new ze(t,void 0)}function Ze(t,e,n,r){var i=new ze(null,void 0);return t&&He(i,t),e&&Ke(i,e),n&&We(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?sn:on,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,on=/[#\?:]/g,sn=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Fe,t.h=0,t.i&&qe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ve(t)))}function fn(t,e){return ln(t),e=pn(t,e),Be(t.g.h,e)}function dn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),S(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),dn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){I(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=T(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=T(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function vn(t){this.l=t||yn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function _n(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function On(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function Tn(){}function Sn(){this.g=new Tn}function xn(t,e,n){const r=n||"";try{Ue(t,(function(t,n){let i=t;l(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function kn(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=v(An,n,r,"TestLoadImage: loaded",!0,e),r.onerror=v(An,n,r,"TestLoadImage: error",!1,e),r.onabort=v(An,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=v(An,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function An(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function Cn(t){this.l=t.$b||null,this.j=t.ib||!1}function jn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=On(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Tn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Tn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(Cn,de),Cn.prototype.g=function(){return new jn(this.l,this.j)},Cn.prototype.i=function(t){return function(){return t}}({}),y(jn,St);var Rn=0;function Nn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Pn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dn(t)}function Dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=jn.prototype,r.open=function(t,e){if(this.readyState!=Rn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Rn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pn(this):Dn(this),3==this.readyState&&Nn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Pn(this))},r.Ta=function(t){this.g&&(this.response=t,Pn(this))},r.ha=function(){this.g&&Pn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ln=a.JSON.parse;function Mn(t){St.call(this),this.headers=new Fe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Un,this.K=this.L=!1}y(Mn,St);var Un="",Fn=/^https?$/i,Vn=["POST","PUT"];function Bn(t){return $&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function $n(t){return"content-type"==t.toLowerCase()}function qn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zn(t),Hn(t)}function zn(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof s&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))qt(t.Fa,0,t);else if(xt(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const s=t.ba();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){var i=String(t.H).match($e)[1]||null;if(!i&&a.self&&a.self.location){var o=a.self.location.protocol;i=o.substr(0,o.length-1)}r=!Fn.test(i?i.toLowerCase():"")}n=r}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",zn(t)}}finally{Hn(t)}}}function Hn(t,e){if(t.g){Kn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||xt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Kn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Qn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Yn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yn("baseRetryDelayMs",5e3,t),this.$a=Yn("retryDelaySeedMs",1e4,t),this.Ya=Yn("forwardChannelMaxRetries",2,t),this.ra=Yn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(t&&t.concurrentRequestLimit),this.Ca=new Sn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=Ge(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new _e(t,t.h,e,void 0),e.K=2,e.v=Qe(Ge(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),je(e)}vr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),dr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Lt(t.Ha,t),t.C=0)}function or(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function sr(t,e){var n;n=e?e.m:t.V++;const r=Ge(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Qn(r,t.o,t.s),n=new _e(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),Se(n,r,e)}function ar(t,e){t.j&&Ue({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),s=!1;else try{xn(c,t,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Lt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new _e(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Qn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qe(Ge(e)),n.s=null,n.U=!0,xe(n,t)}function dr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){dr(t),hr(t),t.g=null;var r=2}else{if(!_n(t.i,e))return;n=e.D,In(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),xt(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&or(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new ze("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||He(n,"https"),Qe(n)),kn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),vr(t),nr(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==On(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function yr(t,e,n){let r=Ye(n);if(""!=r.i)e&&Ke(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&P(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Mn(new Cn({ib:!0})):new Mn(t.qa),e.L=t.H,e}function wr(){}function _r(){if($&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Er(t,e){St.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!x(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!x(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Tr(this)}function Ir(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Or(){be.call(this),this.status=1}function Tr(t){this.g=t}r=Mn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void qn(this,o)}t=n||"";const i=new Fe(this.headers);r&&Ue(r,(function(t,e){i.set(e,t)})),r=O(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=E(Vn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=qt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){qn(this,o)}},r.pa=function(){"undefined"!=typeof s&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),Hn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},r.cb=function(){Gn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ln(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new _e(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?(o=D(o),M(o,this.P)):o=this.P),null===this.o&&(i.H=o),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=Ge(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&o&&Qn(n,this.o,o),En(this.i,i),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),i.$=!0,Se(i,n,null)):Se(i,n,e),this.G=2}}else 3==this.G&&(t?sr(this,t):0==this.l.length||bn(this.i)||sr(this))},r.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),fr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(t,e){return new Er(t,e)},y(Er,St),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Lt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=yr(t,null,t.W),ir(t)},Er.prototype.close=function(){tr(this.g)},Er.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=At(t),rr(this.g,e)):rr(this.g,t)},Er.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Er.Z.M.call(this)},y(Ir,ye),y(Or,be),y(Tr,wr),Tr.prototype.xa=function(){xt(this.g,"a")},Tr.prototype.wa=function(t){xt(this.g,new Ir(t))},Tr.prototype.va=function(t){xt(this.g,new Or(t))},Tr.prototype.ua=function(){xt(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",ge.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",St.prototype.listen=St.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Sr=o.createWebChannelTransport=function(){return new _r},xr=o.getStatEventTarget=function(){return ie()},kr=o.ErrorCode=he,Ar=o.EventType=fe,Cr=o.Event=ne,jr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Rr=o.FetchXmlHttpFactory=Cn,Nr=o.WebChannel=ge,Pr=o.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("577e"),i=n("ad6d"),o=n("9f7f"),s=n("5692"),a=n("7c73"),c=n("69f3").get,u=n("fce3"),l=n("107c"),h=RegExp.prototype.exec,f=s("native-string-replace",String.prototype.replace),d=h,p=function(){var t=/a/,e=/b*/g;return h.call(t,"a"),h.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),g=o.UNSUPPORTED_Y||o.BROKEN_CARET,m=void 0!==/()??/.exec("")[1],v=p||m||g||u||l;v&&(d=function(t){var e,n,o,s,u,l,v,y=this,b=c(y),w=r(t),_=b.raw;if(_)return _.lastIndex=y.lastIndex,e=d.call(_,w),y.lastIndex=_.lastIndex,e;var E=b.groups,I=g&&y.sticky,O=i.call(y),T=y.source,S=0,x=w;if(I&&(O=O.replace("y",""),-1===O.indexOf("g")&&(O+="g"),x=w.slice(y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==w.charAt(y.lastIndex-1))&&(T="(?: "+T+")",x=" "+x,S++),n=new RegExp("^(?:"+T+")",O)),m&&(n=new RegExp("^"+T+"$(?!\\s)",O)),p&&(o=y.lastIndex),s=h.call(I?n:y,x),I?s?(s.input=s.input.slice(S),s[0]=s[0].slice(S),s.index=y.lastIndex,y.lastIndex+=s[0].length):y.lastIndex=0:p&&s&&(y.lastIndex=y.global?s.index+s[0].length:o),m&&s&&s.length>1&&f.call(s[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)})),s&&E)for(s.groups=l=a(null),u=0;u<E.length;u++)v=E[u],l[v[0]]=s[v[1]];return s}),t.exports=d},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),s=new A(r||[]);return o._invoke=T(t,n,s),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",g={};function m(){}function v(){}function y(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(C([])));_&&_!==n&&r.call(_,o)&&(b=_);var E=y.prototype=m.prototype=Object.create(b);function I(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,o,s,a){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,a)}),(function(t){n("throw",t,s,a)})):e.resolve(h).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,a)}))}a(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function T(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return j()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=S(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function C(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=y,c(E,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},I(O.prototype),c(O.prototype,s,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var s=new O(u(e,n,r,i),o);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},I(E),c(E,a,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9911:function(t,e,n){"use strict";var r=n("23e7"),i=n("857a"),o=n("af03");r({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),s=n("861d"),a=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),h=n("1dde"),f=n("b622"),d=n("2d00"),p=f("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",v=d>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=h("concat"),b=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},w=!v||!y;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,i,o,s=a(this),h=l(s,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],b(o)){if(i=c(o.length),f+i>g)throw TypeError(m);for(n=0;n<i;n++,f++)n in o&&u(h,f,o[n])}else{if(f>=g)throw TypeError(m);u(h,f++,o)}return h.length=f,h}})},"9a1f":function(t,e,n){var r=n("59ed"),i=n("825a"),o=n("35a1");t.exports=function(t,e){var n=arguments.length<2?o(t):e;if(r(n))return i(n.call(t));throw TypeError(String(t)+" is not iterable")}},"9ab4":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return c}));function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function i(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{c(r.next(t))}catch(e){o(e)}}function a(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function o(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return c([t,e])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function s(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function c(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=s(e),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9dbb":function(t,e,n){(function(t,n){n(e)})(0,(function(t){"use strict";function e(t){return Array.prototype.slice.call(t)}function n(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function r(t,e,r){var i,o=new Promise((function(o,s){i=t[e].apply(t,r),n(i).then(o,s)}));return o.request=i,o}function i(t,e,n){var i=r(t,e,n);return i.then((function(t){if(t)return new l(t,i.request)}))}function o(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function s(t,e,n,i){i.forEach((function(i){i in n.prototype&&(t.prototype[i]=function(){return r(this[e],i,arguments)})}))}function a(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function c(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return i(this[e],r,arguments)})}))}function u(t){this._index=t}function l(t,e){this._cursor=t,this._request=e}function h(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function d(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new f(n)}function p(t){this._db=t}function g(t,e,n){var i=r(indexedDB,"open",[t,e]),o=i.request;return o&&(o.onupgradeneeded=function(t){n&&n(new d(o.result,t.oldVersion,o.transaction))}),i.then((function(t){return new p(t)}))}function m(t){return r(indexedDB,"deleteDatabase",[t])}o(u,"_index",["name","keyPath","multiEntry","unique"]),s(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(l,"_cursor",["direction","key","primaryKey","value"]),s(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(l.prototype[t]=function(){var e=this,r=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,r),n(e._request).then((function(t){if(t)return new l(t,e._request)}))}))})})),h.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},o(h,"_store",["name","keyPath","indexNames","autoIncrement"]),s(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},o(f,"_tx",["objectStoreNames","mode"]),a(f,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},o(d,"_db",["name","version","objectStoreNames"]),a(d,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},o(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[h,u].forEach((function(n){t in n.prototype&&(n.prototype[t.replace("open","iterate")]=function(){var n=e(arguments),r=n[n.length-1],i=this._store||this._index,o=i[t].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[u,h].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise((function(i){n.iterateCursor(t,(function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)}))}))})})),t.openDb=g,t.deleteDb=m,Object.defineProperty(t,"__esModule",{value:!0})}))},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),s(t,u,!1,!0),a[u]=c,t}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return I})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return Q})),n.d(e,"f",(function(){return tt})),n.d(e,"g",(function(){return it})),n.d(e,"h",(function(){return C})),n.d(e,"i",(function(){return at})),n.d(e,"j",(function(){return nt})),n.d(e,"k",(function(){return N})),n.d(e,"l",(function(){return Z})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return rt})),n.d(e,"o",(function(){return P})),n.d(e,"p",(function(){return U})),n.d(e,"q",(function(){return o})),n.d(e,"r",(function(){return m})),n.d(e,"s",(function(){return K})),n.d(e,"t",(function(){return D})),n.d(e,"u",(function(){return A})),n.d(e,"v",(function(){return B})),n.d(e,"w",(function(){return k})),n.d(e,"x",(function(){return H})),n.d(e,"y",(function(){return $})),n.d(e,"z",(function(){return W})),n.d(e,"A",(function(){return v})),n.d(e,"B",(function(){return L})),n.d(e,"C",(function(){return a})),n.d(e,"D",(function(){return F})),n.d(e,"E",(function(){return V})),n.d(e,"F",(function(){return b})),n.d(e,"G",(function(){return w})),n.d(e,"H",(function(){return r})),n.d(e,"I",(function(){return d})),n.d(e,"J",(function(){return u})),n.d(e,"K",(function(){return j})),n.d(e,"L",(function(){return _})),n.d(e,"M",(function(){return et})),n.d(e,"N",(function(){return ot})),n.d(e,"O",(function(){return G}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(t){return!!t||""===t}function u(t){if(P(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=F(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return F(t)||B(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(F(t))e=t;else if(P(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),v=r(g);function y(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=M(t),r=M(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=P(t),r=P(e),n||r)return!(!n||!r)&&y(t,e);if(n=B(t),r=B(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function w(t,e){return t.findIndex(t=>b(t,e))}const _=t=>null==t?"":P(t)||B(t)&&(t.toString===q||!U(t.toString))?JSON.stringify(t,E,2):String(t),E=(t,e)=>e&&e.__v_isRef?E(t,e.value):D(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:L(e)?{[`Set(${e.size})`]:[...e.values()]}:!B(e)||P(e)||H(e)?e:String(e),I={},O=[],T=()=>{},S=()=>!1,x=/^on[^a-z]/,k=t=>x.test(t),A=t=>t.startsWith("onUpdate:"),C=Object.assign,j=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},R=Object.prototype.hasOwnProperty,N=(t,e)=>R.call(t,e),P=Array.isArray,D=t=>"[object Map]"===z(t),L=t=>"[object Set]"===z(t),M=t=>t instanceof Date,U=t=>"function"===typeof t,F=t=>"string"===typeof t,V=t=>"symbol"===typeof t,B=t=>null!==t&&"object"===typeof t,$=t=>B(t)&&U(t.then)&&U(t.catch),q=Object.prototype.toString,z=t=>q.call(t),G=t=>z(t).slice(8,-1),H=t=>"[object Object]"===z(t),K=t=>F(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,W=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},X=/-(\w)/g,Q=J(t=>t.replace(X,(t,e)=>e?e.toUpperCase():"")),Y=/\B([A-Z])/g,Z=J(t=>t.replace(Y,"-$1").toLowerCase()),tt=J(t=>t.charAt(0).toUpperCase()+t.slice(1)),et=J(t=>t?"on"+tt(t):""),nt=(t,e)=>!Object.is(t,e),rt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},it=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ot=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let st;const at=()=>st||(st="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),s=n("50c4"),a=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),h=l("splice"),f=Math.max,d=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var n,r,l,h,m,v,y=a(this),b=s(y.length),w=i(t,b),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=b-w):(n=_-2,r=d(f(o(e),0),b-w)),b+n-r>p)throw TypeError(g);for(l=c(y,r),h=0;h<r;h++)m=w+h,m in y&&u(l,h,y[m]);if(l.length=r,n<r){for(h=w;h<b-r;h++)m=h+r,v=h+n,m in y?y[v]=y[m]:delete y[v];for(h=b;h>b-r+n;h--)delete y[h-1]}else if(n>r)for(h=b-r;h>w;h--)m=h+r-1,v=h+n-1,m in y?y[v]=y[m]:delete y[v];for(h=0;h<n;h++)y[h+w]=arguments[h+2];return y.length=b-r+n,l}})},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),f=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(o)){var d=a("Promise").prototype["finally"];o.prototype["finally"]!==d&&h(o.prototype,"finally",d,{unsafe:!0})}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("5135"),c=n("c6b6"),u=n("7156"),l=n("d9b5"),h=n("c04e"),f=n("d039"),d=n("7c73"),p=n("241c").f,g=n("06cf").f,m=n("9bf2").f,v=n("58a8").trim,y="Number",b=i[y],w=b.prototype,_=c(d(w))==y,E=function(t){if(l(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,i,o,s,a,c,u=h(t,"number");if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=u.slice(2),s=o.length,a=0;a<s;a++)if(c=o.charCodeAt(a),c<48||c>i)return NaN;return parseInt(o,r)}return+u};if(o(y,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var I,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(_?f((function(){w.valueOf.call(n)})):c(n)!=y)?u(new b(E(e)),n,O):E(e)},T=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;T.length>S;S++)a(b,I=T[S])&&!a(O,I)&&m(O,I,g(b,I));O.prototype=w,w.constructor=O,s(i,y,O)}},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},abc5:function(t,e,n){"use strict";(function(t){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},addb:function(t,e){var n=Math.floor,r=function(t,e){var s=t.length,a=n(s/2);return s<8?i(t,e):o(r(t.slice(0,a),e),r(t.slice(a),e),e)},i=function(t,e){var n,r,i=t.length,o=1;while(o<i){r=o,n=t[o];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==o++&&(t[r]=n)}return t},o=function(t,e,n){var r=t.length,i=e.length,o=0,s=0,a=[];while(o<r||s<i)o<r&&s<i?a.push(n(t[o],e[s])<=0?t[o++]:e[s++]):a.push(o<r?t[o++]:e[s++]);return a};t.exports=r},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},ae93:function(t,e,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),f=n("c430"),d=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||s((function(){var t={};return r[d].call(t)!==t}));g?r={}:f&&(r=c(r)),a(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("9bf2").f,s=Function.prototype,a=s.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!i&&o(s,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,o,s,a,c,u,l,h=n("da84"),f=n("06cf").f,d=n("2cf4").set,p=n("1cdc"),g=n("d4c3"),m=n("a4b4"),v=n("605d"),y=h.MutationObserver||h.WebKitMutationObserver,b=h.document,w=h.process,_=h.Promise,E=f(h,"queueMicrotask"),I=E&&E.value;I||(r=function(){var t,e;v&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?s():o=void 0,n}}o=void 0,t&&t.enter()},p||v||m||!y||!b?!g&&_&&_.resolve?(u=_.resolve(void 0),u.constructor=_,l=u.then,s=function(){l.call(u,r)}):s=v?function(){w.nextTick(r)}:function(){d.call(h,r)}:(a=!0,c=b.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),t.exports=I||function(t){var e={fn:t,next:void 0};o&&(o.next=e),i||(i=e,s()),o=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;t.exports=function(t){return o(u,t)&&(a||"string"==typeof u[t])||(a&&o(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},b680:function(t,e,n){"use strict";var r=n("23e7"),i=n("a691"),o=n("408a"),s=n("1148"),a=n("d039"),c=1..toFixed,u=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},h=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},f=function(t,e,n){var r=-1,i=n;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=u(i/1e7)},d=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=u(r/e),r=r%e*1e7},p=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=String(t[e]);n=""===n?r:n+s.call("0",7-r.length)+r}return n},g=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}));r({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,n,r,a,c=o(this),u=i(t),g=[0,0,0,0,0,0],m="",v="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=h(c*l(2,69,1))-69,n=e<0?c*l(2,-e,1):c/l(2,e,1),n*=4503599627370496,e=52-e,e>0){f(g,0,n),r=u;while(r>=7)f(g,1e7,0),r-=7;f(g,l(10,r,1),0),r=e-1;while(r>=23)d(g,1<<23),r-=23;d(g,1<<r),f(g,1,1),d(g,2),v=p(g)}else f(g,0,n),f(g,1<<-e,0),v=p(g)+s.call("0",u);return u>0?(a=v.length,v=m+(a<=u?"0."+s.call("0",u-a)+v:v.slice(0,a-u)+"."+v.slice(a-u))):v=m+v,v}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,g,m,v){for(var y,b,w=o(p),_=i(w),E=r(g,m,3),I=s(_.length),O=0,T=v||a,S=e?T(p,I):n||f?T(p,0):void 0;I>O;O++)if((d||O in _)&&(y=_[O],b=E(y,O,w),t))if(e)S[O]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:c.call(S,y)}else switch(t){case 4:return!1;case 7:c.call(S,y)}return h?-1:u||l?l:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b774:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));const r="devtools-plugin:setup",i="plugin:settings:set"},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),o=n("dc4a"),s=n("485a"),a=n("b622"),c=a("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,a=o(t,c);if(a){if(void 0===e&&(e="default"),n=a.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),o=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},d0be:function(t,e,n){(function(e,n){t.exports=n()})("undefined"!==typeof self&&self,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},"06cf":function(t,e,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=a(e),u)try{return l(t,e)}catch(n){}if(c(t,e))return o(!i.f.call(t,e),t[e])}},"0b42":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),s=o("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?r(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"0cb2":function(t,e,n){var r=n("7b0b"),i=Math.floor,o="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,l){var h=n+t.length,f=c.length,d=a;return void 0!==u&&(u=r(u),d=s),o.call(l,d,(function(r,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(h);case"<":s=u[o.slice(1,-1)];break;default:var a=+o;if(0===a)return r;if(a>f){var l=i(a/10);return 0===l?r:l<=f?void 0===c[l-1]?o.charAt(1):c[l-1]+o.charAt(1):r}s=c[a-1]}return void 0===s?"":s}))}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"23cb":function(t,e,n){var r=n("a691"),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d===typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("577e"),s=n("d039"),a=n("ad6d"),c="toString",u=RegExp.prototype,l=u[c],h=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=c;(h||f)&&r(RegExp.prototype,c,(function(){var t=i(this),e=o(t.source),n=t.flags,r=o(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"2d00":function(t,e,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),t.exports=i&&+i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");t.exports=r?Object.defineProperties:function(t,e){o(t);var n,r=s(e),a=r.length,c=0;while(a>c)i.f(t,n=r[c++],e[n]);return t}},"44ad":function(t,e,n){var r=n("d039"),i=n("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"466d":function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),o=n("50c4"),s=n("577e"),a=n("1d80"),c=n("8aa5"),u=n("14c3");r("match",(function(t,e,n){return[function(e){var n=a(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](s(n))},function(t){var r=i(this),a=s(t),l=n(e,r,a);if(l.done)return l.value;if(!r.global)return u(r,a);var h=r.unicode;r.lastIndex=0;var f,d=[],p=0;while(null!==(f=u(r,a))){var g=s(f[0]);d[p]=g,""===g&&(r.lastIndex=c(a,o(r.lastIndex),h)),p++}return 0===p?null:d}]}))},"485a":function(t,e,n){var r=n("861d");t.exports=function(t,e){var n,i;if("string"===e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"50c4":function(t,e,n){var r=n("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5135:function(t,e,n){var r=n("7b0b"),i={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return i.call(r(t),e)}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("d039"),o=n("825a"),s=n("a691"),a=n("50c4"),c=n("577e"),u=n("1d80"),l=n("8aa5"),h=n("0cb2"),f=n("14c3"),d=n("b622"),p=d("replace"),g=Math.max,m=Math.min,v=function(t){return void 0===t?t:String(t)},y=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),w=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=b?"$":"$0";return[function(t,n){var r=u(this),i=void 0==t?void 0:t[p];return void 0!==i?i.call(t,r,n):e.call(c(r),t,n)},function(t,i){var u=o(this),d=c(t);if("string"===typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var p=n(e,u,d,i);if(p.done)return p.value}var y="function"===typeof i;y||(i=c(i));var b=u.global;if(b){var w=u.unicode;u.lastIndex=0}var _=[];while(1){var E=f(u,d);if(null===E)break;if(_.push(E),!b)break;var I=c(E[0]);""===I&&(u.lastIndex=l(d,a(u.lastIndex),w))}for(var O="",T=0,S=0;S<_.length;S++){E=_[S];for(var x=c(E[0]),k=g(m(s(E.index),d.length),0),A=[],C=1;C<E.length;C++)A.push(v(E[C]));var j=E.groups;if(y){var R=[x].concat(A,k,d);void 0!==j&&R.push(j);var N=c(i.apply(void 0,R))}else N=h(x,d,k,A,j,i);k>=T&&(O+=d.slice(T,k)+N,T=k+x.length)}return O+d.slice(T)}]}),!w||!y||b)},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},"577e":function(t,e,n){var r=n("d9b5");t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6547:function(t,e,n){var r=n("a691"),i=n("577e"),o=n("1d80"),s=function(t){return function(e,n){var s,a,c=i(o(e)),u=r(n),l=c.length;return u<0||u>=l?t?"":void 0:(s=c.charCodeAt(u),s<55296||s>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):s:t?c.slice(u,u+2):a-56320+(s-55296<<10)+65536)}};t.exports={codeAt:s(!1),charAt:s(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"69f3":function(t,e,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),f=n("f772"),d=n("d012"),p="Object already initialized",g=a.WeakMap,m=function(t){return o(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var y=h.state||(h.state=new g),b=y.get,w=y.has,_=y.set;r=function(t,e){if(w.call(y,t))throw new TypeError(p);return e.facade=t,_.call(y,t,e),e},i=function(t){return b.call(y,t)||{}},o=function(t){return w.call(y,t)}}else{var E=f("state");d[E]=!0,r=function(t,e){if(l(t,E))throw new TypeError(p);return e.facade=t,u(t,E,e),e},i=function(t){return l(t,E)?t[E]:{}},o=function(t){return l(t,E)}}t.exports={set:r,get:i,has:o,enforce:m,getterFor:v}},"6eeb":function(t,e,n){var r=n("da84"),i=n("9112"),o=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,h=String(String).split("String");(t.exports=function(t,e,n,a){var c,u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||i(n,"name",e),c=l(n),c.source||(c.source=h.join("string"==typeof e?e:""))),t!==r?(u?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=s.length;while(t--)delete w[d][s[t]];return w()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=w(),void 0===e?n:o(n,e)}},"7f9a":function(t,e,n){var r=n("da84"),i=n("8925"),o=r.WeakMap;t.exports="function"===typeof o&&/native code/.test(i(o))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8875:function(t,e,n){var r,i,o;(function(n,s){i=[],r=s,o="function"===typeof r?r.apply(e,i):r,void 0===o||(t.exports=o)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(h){var t,e,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,i=/@([^@]*):(\d+):(\d+)\s*$/gi,o=r.exec(h.stack)||i.exec(h.stack),s=o&&o[1]||!1,a=o&&o[2]||!1,c=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");s===c&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(a-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=t.replace(e,"$1").trim());for(var l=0;l<u.length;l++){if("interactive"===u[l].readyState)return u[l];if(u[l].src===s)return u[l];if(s===c&&u[l].innerHTML&&u[l].innerHTML.trim()===n)return u[l]}return null}}return t}))},8925:function(t,e,n){var r=n("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("577e"),i=n("ad6d"),o=n("9f7f"),s=n("5692"),a=n("7c73"),c=n("69f3").get,u=n("fce3"),l=n("107c"),h=RegExp.prototype.exec,f=s("native-string-replace",String.prototype.replace),d=h,p=function(){var t=/a/,e=/b*/g;return h.call(t,"a"),h.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),g=o.UNSUPPORTED_Y||o.BROKEN_CARET,m=void 0!==/()??/.exec("")[1],v=p||m||g||u||l;v&&(d=function(t){var e,n,o,s,u,l,v,y=this,b=c(y),w=r(t),_=b.raw;if(_)return _.lastIndex=y.lastIndex,e=d.call(_,w),y.lastIndex=_.lastIndex,e;var E=b.groups,I=g&&y.sticky,O=i.call(y),T=y.source,S=0,x=w;if(I&&(O=O.replace("y",""),-1===O.indexOf("g")&&(O+="g"),x=w.slice(y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==w.charAt(y.lastIndex-1))&&(T="(?: "+T+")",x=" "+x,S++),n=new RegExp("^(?:"+T+")",O)),m&&(n=new RegExp("^"+T+"$(?!\\s)",O)),p&&(o=y.lastIndex),s=h.call(I?n:y,x),I?s?(s.input=s.input.slice(S),s[0]=s[0].slice(S),s.index=y.lastIndex,y.lastIndex+=s[0].length):y.lastIndex=0:p&&s&&(y.lastIndex=y.global?s.index+s[0].length:o),m&&s&&s.length>1&&f.call(s[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)})),s&&E)for(s.groups=l=a(null),u=0;u<E.length;u++)v=E[u],l[v[0]]=s[v[1]];return s}),t.exports=d},"94ca":function(t,e,n){var r=n("d039"),i=/#|\.prototype\./,o=function(t,e){var n=a[s(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},s=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},"9bf2":function(t,e,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=s(e),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:String(e)}},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),s=n("50c4"),a=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),h=l("splice"),f=Math.max,d=Math.min,p=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var n,r,l,h,m,v,y=a(this),b=s(y.length),w=i(t,b),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=b-w):(n=_-2,r=d(f(o(e),0),b-w)),b+n-r>p)throw TypeError(g);for(l=c(y,r),h=0;h<r;h++)m=w+h,m in y&&u(l,h,y[m]);if(l.length=r,n<r){for(h=w;h<b-r;h++)m=h+r,v=h+n,m in y?y[v]=y[m]:delete y[v];for(h=b;h>b-r+n;h--)delete y[h-1]}else if(n>r)for(h=b-r;h>w;h--)m=h+r-1,v=h+n-1,m in y?y[v]=y[m]:delete y[v];for(h=0;h<n;h++)y[h+w]=arguments[h+2];return y.length=b-r+n,l}})},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;t.exports=function(t){return o(u,t)&&(a||"string"==typeof u[t])||(a&&o(l,t)?u[t]=l[t]:u[t]=h("Symbol."+t)),u[t]}},c04e:function(t,e,n){var r=n("861d"),i=n("d9b5"),o=n("485a"),s=n("b622"),a=s("toPrimitive");t.exports=function(t,e){if(!r(t)||i(t))return t;var n,s=t[a];if(void 0!==s){if(void 0===e&&(e="default"),n=s.call(t,e),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),o(t,e)}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(e.length>c)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84");t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),o=n("d039"),s=n("b622"),a=n("9112"),c=s("species"),u=RegExp.prototype;t.exports=function(t,e,n,l){var h=s(t),f=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),d=f&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!f||!d||n){var p=/./[h],g=e(h,""[t],(function(t,e,n,r,o){var s=e.exec;return s===i||s===u.exec?f&&!o?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,g[0]),r(u,h,g[1])}l&&a(u[h],"sham",!0)}},d9b5:function(t,e,n){var r=n("d066"),i=n("fdbf");t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},e893:function(t,e,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f5df:function(t,e,n){var r=n("00ee"),i=n("c6b6"),o=n("b622"),s=o("toStringTag"),a="Arguments"==i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),s))?n:a?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fb15:function(t,e,n){"use strict";if(n.r(e),"undefined"!==typeof window){var r=window.document.currentScript,i=n("8875");r=i(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:i});var o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}n("d3b7"),n("25f0"),n("ac1f"),n("466d"),n("5319"),n("a434");var s={install:function(t){var e=window.navigator.userAgent,n={};function r(){var t,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],{name:"IE",version:t[1]||""}):"Chrome"===n[1]&&(t=e.match(/\b(OPR|Edge)\/(\d+)/),null!=t)?{name:t[1].replace("OPR","Opera"),version:t[2]}:(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=e.match(/version\/(\d+)/i))&&n.splice(1,1,t[1]),{name:n[0],version:n[1]})}n.isOpera=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,n.isEdge=/Edg/.test(navigator.userAgent),n.isFirefox=/Firefox/.test(navigator.userAgent),n.isSafari=/constructor/i.test(window.HTMLElement)||function(t){return"[object SafariRemoteNotification]"===t.toString()}(!window["safari"]||safari.pushNotification),n.isIE=!!document.documentMode,n.isChrome=/Google Inc/.test(navigator.vendor)&&!n.isEdge,n.isChromeIOS=/CriOS/.test(navigator.userAgent),n.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,n.isBrave="undefined"!==typeof navigator.brave,n.meta=r(),n.meta.ua=e,t.prototype.$browserDetect=n}},a=s;"undefined"!==typeof window&&window.Vue&&window.Vue.use(s);e["default"]=a},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})}))},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),i=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),o=n("d039"),s=n("b622"),a=n("9112"),c=s("species"),u=RegExp.prototype;t.exports=function(t,e,n,l){var h=s(t),f=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),d=f&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!f||!d||n){var p=/./[h],g=e(h,""[t],(function(t,e,n,r,o){var s=e.exec;return s===i||s===u.exec?f&&!o?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,g[0]),r(u,h,g[1])}l&&a(u[h],"sham",!0)}},d998:function(t,e,n){var r=n("342f");t.exports=/MSIE|Trident/.test(r)},d9b5:function(t,e,n){var r=n("1626"),i=n("d066"),o=n("fdbf");t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&Object(t)instanceof e}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=s.values,f=function(t,e){if(t){if(t[u]!==h)try{a(t,u,h)}catch(r){t[u]=h}if(t[l]||a(t,l,e),i[e])for(var n in s)if(t[n]!==s[n])try{a(t,n,s[n])}catch(r){t[n]=s[n]}}};for(var d in i)f(r[d]&&r[d].prototype,d);f(o,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),s="/"===o(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&s&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,s=t.length-1;s>=0;--s){var a=t.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===e?e=s:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=s+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("5135"),i=n("1626"),o=n("7b0b"),s=n("f772"),a=n("e177"),c=s("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof Object?u:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e6cf:function(t,e,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),f=n("6eeb"),d=n("e2cc"),p=n("d2bb"),g=n("d44e"),m=n("2626"),v=n("59ed"),y=n("1626"),b=n("861d"),w=n("19aa"),_=n("8925"),E=n("2266"),I=n("1c7e"),O=n("4840"),T=n("2cf4").set,S=n("b575"),x=n("cdf9"),k=n("44de"),A=n("f069"),C=n("e667"),j=n("69f3"),R=n("94ca"),N=n("b622"),P=n("6069"),D=n("605d"),L=n("2d00"),M=N("species"),U="Promise",F=j.get,V=j.set,B=j.getterFor(U),$=h&&h.prototype,q=h,z=$,G=u.TypeError,H=u.document,K=u.process,W=A.f,J=W,X=!!(H&&H.createEvent&&u.dispatchEvent),Q=y(u.PromiseRejectionEvent),Y="unhandledrejection",Z="rejectionhandled",tt=0,et=1,nt=2,rt=1,it=2,ot=!1,st=R(U,(function(){var t=_(q),e=t!==String(q);if(!e&&66===L)return!0;if(c&&!z["finally"])return!0;if(L>=51&&/native code/.test(t))return!1;var n=new q((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[M]=r,ot=n.then((function(){}))instanceof r,!ot||!e&&P&&!Q})),at=st||!I((function(t){q.all(t)["catch"]((function(){}))})),ct=function(t){var e;return!(!b(t)||!y(e=t.then))&&e},ut=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;S((function(){var r=t.value,i=t.state==et,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,h=u.resolve,f=u.reject,d=u.domain;try{l?(i||(t.rejection===it&&dt(t),t.rejection=rt),!0===l?s=r:(d&&d.enter(),s=l(r),d&&(d.exit(),c=!0)),s===u.promise?f(G("Promise-chain cycle")):(a=ct(s))?a.call(s,h,f):h(s)):f(r)}catch(p){d&&!c&&d.exit(),f(p)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ht(t)}))}},lt=function(t,e,n){var r,i;X?(r=H.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Q&&(i=u["on"+t])?i(r):t===Y&&k("Unhandled promise rejection",n)},ht=function(t){T.call(u,(function(){var e,n=t.facade,r=t.value,i=ft(t);if(i&&(e=C((function(){D?K.emit("unhandledRejection",r,n):lt(Y,n,r)})),t.rejection=D||ft(t)?it:rt,e.error))throw e.value}))},ft=function(t){return t.rejection!==rt&&!t.parent},dt=function(t){T.call(u,(function(){var e=t.facade;D?K.emit("rejectionHandled",e):lt(Z,e,t.value)}))},pt=function(t,e,n){return function(r){t(e,r,n)}},gt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=nt,ut(t,!0))},mt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw G("Promise can't be resolved itself");var r=ct(e);r?S((function(){var n={done:!1};try{r.call(e,pt(mt,n,t),pt(gt,n,t))}catch(i){gt(n,i,t)}})):(t.value=e,t.state=et,ut(t,!1))}catch(i){gt({done:!1},i,t)}}};if(st&&(q=function(t){w(this,q,U),v(t),r.call(this);var e=F(this);try{t(pt(mt,e),pt(gt,e))}catch(n){gt(e,n)}},z=q.prototype,r=function(t){V(this,{type:U,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:tt,value:void 0})},r.prototype=d(z,{then:function(t,e){var n=B(this),r=W(O(this,q));return r.ok=!y(t)||t,r.fail=y(e)&&e,r.domain=D?K.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=tt&&ut(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=F(t);this.promise=t,this.resolve=pt(mt,e),this.reject=pt(gt,e)},A.f=W=function(t){return t===q||t===o?new i(t):J(t)},!c&&y(h)&&$!==Object.prototype)){s=$.then,ot||(f($,"then",(function(t,e){var n=this;return new q((function(t,e){s.call(n,t,e)})).then(t,e)}),{unsafe:!0}),f($,"catch",z["catch"],{unsafe:!0}));try{delete $.constructor}catch(vt){}p&&p($,z)}a({global:!0,wrap:!0,forced:st},{Promise:q}),g(q,U,!1,!0),m(U),o=l(U),a({target:U,stat:!0,forced:st},{reject:function(t){var e=W(this);return e.reject.call(void 0,t),e.promise}}),a({target:U,stat:!0,forced:c||st},{resolve:function(t){return x(c&&this===o?q:this,t)}}),a({target:U,stat:!0,forced:at},{all:function(t){var e=this,n=W(e),r=n.resolve,i=n.reject,o=C((function(){var n=v(e.resolve),o=[],s=0,a=1;E(t,(function(t){var c=s++,u=!1;o.push(void 0),a++,n.call(e,t).then((function(t){u||(u=!0,o[c]=t,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(t){var e=this,n=W(e),r=n.reject,i=C((function(){var i=v(e.resolve);E(t,(function(t){i.call(e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]})),n.d(e,"g",(function(){return r["g"]})),n.d(e,"h",(function(){return r["h"]})),n.d(e,"i",(function(){return r["i"]})),n.d(e,"j",(function(){return r["j"]})),n.d(e,"k",(function(){return r["k"]})),n.d(e,"l",(function(){return r["l"]})),n.d(e,"m",(function(){return r["m"]})),n.d(e,"n",(function(){return r["n"]}))},e893:function(t,e,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[o]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return he})),n.d(e,"b",(function(){return de})),n.d(e,"c",(function(){return hr})),n.d(e,"d",(function(){return le})),n.d(e,"e",(function(){return fe}));var r=n("1fd5"),i=n("5606"),o=n("9ab4"),s=n("4fc1"),a=n("ffa6");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new s["b"]("@firebase/auth");function f(t,...e){h.logLevel<=s["a"].ERROR&&h.error(`Auth (${i["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),o=new r["b"]("auth","Firebase",i);return o.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw m(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function b(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(t){b(t instanceof Function,"Expected a class definition");let e=w.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["i"])(i,null!==e&&void 0!==e?e:{}))return t;d(t,"already-initialized")}const o=n.initialize({options:e});return o}function I(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function T(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||Object(r["m"])()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["r"])()||Object(r["s"])()}get(){return x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,o={}){return L(t,o,()=>{let o={},s={};i&&("GET"===e?s=i:o={body:JSON.stringify(i)});const a=Object(r["v"])(Object.assign({key:t.config.apiKey},s)).slice(1),c=new(j.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),j.fetch()(U(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function L(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),e);try{const e=new F(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const e=r.ok?o.errorMessage:o.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(t,a,s);d(t,a)}}catch(o){if(o instanceof r["c"])throw o;d(t,"network-request-failed")}}async function M(t,e,n,r,i={}){const o=await D(t,e,n,r,i);return"mfaPendingCredential"in o&&d(t,"multi-factor-auth-required",{serverResponse:o}),o}function U(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?C(t.config,i):`${t.config.apiScheme}://${i}`}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"timeout")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function $(t,e){return D(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e=!1){const n=Object(r["k"])(t),i=await n.getIdToken(e),o=H(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:q(G(o.auth_time)),issuedAtTime:q(G(o.iat)),expirationTime:q(G(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function G(t){return 1e3*Number(t)}function H(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["e"])(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",o),null}}function K(t){const e=H(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&J(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function J({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){var e;const n=t.auth,r=await t.getIdToken(),i=await W(t,$(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=(null===(e=o.providerUserInfo)||void 0===e?void 0:e.length)?et(o.providerUserInfo):[],a=tt(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=Object(r["k"])(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function et(t){return t.map(t=>{var{providerId:e}=t,n=Object(o["d"])(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await L(t,{},()=>{const n=Object(r["v"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=U(t,i,"/v1/token","key="+o);return j.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,o=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ot{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Object(o["d"])(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await W(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return z(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ot(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await W(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,o,s,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=e.photoURL)&&void 0!==o?o:void 0,p=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:I}=e;v(b&&I,t,"internal-error");const O=rt.fromJSON(this.name,I);v("string"===typeof b,t,"internal-error"),it(l,t.name),it(h,t.name),v("boolean"===typeof w,t,"internal-error"),v("boolean"===typeof _,t,"internal-error"),it(f,t.name),it(d,t.name),it(p,t.name),it(g,t.name),it(m,t.name),it(y,t.name);const T=new ot({uid:b,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:O,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map(t=>Object.assign({},t))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new ot({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const at=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ot._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(_(at),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||_(at);const o=ct(n,t.config.apiKey,t.name);let s=null;for(const u of e)try{const e=await u._get(o);if(e){const n=ot._fromJSON(t,e);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(o)}catch(c){}})),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(vt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(gt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=Object(r["l"])()){return/firefox\//i.test(t)}function ft(t=Object(r["l"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=Object(r["l"])()){return/crios\//i.test(t)}function pt(t=Object(r["l"])()){return/iemobile/i.test(t)}function gt(t=Object(r["l"])()){return/android/i.test(t)}function mt(t=Object(r["l"])()){return/blackberry/i.test(t)}function vt(t=Object(r["l"])()){return/webos/i.test(t)}function yt(t=Object(r["l"])()){return/iphone|ipad|ipod/i.test(t)}function bt(t=Object(r["l"])()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return Object(r["p"])()&&10===document.documentMode}function _t(t=Object(r["l"])()){return yt(t)||gt(t)||vt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e=[]){let n;switch(t){case"Browser":n=lt(Object(r["l"])());break;case"Worker":n=`${lt(Object(r["l"])())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new St(this),this.idTokenSubscription=new St(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_(e)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await ut.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(t);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Y(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["k"])(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Tt(t){return Object(r["k"])(t)}class St{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["h"])(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",P(t,e))}async function Ct(t,e){return D(t,"POST","/v1/accounts:sendOobCode",P(t,e))}async function jt(t,e){return Ct(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}async function Nt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends xt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Pt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Pt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return At(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rt(t,{email:this._email,oobCode:this._password});default:d(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return kt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{idToken:e,email:this._email,oobCode:this._password});default:d(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="http://localhost";class Mt extends xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Mt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):d("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Object(o["d"])(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Mt(n,r);return Object.assign(s,i),s}_getIdTokenResponse(t){const e=this.buildRequest();return Dt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Dt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Dt(t,e)}buildRequest(){const t={requestUri:Lt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["v"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",P(t,e))}async function Ft(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e))}async function Vt(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Bt={["USER_NOT_FOUND"]:"user-not-found"};async function $t(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",P(t,n),Bt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends xt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new qt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new qt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Ft(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Vt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return $t(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new qt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gt(t){const e=Object(r["w"])(Object(r["j"])(t))["link"],n=e?Object(r["w"])(Object(r["j"])(e))["deep_link_id"]:null,i=Object(r["w"])(Object(r["j"])(t))["deep_link_id"],o=i?Object(r["w"])(Object(r["j"])(i))["link"]:null;return o||i||n||e||t}class Ht{constructor(t){var e,n,i,o,s,a;const c=Object(r["w"])(Object(r["j"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=zt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Gt(t);try{return new Ht(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(){this.providerId=Kt.PROVIDER_ID}static credential(t,e){return Pt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ht.parseLink(e);return v(n,"argument-error"),Pt._fromEmailAndCode(t,n.code,n.tenantId)}}Kt.PROVIDER_ID="password",Kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Jt{constructor(){super("facebook.com")}static credential(t){return Mt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch(e){return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Xt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Jt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Mt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Qt.credential(e,n)}catch(r){return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com",Qt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Jt{constructor(){super("github.com")}static credential(t){return Mt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt extends Jt{constructor(){super("twitter.com")}static credential(t,e){return Mt._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Zt.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function te(t,e){return M(t,"POST","/v1/accounts:signUp",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.TWITTER_SIGN_IN_METHOD="twitter.com",Zt.PROVIDER_ID="twitter.com";class ee{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ot._fromIdTokenResponse(t,n,r),o=ne(n),s=new ee({user:i,providerId:o,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ne(n);return new ee({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ne(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,re.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new re(t,e,n,r)}}function ie(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw re._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){const r=await W(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ee._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await W(t,ie(r,i,e,t),n);v(o.idToken,r,"internal-error");const s=H(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(t.uid===a,r,"user-mismatch"),ee._forOperation(t,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&d(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(t,e,n=!1){const r="signIn",i=await ie(t,r,e),o=await ee._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function ce(t,e){return ae(Tt(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(t,e,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),v("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iosBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function le(t,e,n){const i=Object(r["k"])(t),o={requestType:"PASSWORD_RESET",email:e};n&&ue(i,o,n),await jt(i,o)}async function he(t,e,n){const r=Tt(t),i=await te(r,{returnSecureToken:!0,email:e,password:n}),o=await ee._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function fe(t,e,n){return ce(Object(r["k"])(t),Kt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(t){return Object(r["k"])(t).delete()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",P(t,e))}function ge(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",P(t,e))}new WeakMap;const me="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(me,"1"),this.storage.removeItem(me),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){const t=Object(r["l"])();return ft(t)||yt(t)}const be=1e3,we=10;class _e extends ve{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ye()&&Et(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);wt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,we):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},be)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}_e.type="LOCAL";const Ee=_e;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends ve{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ie.type="SESSION";const Oe=Ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Se(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async t=>t(e.origin,i)),a=await Te(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xe(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se.receivers=[];class ke{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=xe("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return window}function Ce(t){Ae().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return"undefined"!==typeof Ae()["WorkerGlobalScope"]&&"function"===typeof Ae()["importScripts"]}async function Re(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Ne(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Pe(){return je()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="firebaseLocalStorageDb",Le=1,Me="firebaseLocalStorage",Ue="fbase_key";class Fe{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ve(t,e){return t.transaction([Me],e?"readwrite":"readonly").objectStore(Me)}function Be(){const t=indexedDB.deleteDatabase(De);return new Fe(t).toPromise()}function $e(){const t=indexedDB.open(De,Le);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Me,{keyPath:Ue})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Me)?e(n):(n.close(),await Be(),e(await $e()))})})}async function qe(t,e,n){const r=Ve(t,!0).put({[Ue]:e,value:n});return new Fe(r).toPromise()}async function ze(t,e){const n=Ve(t,!1).get(e),r=await new Fe(n).toPromise();return void 0===r?null:r.value}function Ge(t,e){const n=Ve(t,!0).delete(e);return new Fe(n).toPromise()}const He=800,Ke=3;class We{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await $e()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ke)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return je()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Se._getInstance(Pe()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Re(),!this.activeServiceWorker)return;this.sender=new ke(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Ne()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await $e();return await qe(t,me,"1"),await Ge(t,me),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qe(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>ze(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Ge(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Ve(t,!1).getAll();return new Fe(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),He)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}We.type="LOCAL";const Je=We;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",P(t,e))}function Qe(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",P(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ze(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Ye().appendChild(r)})}function tn(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tn("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en="recaptcha";async function nn(t,e,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,t,"argument-error"),v(n.type===en,t,"argument-error"),o="string"===typeof e?{phoneNumber:e}:e,"session"in o){const e=o.session;if("phoneNumber"in o){v("enroll"===e.type,t,"internal-error");const n=await pe(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,t,"missing-multi-factor-info");const s=await Xe(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Ut(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(t){this.providerId=rn.PROVIDER_ID,this.auth=Tt(t)}verifyPhoneNumber(t,e){return nn(this.auth,t,Object(r["k"])(e))}static credential(t,e){return qt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return rn.credentialFromTaggedObject(e)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?qt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(t,e){return e?_(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.PROVIDER_ID="phone",rn.PHONE_SIGN_IN_METHOD="phone";class sn extends xt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Dt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Dt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function an(t){return ae(t.auth,new sn(t),t.bypassAuthState)}function cn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),se(n,new sn(t),t.bypassAuthState)}async function un(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),oe(n,new sn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=t;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return an;case"linkViaPopup":case"linkViaRedirect":return un;case"reauthViaPopup":case"reauthViaRedirect":return cn;default:d(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new A(2e3,1e4);class fn extends ln{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=xe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,hn.get())};t()}}fn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dn="pendingRedirect",pn=new Map;class gn extends ln{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=pn.get(this.auth._key());if(!t){try{const e=await mn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}pn.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function mn(t,e){const n=yn(e),r="true"===await vn(t)._get(n);return await vn(t)._remove(n),r}function vn(t){return _(t._redirectPersistence)}function yn(t){return ct(dn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e,n=!1){const r=Tt(t),i=on(r,e),o=new gn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn=6e5;class _n{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!On(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!In(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(En(t))}saveEventToCache(t){this.cachedEventUids.add(En(t)),this.lastProcessedEventTime=Date.now()}}function En(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function In({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function On(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return In(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(t,e={}){return D(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xn=/^https?/;async function kn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tn(t);for(const r of e)try{if(An(r))return}catch(n){}d(t,"unauthorized-domain")}function An(t){const e=O(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!xn.test(n))return!1;if(Sn.test(t))return r===t;const i=t.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new A(3e4,6e4);function jn(){const t=Ae().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Rn(t){return new Promise((e,n)=>{var r,i,o;function s(){jn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jn(),n(p(t,"network-request-failed"))},timeout:Cn.get()})}if(null===(i=null===(r=Ae().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(o=Ae().gapi)||void 0===o?void 0:o.load)){const e=tn("iframefcb");return Ae()[e]=()=>{gapi.load?s():n(p(t,"network-request-failed"))},Ze("https://apis.google.com/js/api.js?onload="+e)}s()}}).catch(t=>{throw Nn=null,t})}let Nn=null;function Pn(t){return Nn=Nn||Rn(t),Nn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new A(5e3,15e3),Ln="__/auth/iframe",Mn="emulator/auth/iframe",Un={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Fn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?C(e,Mn):`https://${t.config.authDomain}/${Ln}`,o={apiKey:e.apiKey,appName:t.name,v:i["a"]},s=Fn.get(t.config.apiHost);s&&(o.eid=s);const a=t._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["v"])(o).slice(1)}`}async function Bn(t){const e=await Pn(t),n=Ae().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Vn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Un,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),o=Ae().setTimeout(()=>{r(i)},Dn.get());function s(){Ae().clearTimeout(o),n(e)}e.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qn=500,zn=600,Gn="_blank",Hn="http://localhost";class Kn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Wn(t,e,n,i=qn,o=zn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$n),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["l"])().toLowerCase();n&&(c=dt(l)?Gn:n),ht(l)&&(e=e||Hn,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(bt(l)&&"_self"!==c)return Jn(e||"",c),new Kn(null);const f=window.open(e||"",c,h);v(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Kn(f)}function Jn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="__/auth/handler",Qn="emulator/auth/handler";function Yn(t,e,n,o,s,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(e instanceof Wt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["o"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Jt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Zn(t)}?${Object(r["v"])(u).slice(1)}`}function Zn({config:t}){return t.emulator?C(t,Qn):`https://${t.authDomain}/${Xn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="webStorageSupport";class er{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oe,this._completeRedirectFn=bn}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Yn(t,e,n,O(),r);return Wn(t,o,xe())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Ce(Yn(t,e,n,O(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Bn(t),n=new _n(t);return e.register("authEvent",e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(tr,{type:tr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[tr];void 0!==i&&e(!!i),d(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=kn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _t()||ft()||yt()}}const nr=er;class rr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class ir extends rr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ir(t)}_finalizeEnroll(t,e,n){return ge(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Qe(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class or{constructor(){}static assertion(t){return ir._fromCredential(t)}}or.FACTOR_ID="phone";var sr="@firebase/auth",ar="0.18.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lr(t){Object(i["c"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(e=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(t)},s=new Ot(e,r);return I(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",t=>{const e=Tt(t.getProvider("auth").getImmediate());return(t=>new cr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(sr,ar,ur(t))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t=Object(i["e"])()){const e=Object(i["b"])(t,"auth");return e.isInitialized()?e.getImmediate():E(t,{popupRedirectResolver:nr,persistence:[Je,Ee,Oe]})}lr("Browser")},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f30a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("b774");class i{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const r in t.settings){const e=t.settings[r];n[r]=e.defaultValue}const i="__vue-devtools-plugin-settings__"+t.id;let o={...n};try{const t=localStorage.getItem(i),e=JSON.parse(t);Object.assign(o,e)}catch(s){}this.fallbacks={getSettings(){return o},setSettings(t){try{localStorage.setItem(i,JSON.stringify(t))}catch(s){}o=t}},e.on(r["a"],(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise(n=>{this.targetQueue.push({method:e,args:t,resolve:n})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}},f5df:function(t,e,n){var r=n("00ee"),i=n("1626"),o=n("c6b6"),s=n("b622"),a=s("toStringTag"),c="Arguments"==o(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),a))?n:c?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("23cb"),c=n("50c4"),u=n("fc6a"),l=n("8418"),h=n("b622"),f=n("1dde"),d=f("slice"),p=h("species"),g=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,h,f=u(this),d=c(f.length),v=a(t,d),y=a(void 0===e?d:e,d);if(i(f)&&(n=f.constructor,o(n)&&(n===Array||i(n.prototype))?n=void 0:s(n)&&(n=n[p],null===n&&(n=void 0)),n===Array||void 0===n))return g.call(f,v,y);for(r=new(void 0===n?Array:n)(m(y-v,0)),h=0;v<y;v++,h++)v in f&&l(r,h,f[v]);return r.length=h,r}})},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise},ffa6:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n("9ab4"),i=n("1fd5"),o=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),s="[DEFAULT]",a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i["a"];if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(u(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(d){}try{for(var i=Object(r["f"])(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r["c"])(o.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:h});l.resolve(f)}catch(d){}}}catch(p){e={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t=s),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(r["a"])(this,void 0,void 0,(function(){var t;return Object(r["b"])(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r["e"])(Object(r["e"])([],Object(r["c"])(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Object(r["c"])(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t=s),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t=s),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var c=Object(r["f"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r["c"])(u.value,2),h=l[0],f=l[1],d=this.normalizeInstanceIdentifier(h);s===d&&f.resolve(a)}}catch(p){e={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,o=this.onInitCallbacks.get(e);if(o)try{for(var s=Object(r["f"])(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(t,e)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e=t.instanceIdentifier,n=t.options,r=void 0===n?{}:n,i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(e),options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=s),this.component?this.component.multipleInstances?t:s:t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();function c(t){return t===s?void 0:t}function u(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){var e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()}}]);
//# sourceMappingURL=chunk-vendors.16380ce1.js.map