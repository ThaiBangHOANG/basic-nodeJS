let getHompage = (req, res) => {
  return res.render("test/index.ejs");
};

module.exports = {
  getHompage,
};
