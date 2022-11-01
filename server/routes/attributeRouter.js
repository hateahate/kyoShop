const Router = require("express");
const router = new Router();
const attributeController = require("../controllers/attributeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", attributeController.create);
router.get("/", attributeController.getAll);
router.get("/filter", attributeController.getFilterAtributes);
router.post("/update", checkRole("admin"), attributeController.update);
router.post("/remove/:id", checkRole("admin"), attributeController.remove);
module.exports = router;
