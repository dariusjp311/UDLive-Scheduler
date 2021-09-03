let events = [];
//Function to add the users value as JSON and appends to an array
const addEvent = (ev) =>{
    ev.preventDefault();
    let event = {
        startTime: document.getElementById("start").value,
        endTime: document.getElementById("end").value,
        eventType: document.getElementById("eventType").value,
        eventID: document.getElementById("ID").value,
        description: document.getElementById("description").value
    }
    console.log(event)
    events.push(event)
    document.forms[0].reset(); //to clear forms for the next entry
    console.log(events)
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener("click", addEvent);
});