import { BaseEntity, Column, Entity } from "typeorm";

@Entity('user')
export class User extends BaseEntity{
    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column(
        {unique :true}

    )
    email : string;
    
    @Column()
    password : string;

    @Column(
        {default: "seeker"}
    )
    accountType : string ;

    @Column()
    contact : string ;

    @Column()
    location : string ;

}
