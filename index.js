let events = [];
const spanCount = document.querySelector('.spanCount');
const eventslist = document.querySelector('ul');


function render(){
    spanCount.innerHTML = events.length;
    const html = events.map(function(event){
    console.log(event);
     return `
        <li>
       <h5> ${ event.name } </h5>
       ${ event.description }
       <h4> ${ event.date } </h4>
        </li>
        `;
    }).join('');
    eventslist.innerHTML = html;
}

render();

async function fetchEvents(){
    try{
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309_ftb_et_web_am/events');
        const json = await response.json();
        events = json.data;
        render();
    }
    catch(error){
        console.log(error);
    }
}

fetchEvents();