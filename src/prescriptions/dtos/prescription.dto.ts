import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, ValidateNested, ArrayNotEmpty, ArrayMinSize } from 'class-validator';

export class MedicationDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  dose: string;
}

export class PatientDto {
  @IsString()
  @IsNotEmpty()
  nhi: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export class PrescriptionDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  id: string;

  @Expose()
  @ValidateNested()
  @IsNotEmpty()
  patient: PatientDto;

  @Expose()
  @IsString()
  @IsNotEmpty()
  date: string;

  @Expose()
  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  medications: MedicationDto[];
}
