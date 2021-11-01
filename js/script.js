// document.getElementsByClassName('product-img').
// document.createElement.
var list = [];
function add (){
    var text = document.getElementById('task').value;
    list.push(text);
    document.getElementById('task').value="";
    view();
}
function view() {
    count = list.length;
    var item="";
    for (var i=0; i<count; i++) {
        item += "<li ondblclick='destroy("+ i +")'>" +list[i]+ "</li> <span onclick='update("+ i +")' style='color:green'>update</span>";
    }
    document.getElementById('list').innerHTML=item;
}
function destroy(index) {
    list.splice(index,1);
    view();
    console.log(list);
}

function update(index) {
    document.getElementById('task').value = list [index];
    document.getElementById('update').style.display="inline-block";
    document.getElementById('add').style.display="none";
    document.getElementById('index').value = index;

    
}
function edit() {
    var task = document.getElementById('task').value;
    var task = document.getElementById('task').value
    var index = document.getElementById('index').value;
    document.getElementById('update').style.display="none";
    document.getElementById('add').style.display="inline-block";
    list[index]= task;
    view();
}









