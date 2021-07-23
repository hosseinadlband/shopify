import graphene
from travel.schemas import TravelQuery


class Query(TravelQuery, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)


