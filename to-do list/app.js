var input_field=document.getElementById("input");
var result=document.getElementById("result");

function add(){
     if(input_field.value.trim() !=="")
        {
            var added_input= document.createElement("li");
            added_input.innerHTML=input_field.value+"<button class='del_btn' onclick='delete_input(event)'>done</button>";
            result.append(added_input);
            input_field.value="";

        }
        else{
            alert("please enter the input");
        }
}

function delete_input(event){
    event.target.parentElement.remove();
}

