import { Controller, Get } from '@nestjs/common';
import { Movie } from 'src/entities/movie.entity';
import { MoviesService } from 'src/movies/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
}
