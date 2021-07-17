import { Injectable } from '@nestjs/common';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class MovieService {
  movies: Movie[];
  constructor() {
    this.movies = [];
  }

  getAll(): Movie[] {
    return this.movies;
  }
}
