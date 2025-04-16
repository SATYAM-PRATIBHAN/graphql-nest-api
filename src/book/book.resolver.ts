import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";
import { Book as BookModel } from "src/graphql";

@Resolver(of => Book)
export class BookResolver { 
    @Query(returns => [Book], {name : 'books'})
    getAll() {
        let arr : BookModel[] = [
            {id : 1, title : 'book1', price : 1000},
            {id : 2, title : 'book2', price : 2000},
            {id : 3, title : 'book3', price : 3000},
        ]

        return arr;
    }

    @Query(returns => Book, {name : 'book'})
    getOne() {
        return {id : 1, title : 'book1', price : 1000}
    }
} 