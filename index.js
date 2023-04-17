const fetchapi = ()=>{
  fetch('https://openapi.programming-hero.com/api/ai/tools')
  .then(res => res.json())
  .then(data => display(data.data.tools.slice(0,3)))
}

const display= (tool)=>{
  
  
    // console.log(data)
    const fetchdata = document.getElementById('fatch-data');
    fetchdata.innerHTML=""
    
    fetchdata.classList.add('col');
    tool.forEach((element) => {
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
                  
                 <div>
                 <h5>${element.name}</h5>
                 <small class="text-body-secondary"><i class="fa-regular fa-calendar"></i> ${element.published_in}</small>
                 </div>

                 <div class="d-flex align-items-center">
               
          
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-arrow-right" onclick="showApiDetail('${element.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i> 
                </button>
                  </div>
                  </div>
                  
        
        `;
        fetchdata.appendChild(div);
        
        
      
    });
    
}
fetchapi()

const seeMore = () =>{
  toggleSpinner(true);
  const url='https://openapi.programming-hero.com/api/ai/tools';
  fetch(url)
  .then(res => res.json())
  .then(data => display(data.data.tools))
  
}







const showApiDetail= id =>{
const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
fetch(url)
.then(res => res.json())
.then((data)=>showapidata(data.data))

}

const showapidata = api =>{
 
  console.log(api.description)
 const modalBody = document.getElementById('first-card-body');
 modalBody.innerHTML=`
            <h5 class="card-title">${api.description}</h5>
            <div class="  d-md-flex justify-content-around  px-4 mt-3">
              <div class="w-lg-25 bg-body-tertiary rounded-md px-2 my-2">
                <p class="m-0 p-0 px-2  fw-semibold text-center text-success">${api.pricing ? api.pricing[0]. price : 'data not found'}</p>
                <p class="m-0 p-0 px-2   fw-semibold text-center text-success">${api.pricing ? api.pricing[0]. plan : 'data not found'}</p>
              </div>

              <div class="w-lg-25 bg-body-tertiary rounded-md my-2">
                <p class="m-0 p-0 px-2  fw-semibold text-center text-danger">${api.pricing ? api.pricing[1]. price : 'data not found'}</p>
                <p class="m-0 p-0 px-2   fw-semibold text-center text-danger">${api.pricing ? api.pricing[1]. plan : 'data not found'}</p>
              </div>

              <div class="w-lg-25 bg-body-tertiary rounded-md px-2 my-2">
                <p class="m-0 p-0 px-2  fw-semibold text-center text-primary">${api.pricing ? api.pricing[2]. price : 'data not found'}</p>
                <p class="m-0 p-0 px-2   fw-semibold text-center text-primary">${api.pricing ? api.pricing[2]. plan : 'data not found'}</p>
              </div>

              
            </div>

            <div class="d-md-flex gap-1 justify-content-between mt-3">
            <div>
              <h3>Features</h3>
              <ul>
                <li>${api.features['1'].feature_name ? api.features['1'].feature_name : 'not avaliable'}</li>
                <li>${api.features['2'].feature_name ? api.features['2'].feature_name : 'not avaliable'}</li>
                <li>${api.features['3'].feature_name ? api.features['3'].feature_name : 'not avaliable'}</li>
              </ul>
            </div>

            <div>
            <h3>Integrations</h3>
            <ul>
              <li>${api.integrations ? api.integrations[0] : 'not avaliable data'}</li>
              <li>${api.integrations && api.integrations[1] ? api.integrations: 'not avaliable'}</li>
              <li>${api.integrations && api.integrations[2] ? api.integrations:  'not avaliable'}</li>
            </ul>
            </div>

            </div>
            <div>
            
 
 `;

 const modalBody2 = document.getElementById('second-card-modal');
 modalBody2.innerHTML=`
 
 <img src="${api.image_link[0]}" class="card-img-top p-2 rounded h-75 w-100 " alt="...">
 <div id="accurecy-btn" class="btn btn-danger position-absolute  px-4 py-2 ">${api.accuracy.score ? api.accuracy.score * 100 + 'accuracy' : ''}</div>
 <div class="card-body text-center">
 <h5 class="card-title">${api.input_output_examples[0].input }</h5>
 <p class="card-text">${api.input_output_examples[0].output}</p>
  
 `;       
}


const toggleSpinner = isLoading =>{
  const LoaderSection = document.getElementById('loder');
  if(isLoading){
    LoaderSection.classList.remove('d-none')
  }else{
    LoaderSection.classList.add(d-none);
  }
}
 
