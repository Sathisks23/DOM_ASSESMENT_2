let form = document.getElementById('myform')
    form.addEventListener('submit',addlist)
let pname 
let pamount
let namediv = document.getElementById('name_div')
let amountdiv = document.getElementById('name_div')

let name_err = document.createElement('p') ; name_err.innerHTML = '<p >Invalid product Name</p> ' ;name_err.style.color = 'red'
let amount_err = document.createElement('p') ; amount_err.innerHTML = '<p >Invalid amount</p> ' ;amount_err.style.color = 'red'


function addlist(){
   event.preventDefault()
  pname = form.pro_name.value
  if(pname.trim().length==0 && pamount.trim().length!=0) { 
        namediv.append(name_err)   
}else if(pamount.trim().length==0 && pname.trim().length!=0 ){
    amountdiv.append(amount_err)
}else{
    namediv.append(name_err) 
    amountdiv.append(amount_err) 
}

console.log('dj');
}