const broken = document.querySelectorAll('.image img')
    console.log(broken[0].style)
    window.addEventListener('scroll',()=>{
        broken[0].style.top = `-${window.pageYOffset*0.8}px`
        broken[1].style.top = `-${window.pageYOffset*1.2}px`
        broken[1].style.right = `-${window.pageYOffset}px`
        broken[2].style.right = `-${window.pageYOffset*1.5}px`
        broken[3].style.bottom = `-${window.pageYOffset}px`
        broken[4].style.left = `-${window.pageYOffset}px`
        broken[4].style.top = `${window.pageYOffset*0.8}px`
        broken[5].style.left = `-${window.pageYOffset*0.8}px`

    })