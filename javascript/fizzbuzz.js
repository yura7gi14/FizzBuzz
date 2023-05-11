//15で割り切れる時には"FizzBuzz"と出力する
//5で割り切れる時には"Buzz"と出力する
//3で割り切れる時には"Fizz"と出力する
//それ以外の時は数字をそのまま出力する
//1から100までの数字を出力する

for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}