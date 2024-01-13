import{a as P,S as R,i as f}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector("span"),loadMoreBtn:document.querySelector('[data-action="load-more"]')};let i=1,h=0,u="",g=0;const p=40,D=P.create({headers:{"Content-Type":"application/json"},params:{image_type:"photo",orientation:"horizontal",safesearch:!0}});a.form.addEventListener("submit",I);a.loadMoreBtn.addEventListener("click",T);async function I(t){t.preventDefault(),i=1,a.gallery.innerHTML="",L(),v(),u=t.currentTarget.elements.search.value;try{const r=await y(u);r.total?(w(r),b(),i+=1,h=r.totalHits/p):d("Sorry, there are no images matching your search query. Please try again!")}catch(r){d(r.message)}finally{m()}a.form.reset()}async function y(t){const o=new URLSearchParams({per_page:p,page:i});try{return(await D.get(`https://pixabay.com/api/?key=41464538-044fa7fe64ee4a60fb4972757&q=${t}&${o}`)).data}catch(r){d(r.message)}}function w(t){const l=t.hits.map(n=>({preview:n.webformatURL,original:n.largeImageURL,description:n.tags,views:n.views,comments:n.comments,downloads:n.downloads,likes:n.likes})).reduce((n,{preview:S,original:M,description:x,views:B,comments:$,downloads:q,likes:k})=>n+`<li class="gallery">
          <a class="gallery-link" href=${M} >       
           <img
            class="gallery-image"
            src=${S}
            alt="${x}"
            />          <ul class="desc">
            <li class="desc-item">
              <h2 class="desc-title">likes</h2>
              <p class="desc-text">${k}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">views</h2>
              <p class="desc-text">${B}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">comments</h2>
              <p class="desc-text">${$}</p>
            </li>
            <li class="desc-item">
              <h2 class="desc-title">downloads</h2>
              <p class="desc-text">${q}</p>
            </li>
          </ul></a>
        </li>`,"");a.gallery.insertAdjacentHTML("beforeend",l),g=document.querySelector(".gallery").getBoundingClientRect().height*2,new R(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function d(t="Something went wrong!"){f.error({position:"topRight",message:t})}async function T(t){if(v(),L(),i>h)return m(),f.show({position:"topRight",message:"We're sorry, but you've reached the end of search results."});try{const o=await y(u);w(o),E(g),b(),i+=1}catch(o){d(o.message)}finally{m()}}function L(){a.loader.hidden=!1,a.loader.classList.add("loader")}function m(){a.loader.hidden=!0,a.loader.classList.remove("loader")}function b(){a.loadMoreBtn.classList.remove("is-hidden")}function v(){a.loadMoreBtn.classList.add("is-hidden")}function E(t){window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
