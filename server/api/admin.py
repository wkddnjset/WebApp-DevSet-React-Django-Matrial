from django.contrib import admin
from .models import ExampleModel
# Register your models here.
class ExampleModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'img')

admin.site.register(ExampleModel, ExampleModelAdmin)