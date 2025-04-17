import { Injectable } from "@nestjs/common";
import { BookEntity } from "./entity/book.entity";

@Injectable()
export class BookService {
    public booksData : BookEntity[] = []

    addBook(book : BookEntity) : string {
        this.booksData.push(book)
        return "Book added successfully"
    }

    updateBook(id : number, updateBook : BookEntity) : string{
        for(let i = 0; i < this.booksData.length; i++) {
            if(this.booksData[i].id === id) this.booksData[i] = updateBook; 
        }
        return "Book updated successfully"
    }

    deleteBook(id : number) : string {
        this.booksData = this.booksData.filter(book => book.id != id)
        return "Book deleted successfully"
    }

    getBook(id : number) : BookEntity {
        const book = this.booksData.find(book => book.id === id)
        if(!book) {
            throw new Error("Book not found")
        }
        return book
    }

    getBooks() : BookEntity[] {
        return this.booksData;
    }
}