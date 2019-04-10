import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

import { IsString, IsEmail, MaxLength } from "class-validator";

@Entity("users")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsString()
  @MaxLength(30)
  @Column()
  public username: string;

  @IsString()
  @Column()
  public password: string;

  @IsEmail()
  @MaxLength(80)
  @Column()
  public email: string;
}
