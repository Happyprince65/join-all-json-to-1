const fs = require('fs');
const path = require("path")

let all_json = [];


for (let index = 0; index <= 3100; index++) {

    let rawdata = fs.readFileSync('./jsons/' + index + ".json");
    let all_data = JSON.parse(rawdata);
    all_json.push(all_data);

}

fs.writeFileSync('nftAllJsons.json', JSON.stringify(all_json));

