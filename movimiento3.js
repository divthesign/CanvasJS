document.addEventListener('DOMContentLoaded', function(){
    console.log('hola')
 
    let canvas = document.querySelector('canvas')
    console.log(canvas)
 
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
 
    let c = canvas.getContext('2d')
 
    //08-creamos varios cículos con el objeto Circle
    function Circle(x, y){
        this.x = x
        this.y = y
        
        this.draw = function(){
         c.beginPath()
         c.arc(x, y, radius, 0, Math.PI * 2, false)
         c.strokeStyle = 'rgba(255, 0, 0, 0.4)'
         c.stroke()
        }

        this.update = function () {
            if (x + radius > innerWidth || x - radius < 0) {
                dX = -dX
            }
            if (y + radius > innerHeight || y - radius < 0) {
                dY = -dY
            }

            x += dX
            y += dY

        }
    }
 
    var circle = new Circle(200, 200)
 
    var x = Math.random() * innerWidth 
    var dX = (Math.random() * - 0.5) * 16
 
    var y = Math.random() * innerHeight
    var dY = (Math.random() * - 0.5) * 16
 
    var radius = 30
    
 
    function animate(){ 
        requestAnimationFrame(animate)
 
        
        c.clearRect(0 ,0 , innerWidth, innerHeight)
 
        circle.draw()
 
        c.beginPath()
        c.arc(x, y, radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'rgba(255, 0, 0, 0.4)'
        c.stroke()

 
    }
    animate() 
 
 
 })
 