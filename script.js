var tl =gsap.timeline(
    {
        scrollTrigger:{
            trigger:".section-2",
            start:"0% 90%",
            end:"70% 50%",
            scrub:1,
        }
    }
)

// gsap.to(".fanta",{
//     opapcity:1,
//     duration: 0.5
// })

tl.to(".fanta",{
    top:"120%",
    left:"0%"
},"anime")

tl.to(".orange",{
    top:"155%",
    left:"25%"
},"anime")

tl.to(".orange2",{
    height:"35%",
    top:"160%",
    right:"5%"
},"anime")

tl.to(".leaf2",{
    height:"25%",
    top:"110%",
    left:"2%",
    rotate:"190deg"
},"anime")

tl.to(".leaf1",{
    height:"30%",
    top:"110%",
    left:"80%",
    rotate:"130deg"
},"anime")

var tl2 = gsap.timeline(
    {
        scrollTrigger:{
            trigger:".section-3",
            start:"0% 90%",
            end:"20% 50%",
            scrub:1,
        }
    }
)

tl2.from(".SaborUVA",{
    top: "130%",
    left: "-40%",
     rotate:"-90deg",
},"anime2")

tl2.from(".apple",{
    top: "130%",
    right: "-40%",
     rotate:"90deg",
},"anime2")

tl2.to(".fanta",{
    top: "210%",
    left: "29%"
},"anime2")