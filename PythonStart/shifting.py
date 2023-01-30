a = [0, 0, 1, 0, 0]
print(len(a))
# current = 0
# great = 0


for i in range(len(a)):
    for j in range(1, len(a)):
        if a[i] < a[j]:
            out = a[j]
            a.pop(j)
            a.append(out)   
            break
        else:
            pass

print(a)


# a = [0, 0, 0, 0, 1]
# r = 2

# [0, 1] + [0, 0, 0]


# def rotate(l, n):
#     print(l[n:], "1st")
#     print(l[:n], "2nd")
#     return l[n:] + l[:n]


# print(rotate(a, 4))
