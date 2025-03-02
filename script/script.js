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

// const mainButton = document.getElementById('mainButton');
// const rightButton = document.getElementById('right-btn');
// const divTag = document.getElementsByTagName('div')

// const divTagName = document.getElementById('mainasButton');
// const navber =document.getElementById('plushButton');

// const buttons = document.querySelectorAll('.btn');

// console.log(buttons);
// console.log(divTag);

// for(let singleTag of divTag){
//     const btn = singleTag.querySelector('button');
//     btn.addEventListener('click',()=>{
//         const p =document.createElement('p');
//         const divText = singleTag.querySelector('p').textContent;
//         p.innerText=divText;
//         alert('task added');
//         rightButton.appendChild(p);
//         btn.setAttribute('disabled'.true);
//         let currentCount =parseInt(navber.innerText);
//         let updatedCount = currentCount-1;
//         let currentCountPlash =parseInt(divTagName.innerText);
//         let updatedCountplash = currentCountPlash+1
//     })
// }







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
document.getElementById('goToFirstPage').addEventListener('click',function(){
    window.location.href='./index1.html'
});


function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
