# def MissingNumber(array, n):
#     # code here
#     array.sort()
#     for i in range(1,n):
#         if i != array[i-1]:
#             return i
#     return n

# print(MissingNumber([7,5,2,4,3,1],6))

def sort012(arr, n):
    # code here
    x=[]
    y=[]
    z=[]
    for i in arr:
        if i==0:
            x.append(i)
        elif i==1:
            y.append(i)
        elif i==2:
            z.append(i)
    return x+y+z


print(sort012([0,2,1,2,0],5))



def sort012(arr, n):
    # code here
    x=[]
    for i in range(n):
        if i==0:
            x.append(arr[i])
        elif i==1:
            x.append(arr[i])
        elif i==2:
            x.append(arr[i])
    return x


print(sort012([0,2,1,2,0],5))