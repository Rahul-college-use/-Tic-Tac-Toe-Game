let boxes = document.querySelectorAll('.box')
let winnerMsg = document.querySelector('.msg')
let newBtn = document.querySelector('.new-game')
let restBtn = document.querySelector('.rest-game')
let scoreOBtn = document.querySelector('#scoreO')
let scoreXBtn = document.querySelector('#scoreX')
scoreO=0
scoreX=0
let showWon = (won)=>{
    // console.log("Winner = ",won)
    winnerMsg.innerText = `Congratulation! Won ${won}`
    if(won=='X')
        {
    
            scoreXBtn.innerText = ++scoreX
            console.log("scoreX++")
        }
        else{
            scoreOBtn.innerText = ++scoreO 
            console.log("scoreO++")
            
        }
    boxesDisabled()
    UserO=true
    
}
let cleanWinnerMsg = ()=>{
    winnerMsg.innerText=''
}
let boxesDisabled =()=>{
    for(let ele of boxes)
    {
        ele.disabled=true
    }
}
let boxesEnabled =()=>{
    for(let ele of boxes)
    {
        ele.disabled=false
    }
}

let cleanBox =()=>{
    for(let box of boxes)
    {
        box.innerText = ''
    }
    boxesEnabled()
    cleanWinnerMsg()
    UserO=true
}

let WinZoneCheck =()=>{
    for(let ele of winZone){
        // console.log(ele[0],ele[1],ele[2])
        // console.log(boxes[ele[0]].innerText,boxes[ele[1]].innerText,boxes[ele[2]].innerText)
        
        let pos1=boxes[ele[0]].innerText
        let pos2=boxes[ele[1]].innerText
        let pos3=boxes[ele[2]].innerText
        if(pos1 !=''&& pos2!= '' && pos3!=''){
            if(pos1 == pos2 && pos2 ==pos3)
            {
                // console.log("Winner",pos1)
                showWon(pos1)
            }
        }
        
    }
}


let winZone = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]





boxes.forEach(box =>{
    box.addEventListener('click',()=>{
        console.log('Clicked Box')
    })
}) 

let UserO=true
for(let ele of boxes){
    // console.log(ele)

    ele.addEventListener('click',()=>{
        if(UserO){
            ele.innerText = 'O'
            UserO=false
        }
        else{
            ele.innerText='X'
            UserO=true
        }
        WinZoneCheck()
        ele.disabled = true
    })
}


newBtn.addEventListener(('click'),()=>{
    cleanBox()
    scoreO=0
    scoreX=0
    scoreOBtn.innerText='0'
    scoreXBtn.innerText='0'

})
restBtn.addEventListener(('click'),()=>{
    cleanBox()
})