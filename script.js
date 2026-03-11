let otp
function generate() {
    otp = Math.floor(Math.random() * 9000) + 1000
    let h = document.getElementById("otp")
    h.innerText = otp

    let inp = document.querySelectorAll(".inp")

    inp.forEach(val => {
        val.value = ""
    })

    let res = document.getElementById("res")
    res.innerHTML = ""
}

function verify() {

    let s = otp.toString()

    let inp = document.querySelectorAll(".inp")

    let flag = false;
    let i = 0
    inp.forEach(val => {
        // console.log(val.value);
        if (val.value == s[i]) {
            flag = true
        }
        else {
            flag = false
        }
        i++
    });

    let h2 = document.getElementById("res")

    if (flag) {
        h2.innerText = "Successfull"
        h2.style.color = "blue"
    }
    else {
        h2.innerText = "Wrong"
        h2.style.color = "red"
    }
}

function color() {
    let s = document.querySelector("section")
    s.style.backgroundColor = "whitesmoke"
    document.body.style.backgroundColor =
        `rgb(${Math.floor(Math.random() * 256)} ,
             ${Math.floor(Math.random() * 256)} ,
             ${Math.floor(Math.random() * 256)} )`
}

let inputs = document.querySelectorAll(".inp")

inputs.forEach((element , index) =>{
    element.addEventListener("input" , () =>{
        if(element.value.length == 1 && index < inputs.length - 1)
        {
            inputs[index+1].focus()
        }
    })
})