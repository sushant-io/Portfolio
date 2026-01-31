function lenis(){
    // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});


}
lenis();
function navbarhoveranimation(){
let container = document.querySelector("#right")
let sections = document.querySelectorAll("#right a")
let background = document.querySelector("#background")
sections.forEach(function(section){
    let pos = section.getBoundingClientRect()
    let mainpos = container.getBoundingClientRect()
    section.addEventListener("mouseover",function(){
        gsap.to(section,{
            color:"white"
        })
gsap.to(background,{
    opacity:1,
    x:pos.x-mainpos.x+"px",
    width:pos.width  +"px",
})
    })

})
sections.forEach(function(section){
    section.addEventListener("mouseleave",function(){
        gsap.to(section,{
        color:"black"
    })
    })

})

container.addEventListener("mouseleave",function(){
    gsap.to(background,{
        x:0,
        opacity:0
    })

})
}
function animation(){
    
var container = document.querySelector("#left h1")
var text = container.textContent
var letters = text.split("")
var clutter = ""
for (var i=0; i<letters.length;i++){
clutter  += `<span class="inline-block">${letters[i]}</span>`
}
container.innerHTML = clutter
var spans = document.querySelectorAll("#left h1 span")
    gsap.from(spans,{
        y:10,
        stagger:0.1,
        repeat:-1
    })

}
navbarhoveranimation();
animation();
function header(){
    var count = 0;
    var container = document.querySelector("#left h1")
  
setInterval(function(){
    if(count==0){
    container.textContent = "Welcome!"
    animation();
    count++;
    }
    else{
container.textContent ="< sushant./>"
animation();
count--;
}
}, 3000);
    }
header();

function cursor(){
 var cursor = document.querySelector("#cursor")
 var main = document.querySelector("#main")
 main.addEventListener("mousemove",function(dets){
 gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1
 })
 })

}
cursor()
function highlighanimation(){
    var container = document.querySelector("#highlight")
var text = container.textContent
var letters = text.split("")
var clutter = ""
for (var i=0; i<letters.length;i++){
clutter  += `<span class="inline-block">${letters[i]}</span>`
}
container.innerHTML = clutter
var spans = document.querySelectorAll("#highlight span")
    gsap.from(spans,{
        y:10,
        stagger:0.1,
        repeat:-1
    })
}
highlighanimation();
function highlight(){
    var container = document.querySelector("#highlight")
    var count=0;
setInterval(function(){
    if(count==0){
        container.textContent = "< ScrollAnimation./>"
        highlighanimation()
        count++;
    }
    else if(count==1){
        container.textContent = "< Microinteraction./>"
        highlighanimation()
        count++;
    }
    else{
        container.textContent = "< Frontend./>"
        highlighanimation()
        count = count - 2;
    }
}, 5000);
}
highlight();


function projectpage(){
    const elems = document.querySelectorAll("#containers .container")
    const follower = document.querySelector("#follower")
    const cursor = document.querySelector("#cursor")
    elems.forEach(function(elem){
        elem.addEventListener("mousemove",function(dets){
            var img = elem.querySelector("img")
            var src = img.getAttribute("src")
            var value = follower.getBoundingClientRect();
            var offsetX  = value.width;
            var offsetY = value.height;
            follower.style.backgroundImage = `url("${src}")`
         cursor.style.display = "none"
          gsap.to(follower,{
            x:dets.clientX-offsetX/2,
            y:dets.clientY-offsetY/2,
            scale:1
          })
        })
        elem.addEventListener("mouseleave",function(dets){
          gsap.to(follower,{
            x:dets.x,
            y:dets.y,
            scale:0
          })
        })
    })
    
}
projectpage()
function page2start(){
    const tl = gsap.timeline();
    var elem = document.querySelector("#line")
    tl.to(elem,{
        width:"100%",
        scrollTrigger:{
            trigger:elem,
            start:"top 80%",
            end:"bottom 60%",
            scrub:true
        }
    })
var containers = document.querySelectorAll("#techoverview .techcontainer");
var maindiv = document.querySelector("#techoverview");
   containers.forEach(function(elem){
   gsap.set(elem, {
  y: 300,
});
    })
    gsap.to(containers,{
    y:0,  
     stagger:0.1,
    scrollTrigger:{
        trigger:maindiv,
        start:"top 70%",
        end:"bottom 50%", 
    }
   })
}
page2start()
