import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BooksService } from '../../servers/books.service';
import { UsersService, User } from '../../servers/users.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { ReservesService } from '../../servers/reserves.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';

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
}

interface Review {
  userName: string;
  profilePictureUrl: string;
  comment: string;
  rating: number; // assuming a rating for each review
}

@Component({
  selector: 'app-book-body',
  standalone: true,
  imports: [CommonModule, FormsModule,NavbarComponent,FooterComponent,RouterLink,RouterOutlet],
  templateUrl: './book-body.component.html',
  styleUrls: ['./book-body.component.css']
})
export class BookBodyComponent {
  booklst: Book[]; // List of books
  saved: boolean = true;
  userComment: string = '';  // To store the user's comment
  reviews: Review[] = [];    // To store reviews with user details
  users: User[] = [];        // To store the list of users
  displayedBook: Book;
  noReservers: number = 0;

  currentBook: Book |null=null;

  constructor(private _books: BooksService, private _users: UsersService, private reservesService: ReservesService) {
    this.booklst = this._books.booklist;
    this.displayedBook = this.booklst[0];
    this.users = this._users.getUsers();  // Get users from the service
  }

  ngOnInit() {
    // Retrieve the Book object from the BooksService
    this.currentBook = this._books.getPageId();
  }

  // Method to add a comment and associate it with a user
  addComment() {
    if (this.userComment.trim() !== '') {
      // Randomly pick a user (for this example) - you could choose another method
      const randomUser = this.users[Math.floor(Math.random() * this.users.length)];

      // Create a new review object with the comment, user details, and a default rating
      const newReview: Review = {
        userName: randomUser.userName,
        profilePictureUrl: randomUser.profilePictureUrl,
        comment: this.userComment,
        rating: 5 // Default rating for now, can be made dynamic
      };

      // Add the new review to the list of reviews
      this.reviews.push(newReview);

      // Clear the input field after adding the comment
      this.userComment = '';
    } else {
      alert('Please enter a comment.');
    }
  }

  fill() {
    this.saved = !this.saved;
  }

    // This method is called when the user clicks the button
    addReservation() {
      const userData = {
        name: 'John Doe', // Replace with actual user data
        email: 'john@example.com', // Add more user details if needed
      };
  
      // Store user data and increment the counter
      this.reservesService.addReserve(userData);
  
      // Update the component's noReservers variable to reflect the new count
      this.noReservers = this.reservesService.getReserveCount();
    }

    downloadPDF() {
      const pdfUrl = '../../../../../../../../Downloads/books/ميرامار.pdf'; // Path to the PDF file (adjust the path as necessary)
      const pdfName = 'sample.pdf'; // Name for the downloaded PDF
  
      // Create an invisible anchor element
      const link = document.createElement('a');
      link.href = pdfUrl;
  
      // Set the download attribute with the file name
      link.download = pdfName;
  
      // Append the anchor to the body temporarily
      document.body.appendChild(link);
  
      // Programmatically trigger a click on the anchor
      link.click();
  
      // Remove the anchor from the document
      document.body.removeChild(link);
    }

  }