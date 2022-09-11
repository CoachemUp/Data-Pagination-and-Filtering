/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/**
 * @param {string} list
 * @param {number} page
 */

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   let startIndex = page * 9 - 9;
   let endIndex = page * 9;
   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && endIndex > i) {
         let studentItem = ` <li class="student-item cf">
                     <div class="student-details">
                        <img class="avatar" src="${list[i].picture.thumbnail}" alt='Profile Picture'>
                        <h3>
                           ${list[i]["name"].first}
                           ${list[i]["name"].last}
                        </h3>
                        <span class="email">${list[i].email}</span>
                     </div>
                     <div class="joined-details">
                        <span class="date">Joined
                           ${list[i]["registered"].date}
                        </span>
                     </div>
                  </li>
                  `;
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // create a variable to calculate the number of pages needed
   let numOfPages = Math.ceil(list.length / 9);
   // select the element with a class of `link-list` and assign it to a variable
   let linkList = document.querySelector('.link-list');
   // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = "";
   // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++) {
      // create the elements needed to display the pagination button
      let button = `
            <li>
               <button type="button">${i}</button>
            </li>
      `;
      linkList.insertAdjacentHTML("beforeend", button); // insert the above elements
   };
   // give the first pagination button a class of "active"
   document.querySelector('button').classList.add('active');

   // create an event listener on the `link-list` element
   linkList.addEventListener('click', function (e) {
      //if click is on a button 
      if (e.target.getAttribute('type') === 'button') {
         //removes active class and sets it to empty string
         document.querySelector('.active').classList.remove('active');
         //adds active class to button that was clicked
         e.target.classList.add('active');
         //get number from button clicked
         let text = e.target.textContent;
         //display the correct page that user has clicked on 
         showPage(data, text);
      }  
   }) 
}

// Call functions
showPage(data, 1);
addPagination(data)