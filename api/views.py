from django.shortcuts import render
from rest_framework import generics
from .models import Room
from .serializers import RoomSerializer

# Create your views here.

class RoomView(generics.ListAPIView): # CreateAPIView means that this view can view all the different rooms and CRAETE another room
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    