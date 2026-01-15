import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookmarkDto {
  @ApiProperty({
    example: 'NestJS Documentation',
    description: 'Bookmark title',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Official NestJS documentation',
    description: 'Bookmark description',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 'https://docs.nestjs.com',
    description: 'Bookmark URL',
  })
  @IsString()
  @IsNotEmpty()
  link: string;
}