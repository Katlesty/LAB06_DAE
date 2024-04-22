from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=100)
    pub_date = models.DateTimeField('Fecha de registro')
    
    def __str__(self):
        return self.nombre
    
class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10,decimal_places=2)
    detalle = models.TextField(max_length=1000, null=True)
    categoria = models.ForeignKey(Categoria,on_delete=models.CASCADE)
    pub_date = models.DateTimeField('Fecha de registro')
    stock = models.IntegerField(default=0)
    imagen = models.ImageField(upload_to="products",null=True)
    
    def __str__(self):
        return self.nombre