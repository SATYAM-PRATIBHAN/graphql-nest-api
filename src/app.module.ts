import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BookModule } from './book/book.module';
import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver : ApolloDriver,
      playground: true, 
      autoSchemaFile : join(process.cwd(), "src/schema.gql"),
      definitions : {
        path : join(process.cwd(), "src/graphql.ts"),
      }
      // typePaths : ['./**/*.gql']
    }),
    BookModule
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
