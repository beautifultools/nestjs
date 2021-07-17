import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from '../entities/movie.entity';
import { MovieService } from './movie.service';

describe('MoviesService', () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be array', () => {
    const movies: Movie[] = service.getAll();
    expect(Array.isArray(movies)).toBe(true);
  });
});
