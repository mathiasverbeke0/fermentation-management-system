const brewData = [
    {
        id: 1,
        batchName: "Blackberry Mead",
        brewType: "Mead",
        startDate: "2024-03-25",
        status: "Aging",
        startingGravity: 1.052,
        finalGravity: null,
        expectedABV:6.825,
        actualABV: null,
        fermentables: "Liquid flower honey (amt. missing), Juice from boiled blackberries (200 g)",
        yeastStrain: "Mangrove Jack's Mead Yeast M05 (½ pkg.)",
        nutrients: "None added",
        hops: null,
        adjuncts: null,
        clarifyingAgenst: null,
        water: "Tap",
        fermentationTemp: 20,
        rackingDates: ["2024-02-21", "2025-01-29"],
        bottlingDate: null,
        recipe: "Dissolve 1.36 kg of honey in 4 liters of water, heat 2 liters to 37-43°C, add honey, and stir. Pour into a fermentation vessel, add remaining 2 liters, and mix well. Boil 200 grams of blackberries, strain, and add the juice to the must. Add 1 teaspoon of yeast nutrient and pitch a packet of mead or wine yeast (e.g., Lalvin 71B). Seal with an airlock and ferment at 18-24°C. After 12-24 hours, add 1 teaspoon more yeast nutrient. Add another teaspoon after 3-4 days, then 1/2 teaspoon near the end of primary fermentation. When fermentation slows (1-2 weeks), siphon into a clean vessel, leaving sediment. Ferment 2-4 more weeks, then bottle and age for 3-6 months.",
        fermentationNotes: "Bubble formation began later than expected, around seven days after adding the yeast. I suspect this delay was due to the yeast struggling to grow because of insufficient oxygen and a lack of essential nutrients. While there was plenty of sugar, nutrients like nitrogen, amino acids, vitamins, and minerals were likely too low since I didn’t add any. In future batches, I’ll make sure to add the proper nutrients and shake the must thoroughly before fermentation to boost oxygen levels.",
        adjustmentsAndAdditions: null,
        agingNotes: "The mead has aged longer than intended, nearing a full year at room temperature. Additionally, I skipped the step of racking it into a clean container for further aging, so it remained in contact with the yeast sediment throughout the entire period.", 
        bottlingNotes: null, 
        sensoryNotes: null,
        experimentalNotes: null
    },
    {
        id: 2,
        batchName: "Show Mead",
        brewType: "Mead",
        startDate: "2024-03-25",
        status: "Aging",
        startingGravity: 1.090,
        finalGravity: null,
        expectedABV: 11.8125,
        actualABV: null,
        fermentables: "Liquid flower honey (amt. missing)",
        yeastStrain: "Mangrove Jack's Mead Yeast M05 (½ pkg.)",
        nutrients: "None added",
        hops: null,
        adjuncts: null,
        clarifyingAgenst: null,
        water: "Tap",
        fermentationTemp: 20,
        rackingDates: null,
        bottlingDate: null,
        recipe: "Dissolve 1.36 kg of honey in 4 liters of water, heat 2 liters to 37-43°C, add honey, and stir. Pour into a fermentation vessel, add remaining 2 liters, and mix well. Add 1 teaspoon of yeast nutrient and pitch a packet of mead or wine yeast (e.g., Lalvin 71B). Seal with an airlock and ferment at 18-24°C. After 12-24 hours, add 1 teaspoon more yeast nutrient. Add another teaspoon after 3-4 days, then 1/2 teaspoon near the end of primary fermentation. When fermentation slows (1-2 weeks), siphon into a clean vessel, leaving sediment. Ferment 2-4 more weeks, then bottle and age for 3-6 months.",
        fermentationNotes: "Bubble formation began later than expected, around seven days after adding the yeast. I suspect this delay was due to the yeast struggling to grow because of insufficient oxygen and a lack of essential nutrients. While there was plenty of sugar, nutrients like nitrogen, amino acids, vitamins, and minerals were likely too low since I didn’t add any. In future batches, I’ll make sure to add the proper nutrients and shake the must thoroughly before fermentation to boost oxygen levels.",
        adjustmentsAndAdditions: null,
        agingNotes: "The mead has aged longer than intended, nearing a full year at room temperature. Additionally, I skipped the step of racking it into a clean container for further aging, so it remained in contact with the yeast sediment throughout the entire period.", 
        bottlingNotes: null, 
        sensoryNotes: null,
        experimentalNotes: null
    },
    {
        id: 3,
        batchName: "Lychee Mead",
        brewType: "Mead",
        startDate: "2025-02-08",
        status: "Planning",
        startingGravity: null,
        finalGravity: null,
        expectedABV: null,
        actualABV: null,
        fermentables: null,
        yeastStrain: null,
        nutrients: null,
        hops: null,
        adjuncts: null,
        clarifyingAgenst: null,
        water: "Tap",
        fermentationTemp: null,
        rackingDates: null,
        bottlingDate: null,
        recipe: null,
        fermentationNotes: null,
        adjustmentsAndAdditions: null,
        agingNotes: null, 
        bottlingNotes: null, 
        sensoryNotes: null,
        experimentalNotes: null
    },
    {
        id: 4,
        batchName: "Dandelion Mead",
        brewType: "Mead",
        startDate: null,
        status: "Planning",
        startingGravity: null,
        finalGravity: null,
        expectedABV: null,
        actualABV: null,
        fermentables: null,
        yeastStrain: null,
        nutrients: null,
        hops: null,
        adjuncts: null,
        clarifyingAgenst: null,
        water: "Tap",
        fermentationTemp: null,
        rackingDates: null,
        bottlingDate: null,
        recipe: "In a pot, bring 1.9 liters of non-chlorinated or filtered water and a cup (approx. 240 milliliters) of dandelion petals to a boil, then turn off the heat and let it steep for 15–20 minutes. Add 900–1,350 grams of honey and stir until dissolved, then mix in the juice of 1 lemon. Using a funnel, carefully pour the honey-water mixture into the jug. Top off with cold non-chlorinated water, leaving at least 5 centimeters of headspace. Secure the lid and gently mix the contents. Ensure the must is below 32°C before adding half a packet of champagne yeast. Tightly seal the jug again and shake for a minute or two to distribute the yeast evenly. Fill the airlock with water up to the line and insert the rubber stopper into the jug. Store the jug in a dark place, where bubbling should begin within 12–24 hours. After approximately six weeks of fermentation, or once bubbling has completely stopped, the mead can be bottled and aged. When bottling, placing a piece of cheesecloth over the end of the auto siphon inside the jug helps prevent dandelion petals from transferring.",
        fermentationNotes: null,
        adjustmentsAndAdditions: null,
        agingNotes: null, 
        bottlingNotes: null, 
        sensoryNotes: null,
        experimentalNotes: null
    },
    {
        id: 5,
        batchName: "Coconut Mead",
        brewType: "Mead",
        startDate: null,
        status: "Planning",
        startingGravity: null,
        finalGravity: null,
        expectedABV: null,
        actualABV: null,
        fermentables: null,
        yeastStrain: null,
        nutrients: null,
        hops: null,
        adjuncts: null,
        clarifyingAgenst: null,
        water: "Tap",
        fermentationTemp: null,
        rackingDates: null,
        bottlingDate: null,
        recipe: null,
        fermentationNotes: null,
        adjustmentsAndAdditions: null,
        agingNotes: null, 
        bottlingNotes: null, 
        sensoryNotes: null,
        experimentalNotes: null
    }, 
    {
        id: 6,
        batchName: "Apple Cider",
        brewType: "Cider",
        startDate: null,
        status: "Planning",
        startingGravity: null,
        finalGravity: null,
        expectedABV: null,
        actualABV: null,
        fermentables: null,
        yeastStrain: null,
        nutrients: null,
        hops: null,
        adjuncts: null,
        clarifyingAgenst: null,
        water: "Tap",
        fermentationTemp: null,
        rackingDates: null,
        bottlingDate: null,
        recipe: null,
        fermentationNotes: null,
        adjustmentsAndAdditions: null,
        agingNotes: null, 
        bottlingNotes: null, 
        sensoryNotes: null,
        experimentalNotes: null
    },
    {
        id: 7,
        batchName: "Fig Mead",
        brewType: "Mead",
        startDate: null,
        status: "Planning",
        startingGravity: null,
        finalGravity: null,
        expectedABV: null,
        actualABV: null,
        fermentables: null,
        yeastStrain: null,
        nutrients: null,
        hops: null,
        adjuncts: null,
        clarifyingAgenst: null,
        water: "Tap",
        fermentationTemp: null,
        rackingDates: null,
        bottlingDate: null,
        recipe: "Take 1.36 kg of honey, your choice of honey, and add it to a clean fermentation vessel. Then, pour in enough water to bring the total volume up to 3.78 L (1 gallon). For the figs, use 450-900 g of fresh figs, cut into chunks, freeze them, then thaw and mash them up before transferring them into a mesh bag. Place the mesh bag with the mashed figs into the fermenter. Rehydrate your Lalvin 71B yeast according to the package instructions and pitch it into the fermenter. Add the yeast nutrients according to the directions on your yeast nutrient packaging and SNA, usually in three additions, using 'Yeast Energizer' and DAP, or you can use Fermaid-K & O. Let the mead ferment in a cool, dark place, checking on it periodically as fermentation typically takes several weeks.",
        fermentationNotes: null,
        adjustmentsAndAdditions: null,
        agingNotes: null, 
        bottlingNotes: null, 
        sensoryNotes: null,
        experimentalNotes: null
    }
];