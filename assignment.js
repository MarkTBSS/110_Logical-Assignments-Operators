"use strict";

// Sample books array
const books = [
    { title: "Book 1", edition: 2, highlighted: true, thirdParty: { goodreads: { rating: 4.5 } } },
    { title: "Book 2", highlighted: true, thirdParty: { goodreads: { rating: 3.9 } } },
    { title: "Book 3", edition: 1, highlighted: true, thirdParty: { goodreads: { rating: 4.3 } } },
    { title: "Book 4", thirdParty: { goodreads: { rating: 4.1 } } }
];

// 7.1
for (let i = 0; i < books.length; i++) {
    books[i].edition ||= 1;
}

// 7.2
for (let i = 0; i < books.length; i++) {
    books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

console.log(books);