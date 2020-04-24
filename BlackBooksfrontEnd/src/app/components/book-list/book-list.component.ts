import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/services/bookstore.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any;
  currentBook = null;
  currentIndex = -1;
  title = '';

  constructor(private bookstoreService: BookstoreService) { }

  ngOnInit(): void {
    this.retrieveBooks();
  }

  retrieveBooks(){
    this.bookstoreService.getAll()
      .subscribe(
        data => {
          this.books = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshInventory(){
    this.retrieveBooks();
    this.currentBook = null;
    this.currentIndex = -1;
  }

  setActiveBook(book, index){
    this.currentBook = book;
    this.currentIndex = index;
  }

  removeAllBooks(){
    this.bookstoreService.deleteAll()
      .subscribe(
        response =>{
          console.log(response);
          this.retrieveBooks();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(){
    this.bookstoreService.findByTitle(this.title)
    .subscribe(
      data => {
        this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
