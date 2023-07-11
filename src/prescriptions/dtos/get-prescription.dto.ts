import { IsString } from 'class-validator';

export class GetPrescriptionDto {
  @IsString()
  nhi: string;
}
