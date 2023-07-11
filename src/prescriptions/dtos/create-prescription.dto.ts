import { IsString, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class PatientDto {
  @IsString()
  nhi: string;

  @IsString()
  name: string;
}

export class MedicationDto {
  @IsString()
  id: string;

  @IsString()
  dose: string;
}

export class CreatePrescriptionDto {
  @ValidateNested()
  @Type(() => PatientDto)
  patient: PatientDto;

  @IsString()
  date: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationDto)
  medications: MedicationDto[];
}
