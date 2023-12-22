let html = document.getElementById("post2")

let image = document.getElementById("postImg")
let catagory = document.getElementById("cat")
let title = document.getElementById("title")
let description = document.getElementById("desc")
let authImg = document.getElementById("authImg")
let authName = document.getElementById("authName")
let views = document.getElementById("views")


function post(image, catagory, title, description, authImg, authName, views){


    html.innerHTML = `<div class="mainContainer">
    <div class="postContainer" >
      <div class="post1" id="card">
        <div class="img">
          <img src="${image}" alt="" />
        </div>
        <div class="info">
          <h4 class="cat">${catagory}</h4>
          <div class="titlebox">
            <h3 class="title">
              ${title}
            </h3>
            <i class="fa-solid fa-ellipsis threeDot"></i>
          </div>
          <p class="desc">
            ${description}
          </p>
          <div class="authorPanel d-flex">
              <div class="authInfo d-flex">
                  <div class="authImg">
                      <img src="${authImg}" alt="">
                  </div>
                  <div class="authName d-flex"><span>${authName}</span></div>
              </div>

              <div class="postInfo d-flex">
                  <div class="views d-flex">
                      <img src="assets/eye.svg" alt="">
                      <span>${views} Views</span>
                  </div>
                  <div class="share d-flex">
                      <i class="fa-solid fa-share-nodes"></i>
                  </div>
              </div>
          </div>
        </div>
      </div>`
}

post("assets/post2.svg", "✍️ Article", "What if famous brands had regular fonts? Meet RegulaBrands!", "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…", "assets/auth2.svg", "Sarthak Kamra", "1.9k")

let threeDot = document.querySelectorAll(".threeDot");
let threeDotMenu = document.getElementById("threeDotEvent");

threeDot.forEach(function (dot) {
  dot.addEventListener('click', function () {
    if (threeDotMenu.style.display === "flex") {
      threeDotMenu.style.display = "none";
    } else {
      threeDotMenu.style.display = "flex";
    }
    // alert('clicked');
  });
});


$(document).ready(function () {
  // Open Another Modal when the link is clicked
  $("#loginPage").click(function () {
      // Hide the main modal
      $("#signUp").modal("hide");

      // Show the another modal
      $("#anotherModal").modal("show");
  });
});

$(document).ready(function () {
  // Open Another Modal when the link is clicked
  $("#signUpLink").click(function () {
      // Hide the main modal
      $("#anotherModal").modal("hide");

      // Show the another modal
      $("#signUp").modal("show");
  });
});

let uName = document.getElementById("userName").value



document.getElementById("signInBtn").addEventListener('click', function(){
  let uName = document.getElementById("userName").value
  console.log(uName);
  $('#anotherModal').modal('hide');  
})