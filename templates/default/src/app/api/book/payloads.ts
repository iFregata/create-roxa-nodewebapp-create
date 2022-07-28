import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class BookPostPayload {
  @Expose()
  @IsNotEmpty()
  author!: string;

  @Expose()
  @IsNotEmpty()
  isbn!: string;

  @Expose()
  @IsNotEmpty()
  price!: string;

  @Expose()
  @IsNotEmpty()
  title!: string;
}

export class BookPutPricePayload {
  @Expose()
  @IsNotEmpty()
  price!: string;
}
