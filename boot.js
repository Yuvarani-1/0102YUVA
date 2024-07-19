// const state ={
//     taskList: {
//         {
//             url: "",
//             title: "",
//             description: "",
//             tags: "",
//         }
//     }
// }


const state={
    taskList: []
}


//DOM
const taskcontents=document.querySelector(".task_contents");
const taskModal=document.querySelector(".task_modal_body");

//console.log(taskcontents);
//console.log(taskModal);

const htmlTaskContent= ({id,title,description,type,url}) => `
    <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
    <div class="card shadow-sm task__card">
        <div class="card-header d-flex justify-content-end task__card__header">
            <button type="button" class="btn btn-outline-primary mr-2" name=${id}>
                <i class="fas fa-pencil-alt" name=${id}></i>
            </button> 
            <button type="button" class="btn btn-outline-danger mr-2" name=${id}>
                <i class="fas fa-trash-alt" name=${id}></i>
            </button>
        </div>
        <div class="card-body">
        ${
            url &&
            `<img src=${url} alt="card image top" class="card-image-top md-3 rounded-lg" />`
        }
        <h4 class="card-title">${title}</h4>
        <p class="trim-3-lines text-muted">${description}</p>
        <div class="tags text-white d-flex flex-wrap">
            <span class="badge text-bg-primary m-1">${type}</span>
        </div>
        </div>
        <div class="card-footer>
            <button type="button" class="btn btn-outline-primary float-right data-bs-toggle="modal" data-bs-target="#showtask">Open Task</button>
        </div>
    </div> 
    </div>
    </div>
    `


const htmlmodalcontent= ({id, title, description,url})=>{
    const date = new Date(parseInt(id));
    return `
        <div id=${id}>
             ${
                url &&
                `img srrc=${url} alt="card image cap" class="img-fluid mb-3" />`
             }
             <strong class="text-sm text-muted">Created on ${date.toDateString()} </strong>
             <h2 class="my-3">${title}</h2>
             <p class="lead">${description}</p>
        </div>
    `
}

const updateLocalStorage= () =>{
    localStorage.setItem("task",JSON.stringify({
        tasks: state.taslLast
    }))
}

const loadInitialData = ()=>{
    const localStortageCopy= JSON.parse(localStorage.tasks);
    if(localStortageCopy) state.taskList = localStortageCopy.tasks

    state.taskList.map((carddatew) => {
        taskcontents.insertAdjacentHTML()
    })
}