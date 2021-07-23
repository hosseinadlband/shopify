from django.db import models


class City(models.Model):
    name = models.CharField('Name', max_length=50, unique=True)

    class Meta:
        verbose_name_plural = 'cities'

    def __str__(self):
        return self.name


class Hotel(models.Model):
    name = models.CharField('Name', max_length=50)
    location = models.CharField('Location', max_length=255)
    city = models.ForeignKey(City, on_delete=models.RESTRICT)
    description = models.TextField(null=True)

    def __str__(self):
        return self.name


class Tour(models.Model):
    title = models.CharField('Title', max_length=255)
    description = models.TextField('Description')
    origin = models.ForeignKey(City, on_delete=models.RESTRICT, related_name='origin')
    destination = models.ForeignKey(City, on_delete=models.RESTRICT, related_name='destination')
    hotel = models.ForeignKey(Hotel, on_delete=models.SET_NULL, null=True)
    start = models.DateTimeField('Start')
    VEHICLES = (('v', 'ون'), ('p', 'هواپیما'), ('b', 'اتوبوس'))
    vehicle = models.CharField(choices=VEHICLES, max_length=10)
    days = models.PositiveIntegerField('days')
    price = models.PositiveBigIntegerField('Price')
    # client = models.ForeignKey('auth.User', on_delete=models.SET_NULL, null=True)
    participants = models.ManyToManyField('main.User')

    def __str__(self):
        return self.title
