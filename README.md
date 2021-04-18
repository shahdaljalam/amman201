# amman201
I have created this guissing game to play with the user by making him guessing information about me.
It is a 7 questions game and at the end I will print the result. 


## Driver : Raneemabutair

## Navigator : Shahdaljalam

* **I added a new function to this loop***

```
function mytall(){
  for(let useranswer1 = 1; useranswer1 < 5 ; useranswer1++ )
  {
    let mytall = prompt('can you guess my tall ?');
    console.log(mytall);

    if (mytall < 155){
      alert('too low');
    }

    if(mytall > 155){
      alert('too high');
    }
    // eslint-disable-next-line eqeqeq
    if(mytall == 155){
      alert('right answer');
      result++;

      break;
    }
  }
}
mytall();
```

* **I added a result counter for all of the quastions.**
