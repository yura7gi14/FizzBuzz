# fizzbuzzを実行するためのプログラム
# このプログラムを実行すると、1から100までの数字を出力する
# ただし、3の倍数のときはFizz、5の倍数のときはBuzz、3と5の倍数のときはFizzBuzzと出力する
i = 0
while i < 100:
    i += 1
    if i % 3 ==0 and i % 5  == 0:
        print("FizzBuzz")
    elif  i % 3 == 0:
        print("Fizz")
    elif  i % 5 == 0:
        print("Buzz")
    else:
        print(i)
