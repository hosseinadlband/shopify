from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from main.models import User


class UserCreate(UserCreationForm):
    phone_num = forms.CharField(max_length=11)
    first_name = forms.CharField(max_length=150)
    last_name = forms.CharField(max_length=150)
    email = forms.EmailField(required=False)

    class Meta:
        model = User
        fields = ['phone_num', 'first_name', 'last_name', 'email']



