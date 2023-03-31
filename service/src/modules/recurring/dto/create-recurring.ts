import { Frequency } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateRecurringDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsEnum(Frequency)
  frequency: Frequency;

  @IsBoolean()
  @IsOptional()
  variableAmount?: boolean;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsOptional()
  otherCategory?: string;

  @IsUUID()
  @IsOptional()
  subscriptionId?: string;
}
