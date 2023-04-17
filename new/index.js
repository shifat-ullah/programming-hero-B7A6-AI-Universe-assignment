const fetchapi = ()=>{
    
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => display(data.data.tools.slice(0,3)))
}

const display= (tool)=>{
    // console.log(data.data.tools)

    
    tool.forEach(element => {

        // console.log(element)

         

    const fatchdata = document.getElementById('fatch-data')

        // console.log(element)
        

        const div = document.createElement('div');
        div.innerHTML=`
        <img src="${element.image}" class="card-img-top mt-5 h-50" alt="...">
                  <div class="card-body">
                    <h5 class="card-title  mb-1">Features</h5>
                    <p class="card-text">1. ${element.features[0]}</p>
                    <p class="card-text">2. ${element.features[1]}</p>
                    <p class="card-text">3. ${element.features[2]}</p>
                  </div>
                  <hr>
                  <div class="card-footer d-flex justify-content-between">
                  </div>
                  `

                  fatchdata.appendChild(div)
                   
    })
}


const seeMore = () =>{
    const url='https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res => res.json())
    .then(data => display(data.data.tools))
}


fetchapi()