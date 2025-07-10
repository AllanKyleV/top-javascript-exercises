const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

const getTheTitles = function(books) {
    let obj = [];
    for (let book of books) {
        obj.push(book.title);
    }
    return obj;
};

console.log(getTheTitles(books)); // ['Book', 'Book2']

// Do not edit below this line
module.exports = getTheTitles;
