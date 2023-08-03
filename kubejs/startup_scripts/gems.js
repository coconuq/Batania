// priority: 1

onEvent('item.registry', event => {
	var gems = [ 'Aquamarine', 'Sapphire', 'Jasper', 'Topaz', 'Peridot', 'Garnet', 'Onyx', 'Amber', 'Tourmaline', 'Ruby', 'Jade', 'Tanzanite', 'Opal', 'Citrine' ]
	gems.forEach(element => {
		event.create(element.toLowerCase())
			.tag('forge:gems')
			.tag('forge:gems/' + element.toLowerCase())
			.displayName(element)
	});
})
