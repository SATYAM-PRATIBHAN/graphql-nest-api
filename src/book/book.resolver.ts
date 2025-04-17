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
}