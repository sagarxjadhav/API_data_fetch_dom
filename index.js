let add = document.getElementById("Add");


function add_More_Data(){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result =>{
    
        // console.log(result.results[0].picture.large)
        const {name, phone,location,picture, gender} = result.results[0];
        document.querySelector("#parent").innerHTML +=`
        <div class="col">
        <img src="${picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name.first}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Email: ${phone}</li>
          <li class="list-group-item">Gender: ${gender}</li>
          <li class="list-group-item">Location: ${location.country}</li>
        </ul>
        </div>`
    })
}



add.addEventListener("click",()=>{
    add_More_Data();
})

