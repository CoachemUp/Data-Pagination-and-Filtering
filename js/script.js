/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/***
 * variable for setting the number of students on page at one time
 */
const perPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   // create two variables which will represent the index for the first and last student on the page
   let startIndex = page * perPage - perPage;
   let endIndex = page * perPage;
   // select the element with a class of `student-list` and assign it to a variable
   let studentList = document.querySelector(".student-list");
   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = "";
   // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++) {
      let studentItem = list[i];
      // inside the loop create a conditional to display the proper student
      if (i >= startIndex && i < endIndex) {
         studentList +=
            ` <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src="${studentItem['picture'].thumbnail}">
                     <h3>
                        ${studentItem['name'].title}
                        ${studentItem['name'].first}
                        ${studentItem['name'].last}
                     </h3>
                     <span class="email">${studentItem.email}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">Joined
                        ${studentItem['registered'].date}
                     </span>
                  </div>
               </li>
               `;
      }


      // insert the above elements
      document.querySelector('.student-list').insertAdjacentHTML('beforeend', studentList);
   }
}
showPage(data, 1)
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
