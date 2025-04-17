import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./schema/book.schema";
import { BookService } from "./book.service";
import { BookEntity } from "./entity/book.entity";


@Resolver(of => Book)
export class BookResolver {
    constructor(private readonly bookService : BookService){}

    @Query(returns => [Book])
    getAllBooks() : BookEntity[] {
        return this.bookService.getAllBooks();
    }

    @Query(returns => Book)
    getBookById(id : number) : BookEntity {
        return this.bookService.getBookById(id);
    }

    @Query(returns => String)
    addBook(book : Book) : string {
        return this.bookService.addBook(book);
    }

    @Query(returns => String)
    deleteBook(id : number) : string {
        return this.bookService.deleteBook(id);
    }

    @Query(returns => String)
    updateBook(id : number, updateBook : Book) : string {
        return this.bookService.updateBook(id, updateBook);
    }
}