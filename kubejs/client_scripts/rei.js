onEvent("rei.group", (event) => {
    const useNbt = [ 'potion', 'enchanted_book', 'splash_potion', 'lingering_potion', 'tipped_arrow' ]
    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.name, item)
    })
    event.groupItemsByTag('minecraft:rei_groups/beds', 'Beds', 'minecraft:beds')
    event.groupItemsByTag('minecraft:rei_groups/wool', 'Wool', 'minecraft:wool')
    event.groupItemsByTag('mekanism:rei_groups/concrete', 'Concrete', 'mekanism:colorable/concrete')
    event.groupItemsByTag('mekanism:rei_groups/concrete', 'Concrete', 'mekanism:colorable/concrete_powder')
    event.groupItemsByTag('travelersbackpack:rei_groups/sleeping_bags', 'Sleeping Bags', 'travelersbackpack:sleeping_bags')
    event.groupItemsByTag('forge:rei_groups/seeds', 'Seeds', 'forge:seeds')
    event.groupItemsByTag('travelersbackpack:rei_groups/sleeping_bags', 'Sleeping Bags', 'travelersbackpack:sleeping_bags')
});
