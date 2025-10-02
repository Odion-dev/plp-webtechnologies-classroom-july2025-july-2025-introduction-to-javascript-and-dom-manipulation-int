
let userName = "Guest";
let userAge = 20;
let isMember = true;


if (userAge >= 18 && isMember) {
  console.log(`${userName} is an adult member.`);
} else {
  console.log(`${userName} is either under 18 or not a member.`);
}


function greetUser(name) {
  return `Hello, ${name}! Welcome to the site.`;
}


function calculateTotal(price, taxRate) {
  let total = price + (price * taxRate);
  return total.toFixed(2);
}


console.log(greetUser("Irene"));
console.log("Total with tax: $" + calculateTotal(50, 0.075));


let items = ["Apples", "Bananas", "Cherries", "Dates"];
let itemList = document.getElementById("itemList");

for (let i = 0; i < items.length; i++) {
  let li = document.createElement("li");
  li.textContent = items[i];
  itemList.appendChild(li);
}


let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

document.getElementById("greetBtn").addEventListener("click", function() {
  let message = greetUser("Visitor");
  document.getElementById("greetMessage").textContent = message;
});


document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});


document.querySelector(".sidebar p").textContent = 
  "Sidebar updated with JavaScript!";
