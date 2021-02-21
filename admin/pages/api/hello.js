import axios from "axios";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: "John Doe" });
};

// export default axios.create({
// 	baseURL: `https://movie0706.cybersoft.edu.vn/api/`
// });
