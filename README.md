https://www.googleapis.com/books/v1/volumes?q=search+terms

# Google Books API Search Engine

## Outline

This project will require you to use both React and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.
Grid in this project refers to the look of the finished product, not necessarily the `display: grid` property, but you're welcome to use it if you decide to.

## MVP

Create a page that allows users to search for books

### UI

✅ Header container introducing the page 

✅ Form containing a text input and a submit / search button

✅ A container of book card components

### Functionaltiy

✅ When the submit button is clicked you need the request books from the Google books API using the input value as your query string

✅ The books that you receive should be rendered in the books grid.

✅ Each book in the grid should have an image, author, title and description

- The grid should be responsive on different screen sizes

✅ You should use async / await for your request code, NOT .then


### Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Use BEM where appropriate, and each component should have its own SCSS file Your palette should use variables

Application Design (required):

- You should separate DOM functions and non-DOM functions in different modules.
- Think about which containers/components are responsible for what. As a general rule of thumb, containers process/collect data and create components that render that data
- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.

## Bonus (optional, but highly recommended):

- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Useful Resources:

- [Google Books API no Auth link](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
- [Using Async Await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [Using Postman to Test APIs](https://www.blazemeter.com/blog/how-use-postman-test-apis)
- [Download Postman](https://www.postman.com/downloads/)