from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path, re_path

from frontend.views import ReactView

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^(?!static).*', ReactView.as_view(template_name='index.html')),
] + staticfiles_urlpatterns()
