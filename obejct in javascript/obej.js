function HouseKeeper(yearOfExp,name,cleanCat){
    this.yearOfExp = yearOfExp;
    this.name= name; 
    this.cleanCat= cleanCat;
}



var housekeeper1 = new HouseKeeper(9,"Katrina","Toilet");
console.log(housekeeper1.name);