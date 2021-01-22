const addUser = document.querySelector('.add-post-form');
const url = 'https://reqres.in/api/register';
//const emailValue = document.getElementById('exampleInputEmail1');
//const passValue = document.getElementById('exampleInputPassword1');

const userLogin = document.querySelector('.second');

const showList = document.querySelector('.show');

const showUser = document.querySelector('.user');

let userShow = '';
let output = '';


//GET
 
fetch('https://reqres.in/api/users/2')
.then(res=> res.json())
.then(post=> {
   
    //JSON.stringify(post);
    console.log(post);
   userShow += ` <table class="table table-bordered">
   <thead>
       <tr>
           <th scope="col">Id</th>
           <th scope="col">Email</th>
           <th scope="col">First Name</th>
           <th scope="col">Last Name</th>
           <th scope="col">Avatar</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td>${post.data.id}</td>
           <td>${post.data.email}</td>
           <td>${post.data.first_name}</td>
           <td>${post.data.last_name}</td>
           <td><img src = ${post.data.avatar}></td>
       </tr>
   </tbody>
</table>`;
//console.log(userShow);
showUser.innerHTML=userShow;
addUser.append(showUser);
  
})


function goToList() {
    document.getElementById("create").style.display = "block";
    document.getElementById("list").style.display = "none";
}

function goToForm() {
    document.getElementById("list").style.display = "block";
    document.getElementById("create").style.display = "none";  
}


addUser.addEventListener('submit', (e) => {
    const emailValue = document.getElementById('exampleInputEmail1');
    const passValue = document.getElementById('exampleInputPassword1');
    e.preventDefault();

    //console.log(emailValue.value);
    fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers:
            { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
            email: emailValue.value,
            password: passValue.value

        })
    })
        .then(res => res.json())
        .then(json => renderEmail(json));

})

function renderEmail(json) {
    //console.log(json);
    if (json.id!==undefined && json.token!==undefined) {
       output+=` <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Token</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>${json.id}</td>
                    <td>${json.token}</td>
                </tr>
            </tbody>
        </table>`;
    showList.innerHTML = output;
    addUser.append(showList);
    alert ("Login successfully");
    }
    else{
        alert ("Login Unsuccessful");
    }
    //const h2 = document.createElement('h2')
    //h2.innerHTML = `<h2>${json.id}</h2>`
    //addUser.append(h2);

    //jokesHTML.innerHTML += '<p class="joke">' + joke.joke + '</p>'
    //postField.innerHTML+= json.email;
}
if(addUser){
userLogin.addEventListener('submit', (e) => {
    const emailVal = document.getElementById('exampleInputEmail');
    const passVal = document.getElementById('exampleInputPassword2');
    e.preventDefault();

    //console.log(emailValue.value);
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers:
            { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
            email: emailVal.value,
            password: passVal.value

        })
    })
        .then(res => res.json())
        .then(book => renderLogin(book));

})
}

function renderLogin(book){
    console.log(json);
    //if (json.token!==undefined)
    alert ("Login successfully");
}

