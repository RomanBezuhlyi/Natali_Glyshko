!function(){var e={972:function(){new Swiper(".about-us__slider",{slidesPerView:1.3,spaceBetween:16,breakpoints:{480:{slidesPerView:1.5},600:{slidesPerView:2},768:{slidesPerView:2.5}}})},642:function(){const e=document.querySelector(".header__burger"),r=document.querySelector(".header__nav");e.addEventListener("click",(()=>{r.classList.toggle("open"),r.classList.contains("open")?e.src="./img/close.svg":e.src="./img/burger.svg"}))},2:function(){var e;function r(){e=new Swiper(".process__bottom",{navigation:{prevEl:".process__bottom-arr-prev",nextEl:".process__bottom-arr-next"},slidesPerView:1.3,spaceBetween:20,centerInsufficientSlides:!0,breakpoints:{991:{slidesPerView:2},1200:{slidesPerView:3},1500:{slidesPerView:4}}})}function t(){e&&(e.destroy(),e=null)}function s(){window.innerWidth<=991?t():r()}new Swiper(".process__top",{slidesPerView:1.5,spaceBetween:16,breakpoints:{480:{slidesPerView:2},600:{slidesPerView:3},991:{slidesPerView:4,spaceBetween:20},1200:{slidesPerView:6}}}),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".process__top-item"),n=document.querySelectorAll(".process__bottom-wrap");e.forEach(((s,i)=>{s.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active")})),s.classList.add("active"),n.forEach((e=>{e.classList.remove("d-block")})),n[i].classList.add("d-block"),window.innerWidth<991?t():r()}))})),s(),window.addEventListener("resize",(function(){s()}))}))}},r={};function t(s){var n=r[s];if(void 0!==n)return n.exports;var i=r[s]={exports:{}};return e[s](i,i.exports,t),i.exports}t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){"use strict";t(642),t(972),t(2)}()}();