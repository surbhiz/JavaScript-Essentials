//constructor function usually starts with capital letter

function Names(firstname, middlename, lastname){
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
}
//prototype objects

Names.prototype={
    call: function(){return this},
    adjective: function(){return "You are beautiful"}

}

var name1 = new Names("Surbhi", "Sunil", "Zambad");
