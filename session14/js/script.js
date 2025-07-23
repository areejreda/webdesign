
var users=[]

var mform=document.getElementById('mform')
mform.addEventListener('submit',(e)=>{
    e.preventDefault()
var user={
    name:e.target[0].value,
    email:e.target[1].value
}
users.push(user)
// console.table(users)
var ul = document.createElement('ul')
var li=document.createElement('li')
li.innerText = `Name: ${user.name} Email: ${user.email}`
ul.appendChild(li)
document.body.appendChild(ul)
}
)