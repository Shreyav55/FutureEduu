router.get('/colleges', collegeController.getAllColleges);
router.post('/colleges', collegeController.addCollege);
router.get('/colleges/:id', collegeController.getCollegeById);
router.get('/colleges/search', collegeController.searchColleges); 
