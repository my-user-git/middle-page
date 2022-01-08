function checkboxToggle() {
    let btn = document.querySelector(".section-publications__checkbox_heading-check");
    let labels = document.querySelectorAll(".checkbox--label");
    let listLabels = document.querySelector(".checkbox-list");
  btn.addEventListener("click", toggleSpoiler);
    btn.addEventListener("keyup", function(e) {
      console.log(e.key);
      if (e.code === "Enter") {
        toggleSpoiler();
      }
    })    
  function toggleSpoiler() {
      document.querySelector(".section-publications__checkbox_arrow").classList.toggle("section-publications__checkbox_arrow-active");
      if (!listLabels.classList.contains("checklist-active")) {
      listLabels.classList.add("checklist-active");
      labels.forEach(item => {
       // item.classList.add("checkbox--label-active");
        animationItem(item, "checkbox--label-active", "animation-test", "add");
      })
    } else {
      listLabels.classList.remove("checklist-active");
      labels.forEach(item => {
          if (item.querySelector(".checkbox").checked) {
          animationItem(item, "checkbox--label-active", "animation-test", "add");
        } else {
          animationItem(item, "checkbox--label-active", "animation-test", "remove");
        }
        });
    }
    labels.forEach(item => {
      item.addEventListener("click", function() {
        if (!listLabels.classList.contains("checklist-active")) {
          animationItem(this, "checkbox--label-active", "animation-test", "remove");
        }
      });
    })
  }
  function animationItem(item, class1, class2, f) {
   if (f === "add") {
      item.classList.add(class1);
    setTimeout(function() {
      item.classList.add(class2)
    }, 100);
  
   } else {
       item.classList.remove(class2);
    setTimeout(function() {
      item.classList.remove(class1)
    }, 300);
    }
   
  }
}
  
checkboxToggle()