!function(){var e={972:function(){new Swiper(".about-us__slider",{slidesPerView:1.3,spaceBetween:16,breakpoints:{480:{slidesPerView:1.5},600:{slidesPerView:2},768:{slidesPerView:2.5}}})},409:function(){new Swiper(".certificates__slider",{slidesPerView:1.4,spaceBetween:16,breakpoints:{480:{slidesPerView:2},650:{slidesPerView:3},768:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3}}})},642:function(){const e=document.querySelector(".header__burger"),t=document.querySelector(".header__nav");e.addEventListener("click",(()=>{t.classList.toggle("open"),t.classList.contains("open")?e.src="./img/close.svg":e.src="./img/burger.svg"}))},221:function(){const e=document.querySelector(".modal-overlay"),t=document.querySelector(".modal__close"),r=document.querySelector(".hero__request-btn"),s=document.querySelector(".modal"),n=document.querySelector(".modal__form-item");r.addEventListener("click",(t=>{t.preventDefault(),e.classList.add("d-block")})),t.addEventListener("click",(()=>{e.classList.remove("d-block")})),e.addEventListener("click",(t=>{t.target===s?t.stopPropagation():e.classList.remove("d-block")})),n.addEventListener("click",(e=>{e.stopPropagation()})),document.addEventListener("keydown",(t=>{"Escape"===t.key&&e.classList.contains("d-block")&&e.classList.remove("d-block")}))},420:function(){new Swiper(".order__price-row",{slidesPerView:1.5,spaceBetween:16,breakpoints:{480:{slidesPerView:2},725:{slidesPerView:3},991:{slidesPerView:1.3,spaceBetween:20},1175:{slidesPerView:2,spaceBetween:20},1350:{slidesPerView:3,spaceBetween:20}}});const e=document.querySelectorAll(".item"),t=document.querySelector(".order__form-service span");e.forEach((e=>{e.addEventListener("click",(()=>{t.textContent=e.querySelector(".item__name").textContent}))}));const r=document.querySelector(".order__form-btn"),s=document.querySelector(".order__form-num");r.addEventListener("click",(function(){r.style.display="none",s.style.display="flex"}))},2:function(){var e;function t(){e=new Swiper(".process__bottom",{navigation:{prevEl:".process__bottom-arr-prev",nextEl:".process__bottom-arr-next"},slidesPerView:1.3,spaceBetween:20,centerInsufficientSlides:!0,breakpoints:{991:{slidesPerView:2},1200:{slidesPerView:3},1500:{slidesPerView:4}}})}function r(){e&&(e.destroy(),e=null)}function s(){window.innerWidth<=991?r():t()}new Swiper(".process__top",{slidesPerView:1.5,spaceBetween:16,breakpoints:{480:{slidesPerView:2},600:{slidesPerView:3},991:{slidesPerView:4,spaceBetween:20},1200:{slidesPerView:6}}}),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".process__top-item"),n=document.querySelectorAll(".process__bottom-wrap");e.forEach(((s,i)=>{s.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active")})),s.classList.add("active"),n.forEach((e=>{e.classList.remove("d-block")})),n[i].classList.add("d-block"),window.innerWidth<991?r():t()}))})),s(),window.addEventListener("resize",(function(){s()}))}))},239:function(){const e=document.querySelectorAll(".service"),t=document.querySelector(".sale__form-service");e.forEach((r=>{r.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("active-service"))),r.classList.add("active-service");const s=Array.from(r.querySelectorAll(".service__bottom-text")).map((e=>e.innerText)).join(" ");t.innerText=s}))}))}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";r(642),r(972),r(2),r(420),r(409),r(239),r(221)}()}();