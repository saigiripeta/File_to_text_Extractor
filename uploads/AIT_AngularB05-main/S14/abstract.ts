abstract class A {

username:string;

   abstract display(name:string,gender:string);

   changeName(newname){
  this.username = newname
   }

}

class A1 extends A{

    display(name: string, gender: string) {
        console.log(this.username,name,gender)
    }
}

class B1 extends A{
    display(name: string, gender: string) {
        this.username = "jdsbcjdksb"
        console.log(this.username)
    }
}