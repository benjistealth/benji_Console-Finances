var finances = [
    ['Jan-2010', 867884], // finances[1] = ['Feb-2010', 984655] --> finances[1][1] --> 984655
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],   // finances [0] = ['Jan-2010', 867884];
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],   // finances [0][1] = 867884;  // get the number out
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],  // finances[0][0] = 'Jan-2010';  // get the dates out
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];

//Total Number of Months
var months = 0;
months = finances.length;

//Total value of all Months in data set
var total = 0;
for (var i = 0; i < finances.length; i++) {
    total = total + finances[i][1];
}
//Average of "changes" in profilt / loss
var change = 0;
var changes = [];
for (let i = 1; i < (finances.length); i++) {

    change = ((finances[i][1]) - finances[i - 1][1]);
    changes.push(change);
}
//calculate the total of the changes array
//divide total by the array length to get average
var totalChanges = 0;
var averageChange = 0;
for (var i = 0; i < changes.length; i++) {
    totalChanges = totalChanges + changes[i];
}

averageChange = totalChanges / changes.length;
//make averageChange to 2 decimal places - thanks Stack Overflow :-)
averageChange = averageChange.toFixed(2);

//Greatest increase in profits
//find the largest positive number in the changes array 1926159
//need to get the dates out for these records
//got the below from Stack Overflow, but had already learned about it in Mozilla docs
var largestIncrease = Math.max.apply(0, changes);

//find the month where the largest increase happened
//using the changes array to find the Nth element +1 as we need to include the last value

var increaseDate = "";

for (var i = 0; i < changes.length; i++) {
    if (changes[i] === 1926159) {
        increaseDate = finances[i + 1][0];
    }
}

//greatest decrease in loses
//largest negative number in the changes array -2196167

var largestDecrease = Math.min.apply(0, changes);

//finding month where largest negative happens and put date into var

var decreaseDate = "";

for (var i = 0; i < changes.length; i++) {
    if (changes[i] === -2196167) {
        decreaseDate = finances[i + 1][0];
    }
}

//Tidy up console output to meet spec
console.log("Financial Analysis");
console.log("----------------------------");
console.log("Total Months: " + months);
console.log("Total: $" + total);
console.log("Average  Change: $" + averageChange);
console.log("Greatest Increase in Profits: " + increaseDate + " ($" + largestIncrease + ")");
console.log("Greatest Decrease in Profits: " + decreaseDate + " ($" + largestDecrease + ")");

//Experimental placing data onto webpage using JS (basic method directly using data above)

// add some content to newly created elements
document.getElementById("heading").innerHTML = "Financial Analysis";
document.getElementById("total-months").innerHTML = "Total Months: " + months;
document.getElementById("total-value").innerHTML = "Total: $" + total;
document.getElementById("average-change").innerHTML = "Average  Change: $" + averageChange;
document.getElementById("greatest-increase").innerHTML = "Greatest Increase in Profits: " + increaseDate + " ($" + largestIncrease + ")";
document.getElementById("greatest-decrease").innerHTML = "Greatest Decrease in Profits: " + decreaseDate + " ($" + largestDecrease + ")";
