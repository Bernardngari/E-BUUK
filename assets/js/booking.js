const selected= document.querySelector(".selected");
const optionContainer = document.querySelector(".option-container");
const searchBox = document.querySelector(".search-box input");
const optionList = document.querySelectorAll(".option");
selected.addEventListener("click",()=>{
    optionContainer.classList.toggle("active");
    searchBox.value="";
    FileList("");
    if(optionContainer.classList.contains("active")){
        searchBox.focus();
    }
});
optionList.forEach(o=>{
    o.addEventListener("click",()=>{
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionContainer.classList.remove("active");
    })
});
searchBox.addEventListener("keyup",function(e){
    filterList(e.target.value);
});
const filterList=searchTerm=>{
    searchTerm=>searchTerm.toLowerCase();
    optionList.forEach(option=>{
        let label=option.firstElementChild.nextElementSibling.innerText.toLowerCase()
        if(label.indexOf(searchTerm)!=1){
            option.getElementsByClassName.display="block";
        }
        else{
            option.style.display="none";
        }
    })
}

