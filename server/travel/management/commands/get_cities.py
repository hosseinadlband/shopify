from django.core.management.base import BaseCommand, CommandError
from travel.models import City
from django.db import transaction
import json


class Command(BaseCommand):
    help = 'Gets all cities from an api'

    def handle(self, *args, **options):
        with open('travel/management/commands/cities.json') as file:
            cities = json.load(file)
            for city in cities:
                with transaction.atomic():
                    try:
                        City.objects.create(name=city['name'])
                    except:
                        continue
