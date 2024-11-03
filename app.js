var input = document.getElementById("inp")
var AddBTN = document.getElementById('addbtn')
var todoBody = document.getElementById('table_data')
var clearAll = document.getElementById('clear')

var EditeEvent = null
var Count = 0
var counter = document.getElementById('count')
console.log(counter);



function AddTodo() {
    if(input.value === ""){
        alert("Please Enter a Todo")
        return;
    }
    Count++
    counter.innerHTML = `Todo : (${Count})`
    var ul = document.getElementById('List')
    ul.setAttribute('class', 'tbl_tr_content active')
   if(AddBTN.innerHTML === 'Save'){
        var span = EditeEvent.parentNode.previousElementSibling
        span.innerHTML = input.value
        AddBTN.innerHTML = 'Add'
   }else{
  
    var li = document.createElement("li")
    li.setAttribute('class', 'd-flex justify-content-between align-items-center')
    var span = document.createElement("span")
    var todoText = document.createTextNode(input.value)
    span.appendChild(todoText)
    li.appendChild(span)
    var div = document.createElement("div")
    div.setAttribute('class', 'button_tr')
    var EidteButton = document.createElement('button')
    EidteButton.setAttribute('class', 'btn_edit')
    EidteButton.setAttribute("onclick", 'EditeText(this)')
    var TextEdite = document.createTextNode('Edit')
    EidteButton.appendChild(TextEdite)
    div.appendChild(EidteButton)
    // 2nd button 
    var DeleteBtn = document.createElement('button')
    var DeletEtxt = document.createTextNode('Delete')
    DeleteBtn.setAttribute('class', 'btn_delete')
    DeleteBtn.setAttribute('onclick', 'DeletSpecific(this)')
    DeleteBtn.appendChild(DeletEtxt)
    div.appendChild(DeleteBtn)

    li.appendChild(div)

    ul.appendChild(li)
   }
    input.value = ""

}

function AllClear() {
    var ul = todoBody.children[0]
    ul.remove()
    var ListUl = document.createElement('ul')
    ListUl.setAttribute('class', 'tbl_tr_content')
    ListUl.setAttribute('id', 'List')
    todoBody.appendChild(ListUl)
    Count = 0
     counter.innerHTML = `Todo : (${Count})`
}

function DeletSpecific(event) {
    Count--
     counter.innerHTML = `Todo : (${Count})`
    var li = event.parentNode.parentNode
    var ul = li.parentNode.children.length
    console.log(ul);
    li.remove()   
    if(ul <= 1){
        AllClear()
    }
}

function EditeText(event){
    var span =event.parentNode.previousElementSibling
    var textSpan = span.innerHTML
    // console.log(textSpan);
    input.value = textSpan
    var button = input.parentNode.nextElementSibling.firstElementChild
    button.innerText = 'Save'   
    EditeEvent = event
}

document.addEventListener("keydown", function(e){
    if(e.key === 'Enter'){
        AddTodo()
    }
})