const express = require("express");
const router = express.Router();

const Company = require("../models/Company");
const Ad = require("../models/Ad");

router.get("/search", async (req, res) => {
  
  const query = req.query.query;
    const data = await Ad.aggregate([
            {
      $lookup:
        {
          from: 'companies',
          localField: 'companyId',
          foreignField: '_id',
          as: 'company'
        }
    },
    {
      $match: {
        $or: [
          { companyId: { $regex: query, $options: 'i' } },
          {  "company.name": { $regex: query, $options: 'i' } },
          { primaryText: { $regex: query, $options: 'i' } },
          { headline: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
        ],
      },
    }
          ])
          res.json({data})
});

module.exports = router;
