from django.db import models

# Create your models here.
class ExampleModel(models.Model):
    text = models.CharField(max_length=45)
    img     = models.ImageField(blank=True)

    def __str__(self):
        return str(self.text)