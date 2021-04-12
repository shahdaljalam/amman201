var username = prompt('enter your name')
console.log(username)

alert('welcome ' + username)

for(var question = 1 ; question <= 5 ; question++)
{
    var answer;
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


alert('i had fun, nice to meet you  ' + username)
