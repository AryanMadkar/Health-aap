def fibonacci(ashu):
    array=[0]
    f1=0
    f2=1
    
    for i in range (ashu):
        if f2<ashu:
            f1,f2=f2,f1+f2
            array.append(f1)
        else:
            break
    return array

ans=fibonacci(1000)   
print(ans)

# 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 = 232

