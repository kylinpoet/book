# Create your views here.
import datetime

from rest_framework.decorators import api_view

from myapp.handler import APIResponse
from myapp.models import Borrow
from myapp.serializers import BorrowSerializer


@api_view(['GET'])
def list_api(request):
    if request.method == 'GET':
        borrows = Borrow.objects.all().order_by('-borrow_time')
        serializer = BorrowSerializer(borrows, many=True)
        return APIResponse(code=0, msg='查询成功', data=serializer.data)


@api_view(['POST'])
def create(request):

    data = request.data.copy()
    create_time = datetime.datetime.now()
    data['create_time'] = create_time
    data['expect_time'] = create_time + datetime.timedelta(days=60)
    serializer = BorrowSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='创建成功', data=serializer.data)
    else:
        print(serializer.errors)
        return APIResponse(code=1, msg='创建失败')


@api_view(['POST'])
def update(request):
    try:
        pk = request.GET.get('id', -1)
        borrows = Borrow.objects.get(pk=pk)
    except Borrow.DoesNotExist:
        return APIResponse(code=1, msg='对象不存在')

    serializer = BorrowSerializer(borrows, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='更新成功', data=serializer.data)
    else:
        print(serializer.errors)
        return APIResponse(code=1, msg='更新失败')


@api_view(['POST'])
def delete(request):
    try:
        ids = request.GET.get('ids')
        ids_arr = ids.split(',')
        Borrow.objects.filter(id__in=ids_arr).delete()
    except Borrow.DoesNotExist:
        return APIResponse(code=1, msg='对象不存在')

    return APIResponse(code=0, msg='删除成功')
