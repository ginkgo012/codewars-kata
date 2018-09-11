/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

var maxSequence = function (arr) {
    var max = -Infinity;
    var temp = 0;
    var tempArr = [];

    if (arr === undefined || arr.length == 0) {
        return 0;
    }

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            tempArr = arr.slice(i, i + j + 1);
            temp = tempArr.reduce((a, b) => a + b, 0);
            if (temp > max) {
                max = temp;
            }
        }
    }
    return (max < 0 ? 0 : max);
}