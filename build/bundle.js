/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/***/ ((module) => {

function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('input', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == "" || restDays.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
};

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/***/ ((module) => {

function form (){
    let message = {
        loading: 'Загрузка',
        success: 'Спасибо. Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.querySelector('form');
    
    function sendForm(elem) {
            elem.addEventListener('submit', function(e){
                e.preventDefault();
                    elem.appendChild(statusMessage);
                    let formData = new FormData(elem);
    
                        function postData(data) {
    
                            return new Promise(function(resolve, reject) {
                                let request = new XMLHttpRequest();
                                
                                request.open('POST', 'server.php');
                                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                                
                                
    
                                request.onreadystatechange = function(){
                                    if(request.readyState < 4){
                                        resolve()
                                    } else if (request.readyState === 4 && request.status == 200){
                                        resolve()
                                        } else {
                                            reject()
                                        }
                                    }
                                
                                request.send(data);
                            })
    
                        }  // End postData
                 
                        function clearInput () {
                                for(let i = 0; i < input.length; i++){
                                    input[i].value = '';
                                }
                        }
    
                        postData(formData)
                            .then(() => statusMessage.innerHTML = message.loading)
                            .then(() => {statusMessage.innerHTML = message.success})
                            .catch(() => statusMessage.innerHTML = message.failure)
                            .then(clearInput)
                        
            });
        }   
        sendForm(form);
        sendForm(contactForm);
};

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/***/ ((module) => {

function modal(){
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector(".popup-close");
    
    more.addEventListener('click', function() {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = '';
    });

    //Modal for tabs

    let justInfo = document.querySelector('.info'),
        moreInTabs = document.querySelectorAll(".description-btn");
    
    justInfo.addEventListener('click', function(event) {
        let target = event.target;
            for (let i = 0; i < moreInTabs.length;i++){
                if(target && target == moreInTabs[i]){
                        overlay.style.display = "block";
                        this.classList.add("more-splash");
                        document.body.style.overflow = 'hidden';
                };
            };
    });
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/***/ ((module) => {

function slider(){
    let slideIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");


    showSlides(slideIndex);       
    function showSlides (n){
        
        if( n > slides.length){
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");
        // for(let i = 0; i < slides.length; i++){
        //     slides[i].style.display = "none";
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    };


    function plusSlides (n){
        showSlides(slideIndex += n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(e){
        for (let i = 0; i < dots.length+1; i++){
            if (e.target.classList.contains('dot') && e.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });
};

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/***/ ((module) => {

function tabs() {
    let infoHeader = document.querySelector(".info-header"),
        tabs = document.querySelectorAll(".info-header-tab"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContant(a){
        for (let i = a ; i < tabContent.length; i++){
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        };
    };
   
    hideTabContant(1);

    function showTabContant (b) {
        if(tabContent[b].classList.contains("hide")){
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    };

    infoHeader.addEventListener('click', (event) => {
        let target = event.target;
        if(target && target.classList.contains("info-header-tab")){
            for( let i = 0; i < tabContent.length;i++){
                if(target == tabs[i]){
                    hideTabContant(0);
                    showTabContant(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/***/ ((module) => {

function timer(){
    let deadLine = '2022-08-08';
    
    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeRemaining(endtime);
            
            hours.textContent = t.hours;
            minutes.textContent = ("0" + t.minutes).slice(-2);
            seconds.textContent = ("0" + t.seconds).slice(-2);

            if(t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            };
        };
    };
    setClock('timer', deadLine);
};

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map