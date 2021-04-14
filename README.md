# amman201

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
