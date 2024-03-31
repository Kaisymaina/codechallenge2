function numbers(first, last) {
    let result = [];
    if (first <= last) {
        for (let i = first; i <= last; i++) {
            result.push(i);
        }
    } else {
        for (let i = first; i >= last; i--) {
            result.push(i);
        }
    }
    return result;
}

// to test whether the code is working
console.log(numbers(28, 40)); 
