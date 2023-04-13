const faceData = ()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res => res.json())
    .then((data)=>fatchDatashow(data.data.slice(0,2)))
}

const fatchDatashow = data =>{
    // console.log(data)
    const fetchdata = document.getElementById('fatch-data');
    
    fetchdata.classList.add('col');
    data.tools.forEach((element) => {
        console.log(element)
        const div = document.createElement('div');
        div.innerHTML=`
        <img src="${element.image}" class="card-img-top mt-5 h-50" alt="...">
                  <div class="card-body">
                    <h5 class="card-title mt-2 mb-2">Features</h5>
                    <p class="card-text">1. ${element.features[0]}</p>
                    <p class="card-text">2. ${element.features[1]}</p>
                    <p class="card-text">3. ${element.features[2]}</p>
                  </div>
                  <hr>
                  <div class="card-footer d-flex justify-content-between">
                  
                 <div>
                 <h5>${element.name}</h5>
                 <small class="text-body-secondary"><i class="fa-regular fa-calendar"></i> ${element.published_in}</small>
                 </div>

                 <div class="d-flex align-items-center">
                 <p class="btn "><i class="fa-solid fa-arrow-right"></i></p>
                 </div>
                  </div>
                  
        
        `;
        fetchdata.appendChild(div);
        
        
    });
}
faceData()

 const seeMore = () =>{
  const url = 'https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res => res.json())
    .then(data => fatchDatashow(data.data))
} 
 
