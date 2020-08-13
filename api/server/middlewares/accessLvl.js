
module.exports.accessLvl = (lvl= [])=>{
    try{
        if ((lvl[0] || lvl[1]) !== req.body.role.name) {
            return res.status(401).json('this account is unauthorized for this action');
        }
        res.status(200).json('access granted');
        return this.accessLvl;

    }catch(err){
        console.log(err);
        res.status(500).json({error: err});
    };
}