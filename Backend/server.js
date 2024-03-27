const express = require("express");
const app = express();
app.use(express.json());

const Auth = async()=>{
    const data = await fetch("http://20.244.56.144/test/auth", {
        method:"POST", 
        body:JSON.stringify({"companyName":"goMart","clientID":"13c4bd3e-7f48-46d0-814c-106ca31bac87","clientSecret":"frHjCBcyeQAPuSfT","ownerName":"Tanmay","ownerEmail":"tanmay.2101102ec@iiitbh.ac.in","rollNo":"2101102EC"}),
    });
    const d = await data.json();
    return d;
}

app.get("categories/:categoryname/products", async(req, res)=>{
    const {categoryname} = req.params;
    const auth = Auth();
    const url = "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000";
    const dt = await fetch(url, {
        method:"GET",
        headers:`Bearer ${auth.access_token}`,
    });
    const t = await dt.json();
    res.json(t);
})