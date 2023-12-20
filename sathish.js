let form = document.getElementById('myform')
    form.addEventListener('submit',addlist)
let pname 
let pamount
let namediv = document.getElementById('name_div')
let amountdiv = document.getElementById('amount_div')

let name_err = document.createElement('p') ; name_err.innerHTML = '<p >Invalid product Name</p> ' ;name_err.style.color = 'red'
let amount_err = document.createElement('p') ; amount_err.innerHTML = '<p >Invalid amount</p> ' ;amount_err.style.color = 'red'

let ul = document.getElementById('ul')

function addlist(){
   event.preventDefault()


  pname = form.pro_name.value
  pamount = form.pro_price.value
  if(pname.trim().length==0 && pamount.trim().length!=0) { 
        namediv.append(name_err)   ;  amount_err.remove()
}else if(pamount.trim().length==0 && pname.trim().length!=0 ){
    amountdiv.append(amount_err) ; name_err.remove()
}else if(pname.trim().length==0 && pamount.trim().length==0){
    namediv.append(name_err) 
    amountdiv.append(amount_err) 
}else{
   name_err.remove()
   amount_err.remove()
   let li = document.createElement('li') ;li.innerHTML  = `<li class="row"><div class="list" ><p>${pname}</p>  <p>${pamount}</p></div> <i onclick ='del(this)' class="fa-solid fa-trash"></i></li>`
       ul.append(li)

       form.reset()


}




}


function del(e){
    e.parentElement.remove()
}