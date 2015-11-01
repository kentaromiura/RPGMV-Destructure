module.exports = function(result, j){
	return result.map(function(x){
		var res = ((/\@class\s(.*)$/gm).exec(x) || [])[1];
			
			res = res || x.split('\r\n').reduce(function(p, c){
				if (p) return p;
				if (/\/\/ /.test(c)) {
					return c.replace('// ','');
				}
				return null
			}, null);

		return {name: res, source:x}	
	})
}
