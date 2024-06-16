let btns = document.querySelectorAll('.btns .row button')
let inp = document.querySelector('.display input')

let str = ""
btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{


        
        try {
            if(e.target.innerText === "="){
                if(str=="") return
                str = String(eval(str))
                return inp.value = str
            }
        } catch (error) {
            alert('invalid calculation')
            str = ""
            return inp.value = str
        }
        if(e.target.innerText === "AC"){
            str = ""
            return inp.value = str
        }
        if(e.target.innerText.trim() === "DEL"){
            str = str.slice(0,str.length-1)
            return inp.value = str
        }

        str+=e.target.innerText
        inp.value = str
        
    })
})