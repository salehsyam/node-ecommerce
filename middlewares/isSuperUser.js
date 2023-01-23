module.exports = (req, res, next) => {
  console.log(req.session.user.superUser);
  if (req.session.user.superUser != "True") {
    return res.redirect("/");
  }
  next();
};
