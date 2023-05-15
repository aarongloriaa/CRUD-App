const Family = require("../models/familyTree");

// Create Family member
module.exports.createFamilyController = (req, res) => {
	
	Family.findOne({name: req.body.name}).then(result =>
	{

		if(result != null && result.name == req.body.name){
			return res.send("Duplicate family member")
		}
		else{
			let newFamily = new Family({
				name: req.body.name,
                details: req.body.details
			})

			newFamily.save()
			.then(result => res.send(result))
			.catch(error => res.send(error));
		}
	})
	.catch(error => res.send(error))
};

// Retrieve Family member
module.exports.getFamilyMemberController = (req, res) => {
	Family.find({})
	.then(result => res.send(result))
	.catch(error => res.send(error));
}

// Update Family member
module.exports.updateFamilyMemberController = (req, res) =>{

	let updates = {
		name: req.body.name
	}

	Family.findByIdAndUpdate(req.params.familyId, updates, {new: true})
	.then(result => res.send(result))
	.catch(error => res.send(error));
}

// Deleting a Family member
module.exports.deleteFamilyMemberController = (req, res) => {

	Family.findByIdAndRemove(req.params.familyId)
	.then(result => res.send(result))
	.catch(error => res.send(error));
}




