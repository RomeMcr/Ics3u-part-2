"use strict";

var arrayToSort = [];
var threshold = 100;
var maximumSize = 100;
var bruteForceValue;
var binarySearchValue;

//the number of elements to place in the array
var numElements = Math.floor(Math.random() * threshold);

//display the array when the document loads
$(document).ready(function () {

    loop("myList");
});

//execute the bubble sort algorithm
$("#bubbleSort").click(function () {

    //current time on start
    $("#currentTime1").html(new Date());

    bubbleSort();

    $("#bubbleSortResult").html(loop("bubbleSortResult"));

    //current time once complete
    $("#endTime1").html(new Date());
});

//execute the insertion sort algorithm
$("#insertionSort").click(function () {

    //current time on start
    $("#currentTime2").html(new Date());

    $("#insertionSortResult").html(loop("insertionSortResult"));
    //write insertion sort here

    //current time once complete
    $("#endTime2").html(new Date());
});

//execute the selection sort algorithm
$("#selectionSort").click(function () {

    //current time on start
    $("#currentTime3").html(new Date());

    $("#selectionSortResult").html(loop("selectionSortResult"));

    //write selection sort here

    //current time once complete
    $("#endTime3").html(new Date());
});

//do not need to be sorted
$("#bruteForce").click(function () {

    bruteForceValue = $("#bruteForceValue").val();

    //to do write brute force alogothim
    bruteForce();
});

//this alogthim requires the lis r to be sroted in order
$("#binarySearch").click(function () {

    binarySearchValue = $("#binarySearchValue").val();

    //to do write binary search alogothim
    binarySearch();
});

function loop(myId) {
    $("#" + myId).append("[");

    if (arrayToSort.length == 0) {
        //populate the array with random numbers
        for (var i = 0; i < numElements; i = i + 1) {
            var num = Math.floor(Math.random() * maximumSize);
            arrayToSort.push(num);

            if (i == numElements - 1) $("#" + myId).append(num);else $("#" + myId).append(num + ", ");
        }
    } else {
        for (var i = 0; i < numElements; i = i + 1) {
            if (i == numElements - 1) $("#" + myId).append(arrayToSort[i]);else $("#" + myId).append(arrayToSort[i] + ", ");
        }
    }
    $("#" + myId).append("]");
}

function bubbleSort() {
    do {
        var changed = false; //when change is ture do the 
        //for loop, and when change is false dont do this.
        for (var i = 0; i < arrayToSort.length - 1; i++) {
            //myList[i] start with 0 then we `iterate through the array
            // i did this " myList.length - 1 "because we will get an error on the last number and the last number have to be the biggest from the array

            if (arrayToSort[i] > arrayToSort[i + 1]) {
                //if the frist index is greater than the second index
                var temp = arrayToSort[i]; //then we make a variable named temp and
                arrayToSort[i] = arrayToSort[i + 1]; //then we going to overwrite the frist number and the secong number
                arrayToSort[i + 1] = temp; //then with the one next to the number we re gonna put the value in the the one before it
                changed = true; //then we set the change to true
            }
        }
    } while (changed);
}

function bruteForce() {
    var matched = false; //we set the matched to falus
    var position;

    for (var start = 0; start < arrayToSort.length; start++) // this line will break when start is bigger than or equal than the last number 
    {
        if (arrayToSort[start] == bruteForceValue) {
            matched = true;
        }
    }
    if (matched == true) {
        $("#bruteForceResult").html("The result is " + matched + " in position " + position); // this just print out the result
    } else {
        $("#bruteForceResult").html("The result is " + matched); // this just print out the result
    }
}

function binarySearch() {
    // initial values for start, middle and end
    var low = 0; //the low means where u start
    var high = arrayToSort.length - 1; //the high means where u finish
    var found = false; //we set the found to false
    var position; //this tells u where the number is

    while (low <= high) // While the middle low is greater than or equal to the high do this:
    {
        var mid = Math.floor((high + low) / 2); // sets a variable name mid and calutate the mid point of the array 
        //then we look at the mid point inside of the array
        if (binarySearchValue == arrayToSort[mid]) //if the number we put in equels to the number in the mid point
            {
                found = true; //if is that case then say we find the number
                position = mid;
                break; //it stops once a value is found
            }
        if (binarySearchValue < arrayToSort[mid]) //if the number we put in is smaller then the mid point number 
            {
                high = mid - 1; //if it is that case then the highest number is going to be the mid point number and we minue one because the number we put in is not the mid point number
            } else // if the number we put in is bigger than mid point number 
            {
                low = mid + 1; // then we r going to make the low equal to the mid point and puls one because the number we put in is not the mid point number
            }
    }
    if (found == true) {
        $("#binarySearchResult").html("The result is " + found + " in position " + position); // this just print out the result
    } else {
        $("#binarySearchResult").html("The result is " + found); // this just print out the result
    }
}
//# sourceMappingURL=sorting.js.map
