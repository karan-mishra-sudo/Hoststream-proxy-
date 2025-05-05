import express from "express"
import { subdomainMappings } from "../Data";
import Services from "../Services";
import ReadDomains from "../Database/ReadDomain";
const add_route = express.Router();
export default add_route.post('/', (req, res) => {

    const new_maping={
        subdomain: `${Services.generate_domain_name()}.localhost`, 
        targetURL: req.body.targetURL
    };
    subdomainMappings.push(new_maping);
    //console.log(subdomainMappings);
    ReadDomains()
    res.send({
        status: "ok"
    })
})