<template>
    <section class="home section" id="section1">
            <div class="home-content">
                <h3>Welcome</h3>
                <h1>Philippine Modern </h1>
                <h3><span class="multiple-text"></span></h3>
                <p></p>
                <div class="social-media">
                    <a href="#" style="--i:5;"><i class='bx bxl-facebook-circle'></i></a>
                    <a href="#" style="--i:6;"><i class='bx bxl-twitter' ></i></a>
                    <a href="#" style="--i:7;"><i class='bx bxl-instagram' ></i></a>
                    <a href="#" style="--i:8;"><i class='bx bx-envelope' ></i></a>
                </div>
                <a href="#" class="button">Log In </a>

                <div>
                    <div class="col">
                        <div class="card card1">
                        </div>
                        <div class="card card2">
                        </div>
                    </div>
                    <div class ="col-2">
                        <div class="card card3">
                        </div>
                        <div class="card card4">
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>
</template>

<script>
//Text Animation for the Home Section
import 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js'

var typed = new Typed(".multiple-text", {
    strings: ["Gowns and Suits"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

export default {
    name: 'HomeSection',
    // Your component's JavaScript code goes here
}
</script>

<style scoped>
.home{
    margin-top: 40px;
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 70px 10% 0;
}
.home-content{
    max-width: 600px;
    margin-top: 130px;
}
.home-content h3{
    font-size: 32px;
    font-weight: 700;
    opacity: 0;
    animation: slideBottom 1s ease forwards;
    animation-delay: 0.7s;
}
.home-content h3:nth-of-type(2){
    margin-bottom: 30px;
    animation: slideTop 1s ease forwards;
    animation-delay: 0.7s;
}
.home-content h3 span{
    color: #cc8f0c;
}
.home-content h1{
    font-size: 56px;
    font-weight: 700;
    margin: -3px 0;
    opacity: 0;
    animation: slideRight 1s ease forwards;
    animation-delay: 1s;
}
.home-content p{
    font-size: 16px;
    opacity: 0;
    animation: slideLeft 1s ease forwards;
    animation-delay: 1s;
}
.home-img img{
    max-width: 450px;
    margin-right: -20px;
    opacity: 0;
    animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
    animation-delay: 2s, 3s;
}
.social-media a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid #a1771a;
    border-radius: 50%;
    font-size: 20px;
    color: #a1771a;
    text-decoration: none;
    margin: 30px 15px 30px 0;
    transition: .5s ease;
    opacity: 0;
    animation: slideLeft 1s ease forwards;
    animation-delay: calc(.2s * var(--i));
}
.social-media a:hover{
    background-color: #cc8f0c;
    color: #333030;
    box-shadow: 0 0 20px #cc8f0c;
}
.button{
    display: inline-block;
    padding: 12px 28px;
    background-color: #cc8f0c;
    border-radius: 10px;
    box-shadow: 0 0 10px #cc8f0c;
    font-size: 16px;
    color: #000000;
    letter-spacing: 1px;
    text-decoration: none;
    font-weight: 600;
    transition: .5s ease;
    opacity: 0;
    animation: slideTop 1s ease forwards;
    animation-delay: 2s;
}
.button:hover{
    box-shadow: none;
}

/*Additionals*/
.col{
    margin-top: 200px;
    flex-basis: 50%;
    position: relative;
}

.col-2{
    margin-top: 0px;
    flex-basis: 50%;
    position: relative;
}

.logopic{
    background-image: url(../assets/logo.png) ;
}
.card{
    width: 200px;
    height: 230px;
    display: inline-block;
    border-radius: 10px;
    padding: 15px 25px;
    box-sizing: border-box;
    cursor: pointer;
    margin: 10px 15px;
    background-position: center;
    background-size: cover;
    transition: transform 0.5;
    background-repeat: no-repeat;
}

.card1{
    background-image: url(../assets/gown1.jpeg) ;
    
}

.card2{
    background-image: url(../assets/gown1.jpg) ;
}

.card3{
    background-image: url(../assets/suit1.jpg) ;
}

.card4{
    background-image: url(../assets/suit2.jpg) ;
}

.card:hover{
    transform: translateY(-10px);
}

</style>