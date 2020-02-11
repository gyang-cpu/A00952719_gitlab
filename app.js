var click_button = document.getElementById("addbutton");
var text_input = document.getElementById("newinput");
var clear_button = document.getElementById("clearmovie");
var my_list = document.querySelector(".list-group");
var new_table = document.querySelector("#table_form");
var create_table = document.createElement("table");
var create_table_td = document.createElement("td");
var historyname = []



new_table.appendChild(create_table);
create_table.setAttribute("id", "table_main_tag");
let table_main = document.querySelector("#table_main_tag");


for(let i = 0; i < 1; i++){
    let movie_tr = table_main.insertRow();
    let movie_td_history = movie_tr.insertCell();
    let movie_td_count = movie_tr.insertCell();
    movie_td_history.textContent = "Movie History";
    movie_td_history.setAttribute("id", "td_history")
    movie_td_count.textContent = "Count"
    movie_td_count.setAttribute("id", "td_count")
}


click_button.addEventListener("click", add_new_list);

function add_new_list() {
    let help_error = document.getElementById("para");
    let new_li = document.createElement("li");
    let new_info = document.createTextNode(text_input.value);
    let input_table_info = text_input.value;
    
   
    if (text_input.value === "") {
        help_error.innerHTML = "Please enter a movie you want to watch!!!";
    }
    else {
        new_li.appendChild(new_info);
        new_li.setAttribute("id", "tag_li")
        new_li.onclick = function(){
            this.parentElement.removeChild(this);
        }
        my_list.appendChild(new_li);
        text_input.value = ""
        table();
        function table(){
            let input_checker = [];
            let checker_list = input_checker.push(input_table_info);
            
            var historycount = 1
            
            
            if(historyname.includes(input_checker[0])){
                    let plus_one = document.getElementById(input_checker[0]);
                    historycount++;
                    plus_one.innerHTML = historycount;
            }
            else{
            let table_row = table_main.insertRow();
            table_row.insertCell().textContent = input_table_info;
            historyname.push(input_table_info);
            let table_id = table_row.insertCell();
            table_id.textContent = historycount;
            table_id.setAttribute("id", input_table_info);
        }
        
        
    }
    }
  
};

clear_button.addEventListener("click", delete_list);

function delete_list() {
    my_list.innerHTML = "";
};


// I dont want to change anything here