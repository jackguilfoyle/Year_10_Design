function isEven(a) {

	if (a % 2 == 0) {
		return true
	}

	return false

}  

for (i = 0; i < 100; i = i + 1) {
    console.log(isEven(i));
}