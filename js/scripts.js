

 // create an empty array
 // let myArr = ["A","B","C","D"];
let arr = [];
//get value for button and add event listener
let button = document.getElementById('button');
button.addEventListener('click', function() {
  pushData();
  clearInputField();
});
// span.addEventListener('click', function() {
//   this.li.classList.add('remove');
// });
// button.addEventListener('click', pushData);
// button.addEventListener('click', clearInputField);

//Push user input to screen
function pushData() {
    // get value from the input text
    let inputText = document.getElementById('inputText').value;
                
    // append data to the array
    arr.push(inputText);
    var text = "";
                
    for(i = 0; i < arr.length; i++) {
      // text = text + arr[i] + "<br/>";
      text = arr[i];
    }
              
    if(text != "") {
      createList(text);
    }
}

    //create list 
function createList(item) {
    // create list item
    let li = document.createElement("li");
       //append list item to parent element (ul)
    document.getElementById('list').appendChild(li);
    li.setAttribute("class", "list-item");
    
    let checkCircle = document.createElement("span");
  
    checkCircle.innerHTML =  "<i class='far fa-circle'></i>";
    // circle.innerHTML = "<i class='far fa-check-circle'></i>";
    let p = document.createElement("p");
    // make data/content editable
    p.setAttribute("contenteditable", "true");
    let deleteTrash = document.createElement("span");
    deleteTrash.innerHTML = "<i id='delete' class='delete fa fa-trash'></i>";
    //display data in paragraph format
    p.innerHTML = item;

    // add checklist, data/content and delete to list
    li.prepend(checkCircle);
    li.appendChild(p);
    li.appendChild(deleteTrash);
    // li.setAttribute("id", "list-item");
    // p.setAttribute("display", "inherit");
   

    // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content#How_does_it_work
  //remove item when trash bin icon is clicked
  // document.querySelector('#delete').addEventListener('click', function() {
  //   li.remove();
  // });

  checkCircle.addEventListener('click', function() {
   p.classList.toggle("slash");
});

  deleteTrash.addEventListener('click', function() {
        li.remove();
    });
}

//clear text from input field
function clearInputField() {

  document.getElementById('inputText').value = "";
}


// function deleteData() {
//   li.remove();
// }


// https://stackoverflow.com/questions/33004177/add-user-input-to-list-on-button-click-in-javascript

// https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript