var isDate = function (input) {
  //   write your code he
	return !isNaN(Date.parse(input));
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
