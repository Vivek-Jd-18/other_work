import csv

# opening the CSV file
with open('PMS.csv', mode='r')as file:

    # reading the CSV file
    csvFile = csv.reader(file)

    # displaying the contents of the CSV file
    j = 0
    val = []

    for lines in csvFile:
        val.append(lines[0])
    print(val)


# name = open('data.csv', mode='r')
# datas = name.read()
# print(datas)


# import pandas as pd

# data = pd.read_csv("data.csv", delimiter= ':')
# data2 = (data)
# # print(type(data2))
# print(data2.name)
