module.exports = function(result, j){
	return result.reduce(function(prev, curr){
		return prev.concat(curr.splitted);
	}, [])	
}
