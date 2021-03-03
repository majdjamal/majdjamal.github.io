
let interval = 1e2

let c = 0.6
let spacestep = 0.2
let timestep = 0.1*2
let f = (c, n)=>(c + n * spacestep) % 1

setInterval(()=>{

  document.querySelectorAll('.app').forEach(q=>{

    q.style.borderColor = `hsl(${f(c, 0)}turn, 100%, 50%)`
  })

  document.querySelectorAll('.upload').forEach(q=>{

    q.style.boxShadow = ``

  })

  document.querySelectorAll('.upload:hover').forEach(q=>{

    let a = `hsl(${f(c, 0)}turn, 100%, 50%)`
    q.style.boxShadow = `0 0 16px 0 ${a}, 0 0 50px 0 ${a}`
    })
  c += timestep * interval / 1e3
}, interval)
