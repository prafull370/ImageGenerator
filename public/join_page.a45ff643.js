const e=document.querySelector(".first-name-input"),t=document.querySelector(".last-name-input"),r=document.querySelector(".email-input"),l=document.querySelector(".user-name-input"),o=document.querySelector(".password-input"),n=document.querySelector(".submit-button"),u=document.querySelector(".error-text"),s=document.querySelector(".error-text .error-message"),a=document.querySelector(".error-text .close-button"),c=()=>{let n=e.value.trim(),a=t.value.trim(),c=r.value.trim(),d=l.value.trim(),i=o.value.trim();return n&&a&&c&&d&&i?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)?/^\w+$/.test(d)?!(i.length<8)||(s.innerHTML="Password must be at least 8 characters long.",u.style.backgroundColor="#e25c3d",u.style.top="0",!1):(s.innerHTML="Username can only contain letters, numbers, and underscores.",u.style.backgroundColor="#e25c3d",u.style.top="0",!1):(s.innerHTML="Please enter a valid email address.",u.style.backgroundColor="#e25c3d",u.style.top="0",!1):(s.innerHTML="All fields are required.",u.style.backgroundColor="#e25c3d",u.style.top="0",!1)};n.addEventListener("click",n=>{n.preventDefault(),c()&&(s.innerHTML="Welcome to the club!",u.style.backgroundColor="#00b894",u.style.top="0",e.value="",t.value="",r.value="",l.value="",o.value="")}),a.addEventListener("click",()=>{u.style.top="-100%"});
//# sourceMappingURL=join_page.a45ff643.js.map
