from rest_framework import serializers


from .models import Recipe



class RecipeSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Recipe
        fields = ('id', 'name', 'user', 'instructions', 'isPublic', 'category', 'notes', 'image', 'amount', 'type', 'prep_time', 'cook_time', 'cook_temp', 'temp',)
        fields = '__all__'
