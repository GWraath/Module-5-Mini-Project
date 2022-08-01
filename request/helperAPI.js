const axios=require('axios') //only used for axios and maybe request but NOT fetch

async function make_api_call(url) {
    console.log(url)
    console.log("helperAPI")
    let response= await axios.get(url)
    let body=await response.data
    console.log(body)
    return body
}

module.exports = make_api_call