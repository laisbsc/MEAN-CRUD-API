import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/services/bookstore.service'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book = {
    theme:'',
    author: '',
    title: '',
    genre: '',
    price: '',
    published: false
  };

  saved = false;

  constructor(private bookstoreService: BookstoreService) { }

  ngOnInit(): void {
  }

  saveBook(){
    const data = {
      theme: this.book.theme,
      author: this.book.author,
      title: this.book.title,
      genre: this.book.genre,
      price: this.book.price
    };
    this.bookstoreService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.saved = true;
        },
        error => {
          console.log(error);
        });
  }

  newBook(){
    this.saved = false;
    this.book = {
      theme:'',
      author: '',
      title: '',
      genre: '',
      price: '',
      published: false
    };
  }
}
