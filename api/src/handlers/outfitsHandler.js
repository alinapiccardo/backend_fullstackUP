const { Outfit } = require("../db");

//Controllers*************************************/
const getOutfitByCat = async (category) => {
	try {
		//http://localhost:3002/outfits?category=shoes
		return await Outfit.find({ category: category });
	} catch (err) {
		console.log(err);
	}
};

//Handlers*************************************/
const getOutfitsByIdHandler = async (req, res) => {
	try {
		const { id } = req.params;
		let outfits;

		if (id) {
			outfits = await Outfit.findById(id);
		} else {
			outfits = await Outfit.find();
		}

		res.status(200).json(outfits);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
const getOutfitsHandler = async (req, res) => {
	const { category } = req.query;
	try {
		let outfits;

		if (category) {
			outfits = await getOutfitByCat(category);
		} else {
			outfits = await Outfit.find();
		}

		res.status(200).json(outfits);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getOutfitsHandler, getOutfitsByIdHandler };
