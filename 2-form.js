import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s={email:"",message:""},n="feedback-form-state",l=a=>{const e=a.target;if(e.tagName===void 0||!["INPUT","TEXTAREA"].includes(e.tagName))return;const t=e.value.trim();s[e.name]=t,localStorage.setItem(n,JSON.stringify(s))},m=a=>{const e=localStorage.getItem(n);if(e===null)return;const t=JSON.parse(e);t.email===void 0||t.message===void 0||(a.email.value=t.email,a.message.value=t.message)},r=a=>{a.preventDefault();const e=a.target;if(e.email.value===""||e.message.value===""){console.warn("Fill please all fields");return}e.message.value=e.email.value="",localStorage.removeItem(n)};function o(a){m(a),a.addEventListener("input",l),a.addEventListener("submit",r)}o(document.querySelector(".feedback-form"));
//# sourceMappingURL=2-form.js.map
