///LEFT SIDEBAR
(function () {
    new Canvi({
        content: '.js-canvi-content',
        navbar: '.js-canvi-navbar--right',
        openButton: '.js-canvi-open-button--right',
        position: 'left',
        pushContent: true,
        responsiveWidths: [{
            breakpoint: "320px",
            width: "100%"
        },{
            breakpoint: "375px",
            width: "100%"
        }, {
            breakpoint: "425px",
            width: "100%"
        }, {
            breakpoint: "768px",
            width: "100%"
        }, {
            breakpoint: "1024px",
            width: "40%"
        },
        {
            breakpoint: "1440px",
            width: "20%"
        },{
            breakpoint: "1600px",
            width: "20%"
        }, {
            breakpoint: "1920px",
            width: "20%"
        } ],

        isDebug: false
        
    });
    

    openValue({currentTarget: document.getElementsByClassName('tablinks')[0]}, 'Account');
}());

///ACCORDION
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');

        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}

////TAB MENU
function openValue(evt, valueName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }


    document.getElementById(valueName).style.display = 'block';
    evt.currentTarget.className += ' active';
}
