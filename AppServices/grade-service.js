export class grades{
    constructor(studentid){
this.studentid = studentid;
    }
    info(){
        console.log(`Score of Student - ${this.studentid} is ${this.studentid * 12}`);
    }
}