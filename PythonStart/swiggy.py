'''Input:
N = 4
arr[] = {1, 4, 7, 10}

Output:
39

Explanation:
Choose 1 and 4, Sum = 1 + 4 = 5.
arr[] = {5, 7, 10} 
Choose 5 and 7, Sum = 5 + (5 + 7) = 17.
arr[] = {12, 10} 
Choose 12 and 10, Sum = 17 + (12 + 10) = 39.
arr[] = {22}'''

def cal(arr,n):
    newArr=arr
    sum=0

    for i in range(n):
        newArr.pop(0)
        newArr[0]=arr[i]+arr[i+1]





A=[1,2,3,4]
print(cal(A,len(A)))