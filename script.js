document.write("<h1> Q1</h1>")
var a = 3;
var b = 5;
var c = a + b;
document.write("sum of a and b is:", c)

document.write("<h1> Q2</h1>")

var sub = a - b;
document.write("sub of a and b is:", sub)
document.write("<br>")

var mul = a * b;
document.write("mul of a and b is:", mul)
document.write("<br>")

var div = a / b;
document.write("div of a and b is:", div)
document.write("<br>")

var mod = a % b;
document.write("mod of a and b is:", mod)
document.write("<br>")

document.write("<h1> Q3</h1>")
var variable;
document.write("Value after variable declaration is:", variable)
document.write("<br>")

variable = 5;
document.write("initial value : ", variable)
document.write("<br>")

variable++
document.write("Value after increment is: ", variable)
document.write("<br>")

var num = variable + 7
document.write("value after addition; ", num)
document.write("<br>")

num--
document.write("value of after decrement: ", num)
document.write("<br>")

var reminder = num % 3;
document.write("  the reminder is: ", reminder)
document.write("<br>")

document.write("<h1> Q4</h1>")
document.write("<br>")
var ticket = 600;
var total = ticket * 5;
document.write("total cost to buy 5 ticket to ma movie is :", total)
document.write("PKR")
document.write("<br>")

document.write("<h1> Q5</h1>")
document.write("<br>")

var table = 4;
for (i = 1; i <= 10; i++)
    document.write(table, "*", i, "=", table * i, "<br>")

document.write("<h1> Q6</h1>")
document.write("<br>")
var Cel = 25;
var F = (Cel * 9 / 5) + 32;
document.write(25, "<sup>o</sup>C is ", F, "<sup>o</sup>F")
document.write("<br>")

var fah = 70;
var C = (fah - 32) * 5 / 9;
document.write(fah, "<sup>o</sup>F is ", C, "<sup>o</sup>C")

document.write("<h1> Q7</h1>")
document.write("<br>")

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalItem1Cost = priceItem1 * quantityItem1;
var totalItem2Cost = priceItem2 * quantityItem2;
var subtotal = totalItem1Cost + totalItem2Cost;
var totalCost = subtotal + shippingCharges;

document.write("<h2>SHOPPING CART</h2>");
document.write("price of item 1 is ", priceItem1, "<br> Quantity of item 1 is ", quantityItem1, "<br> PRice of item 2 is ", priceItem2, "<br> Quantity of item 2 is ", quantityItem2, "<br> Shipping charges", shippingCharges,"<br><br>")
document.write("Total cost of your order is ",totalCost)

document.write("<h1> Q8</h1>")
document.write("<br>")

var marks = 480;
var totalmarks =550;
var per = marks/totalmarks*100
document.write("Total marks",totalmarks,"<br>","Marks Obtain :",marks,"<br>","Percentage",per,"%")

document.write("<h1> Q9</h1>")
document.write("<br>")
var dollar = 10;
var riyal= 25;
var dollartopkr=302;
var riyaltopkr=80;

document.write("Total Currency in PKR :",(dollar*dollartopkr)+(riyal*riyaltopkr))

document.write("<h1> Q10</h1>")
document.write("<br>")
var number = 5;
document.write((number+5*10)/2)

document.write("<h1> Q11</h1>")
document.write("<br>")
var year =2023;
var birthyear=2004
document.write("Current Year: ",year,"<br>","Birth Year: ",birthyear,"<br>","Your age is: ",year-birthyear)

document.write("<h1> Q12</h1>")
document.write("<h2>The Geometrizer</h2>")
var r= 5;
var π = 3.142;
var circumference =2*π*r;
var area = π*r;
document.write("Radius of circle is : ",r,"<br>","The circumference is : ",circumference,"<br>","The area is : ",area)

document.write("<h1> Q12</h1>")
document.write("<br>")
document.write("<h2>The Lifetime Supply Calculator</h2>")
var snack= "Cheetos";
var currentage = 19;
var maxage = 98;
var snackperday = 2;

var remainyear = maxage-currentage;
var snacksperyear = snackperday*365;
var totalsnacks = remainyear*snacksperyear;
document.write("Favourite Snack : ",snack,"<br>","Current Age : ",currentage,"<br>","Estimated Maximum Age : ",maxage,"<br>","Amount of Snacks per day : ",snackperday,"<br>",)
document.write("you will need ", totalsnacks," ",snack,"to last you until the ripe old age of ",maxage)

