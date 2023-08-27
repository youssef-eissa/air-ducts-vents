let coupon = document.querySelector(".coupon")
let body = document.querySelector(".body")
let menu = document.querySelector('.menu')
let NavBarLinks = document.querySelector('.NavBar .links')

let form = document.querySelector('form')

let inputs = document.querySelectorAll('form input')
let spans = document.querySelectorAll('form span')


// menu
menu.addEventListener("click", (e) => {
    NavBarLinks.classList.toggle('toggle')
    e.stopPropagation()
})
window.onclick = (e) => {
   if(NavBarLinks.classList.contains('toggle') && e.target!==NavBarLinks&&e.target!==menu)
NavBarLinks.classList.remove("toggle")
}
// menu


// couponImg
coupon.addEventListener("click",()=> {
    let overLayBox = document.createElement("div")
    let ImageLink=document.createElement("a")
    let imageCoupon = document.createElement('img')
    imageCoupon.src = ('/assets/air-duct-printable-coupon.png')
imageCoupon.classList.add("img-fluid")
    overLayBox.style.cssText = 'position:fixed; left:0px; top:0px; width:100%; height:1000px; background-color:rgb(0 0 0 / 50%); display:flex; justify-content:center; align-items:center '
ImageLink.href='tel:2814029117'
    ImageLink.appendChild(imageCoupon)
    overLayBox.appendChild(ImageLink)
    body.appendChild(overLayBox)
    overLayBox.addEventListener('click', (e) => {
        if (e.target!==imageCoupon) {
            overLayBox.style.display = 'none'
        }
    })
})
// couponImg

// start form

let numRegEx = /^[0125][0-9]{10}$/g

form.onsubmit = (e) => {
    e.preventDefault()
    inputs.forEach((input,i) => {
        spans.forEach((span, spanIndex) => {
            if (input.value === ""&& i===spanIndex) {
                input.style.border = '1px solid red'
                span.style.cssText='color:red; display:block; margin-top:-20px'
            } 
        })
    })
}
inputs.forEach((input,i) => {
    input.addEventListener("blur", () => {
        spans.forEach((span, spanIndex) => {
            if (input.value === "" && i===spanIndex ) {
                input.style.border = '1px solid red'
                span.style.cssText='color:red; display:block; margin-top:-20px'
            } else if (i === 1 && i === spanIndex && !numRegEx.test(input.value)) {
                input.style.border = '1px solid red'
                span.style.cssText='color:red; display:block; margin-top:-20px'
            span.innerHTML="Please enter a valid Phone Number"
            } 
        })
        
    })
    input.addEventListener("change", () => {
        spans.forEach((span, spanIndex) => {
            if (input.value!==""&&i===spanIndex) {
            input.style.border = 'none'
                span.style.cssText='display:none; '
            }
        })
    })
})

// end form
