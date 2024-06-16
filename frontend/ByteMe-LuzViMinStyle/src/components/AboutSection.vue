<template>
    <section class="section" id="section2">
        <div class="scroll-down"><a href="#biography"><i class='bx bx-chevrons-down'></i></a></div>
        <div class="line"></div>
        <header class = "header2">
            <h1><span>Why </span>LuzViMin?</h1>
            </header>
            <div class = "columndiv1"> 
                              
            <section class="mission">
              <h3>Accessible</h3>
              <p>Experience wearing luxury fashion at an affordable price</p>
            </section>
            <div><section class="benefits">
              <h3>Sustainable</h3>
              <p>Save time, money, and closet space for one-time special occasions</p></section></div>
              
              <div><section class="benefits">
              <h3>Well-curated</h3>
              <p>Look great in pieces recommended by our in-house stylists</p>
            </section></div>
        </div>

             <header class = "header2">
              <img src="../assets/whypic.jpg" alt="Why Vestido?"> 
              </header>            
                   

        <section class="biography" id="biography">
            <div class="bio-heading"><h2>Philippine <span>Modern </span>Gowns and Suits</h2></div>
            <div class="bio-content">
            
            <p><br>Welcome to LuzViMin your premier online destination for renting and buying exquisite gowns and suits that celebrate the rich 
            tapestry of Filipino fashion. Founded by three innovative students from Baliuag University, LuzViMin is a virtual one-stop shop 
            dedicated to bringing the diverse and vibrant styles of the Philippines to a global audience. <br><br>
            LuzViMin was born out of a shared passion for fashion and a deep love for Filipino culture. As students of Baliuag University, 
            we recognized the potential to merge these two passions into a project that could make a meaningful impact. 
            Inspired by the beauty and diversity of our country's fashion, we embarked on this journey to create a platform that honors 
            and promotes Filipino design.<br>
            </p>
            </div>
        </section>
       </section>

</template>
<script>
export default {
    name: 'AboutSection',
    // Add your component's logic here
}
</script>

<style scoped>
.about{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 70px 10% 0;
}
.about-content{
    font-size: 28px;
    font-weight: 700;
    opacity: 0;
    animation: slideLeft 1s ease forwards;
    animation-delay: 2s;
}
.about-header{
    font-size: 28px;
    font-weight: 700;
    opacity: 0;
    animation: slideRight 1s ease forwards;
    animation-delay: 1.5s;
}
.scroll-down a{
    position: relative;
    display: block;
    font-size: 28px;
    text-decoration: none;
    color: transparent;
    bottom: 100px;
    height: 1px;
    width: 1px;
    left: 50vw;
    right: 50vw;
    opacity: 0;
    animation: slideBottom 1s ease forwards, floatImage 3s ease-in-out infinite;
    animation-delay: 2.6s, 3s;
}
.about-header h1 span,
.bio-heading h2 span{
    color: #cc8f0c;
}
.about-content h1 span{
    color: #cc8f0c;
    opacity: 0;
    animation: zoomIn 1s ease forwards;
    animation-delay: 2.4s;
}
.biography{
    display: grid;
    text-align: center;
    align-items: center;
    margin-top: 20px;
    font-size: 16px;
}
.line{
   margin-top: 200px;
   border: 3px solid #cc8f0c;
}
.bio-heading h2{
    text-align: center;
    align-items: center;
    display: inline-block;
    padding: 50px;
    font-size: 48px;
}
.bio-content{
    margin-left: auto;
    margin-right: auto;
    padding-left: 100px;
    padding-right: 100px;
    text-indent: 50px;
    text-align: justify;
    align-items: center;
    width: 100%;
}

.bio-content p {
    text-align: justify; 
    margin-left: 70px;
    margin-right: 70px;   
}

/** new*/
.columndiv1{
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    cursor: pointer;
}

.columndiv2{
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    cursor: pointer;
}

.header2 {
    background-color: white;
    padding: 10px;
    text-align: center;
    

  }
  
  .header2 h1 {
    margin: 0;
    padding: 10px 0;
    margin-top: 50px;
    font-size: xx-large;
    color: #cc8f0c;
  }
  
  .header2 h1 span {
    color: black;
  }
  
  .header2 main {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* Two columns with equal width */
    grid-gap: 50px;  /* Gap between columns */
    padding: 50px 0;
    
  }


  .header2 p {
    margin-left: 80px;
    margin-right: 80px;

  }
 
 
  .mission {
    margin-top: 50px;
    text-align: center;
    margin-bottom: 60px;
  }

  .mission, .benefits, h3 {
   color: #cc8f0c;
   font-size: 23px;
  }

  .mission, .benefits, p {
    color: black;
    font-size: medium;
   }
 
  .benefits {
    margin-top: 50px;
    text-align: center;
    margin-bottom: 60px;
  }
  
  .benefits h3, .benefits p, .mission p, .mission h3 {
    width: 100%; /* Ensure each item takes the full width */
    margin-bottom: 20px; /* Add margin for spacing */
  }
  
  /* Ensure paragraphs inside mission and benefits have some margin */
  .mission p, .benefits p {
    margin: 0;
    padding-bottom: 10px;
  }

</style>