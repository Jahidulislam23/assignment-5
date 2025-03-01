document.getElementById('mainButton').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -6 ===0){
        alert('Warning! Decrease value has reached 0.')
    }
    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton.disabled = true;
    
})
document.getElementById('mainButton1').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -5 ===0){
        alert('Warning! Decrease value has reached 0.')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton1.disabled = true;
    
})

document.getElementById('mainButton2').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -4 ===0){
        alert('Warning! Decrease value has reached 0.')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton2.disabled = true;
    
})

document.getElementById('mainButton3').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -3 ===0){
        alert('Warning! Decrease value has reached 0.')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton3.disabled = true;
    
})

document.getElementById('mainButton4').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -2 ===0){
        alert('Warning! Decrease value has reached 0.')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton4.disabled = true;
    
})

document.getElementById('mainButton5').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -1 ===0){
        alert('Warning! Decrease value has reached 0.')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton5.disabled = true;
    
})

document.getElementById('cardValue').addEventListener('click',function(){
    window.location.href='./main.html'
})