from django.shortcuts import render
from django.views import generic
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy

class SignUpView(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'

def room(request, room_name):
    return render(request, 'chat/room.html', {'room_name': room_name})
# from django.shortcuts import render

# def chat_view(request):
#     return render(request, 'chat/chat_page.html')
from django.shortcuts import render

def room(request):
    return render(request, 'chat/room.html')
