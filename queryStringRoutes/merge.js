const registerControllers = (controllers, d) => {
    return (req, res, next) => {
        const controller = controllers[req.query._v]
        if(controller) return controller(req, res, next)
        if(!controller && d){
            return controllers[d](req, res, next)
        } 
        res.json({message: 'not found'})
    }
}

module.exports = registerControllers