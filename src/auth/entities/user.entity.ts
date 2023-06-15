/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';
import { UserStatus } from '../user-status.enum';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  token: string;
}
