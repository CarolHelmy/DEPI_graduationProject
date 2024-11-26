import { Injectable } from '@angular/core';

export interface Book {
  bookId: number;
  bookName: string;
  bookAuthor: string;
  numOfPages: number;
  publisher: string;
  publishDate: string;
  language: string;
  rating: number;
  categories: string[];
  coverImageUrl: string; // Added this to the service's Book interface
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booklist: Book[];

  constructor() { 
    this.booklist = [
      {
        bookId: 1,
        bookName: "Thus spoke zarathustra",
        bookAuthor: "Friedrich Nietzsche",
        numOfPages: 281,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
        categories: ["Philosophical fiction", "Classic", "Historical"],
        coverImageUrl: "https://www.rebind.ai/_nuxt/thus_spoke_zarathustra_hd.8ef4473e.png",
        rating :5
      },
      { 
        bookId : 2,
        bookName: 'A Dark and Drowning Tide',
        bookAuthor: 'Allison Saft',
        coverImageUrl: './searchImages/adarkdrowning.jpg',
        rating: 5,
        categories: ['Fantasy'],
        numOfPages: 1178,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
       },

      { 
        bookId : 3,
        bookName: 'A Fire in the Sky',
        bookAuthor: 'Sophie Jordan',
        coverImageUrl: './searchImages/fire.jpg',
        rating: 4,
        categories: ['Fantasy'],
        numOfPages: 309, 
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      { 
        bookId : 4,
        bookName: 'Phantasma',
        bookAuthor: 'Kaylie Smith', 
        coverImageUrl: './searchImages/pahentasma.jpg', 
        rating: 5, 
        categories: ['Fantasy'], 
        numOfPages: 281,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      { 
        bookId : 5,
        bookName: 'I am Starting to Worry About This Black Box of Doom1984',
        bookAuthor: 'Jason Pargin',
        coverImageUrl: './searchImages/doom.jpg', 
        rating: 4, 
        categories: ['Science Fiction'], 
        numOfPages: 328,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },

      { bookId : 6,
        bookName: 'Playground',
        bookAuthor: 'Richard Powers',
        coverImageUrl: './searchImages/play.jpg', 
        rating: 4, categories: ['Science Fiction'], 
        numOfPages: 328,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
       },
      { 
        bookId : 7,
        bookName: 'When the World Tips Over',
        bookAuthor: 'Jandy Nelson', 
        coverImageUrl: './searchImages/tips.jpg', 
        rating: 4, 
        categories: ['Romance'], 
        numOfPages: 432,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      { 
        bookId : 8,
        bookName: 'The Book Swap', 
        bookAuthor: 'Tessa Bickers', 
        coverImageUrl: './searchImages/swap.jpg', 
        rating: 4, 
        categories: ['Romance'], 
        numOfPages: 90,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      {
         bookId : 9,
        bookName: 'The Great Gatsby', 
        bookAuthor: 'F. Scott Fitzgerald', 
        coverImageUrl: './searchImages/great.jpg', 
        rating: 5, 
        categories: ['Classic'], 
        numOfPages: 180,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      { 
        bookId : 10,
        bookName: 'Life of Pi',
        bookAuthor: 'Yann Martel', 
        coverImageUrl: './searchImages/classic0.jpg', 
        rating: 2, 
        categories: ['Classic'], 
        numOfPages: 460,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      { 
        bookId : 11,
        bookName: 'The Shining',
        bookAuthor: 'The Shining', 
        coverImageUrl: './searchImages/king.jpg', 
        rating: 5, 
        categories: ['Classic'], 
        numOfPages: 460,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      { 
        bookId : 12,
        bookName: 'Love Requires Chocolate',
        bookAuthor: 'Ravynn K. Stringfield', 
        coverImageUrl: './searchImages/love.jpg', 
        rating: 1, 
        categories: ['Adventure'], 
        numOfPages: 585,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English"
      },
      { 
        bookId : 13,
        bookName: 'Knots', 
        bookAuthor: 'Colleen Frakes', 
        coverImageUrl: './searchImages/comic.jpg', 
        rating: 4, categories: ['Coming-of-age'], 
        numOfPages: 234,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      { 
        bookId : 14,
        bookName: 'A Great Big Visual Hug: Heartwarming Wawawiwa Comics',
        bookAuthor: 'Andrés J. Colmenares',
        coverImageUrl: './searchImages/comic2.jpg',
        rating: 4, 
        categories: ['Coming-of-age'], 
        numOfPages: 234 ,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      { 
        bookId : 15,
        bookName: 'Jane Eye',
        bookAuthor: 'Charlotte Brontë',
        coverImageUrl: './searchImages/gothic.jpg',
        rating: 3,
        categories: ['Gothic'],
        numOfPages: 532 ,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      },
      { 
        bookId : 16,
        bookName: 'An Academy for Liars',
        bookAuthor: 'Alexis Henderson',
        coverImageUrl: './searchImages/academy.jpg',
        rating: 2,
        categories: ['Fantasy'],
        numOfPages: 310 ,
        publisher: "J.B. Lippincott & Co.",
        publishDate: "1960-07-11",
        language: "English",
      }
    ];
  }
  private currentBook: Book | null = null; // Property to store the Book object
  // Method to store the Book object
  sendPageId(bookObj: Book) {
    this.currentBook = bookObj;
  }

  // Optional: Method to retrieve the stored Book object
  getPageId(): Book | null {
    return this.currentBook;
  }
}
