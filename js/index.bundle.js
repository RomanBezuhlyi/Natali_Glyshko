!function(){var e={972:function(){new Swiper(".about-us__slider",{slidesPerView:1.3,spaceBetween:16,breakpoints:{480:{slidesPerView:1.5},600:{slidesPerView:2},768:{slidesPerView:2.5}}})},409:function(){new Swiper(".certificates__slider",{slidesPerView:1.4,spaceBetween:16,breakpoints:{480:{slidesPerView:2},650:{slidesPerView:3},768:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3}}})},642:function(){const e=document.querySelector(".header__burger"),r=document.querySelector(".header__nav");e.addEventListener("click",(()=>{r.classList.toggle("open"),r.classList.contains("open")?e.src="./img/close.svg":e.src="./img/burger.svg"}))},420:function(){new Swiper(".order__price-row",{slidesPerView:1.5,spaceBetween:16,breakpoints:{480:{slidesPerView:2},725:{slidesPerView:3},991:{slidesPerView:1.3,spaceBetween:20},1175:{slidesPerView:2,spaceBetween:20},1350:{slidesPerView:3,spaceBetween:20}}});const e=document.querySelectorAll(".item"),r=document.querySelector(".order__form-service span");e.forEach((e=>{e.addEventListener("click",(()=>{r.textContent=e.querySelector(".item__name").textContent}))}));const t=document.querySelector(".order__form-btn"),s=document.querySelector(".order__form-num");t.addEventListener("click",(function(){t.style.display="none",s.style.display="flex"}))},2:function(){var e;function r(){e=new Swiper(".process__bottom",{navigation:{prevEl:".process__bottom-arr-prev",nextEl:".process__bottom-arr-next"},slidesPerView:1.3,spaceBetween:20,centerInsufficientSlides:!0,breakpoints:{991:{slidesPerView:2},1200:{slidesPerView:3},1500:{slidesPerView:4}}})}function t(){e&&(e.destroy(),e=null)}function s(){window.innerWidth<=991?t():r()}new Swiper(".process__top",{slidesPerView:1.5,spaceBetween:16,breakpoints:{480:{slidesPerView:2},600:{slidesPerView:3},991:{slidesPerView:4,spaceBetween:20},1200:{slidesPerView:6}}}),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".process__top-item"),i=document.querySelectorAll(".process__bottom-wrap");e.forEach(((s,n)=>{s.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active")})),s.classList.add("active"),i.forEach((e=>{e.classList.remove("d-block")})),i[n].classList.add("d-block"),window.innerWidth<991?t():r()}))})),s(),window.addEventListener("resize",(function(){s()}))}))},239:function(){const e=document.querySelectorAll(".service"),r=document.querySelector(".sale__form-service");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("active-service"))),t.classList.add("active-service");const s=Array.from(t.querySelectorAll(".service__bottom-text")).map((e=>e.innerText)).join(" ");r.innerText=s}))}))}},r={};function t(s){var i=r[s];if(void 0!==i)return i.exports;var n=r[s]={exports:{}};return e[s](n,n.exports,t),n.exports}t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){"use strict";t(642),t(972),t(2),t(420),t(409),t(239)}()}();