import { profile } from "console";

type SanityBody = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string
}

type Image ={
    _type:"image";
    assey:{
        _ref: string;
        _type: "reference"
    }
}

export type Social = SanityBody & {
    _type:"social";
    title:string;
    url:string;
}

export type PageInfo = SanityBody & {
    _type:"pageInfo";
    _address:string;
    backgroundInformatio:string;
    email:string;
    role:string;
    heroImage:string;
    name:string;
    phoneNumber:string;
    profilePic:Image;

}
export type Technology = SanityBody & {
    _type:"skill";
    image: Image;
    progress:number;
    title:string;
}

export type Project = SanityBody &{
    title:string;
    _type:"project";
    image:Image;
    linkToBuild: string;
    technologies:Technology[];
    summary:string;
}