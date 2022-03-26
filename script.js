var open = document.getElementsByClassName('open');
var close = document.getElementsByClassName('arrow-top');

var myFunction = function() {
    this.parentElement.parentElement.style.height = 300 + 'px';
    this.parentElement.parentElement.firstElementChild.style.opacity = 1;
    this.parentElement.style.flexDirection = 'column-reverse';
    this.parentElement.style.top =  80 + '%';
    this.style.opacity = 0;
    this.parentElement.lastElementChild.style.opacity = 1;
};

var closeFunction = function() {
    console.log(this.parentElement.parentElement)
    this.parentElement.parentElement.style.height = 100 + 'px';
    this.style.opacity = 0;
    this.parentElement.firstElementChild.style.opacity = 1;
    this.parentElement.style.flexDirection = 'column';
    this.parentElement.parentElement.firstElementChild.style.opacity = 0;
}

for (var i = 0; i < open.length; i++) {
    open[i].addEventListener('click', myFunction);
}


for (var i = 0; i < open.length; i++) {
    close[i].addEventListener('click', closeFunction);
}

//show[0].addEventListener('click', myFunction);

//close[1].addEventListener('click', closeFunction);