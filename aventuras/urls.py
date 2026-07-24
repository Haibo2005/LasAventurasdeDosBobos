from django.urls import path
from . import views

app_name = "aventuras"

urlpatterns = [
    path("", views.inicio, name="inicio"),
]