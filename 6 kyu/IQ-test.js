// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers) {
    var num = numbers.split(' ').map(Number);
    console.log(num);


    for (i = 0; i < num.length; i++) {
        if ((num[i + 1] - num[i]) % 2 == 0) {

        }
        else if ((num[i + 2] - num[i]) % 2 == 0) {
            return i + 2;
        }
        else if ((num[i + 2] - num[i]) % 2 == 1) {
            return i + 1;
        }
        else return 3;

    }
}

function iqTest(numbers) {
    var numArr = numbers.split(' ').map(Number);
    console.log(numArr);
    var even = numArr.filter(item => item % 2 === 0)
    var odd = numArr.filter(item => item % 2 === 1)
    console.log(even);
    console.log(odd);
    return even.length > odd.length ? numArr.indexOf(odd[0]) + 1 : numArr.indexOf(even[0]) + 1
}