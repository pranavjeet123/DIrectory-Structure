
let directory =["file1","file2",{
    folder2:["file3","file4"],
    folder3:["imageFile","textFile",{
        gallery:["image1","image2"]
    }]
}];


let cbFn= function(){
    console.log("clicked");
    }


let yellowdiv = document.querySelector('[data-yellow]');
yellowdiv.addEventListener("click",cbFn);

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}