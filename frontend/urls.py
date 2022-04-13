from django.urls import path
from . import views

urlpatterns = [
    # if we get empty string, pass in index - sort of like the home page right now
    path('', views.index),
    path('join', views.index),
]
