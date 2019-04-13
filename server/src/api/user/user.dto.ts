import { IsEmail, IsString, MaxLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @MaxLength(10)
  public username: string;

  @IsString()
  public password: string;

  @IsEmail()
  @MaxLength(30)
  public email: string;
}
