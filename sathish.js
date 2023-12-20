
"use stirct"

let form = document.getElementById('myform')
    form.addEventListener('submit',addlist)
let pname 
let pamount
let namediv = document.getElementById('name_div')
let amountdiv = document.getElementById('amount_div')

let name_err = document.createElement('p') ; name_err.innerHTML = '<p >Invalid product Name</p> ' ;name_err.style.color = 'red'
let amount_err = document.createElement('p') ; amount_err.innerHTML = '<p >Invalid amount</p> ' ;amount_err.style.color = 'red'
let totaldiv =  document.querySelector('#totaldiv')
let ul = document.getElementById('ul')
let child = 0
let total_ammount = 0
let li_array = []
let amount_array=[]
let myindex = 0

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

amount_array.push(parseInt(pamount))

   total_ammount +=parseInt(pamount)
   name_err.remove()
   amount_err.remove()
   let li = document.createElement('li') ;li.innerHTML  = `<li class="row"><div class="list" ><p>${pname}</p>  <p id='amnt'>${pamount}</p></div> <i onclick ='del(this,${myindex})' class="fa-solid fa-trash"></i></li>`
      li_array.push(li)
   ul.append(li)

 totaldiv.innerHTML = `<p id="tname">Total amount</p>  <p id="total">${total_ammount}</p>`
       
myindex++
 form.reset()

}




}




function del(e,myindex){

   
    li_array.splice(myindex,1)


    
   
   total_ammount -=parseInt( e.parentElement.firstElementChild.lastElementChild.innerHTML)
  document.querySelector('#totaldiv').innerHTML = ` <p id="tname">Total amount</p>  <p id="total">${total_ammount}</p>`;

  e.parentElement.parentElement.remove()


if(total_ammount==0){
    document.querySelector('#totaldiv').firstElementChild.remove()
    document.querySelector('#totaldiv').lastElementChild.remove()
}
   
}

let  ordered = []


function filter(){
  

ul.innerHTML = ''


    for(i in amount_array){

        temp = amount_array[i]
    
        for (j in amount_array){
          if(amount_array[i]>amount_array[j]){
           temp =  amount_array[j]
           amount_array[j]=amount_array[i]
            amount_array[i] = temp
          }
        }



    }





    for(i in amount_array){
      
      for(j in li_array){

      let  c =   li_array[j].firstElementChild.firstChild.lastChild.innerHTML

        if(amount_array[i]==c){
            
            let data = li_array[j]
           
            ul.append(data)

       

        }

      }
    }

console.log(ordered);

}



// a=[1,5,3,6,8,9]
// let temp

// for(i in a){

//     temp = a[i]

//     for (j in a){
//       if(a[i]>a[j]){
//        temp =  a[j]
//        a[j]=a[i]
//         a[i] = temp
//       }
//     }
// }

// console.log(a);