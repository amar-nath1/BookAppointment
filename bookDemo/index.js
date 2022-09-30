function bookcall(e){
    e.preventDefault();
    console.log('I am here')
    var cname=document.getElementById("cname").value;
    var cemail=document.getElementById("cemail").value;
    var ctel=document.getElementById("ctel").value;
    var cdate=document.getElementById("cdate").value;
    var ctime=document.getElementById("ctime").value;
    console.log("Name: ",cname,"\n","Email: ",cemail,"\n","Mob: ",ctel,"\n","Date: ",cdate,"\n","Time: ",ctime)
}