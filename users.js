
const showUser = document.querySelector('.user');
const show = document.querySelector('.hoho');
let userShow = '';

window.onload = function() {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(post => {
    
            //JSON.stringify(post);
    
            //console.log(post);
            post.data.forEach(element => {
    
                userShow += `
                <div class="grid-container">
                <div class="row">
                  <div class="col-sm">
                    ${element.id}
                  </div>
                  <div class="col-sm">
                  ${element.email}
                  </div>
                  <div class="col-sm">
                  ${element.first_name}
                  </div>
                  <div class="col-sm">
                  ${element.last_name}
                </div>
                <div class="col-sm">
                <img src=${element.avatar}>
              </div>
                </div>
              </div>`;
            })
            //console.log(userShow);
            showUser.innerHTML = userShow;
            show.append(showUser);
    
        })
    }
    