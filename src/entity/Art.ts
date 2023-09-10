import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import {Comment} from './Comment';
@Entity()
export class Art {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    artist: string

    @Column()
    year: number

    @OneToMany(() => Comment, (comment) => comment.art, {
        cascade: true,
    }) // note: we will create author property in the Photo class below
    comments: Comment[]

}
