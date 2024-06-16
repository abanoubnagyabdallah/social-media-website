var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 5,
  freeMode: true,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ********* posts in main-middle section *******
let feeds = document.querySelector(".feeds");

for (let i = 0; i < 5; i++) {
  feeds.innerHTML += `
    <div class="feed">
                  <div class="feed-top">
                    <div class="user">
                      <div class="profile-picture" >
                        <img src="assets/images/img/st4.jpg" alt="" />
                      </div>
                      <div class="info">
                        <h3>Irfan Habib</h3>
                        <div class="time text-gray">
                          <small> Pakistan, <span>2 Days Ago</span></small>
                        </div>
                      </div>
                    </div>
                    <div class="edit">
                      <img src="assets/images/svg/three-dots.svg" alt="" />
                      <ul class="edit-menu">
                        <li><i class="fa fa-pen"></i>Edit</li>
                        <li><i class="fa fa-trash"></i>Delete</li>
                      </ul>
                    </div>
                  </div>
                  <!--  -->
                  <div class="feed-img">
                    <img src="assets/images/img/feed1.jpeg" alt="" />
                  </div>
                  <!--  -->
                  <div class="action-button">
                    <div class="interaction-button">
                      <span><i class="fa fa-heart"></i></span>
                      <span><i class="fa fa-comment-dots"></i></span>
                      <span><i class="fa fa-link"></i></span>
                    </div>
                    <div class="bookmark">
                      <i class="fa fa-bookmark"></i>
                    </div>
                  </div>
                  <!--  -->
                  <div class="liked-by">
                    <span><img src="assets/images/img/n2.png" alt="" /></span>
                    <span><img src="assets/images/img/n3.png" alt="" /></span>
                    <span><img src="assets/images/img/n4.png" alt="" /></span>
                    <p><b>john wiliam</b> and <b>77 comment others</b></p>
                  </div>
                  <div class="caption">
                  <div class="title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Earum excepturi nam optio magnam officiis impedit ducimus.
                    Molestias cumque, modi illo laudantium ut nisi perspiciatis
                    itaque dolore autem beatae accusantium. Incidunt.
                  </div>
                    <p>
                      <b>Lana White</b>Lorem ipsum dolor sit, amet consectetur
                      <span class="hars-tag">#Life style</span>
                    </p>
                  </div>
                  <div class="comments text-gray">view all comments</div>
                </div>
  `;
}

// let edit =document.querySelector(".edit img")
// let editMenu =document.querySelector(".edit-menu")
// edit.addEventListener('toggle',()=>{
//   editMenu.style="transform: scale(1);"
// })

// =============== start popup ==========
document.querySelectorAll("#my-profile-picture").forEach((AllProfile) => {
  AllProfile.addEventListener("click", () => {
    document.querySelector(".profile-popup").style = "display:flex;";
  });
});

document.querySelectorAll(".popup .close").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".profile-popup").style = "display:none;";
  });
});

document.querySelector("#profile-upload").addEventListener("change", () => {
  document.querySelectorAll("#my-profile-picture img").forEach((img) => {
    img.src = URL.createObjectURL(
      document.querySelector("#profile-upload").files[0]
    );
  });
});

document.querySelector(".profile-popup").addEventListener("click", () => {
  document.querySelector(".profile-popup").style = "display:none;";
});

// add post popup

document.querySelector("#create-lg").addEventListener("click", () => {
  document.querySelector(".add-post-popup").style = "display:flex;";
});

document.querySelector(".add-post-popup").addEventListener("click", () => {
  document.querySelector(".add-post-popup").style = "display:none;";
});

let image=document.querySelector("#feed-pic-upload")
image.addEventListener('change',()=>{
  document.querySelector(".postImage").src=URL.createObjectURL(image.files[0])
})

// ====== story popup ======
let addStoryButton=document.querySelector("#add-story")
let addStoryImage=document.querySelector(".story img")
addStoryButton.addEventListener("click",()=>{
  addStoryImage.src=URL.createObjectURL(addStoryButton.files[0])
  document.querySelector('.add-story').style="display:none;"
})

// =============== end popup ==========
let heartReact=document.querySelectorAll(".action-button span:first-child i")
heartReact.forEach((heart)=>{
  heart.addEventListener('click',()=>{
    heart.classList.toggle('liked')
  })
})