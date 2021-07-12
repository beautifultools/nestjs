import { Injectable } from '@nestjs/common';
import { Movie } from 'src/entities/movie.entity';

@Injectable()
export class MoviesService {
  movies: Movie[];
  MoviesService() {
    this.movies = [];
  }
  getAll(): Movie[] {
    return this.movies;
  }
}
