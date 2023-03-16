function User(studentCode,password,firstName,lastName,age,faculty,role)
{
    this.studentCode = studentCode;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.faculty = faculty;
    this.role = role;
}

const user1 = new User("123456",'123','ten','ho',19,'IT','admin');
console.log(user1);

class Classuser{
    constructor(studentCode,password,firstName,lastName,age,faculty,role){
        this.studentCode = studentCode;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.faculty = faculty;
        this.role = role;
    }
}

const user2 = new Classuser('098654','456','mai','tran',30,'informatin system','user');
console.log(user2);