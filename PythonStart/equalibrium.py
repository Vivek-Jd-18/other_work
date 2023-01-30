'''
Input: 
n = 5 
A[] = {1,3,5,2,2} 
Output: 3 
Explanation:  
equilibrium point is at position 3 
as elements before it (1+3) = 
elements after it (2+2). 
'''


def sort012(arr, n):
    # code here
    first=0
    last=0

    iter=0  

    while iter>=n:
        if n==1:
            return arr[iter]
        else:
            if iter!=0:
                
        first+=arr[iter]
        first+=arr[iter]
        iter+=1


A=[0,2,1,2,0]
print(sort012(A,len(A)))