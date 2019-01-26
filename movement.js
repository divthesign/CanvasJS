document.addEventListener('DOMContentLoaded', function(){
   console.log('hola')

   let canvas = document.querySelector('canvas')
   console.log(canvas)

   canvas.width = window.innerWidth
   canvas.height = window.innerHeight

   let c = canvas.getContext('2d')

   //02-variable x para mover el círculo
   var x = 200 
   var dX = 4

   //07- var y para mover el círculo arriba y abajo y  var dY para la velocidad
   var y = 200
   var dY = 4

   //06- para que rebote desde la esquina del círculo
   var radius = 30
   

   //01-esta función va a hacer un loop contsnte entre funciones
   function animate(){ 
       requestAnimationFrame(animate)

       //03- limpiamos con clearRect
       c.clearRect(0 ,0 , innerWidth, innerHeight)

       console.log(c)
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
