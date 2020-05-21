
// import single or multiple modules
import {student, seniorstudent} from './AppServices/student-service.js'
// import module with different name
import {student as preschoolstudent} from './AppServices/student-service.js'
//importing everything from the module
import * as studentService from './AppServices/student-service.js'
//importing everything from the module
import {specialschool} from './AppServices/bridge-service.js'
//default import without {}
import firstsemester from './AppServices/semester-service.js'

function main(){

    
    let s = new student(1);
    console.log(s.info());

    
    let snrs = new seniorstudent(2,'computer science');
    console.log(snrs.info());

    
    let preStudent = new preschoolstudent(3);
    console.log(preStudent.info());

    let ss = new studentService.student(4);
    console.log(ss.info());

 
    let sch = new specialschool();
    console.log(sch.info());

    let sem = new firstsemester();
    console.log(sem.info());
    
    //dynamic import with promise
    document.getElementById('dbutton').addEventListener('click', ()=>{
        dynamicimport();
    });

    //dynamic import with asyn await
    document.getElementById('awbutton').addEventListener('click', async ()=>{
        await dynamicimportAsync();
    });

}


//start the app
main();

    //dynamic import with promise
function dynamicimport(){
    import('./AppServices/grade-service.js').then(gpa=>{
        console.log("grade service loaded");
        let g = new gpa.grades(1);
        console.log(g.info());
    }).catch(console.error);
}

    //dynamic import with asyn await
async function dynamicimportAsync(){

    //load right module path on business condition
    let pathOfModule = 1 > 2 ? "./AppServices2/grade-service.js" : "./AppServices/grade-service.js";
    const gradeService = await import(pathOfModule);

        console.log(gradeService);
        let g = new gradeService.grades(2);
        console.log(g.info());
  
}