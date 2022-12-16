import {Request, Response, NextFunction} from "express";

module.exports = {
    verifyPostValues: function (req: Request, res: Response, next: NextFunction): void {
        const data = req.body

        // Verify if key 'a' and 'b' are in request body
        if (!('a' in data) || !('b' in data)) {
            res.status(404).json(`Key 'a' and/or 'b' missing`)
        }

        // Verify if every key's value are number type
        Object.keys(data).forEach(function(key) {
            if (typeof data[key] !== "number") {
                res.status(404).json(`${key} should have a number (instead of: ${data[key]})`)
            }
        })

        next()
    }
}