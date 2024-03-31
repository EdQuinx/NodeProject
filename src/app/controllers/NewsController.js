class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  show(req, res) {
    console.log("Slug route accessed with params:", req.params);
    res.send("News Details");
  }
}

module.exports = new NewsController();
