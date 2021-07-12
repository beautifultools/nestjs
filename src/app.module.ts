import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestService } from './test/test.service';
import { Service } from './.service';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [AppController, MoviesController],
  providers: [AppService, TestService, Service, MoviesService],
})
export class AppModule {}
