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