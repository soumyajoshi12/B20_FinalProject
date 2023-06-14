var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
        start:"top top",
        pin:true,
        scrub:1,
        end: "+=" + (window.innerHeight * 7),
    }
});

tl
.to("#center",{
    left:"50%",
    transformTranslate:"-50%,-50%",
    ease:Power1
})
.to("#circle",{
    scale: 0,
    ease:Power1
},"a")
.to("#purple",{
    scale:1.2,
    top:"50%"
},"a")
.to("#gallery",{
    top:"150%",
    ease:Power1,
    duration:4
},"a")
.to("#overlay #center",{
    scale:0,
    duration:2,
    ease:Power1,
},"a")
.to("#btm img",{
    rotate: "-180deg",
    stagger:.05,
    ease:Power1,
},"a")
.to("#overlay #centerimg",{
    scale:0,
    opacity:0,
    delay:0.1
},"a")
.to("#overlay span",{
    opacity:0,
    delay:-0.1
},"a")
.to("#smcircle",{
    scale:0.3,
    ease:Power1
},"a")
.to("#full",{
    scale:1.25,
    ease:Power1,
    duration:2
},"a")
.to("#smcircle, #circle",{
    scale:0,
    delay:-1.5,
    ease:Power1
},"ab")
.to("#purple",{
    scale:0,
    opacity:0,
    delay:-1.5,
    ease:Power1,
},"ab")
.to("#pinkflare",{
    rotate:0,
    bottom:"-0.5%",
    delay:-1.5,
    ease:Power1
},"ab")
.to("#sidepurple",{
    bottom:"100%",
    ease:Power1,
    delay:-1.7,
    duration:5
},"ab")
.to("#full",{
    scale:1.2,
    ease:Power1,
    duration:2
},"ab")

gsap.set(".ccircle",{top:"150%",scale:.5})
gsap.set(".pillar",{y:500})
var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#seconds",
            start: "top top",
            pin: true,
            scrub: 1,
            end: "+=" + (window.innerHeight * 7),
        }
    })
tl2
.to(".ccircle",{
    top:"50%",
    scale:1,
    delay:2,
    stagger:.5,
    duration:1000,
    ease:Power1
})
.to("#pi , #pu",{
    left:"50%",
    duration:1000,
    ease:Power1
})
.to(".ccircle",{
    scale:.5,
    delay:2,
    duration:1000,
    ease:Power1
})
.to(".ccircle",{
    scale:10,
    delay:2,
    duration:1000,
    ease:Power1
})
.to("#stop h1",{
    left:"-150%",
    delay:1,
    duration:1000,
    ease:Power1
},"ok")
.to("#pi",{
    background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
    duration:1000,
    delay:4,
    ease:Power1
},"ok")
.to("#num1",{
    top:"-100%",
    duration:2
},"ok")
.to("#num2",{
    top:"0%",
    duration:1
},"ok")
.to("#onep",{
    opacity:0,
    duration:30,
    delay:3
},)
.to("#twop",{
    opacity:1,
    duration:30,
    delay:2
},"okk")
.to("#num2",{
    top:"-100%",
    duration:1,
    delay:2
},"okk")
.to("#num3",{
    top:"0%",
    duration:1
},"okk")
.to("#pillars",{
    stagger:.18
},"okk")
.to(".pillar",{
    y:0,
    duration:2000,
    stagger:500
},"okk")
.to(".shiftup",{
    left:"-30%",
    duration:1000,
    ease:Power1
},"yes")
.to(".shiftbtm",{
    left:"-60%",
    duration:1000,
    ease:Power1
},"yes")