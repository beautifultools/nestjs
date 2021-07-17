import { Controller, Get } from '@nestjs/common';
import { MovieService } from '../service/movie.service';
import { Movie } from '../entities/movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private readonly moviesService: MovieService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
}
