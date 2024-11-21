from django.urls import path
from . import views

urlpatterns = [
    path('chat/<str:room_name>/', views.room, name='room'),
    path('signup/', views.SignUpView.as_view(), name='signup'),
]

# urlpatterns = [
#     path('', views.chat_view, name='chat'),
# ]

# from django.urls import path
# from . import views

urlpatterns = [
    path('', views.room, name='room'),
]
