const router = require('express').Router();
const projectsController = require('../controllers/projects');
// const authController = require('../controllers/auth');
// const oauthController = require('../controllers/oauth');
// const secureRoute = require('../lib/secureRoute');


// router
//   .post('/login', authController.login)
//   .post('/register', authController.register)
//   .post('/auth/facebook', oauthController.facebook)
//   .post('/auth/github', oauthController.github);

router.route('/projects')
  .get(projectsController.index);
  // .post(secureRoute, projectsController.create);

router.route('/projects/:id')
  .get(projectsController.show);
  // .put(secureRoute, projectsController.update)
  // .delete(secureRoute, projectsController.delete);

module.exports = router;
