const fs = require('fs');
const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const { append } = require('express/lib/response');

const app = express();
const PWD = process.env.PWD;

const starton = axios.create({
    baseURL: "https://api.starton.io/v2",
    headers: {
        "x-api-key": '1Xu0aIPwDBcCbslLuskmC08KY9Uj49uN',
    },
})

function createImgBuffer(path) {
    return fs.readFileSync(path);
}

// The image variable should be a buffer
async function uploadImageOnIpfs(image, name) {
    let data = new FormData();
    data.append("file", image, name);
    data.append("isSync", "true");
    
    const ipfsImg = await starton.post("/pinning/content/file", data, {
        maxBodyLength: "Infinity",
        headers: { "Content-Type": `multipart/form-data; boundary=${data._boundary}` },
    });
    return ipfsImg.data;
}

async function uploadMetadataOnIpfs(imgCid, nftName, nftDescription) {
    const metadataJson = {
        name: `${nftName}`,
        description: `${nftDescription}`,
        image: `ipfs://ipfs/${imgCid}`,
        attributes: {
            mainColor: 'white',
            size: '42',
        }
    };
    const ipfsMetadata = await starton.post("/pinning/content/json",
    {
        name: "My NFT metadata Json",
        content: metadataJson,
        isSync: true,
    });
    return ipfsMetadata.data;
}

async function mintNft(receiverAddress, metadataCid, contractAddr, walletAddr, network) {
    const nft = await starton.post(`/smart-contract/${network}/${contractAddr}/call`,
{
    functionName: "safeMint",
    signerWallet: walletAddr,
    speed: "low",
    params: [receiverAddress, metadataCid],
});
    return nft.data;
}


async function runMint(to, path, filename, nftName, nftDescription, contractAddr, walletAddr, network) {
    const imgBuffer = createImgBuffer(path);
    console.log(imgBuffer)
    const ipfsImg = await uploadImageOnIpfs(imgBuffer, filename)
    console.log(ipfsImg)
    const ipfsMetadata = await uploadMetadataOnIpfs(ipfsImg.pinStatus.pin.cid, nftName, nftDescription)
    console.log(ipfsMetadata)
    const nft = await mintNft(to, ipfsMetadata.pinStatus.pin.cid, contractAddr, walletAddr, network);
    console.log(nft)
    return nft;
}


app.get('/nft/nike', async (req, res) => {
    const to = '0xA76ed24122193CF53f81F6dBEbE2a1DfF8f9e901';
    const path = `${PWD}/assets/aj4.png`;
    const filename = "NIKE x ITM - AIR JORDAN 4";
    const contractAddr = "0x10032AbaF77824b6EE710444076EFB1c946102ac";
    const walletAddr = "0xd8D567dc55732D15446eDa27Fa859b9Ef1b9F3C8";
    const nftName = "NIKE x ITM - AIR JORDAN 4"
    const nftDescription = "Pair of NIKE x ITM AIR JORDAN 4"
    const network = 'polygon-mumbai'


    const ret = await runMint(to, path, filename, nftName, nftDescription, contractAddr, walletAddr, network);
    res.status(201).send({
        status: "NIKE x ITM AIR Jordan 4 NFT Created"
    })
})

app.listen('8081', '127.0.0.1', (req, res) => {
    console.log("Server listening on 127.0.0.1:8081");
})