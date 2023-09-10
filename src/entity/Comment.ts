import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, Index, BeforeInsert, BeforeUpdate } from "typeorm"
// import { ValidateIf, IsNotEmpty, validate } from 'class-validator';

import {Art} from "./Art";

@Entity()
@Index("art_name_UNIQUE", ["art.id", "name"], { unique: true })
export class Comment {
    @BeforeInsert()
    updateDates() {
        this.createdDate = new Date();
    }

    @PrimaryGeneratedColumn()
    id: number

   //Should present if user_id not exists
    @Column({nullable: true})
    user_id: number

    @Column({nullable: true})
    createdDate: Date


    @Column({nullable: true})
    name: string

    @Column()
    content: string

    @ManyToOne(() => Art, (art) => art.comments)
    art: Art




}

// validate(Comment, { skipMissingProperties: true });
