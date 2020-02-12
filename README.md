Q1: Is the keyword "fixes" the only way to auto-close an issue from a PR 
    (pull request). Is there other keywords that can accomplish the same thing?
	
	close
	closes
	closed
	fix
	fixes
	fixed
	resolve
	resolves
	resolved   

    Q2: Do you have to create a new PR EVERYTIME you want to close an issue,
    or is it possible to close multiple issues within a single PR? If so, 
    how?
    
	We can use Resolves
		Ex.Resolves #10, resolves #123, resolves octo-org/octo-repo#100

    Q3: Provide an example of using map that is different from the one I have done.
    Your example must use map both as a named function declaration and with an
    anonymous function. 
	
	var array_test = [45, 2, 25, 50] 
	var map_test = array_test.map(x => x * 2) //this will double every element in the 	list
	console.log(map_test)
	[90, 4, 50, 100]
    	
	var array_test_two = [u, t, v, s, a, w, t, y, w, t]
	function upper(a){
		for (let i = 0; a.length; i+2) 
		a.toUpperCase()
		return a
	}
	array_test_two.map(upper()) // this will uppercase everyother element in the list
	[U, t, V, s, A, w, T, y, W, T]

    Within comments, explain exactly what map is doing. Finally, why is the
    "transformation function" we discussed in class sometimes referred to 
    as a callback function.
	
	It is referred to a callback function because when map is called it is called 
	another function
	