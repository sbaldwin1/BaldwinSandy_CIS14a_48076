/*
	Sandy Baldwin
	Purpose: lab section 12 - Data Structures
*/
var friends = {};

friends.bill = {
firstName: "Bill",
lastName: "Gates",
number: "(905)333-3333",
address: ['One Microsoft Way','Redmond','WA','98052'],
};

friends.steve = {
firstName: "Steve",
lastName: "Jobs",
number: "(333)444-5652",
address: ['One Apple Road', 'Hollywood', 'Ca', '67890'],
};

var list = function() {
for (var info in friends) {
console.log(info);
};
};
var search = function(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};