from django.shortcuts import get_object_or_404, render
from .models import Producto, Categoria

def index(request):
    product_list = Producto.objects.all()
    context = {
        'product_list': product_list
    }
    return render(request, 'index.html', context)

def producto(request, producto_id):
    producto = get_object_or_404(Producto, pk=producto_id)
    return render(request, 'producto.html', {'producto': producto})

def categoria(request, categoria_id):
    categoria = get_object_or_404(Categoria, pk=categoria_id)
    productos_list = Producto.objects.filter(categoria=categoria)
    cantidad_productos = productos_list.count()  
    context = {
        'categoria': categoria,
        'productos_list': productos_list,
        'cantidad_productos': cantidad_productos,  
    }
    return render(request, 'categoria.html', context)
