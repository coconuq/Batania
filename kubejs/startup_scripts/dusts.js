// priority: 1

onEvent('item.registry', event => {
	var dusts = [ 'Cobalt', 'Desh', 'Ostrum', 'Calorite', 'Manasteel', 'Terrasteel', 'Elementium', 'Alfsteel', 'Titanium', 'Zinc', 'Nickel', 'Aluminum', 'Platinum', 'Silver', 'Iridium' ]
	dusts.forEach(element => {
		event.create('dust_' + element.toLowerCase())
			.tag('forge:dusts')
			.tag('forge:dusts/' + element.toLowerCase())
			.displayName(element + ' Dust')
	});
})
