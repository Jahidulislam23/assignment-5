document.getElementById('mainButton').addEventListener('click',function(){
    
    let plashButton = document.getElementById('plashValue');
    let mainasButton =document.getElementById('mainasValue');

    let plashValue = parseInt(plashButton.innerText);
    let mainasValue =parseInt(mainasButton.innerText);

    if(mainasValue -6 ===0){
        alert('Board Updated successfully')
    }
    if(mainasValue > 0){
        plashButton.innerText = plashValue +1;
        mainasButton.innerText= mainasValue -1;
    }
    mainButton.disabled = true;
    let now = new Date();
    let formattedTime = now.toLocaleString('right-btn',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:true

    });
    let task = document.getElementById('fix-mobile');
    let taskName = task.innerText;
    let activeLogs = document.getElementById('active-logs');
    let newParagraph = document.createElement('h1');
    newParagraph.classList.add(
        'p-4',
        'bg-[#f4f7ff]',
        'rounded-lg',
        'shadow-md','text-gray-500','font-medium','mt-2',
        'mr-2'
    );
    newParagraph.innerText=`your have complete the task ${taskName}at ${formattedTime}`;
    activeLogs.appendChild(newParagraph);
    
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
    
})
document.getElementById('cardValue').addEventListener('click',function(){
    window.location.href='./index1.html'
});


function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
