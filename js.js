function Register(name1,pass,email,mobile,msg)
{
    this.name= name1; this.password=pass; this.email_id=email; this.mobile_num=mobile;
}
Register.prototype.sra1=function () {
    return this.name+"-"+this.password+"-"+this.email_id+"-"+this.mobile_num;
}
Register.prototype.sra2=msg;
var reg2=new Register('sra1','password1','sra1@g.c',970);
console.log(reg2.sra1());
var reg3=new Register('sra2','password2','sra2@g.c',5754,'hi');
console.log(reg3.sra1());
console.log(reg3);