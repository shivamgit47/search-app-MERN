import Ad from "../models/ads-schema.js";
import Company from "../models/company-schema.js";

//get ads data from Companies and Ads collection
export const getads = async (req,res) => {
    try{
                const ads = await Company.aggregate([{
                    $lookup:{
                        from:"ads",
                        localField:"_id",
                        foreignField:"companyId",
                        as:"results"
                        }
                    },{
                        $unwind:"$results"
                    },{
                        $project:{
                            _id:1,
                            name:1,
                            url:1,
                            "results._id":1,
                            "results.headline":1,
                            "results.CTA":1,
                            "results.primaryText":1,
                            "results.imageUrl":1,
                            "results.description":1
                        }
                    }]);
        res.status(200).json(ads);
    }
    catch(err){
        res.status(200).json({message:err.message});
    }
}

//search ads from Ads and Companies
export const getsearch = async(req,res) => {
    try{
        console.log(req.params.key);
        let searchResult = await Company.aggregate([{
            $lookup:{
                from:"ads",
                localField:"_id",
                foreignField:"companyId",
                as:"results"
                }
            },{
                $unwind:"$results"
            },{ 
                $match :{ 
                    $or:[
                    {  name : {$regex : req.params.key, $options: 'i'}},
                    { "results.headline" : {$regex : req.params.key, $options: 'i'}},
                    { "results.primaryText" : {$regex : req.params.key, $options: 'i'}},
                    { "results.description" : {$regex : req.params.key, $options: 'i'}},
                    ]
                }
            },{
                $project:{
                    _id:1,
                    name:1,
                    url:1,
                    "results._id":1,
                    "results.headline":1,
                    "results.CTA":1,
                    "results.primaryText":1,
                    "results.imageUrl":1,
                    "results.description":1
                    }
                }]);
        res.status(200).json(searchResult);
    }
    catch(err){
        res.status(200).json({message:err.message});
    }
}