'''
Given a sorted array arr containing n elements with possibly 
duplicate elements, the task is to find indexes of first and 
last occurrences of an element x in the given array.
Example 1:
Input:
n=9, x=5
arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
Output:  2 5
Explanation: First occurrence of 5 is at
index 2 and last
occurrence of 5 is at index 5. '''
n=1; x=8
def find(arr, n, x):
    fe=-1;le=-1
    rep=0
    for i in range(n):
        if arr[i]==x:  
            if(rep==0):
                rep+=2
                fe=i
            else:
                rep+=2
                le=i
    if(fe==-1): 
        return [-1, -1]
    elif le==-1:
        return [fe, fe]
    else:
        return [fe, le]

            



print(find([8], n, x))
