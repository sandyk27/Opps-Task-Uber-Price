

class Person {
    constructor(name,age,degree,mobile,address,worcking,hobbies){
        this.name = name;
        this.age = age;
        this.degree = degree;
        this.mobile = mobile;
        this.address = address;
        this.worcking = worcking;
        this.hobbies = hobbies;
    };
    getdetails(){
        console.log(`Name: ${this.name}
        Age: ${this.age}
        Degree: ${this.degree}
        Mobile: ${this.mobile}
        Address: ${this.address}
        Worcking: ${this.worcking}
        Hobbies: ${this.hobbies}`);
    };
};

const details = new Person("Santhoshkumar",25,"Bsc Visual Communication",701083560,"1/136 MainRoad,Mayiladuthurai-609304","Hinduja Leyaland Finance","Traveling & Watching Movies");
console.log(details);
details.getdetails();
