import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Book {
    @Field(type => Number)
    id: number;

    @Field()
    title : string;

    @Field(type => Number)
    price : number
}