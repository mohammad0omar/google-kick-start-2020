let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let expect = 'T',
    T, B, N, count=1;

let main = () => {
    rl.on('line', function(line) {
        if (expect === 'T') {
            T = parseInt(line);
            expect = "N & B";
        } else if (expect === "N & B") {
            let inputs = line.split(" ");
            N = inputs[0];
            B = inputs[1];
            expect = "houses";
        } else if (expect === "houses") {
            let sum = 0;
            let houses = line.split(" ");
            houses = countingSort(houses, 1, 1000);
            let i;
            for (i = 0;i < N; i++){
                if(sum + houses[i] > B){
                break;
                } else {
                    sum += houses[i];
                }
            }
            console.log(`Case #${count}: ${i}`)
            count ++;
            if(count > T){
                exitApplication();
            } else {
                expect = "N & B";
            }
        }
    });
}

function exitApplication() {
    rl.close();
    process.exit();
}
main();