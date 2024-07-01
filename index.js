let myLeads = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const dateEl = document.getElementById("date-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const spanEl = document.getElementById("span-el")
let inputdate = new Date()
    

if (leadsFromLocalStorage){
        myLeads = leadsFromLocalStorage
        render(myLeads)
    }



    function render(leads) {
        ulEl.innerHTML = '';
        for (let i = 0; i < leads.length; i++) {
          const listItem = document.createElement("li");
          const link = document.createElement("a");
          link.setAttribute("target", "_blank");
          link.setAttribute("href", leads[i]);
          link.textContent = leads[i];
      
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.addEventListener("click", function () {
            deleteItem(i);
          });
      
          listItem.appendChild(link);
          listItem.appendChild(deleteButton);
          ulEl.appendChild(listItem);
        }
      }
      
    


inputBtn.addEventListener("click", function() {
    if(inputEl.value==="" || dateEl.value ===""){
      inputEl.style.borderColor = "red"; 
      dateEl.style.borderColor = "red"; 

      return false
    }else{
      myLeads.push(inputEl.value + " " + dateEl.value)
      inputEl.value = ""
      dateEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    }
    
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )

})


//DELETE FUNCTION
deleteBtn.addEventListener("dblclick", function(){

    localStorage.clear()
    myLeads = []
    render(myLeads)

})





  
  function deleteItem(index) {
    myLeads.splice(index, 1);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  } 