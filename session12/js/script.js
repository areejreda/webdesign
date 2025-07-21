


var userNum = Number(prompt("Enter number of users:"));
var users = []

function addUser() {
    var name = prompt("Enter your name:");
    var id = prompt("Enter your ID:");
    var balance = Number(prompt("Enter your balance:"));

    var user = {
        name: name,
        id: id,
        balance: balance
    }

    users.push(user)
}

for (var i = 0; i < userNum; i++) {
    addUser()
}
console.table(users);

function editUserBalanceById() {
    var id = prompt("Enter the id of the user you want to edit:");
    var newBalance = Number(prompt("Enter the new balance:"));
    var user = users.find((user) => user.id == id);
    user.balance = newBalance
    console.table(users)
}


function deleteUserById() {
    var id = prompt("Enter the ID of the user you want to remove:");
    var index = users.findIndex((user) => user.id == id);
    users.splice(index, 1)
    console.table(users);
}
editUserBalanceById();
deleteUserById();