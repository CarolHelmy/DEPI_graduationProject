import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { BookBodyComponent } from '../book-body/book-body.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BooksService } from '../../servers/books.service';
import { NgModel } from '@angular/forms';


interface Book {
  bookId: number;
  bookName: string;
  bookAuthor: string;
  numOfPages: number;
  publisher: string;
  publishDate: string;
  language: string;
  categories: string[];
  coverImageUrl: string;
  rating : number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent,BookBodyComponent,RouterLink,RouterOutlet,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  booklst: Book[]; // List of books

  constructor(private _books: BooksService){
    this.booklst = this._books.booklist;

    
  }
  showMore: boolean = false; 
  showMoree: boolean = false; 
  showMoreee: boolean = false; 
  showMoreeee: boolean = false; 
  toggleShowMore(event: Event) {
    event.preventDefault(); // منع إعادة التحميل الافتراضية عند الضغط على الرابط
    this.showMore = !this.showMore; // تبديل قيمة showMore
  }
  toggleShowMoree(event: Event) {
    event.preventDefault(); // منع إعادة التحميل الافتراضية عند الضغط على الرابط
    this.showMoree = !this.showMoree; // تبديل قيمة showMore
  }
  toggleShowMoreee(event: Event) {
    event.preventDefault(); // منع إعادة التحميل الافتراضية عند الضغط على الرابط
    this.showMoreee = !this.showMoreee; // تبديل قيمة showMore
  }
  toggleShowMoreeee(event: Event) {
    event.preventDefault(); // منع إعادة التحميل الافتراضية عند الضغط على الرابط
    this.showMoreeee= !this.showMoreeee; // تبديل قيمة showMore
  }
  sendPageId(book: Book) {
    this._books.sendPageId(book); // Pass the Book object to the service
  }
}
