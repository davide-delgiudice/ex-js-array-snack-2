const API_URL = "http://localhost:3333";

const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];

// snack 1
// const longBooks = books.filter((book) => {
//     return book.pages > 300;
// });

// console.log(longBooks);

// const longBooksTitle = longBooks.map((longBook) => {
//     return longBook.title;
// });

// console.log(longBooksTitle);

// books.forEach((book) => {
//     console.log(book.title);
// });


// snack 2
// const availableBooks = books.filter((book) => {
//     return book.available;
// });

// console.log(availableBooks);

// const discountedBooks = availableBooks.map((discountBook) => {
//     const priceNumber = parseFloat(discountBook.price);
//     const discountPrice = priceNumber * 0.8;
//     const roundedPrice = discountPrice.toFixed(2)+'€';
//     return {
//         ...discountBook,
//         price: roundedPrice
//     };
// });

// console.log(discountedBooks);

// const fullPricedBook = discountedBooks.find((fullPriceBook) => {
//     const priceNumber = parseFloat(fullPriceBook.price);
//     return Number.isInteger(priceNumber);
// });

// console.log(fullPricedBook)


// snack 3
// const authors = books.map((author) => {
//     return author.author;
// })

// console.log(authors);

// const areAuthorsAdult = authors.every((adult) => {
//     return adult.age > 18;
// });

// console.log(areAuthorsAdult);

// if(areAuthorsAdult) {
//     authors.sort((a, b) => {
//         return a.age - b.age;
//     });
// }else{
//     authors.sort((a, b) => {
//         return b.age - a.age;
//     });
// };


// snack 4
// const ages = books.map((author) => {
//     const authors = author.author;
//     const age = authors.age
//     return age;
// });

// console.log(ages);

// const agesSum = ages.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(agesSum / ages.length);


// snack 5 (bonus)

// const ids = [2, 13, 7, 21, 19]

// async function fetchjson(url) { 
//     const response = await fetch(url); 
//     const obj = await response.json(); 
//     return obj; 
// };

// async function getBooks(ids) {
//     try{
//         const bookPromises = ids.map(id => {
//             return fetchjson(`${API_URL}/books/${id}`)
//         });
    
//         const books = await Promise.all(bookPromises);
//         return books;
//     }catch(error){
//         throw new Error(`Errore nel recupero dei dati: ${error.message}`)
//     };
// };

// getBooks([2, 13, 7, 21, 19])
// .then((books) => {
//     console.log(books);
// })
// .catch((error) => {
//     console.error('Errore nella chiamata getBooks:', error.message);
// });


// snack 6 (bonus)

// const areThereAvailableBooks = books.some((book) => {
//     return book.available;
// });

// console.log(areThereAvailableBooks);

// const booksByPrice = [...books].sort((a, b) => {
//     const priceA = parseFloat(a.price);
//     const priceB = parseFloat(b.price);
//     return priceA - priceB;
// });

// booksByPrice.sort((a, b) => a.available === b.available ? 0 : a.available ? -1 : 1)


// snack 7

const tagCounts = books.reduce((acc, book) => {
    book.tags.forEach(tag => {
        if(acc[tag]) {
            acc[tag]++;
        }else{
            acc[tag] = 1;
        }
    });
    return acc;
}, {});

console.log(tagCounts);