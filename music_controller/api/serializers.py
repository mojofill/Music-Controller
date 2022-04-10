from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Room
        fiekds = ('id', 'code', 'host', 'guest_can_pause', 
        'votes_to_skip', 'created_at')