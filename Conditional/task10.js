/*=============================================================================================
  Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
  Sample Input: 13			Sample Input: 34			 Sample Input: 256
  Output : -				    Output : 20 ⇔ 100			Output : 100 ⇔ 400
=============================================================================================*/
var a = 450;
if (a < 20) {
  console.log("Number " + a + " is smaller than 20");
} else if (a >= 20 && a <= 100) {
  console.log("Number " + a + " is in range betwwen 20 ⇔ 100");
} else if (a >= 100 && a <= 400) {
  console.log("Number " + a + " is in range betwwen 100 ⇔ 400");
} else {
  console.log("Number " + a + " is larger than 400");
}