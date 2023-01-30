A=[1,2,3,4]
n=len(A)
x=4

def search(arr,N):
    for i in range(N): 
        if arr[i] ==x:
            return i

print(search(A,n))