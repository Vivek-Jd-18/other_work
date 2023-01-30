# # User function template for Python

# import math

# def reverseInGroups(arr, N, K):
#     # code here
#     tempArr = []
#     tempArr2 = []

#     for i in range(N):
#         if i < K:
#             tempArr.append(arr[i])
#         else:
#             tempArr2.append(arr[i])

#     return tempArr[::-1]+tempArr2[::-1]

# print(reverseInGroups([1,2,3,4,5,6,7],7,4))

# # # {
# #  # Driver Code Starts
# # # Initial template for Python


# # def main():
# #     T = int(input())
# #     while (T > 0):
# #         nk = [int(x) for x in input().strip().split()]
# #         N = nk[0]
# #         K = nk[1]
# #         arr = [int(x) for x in input().strip().split()]

# #         ob = Solution()
# #         ob.reverseInGroups(arr, N, K)
# #         for i in arr:
# #             print(i, end=" ")
# #         print()
# #         T -= 1


# # if __name__ == "__main__":
# #     main()


# # # } Driver Code Ends


# arr=[1,2,3,4,5,6,7,8]
# # del arr[:-2]
# # arr2 = arr[:5][::-1]
# arr.append("vivek")
# print(arr)


# problem 2

# a1 = [0,2,4,1,3]
# a2 = [2,4,0,3,1]
# a1.sort()
# a2.sort()
# print(a1)
# print(a2)

# def fun():
#     a=[]
#     for i in a1:
#         if i in a2:
#             a.append(i)
#     return a==a2

# print(fun())


'''Given an array of N integers. Find the first element that occurs at least K number of times.'''
# N = 7
# K = 2
# A = [1, 7, 1, 4, 3, 4, 8, 7]


# def fun():
#     temp = []
#     for i in A:
#         if i in temp:
#             return i
#         else:
#             temp.append(i)


# print(fun())


# N = 7
# K = 3
# A = [1, 7, 1, 4, 3, 4, 8, 7, 3, 3]


# def fun():
#     temp = {}

#     if K==1:
#         return A[0]
#     else:
#         for i in A:
#             if i not in temp:
#                 temp[i]=1
#             else:
#                 temp[i]+=1
#             if temp[i]==K:
#                 return i
#     return -1


# print(fun())


# problem 3

# def subArraySum(arr, n, s):
#     # Write your code here
#     i = 0
#     t = 0
#     start = 0
#     while i < n:
#         val = arr[i]
#         t += val
#         if t < s:
#             # i+=1
#             print("")
#         elif t > s:
#             tmp = arr[start]
#             start += 1
#             t -= tmp
#         else:
#             print(start, ", ", i)
#         i += 1


# print(subArraySum([1,2,3,7,5], 5,12))

# N = 5
# S = 12
# A = [1, 2, 3, 7, 5]


# def fun():
#     i = 0
#     j = 1
#     flag = True
#     sum = 0
#     start = A[0]

#     while flag:
#         sum = start+A[j]
#         if sum < S:
#             j += 1
#             start = sum
#         elif sum > S:
#             start = A[i+1]
#             j += 1
#         else:
#             return sum
#     return -1


# print(fun())

# def fun():
#     iteration1=0
#     iteration2=1
#     flag = True
#     def adder(a,b):return a+b

#     while flag:
#         sum = A[iteration1]
#         sum = adder(sum,A[iteration2])
#         if sum<S:
#             iteration2+=1
#             sum=adder(sum,A[iteration2])
#         elif sum>S:
#             iteration1+=1
#             iteration2=iteration1+1
#         else:
#             flag=False
#             return sum

#     return -1


# print(fun())

# N = 5
# S = 12
# A = [1, 2, 3, 7, 5]


# def fun():
#     while flag:

#     return -1


# print(fun())





# new problem

# Input:
# N = 10
# A = [6,1,2,8,3,4,7,10,5]
# N = 2
# A = [2]
# # Output: 4

# def fun():
#     A.sort()
#     for i in range(N):
#         if A[i] != i+1:
#             return i+1
#     return -1


# print(fun())


#! Subarray with given sum
def subArraySum(arr, n, s): 
       #Write your code here
    isFound = False
    start = 0
    i = start
    Len = len(arr)
    Sum = 0

    while i<Len:
        t = arr[i]
        Sum += t
        print(start, ", ", i)
        print("sum: ", Sum)
        if Sum == s:
            isFound = True
            return [start, i]
        
        elif Sum > s:
            # print("greater")
            r = arr[start]
            Sum -= r
            start+=1

        else:
            i+=1

        if Sum == s:
            isFound = True
            return [start+1, i+1]


    

    if not isFound:
        return -1


arr = [1,2,3,7,5]
N = 5; S = 12
# ans 2 4

ans = subArraySum(arr, N, S)
print(ans)