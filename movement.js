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
        //08-una vez metido el círculo en la función, no vemos nada por
        //el c.clearRect(0 ,0 , innerWidth, innerHeight) de la funcion animate
       }
   }

   var circle = new Circle(200, 200)
   /* circle.draw() */

   //02-variable x para mover el círculo
   var x = Math.random() * innerWidth 
   var dX = (Math.random() * - 0.5) * 16

   //07- var y para mover el círculo arriba y abajo y  var dY para la velocidad
   var y = Math.random() * innerHeight
   var dY = (Math.random() * - 0.5) * 16

   //06- para que rebote desde la esquina del círculo
   var radius = 30
   

   //01-esta función va a hacer un loop contsnte entre funciones
   function animate(){ 
       requestAnimationFrame(animate)

       //03- limpiamos con clearRect
       c.clearRect(0 ,0 , innerWidth, innerHeight)

       //08- llamamos a la funcion circle.draw()
       circle.draw()

       c.beginPath()
       c.arc(x, y, radius, 0, Math.PI * 2, false)
       c.strokeStyle = 'rgba(255, 0, 0, 0.4)'
       c.stroke()


       //05- condicional para que rebote
       //06- añadimos + radius
       if(x + radius > innerWidth || x - radius < 0){
           dX = -dX
       }
       if (y + radius > innerHeight || y - radius < 0) {
           dY = -dY
       }          
       //02-ahora para que el circulo se mueva en el eje x creamos una variable 
       //fuera de la función
       //y la incrementamos en 1 cada vez = 200 + 1
       x += dX
       //07- incremento de dY
       y += dY

   }
   animate()



})
