//Event listener for the button to add a chapter

const text_input = document.querySelector("input");
const add_button = document.querySelector("button");
const chapter_list = document.querySelector("ul");

//Add an item if the button is pressed
add_button.addEventListener("click", additem) 

//Add an item if the enter key is pressed
text_input.addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        additem();
    }
});

//Function to add an item to the list
function additem() {

    //Set focus on the text field when the button is pressed
    text_input.focus();

    //Get the value from the input field and store it in a variable
    let chapter = text_input.value;

    //Validate if the input is empty
    if (chapter == '') {
        alert("Input must be filled out");
        return false;
    }

    //Empty the text field
    text_input.value = "";

    //Create a new list item and store it in a variable + text and a button
    let new_chapter = document.createElement("li");
    let chapter_text = document.createElement("span");
    let delete_button = document.createElement("button");

    //Add the text to the list item and the button
    chapter_text.textContent = chapter;
    delete_button.textContent = '❌';
    new_chapter.appendChild(chapter_text);
    new_chapter.appendChild(delete_button);

    //Add style to the li element
    new_chapter.setAttribute('class', 'item');

    //Conditional to limit the items in the list to 10
    let li_item = chapter_list.querySelectorAll("li");
    let items = li_item.length;

    if (items == 10) {
        alert("You reached the limit of items!");
        return false;
    }

    //If there are less than 10 items add the new item to the list
    chapter_list.appendChild(new_chapter);


    //Delete the item when the delete button is pressed
    delete_button.onclick = function (e) {
        chapter_list.removeChild(new_chapter);

        text_input.focus();
    }
}
