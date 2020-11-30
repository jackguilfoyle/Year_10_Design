def sum_of_factors(n):
    sum = [1]
    for i in range(2, n):
        if (n % i)==0:
            sum.append(i)
    return sum(sum)

	for n in range(2,1000):
		if factor(n)==n:
			print(n)

	print('Finished')
