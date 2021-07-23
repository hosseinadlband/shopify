from django.http import JsonResponse
from .forms import AuthenticationForm, UserCreate, User
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.urls import path


def POST(function):
    def wrapper(request):
        if request.method != 'POST':
            return JsonResponse({'error': '%s method not allowed' % request.method}, status=401)

        return function(request)

    return wrapper


def Logout(request):

    logout(request)
    return JsonResponse({'status': 'SUCCESS'}, status=200)


def csrf_token(request):
    return JsonResponse({'token': get_token(request)})


def get_user(request):
    user = request.user
    if user.is_authenticated:
        return JsonResponse({'username': user.phone_num, 'name': user.get_full_name()})

    return JsonResponse({}, status=401)


@POST
def Login(request):

    form = AuthenticationForm(data=request.POST)
    if form.is_valid():
        user = authenticate(request=request, username=form.cleaned_data['username'],
                            password=form.cleaned_data['password'])

        if user:
            login(request, user)
            # return JsonResponse({'status': 'SUCCESS'}, status=200)
            return get_user(request)

    return JsonResponse(form.errors, status=422)


@POST
def Register(request):
    form = UserCreate(data=request.POST)

    if form.is_valid():
        user = User.objects.create(**form.cleaned_data)
        login(request, user=user)

        return get_user(request)

    return JsonResponse(form.errors, status=422)


urlpatterns = [
    path('login/', Login),
    path('logout/', Logout),
    path('register/', Register),
    path('csrf/', csrf_token),
    path('user/', get_user),
]


