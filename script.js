function changeImg(){
    const bodyColor = document.querySelector(`body`)
    const currentHour = document.getElementById(`currentHour`)
    const imgChanger = document.getElementById(`img`)
    let today = new Date();
    let time = today.getHours()
    currentHour.innerText = time
    if (time < 12) {
        imgChanger.src = `ft2.jpg`
        document.body.style.background = `#0fffff`
    } else{
        imgChanger.src = `ft1.png`
        document.body.style.background = `#fff`
    }
}
    

