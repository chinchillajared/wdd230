//Event listener for the button to add a chapter

const text_input = document.querySelector("input");
const add_button = document.querySelector("button");
const chapter_list = document.querySelector("ul");


add_button.addEventListener("click", function () {

    //Set focus on the text field when the button is pressed
    text_input.focus();

    //Get the value from the input field and store it in a variable
    let chapter = text_input.value;

    //Validate if the input is empty
    if (chapter == ''){
        alert("Name must be filled out");
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

    //Add the new item to the list
    chapter_list.appendChild(new_chapter);

    //Delete the item when the delete button is pressed
    delete_button.onclick = function (e) {
        chapter_list.removeChild(new_chapter);

        text_input.focus();
    }


});