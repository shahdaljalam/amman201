let username = prompt('enter your name')
console.log(username)

alert('welcome ' + username)

for(let question = 1 ; question <= 5 ; question++)
{
    let answer;
    switch(question)
    {
        case 1:
            answer  = prompt('do you think that i am a girl ?')
        break;
        case 2:
            answer  = prompt('do you think that i am oldar than 25 ?')
        break;
        case 3:
            answer  = prompt('do you think that i studied engineering ?')
        break;
        case 4:
            answer  = prompt('do you think that i am a good programer ?')
        break;
        case 5:
            answer  = prompt('did you enjoy ?')
        break;
    }

    answer = answer.toLowerCase()
    
    while(answer !== 'yes' && answer !== 'y' && answer !== 'no' && answer !== 'n')
    {
        answer = prompt('do you think that i am a girl ?')
        answer = answer.toLowerCase()
    }
    
    if (answer === 'yes' || answer === 'y')
    {
        alert('right answer')
    }
    else
    {
        alert('wrong answer')
    }
}


for(let useranswer1 = 1; useranswer1 < 5 ; useranswer1++ )
{
    let mytall = prompt('can you guess my tall ?')
    console.log(mytall)

    if (mytall < 155){
       alert('too low')
    }

    if(mytall > 155){
        alert('too high')
    }
    if(mytall == 155){
        alert('right answer')
        break
    }
}
alert('the right answer is 155')

let drinks = new Array ('coffee','tea','water')
let breakk = false
for(let useranswer2 = 1; useranswer2 < 7 ; useranswer2++ )
{
    let drink = prompt('can you guess my faviorate drink ?')
    console.log(drink)

    for(let drinkloop = 0 ;drinkloop < 3 ;drinkloop++ ){

        if(drink === drinks[drinkloop])
        {
            alert('right answer')
            breakk = true
        }

    }
    
    if (breakk === true){
         break
    }

}

let mark = 0 
for (let userMark = 0 ; answer = answer !== 'yes' && answer !== 'y' ; userMark++)

alert('i had fun, nice to meet you  ' + username)
