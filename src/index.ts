import { interval, Observable } from "rxjs";

const sequence$ = new Observable((subscruber) => {
    let count = 1;    

    const intervalId = setInterval(() => {
        if(count % 5 === 0){
            clearInterval(intervalId);
            subscruber.complete();
        }
        subscruber.next(count++);
    }, 2000)

    return () => {
        console.log('unsubscribe');
        clearInterval(intervalId);
    }
})

// nothing will happen before subscription. that's why it is called lazy-push

//const subscription = sequence$.subscribe({
//    next: (value) => console.log(value),
//    error: () => {},
//    complete: () => console.log('completed')
//});

//setInterval(() => {
//    subscription.unsubscribe();
//}, 3000);

// discussion about eternal streams

const sequence2$ = interval(1000);

const subscription2 = sequence2$.subscribe((value) => {
    console.log('Sub 1', value)
});

sequence2$.subscribe((value) => {
    console.log('Sub 2', value)
});

// unsubscribe doesn't complete the stream, if we have another subscriber - the stream will emit values
setTimeout(() => {
    subscription2.unsubscribe();
}, 5000)