import {
  // AfterInsert,
  // AfterRemove,
  // AfterUpdate,
  Entity,
  Column,
  ObjectIdColumn,
  // OneToMany,
} from 'typeorm';
// import { Report } from '../prescriptions/prescription.entity';

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  // @AfterInsert()
  // logInsert() {
  //   console.log('Inserted User with id', this.id);
  // }

  // @AfterUpdate()
  // logUpdate() {
  //   console.log('Updated User with id', this.id);
  // }

  // @AfterRemove()
  // logRemove() {
  //   console.log('Removed User with id', this.id);
  // }
}
