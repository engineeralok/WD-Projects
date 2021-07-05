console.log("hello World");

// if user add a note following code will store it in localStorage. 
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click',function(e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notes))
    addTxt.value = "";
    console.log(notesObj)
})