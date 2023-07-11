import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import { FhirResourceModule } from './fhir_resource/fhir_resource.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add Validation Pipe as a middleware to validate all incoming request
  // before passing to Controller
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
