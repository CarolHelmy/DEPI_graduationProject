import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';

interface Book {
  title: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  pages: number;
}


@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  imports: [FormsModule, CommonModule, NavbarComponent,FooterComponent]

})
export class SearchComponent implements OnInit {
  searchText: string = '';
  selectedCategories: Set<string> = new Set();
  selectedSizes: Set<string> = new Set();
  selectedRatings: Set<number> = new Set();

  books: Book[] = [
    { title: 'A Dark and Drowning Tide', author: 'Allison Saft', image: './searchImages/adarkdrowning.jpg', rating: 5, category: 'Fantasy', pages: 1178 },
    { title: 'A Fire in the Sky', author: 'Sophie Jordan', image: './searchImages/fire.jpg', rating: 4, category: 'Fantasy', pages: 309 },
    { title: 'Phantasma', author: 'Kaylie Smith', image: './searchImages/pahentasma.jpg', rating: 5, category: 'Fantasy', pages: 281 },
    { title: 'I am Starting to Worry About This Black Box of Doom1984', author: 'Jason Pargin', image: './searchImages/doom.jpg', rating: 4, category: 'Science Fiction', pages: 328 },
    { title: 'Playground', author: 'Richard Powers', image: './searchImages/play.jpg', rating: 4, category: 'Science Fiction', pages: 328 },
    { title: 'When the World Tips Over', author: 'Jandy Nelson', image: './searchImages/tips.jpg', rating: 4, category: 'Romance', pages: 432 },
    { title: 'The Book Swap', author: 'Tessa Bickers', image: './searchImages/swap.jpg', rating: 4, category: 'Romance', pages: 90 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: './searchImages/great.jpg', rating: 5, category: 'Classic', pages: 180 },
    { title: 'Life of Pi', author: 'Yann Martel', image: './searchImages/classic0.jpg', rating: 2, category: 'Classic', pages: 460 },
    { title: 'The Shining', author: 'The Shining', image: './searchImages/king.jpg', rating: 5, category: 'Classic', pages: 460 },
    { title: 'Love Requires Chocolate', author: 'Ravynn K. Stringfield', image: './searchImages/love.jpg', rating: 1, category: 'Adventure', pages: 585 },
    { title: 'Knots', author: 'Colleen Frakes', image: './searchImages/comic.jpg', rating: 4, category: 'Coming-of-age', pages: 234 },
    { title: 'A Great Big Visual Hug: Heartwarming Wawawiwa Comics', author: 'Andrés J. Colmenares', image: './searchImages/comic2.jpg', rating: 4, category: 'Coming-of-age', pages: 234 },
    { title: 'Jane Eye', author: 'Charlotte Brontë', image: './searchImages/gothic.jpg', rating: 3, category: 'Gothic', pages: 532 },
    { title: 'An Academy for Liars', author: 'Alexis Henderson', image: './searchImages/academy.jpg', rating: 2, category: 'Fantasy', pages: 310 },
  ];

  filteredBooks: Book[] = [];
  categories: string[] = [];
  sizes: string[] = ['50-100', '101-200', '201-300', '300+'];
  ratings: number[] = [5, 4, 3, 2, 1];

  ngOnInit() {
    this.filteredBooks = this.books;
    this.categories = [...new Set(this.books.map(book => book.category))];
  }

  filterBooks() {
    this.filteredBooks = this.books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
                            book.author.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategories.size === 0 || this.selectedCategories.has(book.category);
      const matchesSize = this.selectedSizes.size === 0 || this.matchesSize(book.pages);
      const matchesRating = this.selectedRatings.size === 0 || this.selectedRatings.has(book.rating);

      return matchesSearch && matchesCategory && matchesSize && matchesRating;
    });
  }

  matchesSize(pages: number): boolean {
    return Array.from(this.selectedSizes).some(size => {
      switch (size) {
        case '50-100': return pages >= 50 && pages <= 100;
        case '101-200': return pages >= 101 && pages <= 200;
        case '201-300': return pages >= 201 && pages <= 300;
        case '300+': return pages > 300;
        default: return false;
      }
    });
  }

  toggleCategory(category: string) {
    if (this.selectedCategories.has(category)) {
      this.selectedCategories.delete(category);
    } else {
      this.selectedCategories.add(category);
    }
    this.filterBooks();
  }

  toggleSize(size: string) {
    if (this.selectedSizes.has(size)) {
      this.selectedSizes.delete(size);
    } else {
      this.selectedSizes.add(size);
    }
    this.filterBooks();
  }

  toggleRating(rating: number) {
    if (this.selectedRatings.has(rating)) {
      this.selectedRatings.delete(rating);
    } else {
      this.selectedRatings.add(rating);
    }
    this.filterBooks();
  }

  searchBooks() {
    this.filterBooks();
  }
}
