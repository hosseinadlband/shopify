from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager as BaseManager


class UserManager(BaseManager):

    def create_user(self, phone_num, first_name=None, last_name=None, email=None, password=None, **extra_fields):
        """
         Create and save a user with the given username, email, and password.
         """
        if not phone_num:
            raise ValueError('The given phone number must be set')
        if not phone_num.isnumeric():
            raise ValueError('phone number must be Numeric')

        email = self.normalize_email(email)
        user = self.model(phone_num=phone_num, email=email,
                          first_name=first_name, last_name=last_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, **extra_fields):
        user = self.create_user(**extra_fields)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractUser):
    phone_num = models.CharField('شماره تماس', max_length=11, unique=True)
    username = None
    USERNAME_FIELD = 'phone_num'

    REQUIRED_FIELDS = ['first_name', 'last_name', 'email']

    objects = UserManager()





