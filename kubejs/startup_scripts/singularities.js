// priority: 1

onEvent('item.registry', event => {
	var singularities = [ 'Coal', 'Fluorite', 'Certus Quartz', 'Osmium', 'Uranium', 'Cobalt', 'Desh', 'Ostrum', 'Calorite', 'Draconium', 'Titanium', 'Zinc', 'Aluminum', 'Aquamarine', 'Sapphire',
		'Jasper', 'Topaz', 'Peridot', 'Garnet', 'Onyx', 'Amber', 'Tourmaline', 'Ruby', 'Jade', 'Tanzanite', 'Opal', 'Citrine' ]
	singularities.forEach(element => {
		event.create(element.replace(" ", "_").replace(" ", "_").toLowerCase() + '_singularity')
			.displayName(element + ' Singularity')
	});
})
