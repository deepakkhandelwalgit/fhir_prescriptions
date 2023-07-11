import {
  Entity,
  Column,
  ObjectId,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
  AfterInsert,
  AfterUpdate,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Prescription {
  @ObjectIdColumn()
  _id: ObjectId;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  resourceId: string;

  @Column('jsonb')
  patient: { nhi: string; name: string };

  @Column()
  date: string;

  @Column('jsonb', { default: [] })
  medications: { id: string; dose: string }[];

  // Assign UUID to the `id` field before insertion
  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }

  @AfterInsert()
  addToExternalServer() {
    // We can call POST External API here to sync the data
    console.log('Now Need to push this record to External server', this);
  }

  @AfterUpdate()
  updateToExternalServer() {
    // We can call PATCH External API here to sync the data
    console.log('Now Need to update this record to External server', this);
  }
}
