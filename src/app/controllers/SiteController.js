const Course = require("./models/Course");

class SiteController {
  // [GET] /home
  index(req, res) {
    Course.find({})
      .then((courses) => {
        res.json(courses);
      })
      .catch((err) => {
        res.status(400).json({ error: err });
      });
    //res.render("home");
  }
}

module.exports = new SiteController();
