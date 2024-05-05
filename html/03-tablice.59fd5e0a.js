const o={books:["The Last Kingdom"],getBooks(){return this.books},addBook(o){this.books.push(o)},removeBook(o){const s=this.books.indexOf(o);this.books.splice(s,1)}};console.log(o.getBooks()),o.addBook("The Mist"),o.addBook("Dream Guardian"),console.log(o.getBooks()),o.removeBook("The Mist"),console.log(o.getBooks());
//# sourceMappingURL=03-tablice.59fd5e0a.js.map
