
var ms = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitSystem(counter){

    if(counter > 100){
        ms = 2
    }
    if(counter<= 2){
        ms = 100
    }
    if((counter > 2)&&(counter<4)){
        ms = 80
    }
    if((counter > 4)&&(counter<8)){
        ms = 60
    }
    if((counter > 8)&&(counter<10)){
        ms = 50
    }
    if((counter > 10)&&(counter<20)){
        ms = 40
    }
    if((counter > 20)&&(counter<30)){
        ms = 30
    }
    if((counter > 30)&&(counter<100)){
        ms = 20
    }


    await sleep(ms)

}

var ammount = 0
function lowMoney(){
    
    ammount = Math.random()* (2 - 1) + 1
    ammount = ammount.toFixed(2)
    console.log(ammount, 'x')
    display(ammount)
    bet(ammount)
}

function midMoney(){
    ammount = Math.random()* (10 - 2) + 2
    ammount = ammount.toFixed(2)
    console.log(ammount, 'x')
    display(ammount)
    bet(ammount)
}

function bigMoney(){
    ammount = Math.random()* (30 - 10) + 10
    ammount = ammount.toFixed(2)
    console.log(ammount, 'x')
    display(ammount)
    bet(ammount)
}

function jackpot(){
    ammount = Math.random()* (100 - 30) + 30
    ammount = ammount.toFixed(2)
    console.log(ammount, 'x')
    display(ammount)
    bet(ammount)
}

async function display(x){
    let displayAmmount = 1.00
    while(displayAmmount <= x){
        displayAmmount = displayAmmount + 0.01
        await waitSystem(displayAmmount)
        document.getElementById("crash-value").innerHTML = (displayAmmount.toFixed(2)) + 'x'

    }
    if(document.getElementById("crash-value").style.color != 'green'){
    document.getElementById("crash-value").style.color = 'red'
    document.getElementById('money-input').value = ''
    if(displayAmmount >= x){
        document.getElementById('bet').style.display = 'block'
    }
}
   
}

var money = 100
var PlayerBet = 0
var prize = 0

document.getElementById('player-money').innerHTML = money.toFixed(2) +'$'

async function bet(x){
    document.getElementById("crash-value").style.color = 'white'
    let displayAmmount = 1.00
    PlayerBet = document.getElementById("money-input").value 
    PlayerBet = Number(PlayerBet)
    if(Number(PlayerBet) > money){
        alert('No money')
        console.log(money, 'losu')
    }
    else{
    money = Number(money)
    money = money - PlayerBet
    document.getElementById('player-money').innerHTML = money.toFixed(2) +'$'
    console.log(money/100)
    if((money/100) > 1){
       var moneyBox =  document.getElementById('money-box')
       moneyBox.style.width = '150px'
    }

    document.getElementById('betbtn').style.display = 'none'
    document.getElementById('withdraw').style.display = 'inline'
    document.getElementById('bet').style.display = 'block'
    document.getElementById('win').style.display = 'none'
    parseInt(prize)

    while(displayAmmount <= x){

        displayAmmount = displayAmmount + 0.01
        await waitSystem(displayAmmount)
        document.getElementById('bet').innerHTML = '+' + (((PlayerBet) * (displayAmmount)) -PlayerBet ).toFixed(2) + '$'
        prize = (((PlayerBet) * (displayAmmount)) -PlayerBet ).toFixed(2)
        prize = Number(prize)
        // document.getElementById('account').innerHTML = ('Money: '+money.toFixed(2)+'$')

        }
        console.log(prize)

    if(displayAmmount >= x){ 
        document.getElementById('betbtn').style.display = 'inline'
        document.getElementById('withdraw').style.display = 'none'
    }
}
}

async function withdraw(){
    document.getElementById('money-input').value = ''
    document.getElementById('withdraw').style.display = 'none'
    document.getElementById('bet').style.display = 'none'
    document.getElementById("crash-value").style.color = 'green'
    document.getElementById('win').style.display = 'block'

    document.getElementById('win').innerHTML = 'You win: '+ prize + '$'
    
    
    if(((document.getElementById("crash-value").innerHTML))<=(ammount)){
        money = money + prize + PlayerBet
        document.getElementById('player-money').innerHTML = money.toFixed(2) +'$'
        console.log(money+'money')
        console.log(typeof money)
        console.log(PlayerBet+'bet')
        console.log(prize+'prize')

        document.getElementById('bet').innerHTML = 0
    }
}

function maxBet(){
    document.getElementById('money-input').value = money.toFixed(2)
}
function halfBet(){
    document.getElementById('money-input').value = money.toFixed(2)/2
}
function lastBet(){
    document.getElementById('money-input').value = PlayerBet
}
function qtrBet(){
    document.getElementById('money-input').value = money.toFixed(2)/4
}

///seeds

function crash(){
    
    let randomSeed = Math.floor(Math.random() * 100)
    console.log(randomSeed, '<- rndSeed')

    if((randomSeed>=0)&&(randomSeed<=70)){

        lowMoney()

    }

    if((randomSeed>=71)&&(randomSeed<=87)){

        midMoney()

    }
    if((randomSeed>=88)&&(randomSeed<=97)){

        bigMoney()

    }
    if((randomSeed>=98)&&(randomSeed<=100)){

        jackpot()

    }


}






