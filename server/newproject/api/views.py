from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Book
from .serializer import BookSerializer


@api_view(["GET"])
def get_books(request):
    books = Book.objects.all()
    serializedData = BookSerializer(books, many=True).data
    return Response(serializedData)
