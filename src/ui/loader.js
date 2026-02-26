function searchBYname(tab,name){
    let result =[];
  for (let i=0 ; i<tab.length;i++){
    if (name==tab[i].name) {
      result.push(tab[i])
    }
    return result;
  }
}
console.log(searchBYname([{name:"hwa"}],"ana"));