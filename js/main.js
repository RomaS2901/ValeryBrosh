document.addEventListener('DOMContentLoaded', function() {

    let mainAction = document.getElementById('header-menu'),
        myContactsLinkItem = document.getElementById('contacts__link-item'),
        myTeamLinkItem = document.getElementById('team__link-item'),
        contextMenu = document.getElementById('header-list');
    
    // show or hide context menu list
    mainAction.addEventListener('click', function(){
        this.style.transform = 'scale(' + 2 + ')';
        if(contextMenu.classList.contains('header__links-is-unvisible')) {
            contextMenu.classList.remove('header__links-is-unvisible')
        } else {
            contextMenu.classList.add('header__links-is-unvisible')
        }
        setTimeout(function() {
            let scaleValue = 1.9;
            while (scaleValue > 1) {
                mainAction.style.transform = 'scale(' + scaleValue + ')';
                scaleValue-= 0.1
            }
        }, 500)
    });

    // on click scroll window to footer with contact information
    myContactsLinkItem.addEventListener('click', function(){
        let footerOffset = document.getElementsByClassName('footer')[0].getBoundingClientRect();
        window.scrollTo({
            top: footerOffset.top,
            left: footerOffset.left,
            behavior: 'smooth'
        })
    });

    // on click scroll window to team section
    myTeamLinkItem.addEventListener('click', function(){
        let teamSectionOffset = document.getElementsByClassName('team-content-wrapper')[0].getBoundingClientRect();
        window.scrollTo({
            top: teamSectionOffset.top,
            left: teamSectionOffset.left,
            behavior: 'smooth'
        })
    })
})