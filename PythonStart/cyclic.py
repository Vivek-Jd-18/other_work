'''
Given an array, rotate the array by one position in clock-wise direction. 

Example 1:

Input:
N = 5
A[] = {1, 2, 3, 4, 5}
Output:
5 1 2 3 4'''

# def rotate( arr, n):
A = [1, 2, 3, 4, 5]

# def rotate(A, n=5):
data=A[-1]
A.pop()
A.insert(0,data)


print(A)