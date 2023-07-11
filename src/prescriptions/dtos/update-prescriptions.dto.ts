import { IsString, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePrescriptionDto {
  @IsString()
  date: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationDto)
  medications: MedicationDto[];
}

export class MedicationDto {
  @IsString()
  id: string;

  @IsString()
  dose: string;
}
