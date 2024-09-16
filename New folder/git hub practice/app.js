const discription=document.querySelector('#discription')
const expense=document.querySelector('#expense')
const form=document.querySelector('form')
const div=document.querySelector('div')
let arr =[]



    form.addEventListener('submit',(event)=>{
   event.preventDefault()
   console.log(discription.value)
   console.log(expense.value)

   const user={
            discription : discription.value,
            expense : expense.value,
            }
            arr.push(user)
            console.log(user)

            div.innerHTML +=`
                <h1>${user.discription}</h1>
                <h1>${user.expense}</h1>
            
               <button  id="del" onclick="del()" >Delete</button>  <br><br>
               <button  id="edit" onclick="edit()" >edit</button>  <br><br>
                `   
            discription.value=''
            expense.value=''
            localStorage.setItem('form' ,JSON.stringify(arr))

    })
                         
function del() {

console.log('delete',arr)
arr.remove()
div.innerHTML=''
    
div.innerHTML +=`
        <h1>${user.discription}</h1>
        <h1>${user.expense}</h1>
        
       <button  id="del" onclick="del()" >Delete</button>  <br><br>
       <button  id="edit" onclick="edit()" >Edit</button>  <br><br>
        `
}



function edit() {
    console.log('edit',arr)
    prompt('Change your discription')
    arr.splice(arr,1,update)


}






















































// function del() {
//     console.log('delete')
//     arr.splice(arr,1)
//     div.innerHTML=''

//         div.innerHTML +=`<h1>${user.age}</h1>
//     <h1>${user.Name}</h1>
//     <h1>${user.email}</h1>
//    <button  id="del" onclick="del()" >Delete</button>  <br><br>
//     `
// }
    










