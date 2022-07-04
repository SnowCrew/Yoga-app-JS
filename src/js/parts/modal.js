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