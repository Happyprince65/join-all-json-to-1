# NFT JSON Aggregator

This script aggregates a collection of individual JSON files (presumably representing NFT metadata) into a single JSON file.

## Purpose

This script is designed to consolidate a large number of JSON files, each named sequentially (0.json, 1.json, 2.json, ..., 3100.json), into a single file named `nftAllJsons.json`. This can be useful for:

*   **Data analysis:** Easier to process and analyze NFT metadata in bulk.
*   **Storage efficiency:** Potentially more efficient to store and transfer one large file than many small ones.
*   **Simplified access:** Provides a single point of access to all NFT metadata.

## Usage

1.  **Prerequisites:**
    *   Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2.  **Installation (Optional but Recommended):**
    *   Clone the repository (if you have one):
        ```bash
        git clone https://github.com/Happyprince65/join-all-json-to-1.git
        Cd <folderName>
        ```
    *   Initialize a Node.js project (if you don't have a `package.json`):
        ```bash
        npm init -y
        ```

3.  **File Structure:**
    *   Ensure that all your individual JSON files (0.json to 3100.json) are located in a directory named `jsons` in the same directory as the script. The script expects this directory structure:
        ```
        nft-json-aggregator/
        ├── index.js        (This script)
        └── jsons/
            ├── 0.json
            ├── 1.json
            ├── ...
            └── 3100.json
        ```

4.  **Running the script:**
    *   Navigate to the directory containing the script in your terminal.
    *   Execute the script using Node.js:
        ```bash
        node index.js
        ```

5.  **Output:**
    *   The script will create a file named `nftAllJsons.json` in the same directory as the script. This file will contain an array of all the JSON data from the individual files.

## Code Explanation (`index.js`)

```javascript
const fs = require('fs');
const path = require("path")

let all_json = [];

for (let index = 0; index <= 3100; index++) {
    let rawdata = fs.readFileSync('./jsons/' + index + ".json");
    let all_data = JSON.parse(rawdata);
    all_json.push(all_data);
}

fs.writeFileSync('nftAllJsons.json', JSON.stringify(all_json));
