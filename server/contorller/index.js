const { User } = require('../models');


module.exports = {
  login: {
    post: async (req,res) => {

      const { id,pwd } = req.body;
      const user = await User.findOne({ where: { userId: id,password: pwd } })
      
      if(user !== null) {
        // req.session.authenticate = true;
        console.log(req.session);
        res.status(200).send(req.session);
      }else {
        res.status(200).send({ code: 2, msg: "다시 한번 확인해주세요" });
      }
     
    },
  }
};