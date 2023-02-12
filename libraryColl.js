class LibraryCollection {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.books = [];
    this.name = ''
  }
  addBook(bookName, bookAuthor) {
    let obj = {
        bookName,
        bookAuthor, 
        payed: false,
    }

    if ((this.capacity > 0)) {
      this.capacity -= 1;
this.books.push(obj);
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    } else {
      throw  Error (`Not enough space in the collection.`);
    }
  }
  payBook(bookName){
    this.name = bookName;
    let currentBook = this.books.find((x) => x.bookName === bookName)
    if(!currentBook){
    throw Error (`${this.name} is not in the collection.`)
    }
    if(currentBook.payed == true){
        
throw Error (`${bookName} has already been paid.`);
    }else{
currentBook.payed = true;
const index = this.books.indexOf(currentBook);
this.books.splice(index, 1);
        return `${bookName} has been successfully paid.`
    }

  }
  removeBook(bookName){


let currentBook = this.books.find((x) => x.bookName === bookName)

  if(!currentBook){
    throw Error (`The book, you're looking for, is not found.`)
  }

  if(currentBook.payed == false){
    throw Error (`${bookName} need to be paid before removing from the collection.`)
  }else{
    
return `${bookName} remove from the collection`
  }

  }
  getStatistics(bookAuthor){
    if (!bookAuthor) {
      let sortedBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
      let result = [];
      result.push(`The book collection has ${this.capacity} empty spots left.`);
      sortedBook.map((b) => {
          let paid = b.payed ? 'Has Paid' : 'Not Paid';
          result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
      });
      return result.join('\n').trim();
  } 

    if(!currentAutor){
        return `${bookAuthor} is not in the collection.`
    }
    else {
      let findBook = this.books.find(b => b.bookAuthor == bookAuthor);

      if (findBook) {
          let result = [];
          let paid = findBook.payed ? 'Has Paid' : 'Not Paid';
          result.push(`${findBook.bookName} == ${findBook.bookAuthor} - ${paid}.`);
          return result.join('\n').trim();
      } else {
          throw new Error(`${bookAuthor} is not in the collection.`)
      }
  }
  }

}

const library = new LibraryCollection(5)
 library.addBook('Don Quixote', 'Miguel de Cervantes'); 
 library.payBook('Don Quixote'); 
 library.addBook('In Search of Lost Time', 'Marcel Proust'); 
 library.addBook('Ulysses', 'James Joyce');

console.log(library.getStatistics());
