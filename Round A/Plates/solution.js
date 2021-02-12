let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let expect = 'T', N, K, P, T, countT=1, countK = 1;
/*
1 ≤ T ≤ 100.
1 ≤ K ≤ 30.
1 ≤ P ≤ N * K. 
*/
let main = () => {
    rl.on('line', function(line) {
        if (expect === 'T') {
            T = parseInt(line);
            expect = "NKP";
        } else if (expect === "NKP") {
            let inputs = line.split(" ");
            N = inputs[0];
            K = inputs[1];
            P = inputs[1];
            expect = "N-ith";
        }
        else if(expect === "N-ith"){

            console.log(countT)
            console.log(T)

            if(++countT > N) {
                expect = "NKP";
            } else if(++countT > T){
                exitApplication();
            }
            else {
                expect = "N-ith";
            }
        }
    })
};

function exitApplication() {
    rl.close();
    process.exit();
}
main();