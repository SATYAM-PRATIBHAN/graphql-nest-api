
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    getAllBooks(): Book[] | Promise<Book[]>;
    getBookById(): Book | Promise<Book>;
    addBook(): string | Promise<string>;
    deleteBook(): string | Promise<string>;
    updateBook(): string | Promise<string>;
}

type Nullable<T> = T | null;
