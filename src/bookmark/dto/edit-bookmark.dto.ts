import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class EditBookmarkDto {
  @ApiProperty({
    example: 'Updated Title',
    description: 'Bookmark title',
    required: false,
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    example: 'Updated description',
    description: 'Bookmark description',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 'https://updated-link.com',
    description: 'Bookmark URL',
    required: false,
  })
  @IsString()
  @IsOptional()
  link?: string;
}