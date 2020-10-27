from django.urls import path

from .views import RecipeListCreateView, RecipeDetailView


urlpatterns = [
    path('<int:pk>/', RecipeDetailView.as_view()),
    path('', RecipeListCreateView.as_view()),
]
