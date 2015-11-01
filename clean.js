module.exports = function(filenames){
	var output = [],
		last;
		
	filenames.forEach(function(f){
		if (f.name.indexOf('.js') !== -1) {
			last = f.name.replace('.js','').replace('rpg_','');
		} else {
			output.push({
				path: __dirname + '/output/' + last + '/' + f.name + '.js',
				source: f.source
			})
		}
	})
	
	return output;
}
