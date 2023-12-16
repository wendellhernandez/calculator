let calcu = document.querySelector('.calcu');
let screen = document.querySelector('.screen');
let ac = document.querySelector('#ac');
let del = document.querySelector('#del');
let temp = 0;

calcu.addEventListener('click' , e => {
    if((screen.textContent == 0 
        || 
        screen.textContent[1] == '='
        )
        && 
        e.target.textContent.length == 1)
    {
        temp = screen.textContent;
        screen.textContent = '';
    }
    
    if(e.target.textContent == 'AC'){
        screen.textContent = 0;
    }else if(e.target.textContent == 'DEL'){
        if(screen.textContent[1] == '='){

        }else if(screen.textContent.length == 1){
            screen.textContent = 0;
        }else{
            screen.textContent = screen.textContent.slice(0,-1);
        }
    }else if(e.target.textContent == '='){
        if(screen.textContent == ''){
            screen.textContent = temp;
        }else{
            screen.textContent = ' = ' + eval(screen.textContent);
        }
    }else{
        if(e.target.textContent.length == 1){
            screen.textContent += e.target.textContent;
        }
    }
})