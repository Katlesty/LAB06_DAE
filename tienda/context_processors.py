from .models import Categoria

def categorias(request):
    categorias = Categoria.objects.all()
    return {'categoria_list': categorias}