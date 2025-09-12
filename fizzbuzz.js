for(let i = 1; i <= 100; i++){
    switch(true){
        case(i % 3 === 0 && i % 5 === 0):
            console.log(i, "FizzBuzz!")
            break;

        case(i % 3 === 0):
            console.log(i, "Fizz!")
            break;

        case(i % 5 === 0):
            console.log(i, "Buzz!")
            break;

        default:
            console.log(i)
    }
}









// if(i % 3 === 0){
//         console.log(i,": Fizz!")
//     }else if(i % 5 === 0)[
//         console.log(i,": Buzz!")
//     ]