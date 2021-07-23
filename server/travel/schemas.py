import graphene
from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .models import City, Tour, Hotel


class CityObject(DjangoObjectType):
    class Meta:
        model = City
        filter_fields = {
            'name': ['istartswith']
        }
        # fields = ('id', 'name')
        interfaces = (relay.Node, )


class TourObject(DjangoObjectType):
    class Meta:
        model = Tour
        exclude = ('participants', )
        # filter_fields = ['price', 'vehicle', 'start', 'hotel', 'origin', 'destination']
        filter_fields = {
            'start': ['gte'],
            'hotel__id': ['exact'],
            'destination__id': ['exact'],
            'origin__id': ['exact'],
        }
        interfaces = (relay.Node, )


class HotelObject(DjangoObjectType):
    class Meta:
        model = Hotel
        fields = ['name', 'city', 'description']


class TravelQuery:
    all_cities = DjangoFilterConnectionField(CityObject)
    all_tours = DjangoFilterConnectionField(TourObject)

    all_hotels = graphene.Field(HotelObject)

    def resolve_all_hotels(self, info):
        return Hotel.objects.all()

    # def resolve_cities(self, info):
    #     return City.objects.all()



