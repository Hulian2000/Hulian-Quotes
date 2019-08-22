export class Quote {
    public id:number;
    public name:string;
    public author:string;
    public submittedBy:string;
    public dateCreation:Date;
    showDetails:boolean;
    upvotes:number;
    downVotes:number;

    constructor(
        id:number,
        name:string,
        author:string,
        submittedBy:string,
        dateCreation:Date
    ){
        this.id = id;
        this.name = name;
        this.author = author;
        this.submittedBy = submittedBy;
        this.dateCreation = dateCreation;
        this.showDetails=false;
        this.upvotes=0;
        this.downVotes=0;
    }
}



