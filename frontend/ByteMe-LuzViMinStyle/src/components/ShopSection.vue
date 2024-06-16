<template>
    <section class="shop section" id="section3">

<input type="radio" name="Photos" id="check1" checked>
<input type="radio" name="Photos" id="check2">
<input type="radio" name="Photos" id="check3">

 <div class="line2"></div>

<div class="container">
   <h1>LuzViMin Styles</h1>
   <div class="top-content">
      <h3>LuzViMin</h3>
      <div class = "itemcenter">
      <label for="check1">All</label> 
      <label for="check2">Gowns</label>    
      <label for="check3">Suits</label>  
    </div>
   </div>         
   <div class="photo-gallery">    

              <!--1st row-->    
    <div class="pic gown">
        <img src="../assets/gown1.jpeg">
        <figcaption>Gown</figcaption>
     </div>  
    <div class="pic suit">
         <img src="../assets/suit11.jpg">
         <figcaption>Suit</figcaption>
      </div>
     <div class="pic gown">
        <img src="../assets/gown1.jpg">
        <figcaption>Gown</figcaption>
     </div>
     <div class="pic suit">
        <img src="../assets/suit2.jpg">
        <figcaption>Suit</figcaption>
     </div>

             <!--2nd row-->    
     <div class="pic suit">
        <img src="../assets/suit4.jpg">
        <figcaption>Suit</figcaption>
     </div>  
    <div class="pic gown">
         <img src="../assets/gown3.jpg">
         <figcaption>Gown</figcaption>
      </div>
     <div class="pic suit">
        <img src="../assets/suit5.jpg">
        <figcaption>Suit</figcaption>
     </div>
     <div class="pic gown">
        <img src="../assets/gown4.jpg">
        <figcaption>Gown</figcaption>
     </div>

        <!--3rd row-->    
    <div class="pic gown">
        <img src="../assets/gown5.jpeg">
        <figcaption>Gown</figcaption>
     </div>  
    <div class="pic suit">
         <img src="../assets/suit6.jpg">
         <figcaption>Suit</figcaption>
      </div>
     <div class="pic gown">
        <img src="../assets/gown6.jpg">
        <figcaption>Gown</figcaption>
     </div>
     <div class="pic suit">
        <img src="../assets/suit7.jpg">
        <figcaption>Suit</figcaption>
     </div>

     <!--4th row-->    
     <div class="pic suit">
        <img src="../assets/suit10.jpg">
        <figcaption>Suit</figcaption>
     </div>  
    <div class="pic gown">
         <img src="../assets/gown7.jpg">
         <figcaption>Gown</figcaption>
      </div>
     <div class="pic gown">
        <img src="../assets/gown8.jpg">
        <figcaption>Gown</figcaption>
     </div>
     <div class="pic suit">
        <img src="../assets/suit9.jpg">
        <figcaption>Suit</figcaption>
     </div>         
   </div>
</div> &nbsp;
</section>

</template>

<script>
export default {
    name: 'ShopSection',
    // Your component's JavaScript logic goes here
}
</script>

<style scoped>
.shop nav{
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    padding-top: 5px;
    padding-bottom: 5px;


}
.shop nav a:link {
    color: lightslategray;
}
.shop nav a:visited {
    color:lightslategray;
}
.shop nav a:hover {
    color: rosybrown;
}

.shop a{
    text-decoration: none;
}


.shop input{
    display: none;
}
.shop .container{
    width: 100%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 50px; 

}
.shop .line2{
    margin-top: 200px;
    border: 3px solid #cc8f0c;
    margin-bottom: 150px;
 }

.shop h1{
    font-weight: normal;
    font-size: 35px;
    position: relative;
    margin: 40px 0 ;
}

.shop h1::before{
    content: '';
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: #cc8f0c;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    animation: animate 4s linear infinite;
}
.shop .top-content{
    background-color:#cc8f0c;
    width: 90%;
    margin: 0 auto 20px auto;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 5px; 
    box-shadow: 3px 3px 5px white;

}

.itemcenter{
display: flex;
justify-content: space-evenly;
width :100%
}

.shop h3{
    height: 100%;
    background-color:beige;
    line-height: 60px;
    padding: 0 50px;
    color:#cc8f0c;
}

.shop label{
    display: inline-block;
    height: 100%;
    padding: 0 90px;
    margin: 0 50px;
    line-height: 60px;
    color: wheat;
    font-size: 18px;
    cursor: pointer;    
    transition: color .5s;
}

.shop label:hover{
    color: black;
}
.shop label a:visited {
    color: coral;
}


.shop .photo-gallery{
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    cursor: pointer;
}

.shop .pic{
    position: relative;
    height: 300px;
    border-radius: 20px;
    box-shadow: 2px 2px 4px lightslategray;
    cursor: pointer;    
}

.shop .pic img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: .5s;
}
.shop .pic::before{
    content: "LuzViMin Styles";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: aliceblue;
    font-size: 25px;
    font-weight: bold;
    width: 100%;
    margin-top: -100px;
    opacity: 0.5;
    transition: .3s;
    transition-delay: .2s;
    z-index: 1;

}

.shop .pic:after{
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    height: 0;
    background-color:rgb(0,0,0,.4);
    transition: .3s;
}

.shop .pic:hover::after{
    height: 100%;
}

.shop .pic:hover::before{
    margin-top: 0;
    opacity: 1;
}

#check1:checked ~ .container .photo-gallery .pic{
    opacity: 1;
    transform: scale(1);
    position: relative;  
    transition: .5s;

}

#check2:checked ~ .container .photo-gallery .gown {
    opacity: 1;
    transform: scale(1);
    position: relative;
}
#check2:checked ~ .container .photo-gallery .suit{
    opacity: 0;
    transform: scale(0);
    position: absolute;
    transition: .0s;
}

#check3:checked ~ .container .photo-gallery .suit{
    opacity: 1;
    transform: scale(1);
    position: relative;
}
#check3:checked ~ .container .photo-gallery .gown{
    opacity: 0;
    transform: scale(0);
    position: absolute;
    transition: 0s;
    
}
/*Jhaz gallery for nav bar*/
.top-content label {
    color: white
  }
  
.top-content label.active {
    /* style for selected labels */
    color: black; /* or your desired color */
  }
</style>