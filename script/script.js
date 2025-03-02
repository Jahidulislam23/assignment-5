document.getElementById('mainButton').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    let fontName = parseInt('fix-mobile')

    if(mainasValue -6 ===0){
        alert('Board Updated successfully')
    }
    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton.disabled = true;

    const container = document.getElementById('right-btn')

    const h1 =document.createElement('h1');
    h1.innerText=`
    you have completed the task${'Fix Mobile Button Issue'} from ${'4:50:10 AM'} value
    `
    container.appendChild(h1)



    
    
});

document.getElementById('mainButton1').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -5 ===0){
        alert('Board Updated successfully')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton1.disabled = true;
    const container = document.getElementById('right-btn')

    const h1 =document.createElement('h1');
    h1.innerText=`
    you have completed the task${'Optimize  Home page'} from ${'4:50:10 AM'} value
    `
    container.appendChild(h1)
    
})

document.getElementById('mainButton2').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -4 ===0){
        alert('Board Updated successfully')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton2.disabled = true;

    const container = document.getElementById('right-btn')

    const h1 =document.createElement('h1');
    h1.innerText=`
    you have completed the task${'Add new emoji 🤲'} from ${'4:50:10 AM'} value
    `
    container.appendChild(h1)
    
})

document.getElementById('mainButton3').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -3 ===0){
        alert('Board Updated successfully')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton3.disabled = true;
    const container = document.getElementById('right-btn')

    const h1 =document.createElement('h1');
    h1.innerText=`
    you have completed the task${'Integrate OpenAI API '} from ${'4:50:10 AM'} value
    `
    container.appendChild(h1)
    
})

document.getElementById('mainButton4').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -2 ===0){
        alert('Board Updated successfully')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton4.disabled = true;
    const container = document.getElementById('right-btn')

    const h1 =document.createElement('h1');
    h1.innerText=`
    you have completed the task${'Improve Job searching'} from ${'4:50:10 AM'} value
    `
    container.appendChild(h1)
    
})

document.getElementById('mainButton5').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -1 ===0){
        alert('Board Updated successfully')

    }
    if(mainasValue -1 ===0){
        alert('congrates!!! You have completed all current task')

    }

    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton5.disabled = true;
    const container = document.getElementById('right-btn')

    const h1 =document.createElement('h1');
    h1.innerText=`
    you have completed the task${'Fix Mobile Button Issue'} from ${'4:50:10 AM'} 
    `
    container.appendChild(h1)
    
})
document.getElementById('cardValue').addEventListener('click',function(){
    window.location.href='./index1.html'
});


function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

document.getElementById('clearAll').addEventListener('click',function(){
    
})
