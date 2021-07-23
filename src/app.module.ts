import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { CliController } from './cli/cli.controller';
import { Cli2Controller } from './cli2/cli2.controller';
import { TestController } from './test/test.controller';
import { MovieController } from './cli/movie/movie.controller';
import { CliController } from './test/cli/cli.controller';

@Module({
  imports: [MovieModule],
  controllers: [AppController, CliController, Cli2Controller, TestController, MovieController],
  providers: [AppService],
})
export class AppModule {}
