class User{
        static count=0;
    constructor(username,email,password){

        this.username=username;
        this.email=email;
        this.password=password;
        User.count++;
    }
    static registeredUser(){
        return `Registered Users till Now-> ${User.count}`;
    }
    register(){
        let regdate=new Date();
        return (this.username+' is registered. on- '+regdate)
    }
}
class Members extends User{
    constructor(username,email,password,packagetype){
    super(username,email,password);
    this.packagetype=packagetype
    let todaysdate=new Date()
    const activetillyear=todaysdate.getFullYear();
    const activetillmonth=todaysdate.getMonth();
    const activetilldate=todaysdate.getDate();

    //  3.
    this.membershipactivetilldate=new Date(activetillyear,activetillmonth+1,activetilldate)

}

    subscriptionactivetill(){

        return `${this.username} is subscribed till ${this.membershipactivetilldate}`
    }
    
    //  4.
    renewmembership(ptype){
        
        let activetillyear=this.membershipactivetilldate.getFullYear();
        let activetillmonth=this.membershipactivetilldate.getMonth();
        let activetillday=this.membershipactivetilldate.getDate();
        if (ptype==='Y'){

            this.membershipactivetilldate=new Date(

                    activetillyear+1,
                    activetillmonth,
                    activetillday
                    
            );
          
            if (this.packagetype!=="Y"){this.packagetype="Y"}
        }
        else if (ptype==='M'){

            this.membershipactivetilldate=new Date(

                activetillyear,
                activetillmonth+1,
                activetillday
            )
            if (this.packagetype!=="M"){
                       this.packagetype="M"}
        }    
    }
    getpackage(){
        return `Current package type of ${this.username} is ${this.packagetype}`
    }
}
const user1=new Members('amar','am@email.com','12345','M')

console.log(`${user1.username} is subscribed on-> ${new Date()}`)
console.log(User.registeredUser())
console.log(user1.subscriptionactivetill())
user1.renewmembership("Y")
console.log(user1.subscriptionactivetill())
console.log(user1.getpackage())

// const user2=new Members('Rajesh','r@email.com','1456','M')
// console.log(`${user2.username} is subscribed on-> ${new Date()}`)
// console.log(User.registeredUser())
// console.log(user2.subscriptionactivetill())
// user2.renewmembership("M")
// console.log(user2.subscriptionactivetill())