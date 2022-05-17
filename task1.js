//task1
function LogOut() {
  localStorage.removeItem('fname');
  localStorage.removeItem('email');
  window.location.href = "login.html";
}

//1
function loadpage() {
  window.location.href = "index.html"
  document.getElementById("home").style.color="slateblue";
  document.getElementById("user-friend").style.color="black";
}

//2



var a=localStorage.getItem("fname");
var d1Ele = document.getElementById("dateuser2");
var x = new Date()
var b=d1Ele.innerHTML = x.toLocaleTimeString()


function savedata(){
  document.getElementById("postnew").innerHTML+=`<div class="post">
  <div class="post-top">
      <div class="dp">
          <img src="./media/dp.jpg" alt="" />
      </div>
      <div class="post-info">
          <p class="name" id="nameuser"> 
          <script>consol.log("hi")</script>
${a}
          </p>


          <span class="time" id="dateuser" style="color: black">
     
          ${b}
           </span>
      </div>
      <i class="fas fa-ellipsis-h"></i>
  </div>

  <div class="post-content" id="postuser5" > 
 ${z}
  </div>

  <div class="post-bottom">
      <div class="action">
          <i class="far fa-thumbs-up"></i>
          <span>Like</span>
      </div>
      <div class="action">
          <i class="far fa-comment"></i>
          <span>Comment</span>
      </div>
      <div class="action">
          <i class="fa fa-share"></i>
          <span>Share</span>
      </div>
  </div>
</div>`;
var z=document.getElementById("id").value;
//console.log(z);
var h1Ele = document.getElementById("postuser5");
//console.log(h1Ele);

var yy =h1Ele.innerHTML=z;
//console.log(yy)

}




//upload image
document.getElementById("test").addEventListener("click",function () {
  document.getElementById("popupload").style.display='none';
 
 })

 function uploadimage(){
  document.getElementById("upload").addEventListener("click",function () {
    document.getElementById("popupload").style.display='flex';
  
  })
  
 
   

    
    document.getElementById("save").addEventListener("click",function () {
      document.getElementById("hdn2").style.display="block";
      //name
  var h1Ele = document.getElementById("nameuser3");
  h1Ele.innerHTML = localStorage.getItem("fname");
  //date
  var d1Ele = document.getElementById("dateuser3");
  var x = new Date()
  d1Ele.innerHTML = x.toLocaleTimeString()



document.getElementById("popupload").style.display="none";
     
     })
 }
 //img
 function preview() {
  img.src=URL.createObjectURL(event.target.files[0]);

}



   // color like button

   function changecolor(th) {
    th.style.color = 'blue'
    // th.addEventListener("click", function () {
    //     th.style.color = ''
    // })
}

function defaultcolor(th) {
    th.style.color = '';
}
// pop up video
function openvideo(th) {
    var ele = document.getElementsByClassName("overlay")[0]
    ele.style.display = 'block'
    if (th.id == "one") {
        document.getElementById("storyone").src = 'media/one.mp4'
    } else if (th.id == "two") {
        document.getElementById("storyone").src = 'media/two.mp4'
    } else if (th.id == "three") {
        document.getElementById("storyone").src = 'media/three.mp4'
    } else if (th.id == "four") {
        document.getElementById("storyone").src = 'media/four.mp4'
    }
}
// play video on click
function playvid() {
    var video = document.getElementById("storyone")
    video.play();
}

// pause video on click
function pausevid() {
    var video = document.getElementById("storyone")
    video.pause();
}
//    close pop video
function CloseModal() {
    var ele = document.getElementsByClassName("overlay")[0]
    ele.style.display = 'none'
    var video = document.getElementById("storyone")
    video.pause();
}


// open message box

function openmessagebox(th){
    var box = document.getElementsByClassName("messagesbox")[0];
    box.style.display="block";
}

// close message box

function Closemessagebox(){
    var box = document.getElementsByClassName("messagesbox")[0];
    box.style.display="none";
}

 