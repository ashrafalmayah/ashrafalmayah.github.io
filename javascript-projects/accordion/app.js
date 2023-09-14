const questionContainerList = document.getElementsByClassName("question-container");
console.log(questionContainerList);
for (let i = 0; i < questionContainerList.length; i++) {
    questionContainerList[i].addEventListener('click' , function (e){
        console.log("clicked!");
        this.classList.toggle('active');
    });
}