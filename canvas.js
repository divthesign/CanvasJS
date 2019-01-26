 class Main{
     constructor(){
        var canvas = document.querySelector('canvas') 
        console.log(canvas)



    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    var c = canvas.getContext('2d')

    /* c.fillRect(x, y, width, height) */
    c.fillStyle = 'rgba(0, 255, 0, 0.4)'    
    c.fillRect(0, 0, 100, 100)
    c.fillStyle = 'rgba(255, 0, 0, 0.4)'
    c.fillRect(400, 100, 100, 100)
    c.fillStyle = 'rgba(0, 0, 255, 0.4)'
    c.fillRect(300, 300, 100, 100)

    //line
    c.beginPath()
    c.strokeStyle = 'rgba(255, 0, 0, 0.5)'
    c.moveTo(300, 600)
    c.lineTo(100, 100)
    c.lineTo(200, 100)
    c.stroke()

    c.beginPath()
    c.strokeStyle = 'purple'
    c.moveTo(800, 100)
    c.lineTo(700, 200)
    c.lineTo(800, 200)
    c.stroke()
    

    //arc / circle
    //c.arc(x, y, 30, radius, startAngle, endAngle, antiClockWise: boolean) 
    //paa separar este circulo de la línea tenemos que usar c.beginPath()
    c.beginPath()   
    c.arc(300, 300, 30, 0, Math.PI * 2, false)
    c.strokeStyle = 'blue'
    c.stroke()

    for (let i = 0; i < 200; i++) {
        let x = Math.random() * window.innerWidth
        let y = Math.random() * window.innerHeight
        c.beginPath()   
        c.arc(x, y, 30, 0, Math.PI * 2, false)
        c.strokeStyle = 'blue'
        c.stroke()
        
    }

     }

 }

document.addEventListener('DOMContentLoaded', ()=>{new Main()})