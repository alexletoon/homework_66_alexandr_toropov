const classes = document.getElementsByClassName('element');



for(let i = 0; i < classes.length; i++){
    if (i < (classes.length/2)){
        classes[i].style.color = 'red'
        }
    else {
        classes[i].style.color = 'green'
    }
};