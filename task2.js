


        document.getElementById("test2").addEventListener("click",function () {
                document.getElementById("request").style.display='none';
               
               })
              
               function addFriends(){
                document.getElementById("addFriend").addEventListener("click",function () {
                        document.getElementById("user-friend").style.color="slateblue";
                        document.getElementById("home").style.color="black";


                        document.getElementById("request").style.display="flex";
                        document.getElementById("request").style.width="50%";
                        document.getElementById("request").style.height="500px";
                        document.getElementById("request").style.backgroundColor="white";
                        document.getElementById("request").style.marginLeft="330px";

                
                })}

                function add(f){
                        var isAdd = f.getAttribute("data-click");

        if (isAdd == 0) {
          alert("you add this friend");
           vary=f.setAttribute("data-click", 1); 
           document.getElementById("friends-section").innerHTML=`  <h4>Friends</h4>
           <a class='friend' href="#">
               <div class="dp" >
                   <img src="./media/girl.jpg" alt="">
               </div>
               <p class="name">Name</p>
           </a>`;

          
           document.getElementById("1").innerHTML=`<p>you add this friend</p>`;}
          
           document.getElementById("1").style.marginLeft="40px"
           document.getElementById("1").style.marginTop="40px"

                }

                function dlt(){
                       
                        document.getElementById("2").innerHTML=`<p>you delete this friend</p>`;
                        document.getElementById("2").style.marginLeft="40px"
                        document.getElementById("2").style.marginTop="40px"
                }


                
                

                