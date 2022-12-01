// Localstorage

// if we click the button
let btn = document.getElementById('addbtn');
showNotes();
btn.addEventListener('click', function (e) {
  let title = document.getElementById('title');
  let txt = document.getElementById('ok');
  let tistorage = localStorage.getItem('tit');

  // if the localstorage are empty then nothing move into the localstorage
  if (tistorage == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(tistorage);
  }
    let myObj = {
    title: title.value,
    text: txt.value
  }
  // obj convert into array
  let arr = Array.from(myObj);
  // Order array
  arr.sort();
  notesObj.push(arr);
  console.log(arr)
  // Push the text into localstorage
  localStorage.setItem('tit', JSON.stringify(notesObj));
  // We click the ADD-button the text will be [blank].
  title.value = '';
  txt.value = '';
  showNotes();
});


// Display notes
function showNotes() {
  let notes = localStorage.getItem('tit');
  // if the localstorage are empty then nothing move into the localstorage
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
    
  }
  
   html = '';
   
  notesObj.forEach(function (element, index) {
    html += `
    <div class="my-3 mx-3 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.title} </h5>
        <p class="card-text">${element.text}</p>
        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>

        </div>
</div>
    `;
  });
  let notese = document.getElementById('notes');
 
  if (notesObj.length != 0) {
    notese.innerHTML = html;
  } else {
    notese.innerHTML = `Nothing`;
  }
}

/// Function to delete a note
function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("tit");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("tit", JSON.stringify(notesObj));
  showNotes();
}
