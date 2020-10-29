from django.conf import settings
from django.db import models




class Recipe(models.Model):
    BREAKFAST = 'BKF'
    LUNCH = 'LCH'
    DINNER = 'DNR'
    DESSERT = 'DST'

    CATEGORY_CHOICES = {
        (BREAKFAST, 'Breakfast'),
        (LUNCH, 'Lunch'),
        (DINNER, 'Dinner'),
        (DESSERT, 'Dessert'),
    }

    FAHRENHEIT = 'F'
    CELCIUS = 'C'

    TEMP_SCALE = {
        (FAHRENHEIT, 'Fahrenheit'),
        (CELCIUS, 'Celcius'),
    }

    name = models.CharField(max_length = 255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    instructions = models.TextField()
    ingredients = models.TextField(null=True)
    notes = models.TextField(blank=True)
    category = models.CharField(max_length = 255, choices= CATEGORY_CHOICES, default= DINNER,)
    isPublic = models.BooleanField(default = False)
    image = models.ImageField(upload_to="recipes/", blank=True, null=True)
    amount = models.IntegerField(null=True)
    type = models.CharField(max_length = 255)
    prep_time = models.PositiveIntegerField(null=True )
    cook_time = models.PositiveIntegerField(null=True)
    cook_temp = models.PositiveIntegerField(null=True)
    temp = models.CharField(max_length=255, choices=TEMP_SCALE, default=FAHRENHEIT,)


    def __str__(self):
        return self.name
