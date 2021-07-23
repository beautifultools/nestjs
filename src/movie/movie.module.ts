import { Module } from '@nestjs/common';
import { MovieController } from './controller/movie.controller';
import { MovieService } from './service/movie.service';
import { CliTestController } from './cli-test/cli-test.controller';
import { MovieController } from './movie.controller';
import { CliController } from './cli/cli.controller';
import { CliController } from './controller/cli/cli.controller';

@Module({
  imports: [],
  controllers: [MovieController, CliTestController, CliController],
  providers: [MovieService],
})
export class MovieModule {}
