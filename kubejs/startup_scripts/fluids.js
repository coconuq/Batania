// priority: 1

onEvent('fluid.registry', event => {
	event.create('molten_titanium')
		.thickTexture(0x511A82)
		.bucketColor(0x511A82)
		.displayName('Molten Titanium')
		.luminosity(8)
	event.create('molten_iridium')
		.thickTexture(0xC8C8D9)
		.bucketColor(0xC8C8D9)
		.displayName('Molten Iridium')
		.luminosity(8)
})
