'''
Input:
N = 5
a[] = {2,3,1,2,3}
Output: 2 3 
Explanation: 2 and 3 occur more than once
in the given array.
'''

# def duplicate(arr,n):

#     temp=[]
#     for i in range(n):
#         if arr[i] in arr:
#             temp.append(arr[i])
#     return temp



# a = [2,3,1,2,3]

# print(duplicate(a,len(a)))



def fun(arr,n):
    temp={}
    res=[]
    for i in range(n):
        if arr[i] not in temp:
            temp[arr[i]]=1    
        else:
            temp[arr[i]]+=1
    for key in temp:
        if temp[key] >=2:
            res.append(key)
    res.sort()
    if(len(res)<=0):return -1
    else:return (res)

a=[10 ,10 ,7 ,7 ,7 ,4 ,0 ,5 ,10 ,5, 10]
print(fun(a,len(a)))
