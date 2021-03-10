
// Making button change color when hovered
let interval = 1e2

let c = 0.6
let spacestep = 0.2
let timestep = 0.1*2
let f = (c, n)=>(c + n * spacestep) % 1

setInterval(()=>{

  document.querySelectorAll('#applications .imgrec').forEach(q=>{

    q.style.boxShadow = ``
    q.style.color = `red`

  })

  document.querySelectorAll('#applications .imgrec:hover').forEach(q=>{


    let a = `hsl(${f(c, 0)}turn, 100%, 50%)`
    q.style.boxShadow = `0 0 16px 0 ${a}, 0 0 50px 0 ${a}`
    q.style.color = a
    })
  c += timestep * interval / 1e3
}, interval)
