// cb hell and nothing to add here


// promise 

const sequence = new Promise((resolve) => {
    let count = 1;
    setInterval(() => {
        resolve(count++);
    });
});

// promise returns one value, good for server request, but sometimes we need to work with multiple values
sequence.then((result) => console.log(result));
sequence.then((result) => console.log(result));

// generator

const sequence1 = function* generatorFn() {
    let item = 1;
    while(true) {
        yield(item++);
    }
}();

// with generators we always need to ask for new data, but it is better to be notified when new value arrived
console.log(sequence1.next().value);
console.log(sequence1.next().value);
console.log(sequence1.next().value);
console.log(sequence1.next().value);

//rxjs - getting multiple values over time

import { interval } from "rxjs";

interval(1000).subscribe((value) => {
    console.log(value);
})