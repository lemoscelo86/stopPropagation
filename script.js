// const caixa1 = document.querySelector("#caixa1");
// const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".curso")]
// caixa1.addEventListener("click", ()=>{
//     console.log("Clicou")
// })

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
    evt.stopPropagation()
    })
})
