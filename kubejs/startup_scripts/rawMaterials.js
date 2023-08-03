// priority: 1

onEvent('item.registry', event => {
	var rawMaterials = [ 'Titanium', 'Zinc', 'Nickel', 'Aluminum', 'Silver' ]
	rawMaterials.forEach(element => {
		event.create('raw_' + element.toLowerCase())
			.tag('forge:raw_materials')
			.tag('forge:raw_materials/' + element.toLowerCase())
			.displayName('Raw ' + element)
	});
})
