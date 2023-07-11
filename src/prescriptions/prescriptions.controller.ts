import {
  Controller,
  Post,
  Body,
  UseGuards,
  Patch,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { CreatePrescriptionDto } from './dtos/create-prescription.dto';
import { PrescriptionsService } from './prescriptions.service';
import { AuthGuard } from '../guards/auth.guard';
// import { CurrentUser } from '../users/decorators/current-user.decorator';
// import { User } from '../users/user.entity';
// import { Prescription } from './prescription.entity';

import { PrescriptionDto } from './dtos/prescription.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UpdatePrescriptionDto } from './dtos/update-prescriptions.dto';
import { GetPrescriptionDto } from './dtos/get-prescription.dto';
// import { ObjectId } from 'typeorm';
// import { AdminGuard } from '../guards/admin.guard';
// import { GetEstimateDto } from './dtos/get-estimate.dto';

@Controller('prescriptions')
@UseGuards(AuthGuard)
@Serialize(PrescriptionDto)
export class PrescriptionsController {
  constructor(private prescriptionService: PrescriptionsService) {}

  @Get()
  async getPrescriptionsByNhi(@Query() { nhi }: GetPrescriptionDto) {
    // Fetch prescriptions from the external API
    const apiData =
      await this.prescriptionService.fetchPrescriptionsFromExternalAPI(nhi);

    // Update local database with new or updated prescriptions
    await this.prescriptionService.syncPrescriptionsToLocalDB(apiData);

    // Retrieve prescriptions from the local database
    return await this.prescriptionService.findByPatientNhi({ nhi });
  }

  @Post()
  createPrescription(@Body() body: CreatePrescriptionDto) {
    return this.prescriptionService.create(body);
  }

  @Patch('/:id')
  updatePrescription(
    @Param('id') id: string,
    @Body() body: UpdatePrescriptionDto,
  ) {
    return this.prescriptionService.update(id, body);
  }
}
