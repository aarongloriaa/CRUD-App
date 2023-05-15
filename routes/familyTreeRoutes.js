const express = require("express");
// express.Router() method allows access to HTTP methods
const router = express.Router();
const familyTreeController = require("../controllers/familyTreeController");

// Create Family member
router.post("/addFamily", familyTreeController.createFamilyController);

// Retrieve Family member  
router.get("/allFamily", familyTreeController.getFamilyMemberController);

// Update Family member
router.patch("/updateFamily/:familyId", familyTreeController.updateFamilyMemberController); 

// Delete Family member
router.delete("/deleteFamily/:familyId", familyTreeController.deleteFamilyMemberController);


module.exports = router;
