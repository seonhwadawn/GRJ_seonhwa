const formSubmit = document.querySelector(".button__submit")


const addItem = (name,image,content) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <img src="${image}" alt="${name}" />
            <span>${content}</span>
        `;
    document.querySelector(".flex__contianer").appendChild(div);
    const list = document.createElement("li");
    list.innerHTML = name;
    document.querySelector(".flex__sidebar ul").appendChild(list);
}

const addItemHandler = (event) => {
    // 화면 안넘어가게 처리
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let image = document.getElementById("image").value;
    let content = document.getElementById("content").value;
    // 이걸 줄일 수 있지 않을까? 고민된다...
    if (!name) {
        alert("이름을 입력해주세요")
        document.getElementById("name").focus();
        return;
    }
    if(!image){
        alert("이미지 링크를 넣어주세요")
        document.getElementById("image").focus();
        return;
    }
    if(!content){
        alert("내용을 입력해주세요")
        document.getElementById("content").focus();
        return;
    }
   
    addItem(name,image,content);
  

    closeModalEvent();

}

formSubmit.addEventListener("click",addItemHandler);