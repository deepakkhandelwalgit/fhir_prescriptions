import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Prescription } from './prescription.entity';
import { CreatePrescriptionDto } from './dtos/create-prescription.dto';
import { UpdatePrescriptionDto } from './dtos/update-prescriptions.dto';
// import { ExternalAPIService } from './external-api.service';

@Injectable()
export class PrescriptionsService {
  constructor(
    @InjectRepository(Prescription) private repo: MongoRepository<Prescription>,
  ) {}

  async findByPatientNhi({ nhi }): Promise<Prescription[]> {
    return this.repo.find({ 'patient.nhi': nhi });
  }

  create(prescriptionDto: CreatePrescriptionDto) {
    const presciption = this.repo.create(prescriptionDto);
    return this.repo.save(presciption);
  }

  async update(
    id: string,
    attrs: Partial<UpdatePrescriptionDto>,
  ): Promise<Prescription> {
    const prescription = await this.repo.findOneBy({ id });
    if (!prescription) {
      throw new NotFoundException('prescription not found');
    }

    const updatedPrescription = Object.assign(prescription, attrs);
    return this.repo.save(updatedPrescription);
  }

  async fetchPrescriptionsFromExternalAPI(nhi): Promise<Partial<Prescription>[]> {
    // Fetch prescriptions from the external API
    // Implementation depends on your external API service
    // const prescriptions = await this.externalAPIService.fetchPrescriptions(nhi);
    // return prescriptions;

    // Currently I am going to return fake records
    return [
      {
        resourceId: 'some-unique-uuid-1234',
        patient: {
          nhi: 'PT123432',
          name: 'Patient Rohn',
        },
        date: '2023-06-10T09:21:47.976Z',
        medications: [
          {
            id: 'MED001',
            dose: 'OD',
          },
        ],
      },
      {
        resourceId: 'some-unique-uuid-1342',
        patient: {
          nhi: 'PT123432',
          name: 'Patient Jogn',
        },
        date: '2023-06-18T09:21:47.976Z',
        medications: [
          {
            id: 'MED401',
            dose: 'BD',
          },
        ],
      },
    ];
  }

  async syncPrescriptionsToLocalDB(
    prescriptions: Partial<Prescription>[],
  ): Promise<void> {
    // Update or insert prescriptions in the local database
    for (const prescription of prescriptions) {
      // Find existing prescription by ID
      const existingPrescription = await this.repo.findOneBy({
        resourceId: prescription.resourceId,
      });
      // If existing prescription is found and date has changed, update it
      if (existingPrescription) {
        if (existingPrescription.date !== prescription.date) {
          existingPrescription.patient = prescription.patient;
          existingPrescription.date = prescription.date;
          existingPrescription.medications = prescription.medications;

          await this.repo.save(existingPrescription);
        }
      } else {
        // If prescription does not exist, create a new one
        await this.repo.save(prescription);
      }
    }
  }
}
