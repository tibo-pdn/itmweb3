const fs = require("fs");
const express = require("express");
const axios = require("axios");
const FormData = require("form-data");
const { append } = require("express/lib/response");

const app = express();
const PWD = process.env.PWD;

const starton = axios.create({
  baseURL: "https://api.starton.io/v2",
  headers: {
    "x-api-key": "1Xu0aIPwDBcCbslLuskmC08KY9Uj49uN",
  },
});

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
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
    },
  });
  return ipfsImg.data;
}

async function uploadMetadataOnIpfs(imgCid, nftName, nftDescription, isVideo) {
  let metadataJson;
  if (isVideo) {
    metadataJson = {
      name: `${nftName}`,
      description: `${nftDescription}`,
      animation_url: `${imgCid}`,
      attributes: {
        mainColor: "white",
        size: "42",
        media: "video",
      },
    };
  } else {
    metadataJson = {
      name: `${nftName}`,
      description: `${nftDescription}`,
      image: `ipfs://ipfs/${imgCid}`,
      attributes: {
        mainColor: "white",
        size: "42",
        media: "picture",
      },
    };
  }

  const ipfsMetadata = await starton.post("/pinning/content/json", {
    name: "My NFT metadata Json",
    content: metadataJson,
    isSync: true,
  });
  return ipfsMetadata.data;
}

async function mintNft(
  receiverAddress,
  metadataCid,
  contractAddr,
  walletAddr,
  network
) {
  const nft = await starton.post(
    `/smart-contract/${network}/${contractAddr}/call`,
    {
      functionName: "safeMint",
      signerWallet: walletAddr,
      speed: "low",
      params: [receiverAddress, metadataCid],
    }
  );
  return nft.data;
}

async function runMint(
  to,
  path,
  filename,
  nftName,
  nftDescription,
  contractAddr,
  walletAddr,
  network,
  videoCid
) {
  const imgBuffer = createImgBuffer(path);
  console.log(imgBuffer);
  const ipfsImg = await uploadImageOnIpfs(imgBuffer, filename);
  console.log(ipfsImg);
  let ipfsMetadata;
  if (videoCid) {
    ipfsMetadata = await uploadMetadataOnIpfs(
      videoCid,
      nftName,
      nftDescription,
      true
    );
  } else {
    ipfsMetadata = await uploadMetadataOnIpfs(
      ipfsImg.pinStatus.pin.cid,
      nftName,
      nftDescription,
      false
    );
  }
  console.log(ipfsMetadata);
  const nft = await mintNft(
    to,
    ipfsMetadata.pinStatus.pin.cid,
    contractAddr,
    walletAddr,
    network
  );
  console.log(nft);
  return nft;
}

app.post("/claim/nike/:nft_id", async (req, res) => {
  const to = req.body.to_addr;
  const contractAddr = "0x10032AbaF77824b6EE710444076EFB1c946102ac";
  const walletAddr = "0xd8D567dc55732D15446eDa27Fa859b9Ef1b9F3C8";
  const network = "polygon-mumbai";
  const videoCid = "ipfs://ipfs/QmZcvr8eG2SQ9cCzGjhgFb2ZRR15S36QguevPkY9s7tSpZ";
  let path;
  let filename;
  let nftName;
  let nftDescription;  

  if (req.params.nft_id == '1') {
    path = `${PWD}/assets/aj1.png`;
    filename = "NIKE x ITM - AIR JORDAN 1";
    nftName = "NIKE x ITM - AIR JORDAN 1"
    nftDescription = "Pair of NIKE x ITM AIR JORDAN 1"
  } else if (req.params.nft_id == '2') {
    path = `${PWD}/assets/aj4.png`;
    filename = "NIKE x ITM - AIR JORDAN 4";
    nftName = "NIKE x ITM - AIR JORDAN 4"
    nftDescription = "Pair of NIKE x ITM AIR JORDAN 4"
  } else if (req.params.nft_id == '3') {
    path = `${PWD}/assets/balenciaga.png`;
    filename = "NIKE x ITM - BALENCIAGA";
    nftName = "NIKE x ITM - BALENCIAGA";
    nftDescription = "Pair of NIKE x ITM BALENCIAGA";
  } else if (req.params.nft_id == '4') {
    path = `${PWD}/assets/converse.png`;
    filename = "NIKE x ITM - CONVERSE";
    nftName = "NIKE x ITM - CONVERSE";
    nftDescription = "Pair of NIKE x ITM CONVERSE";
  }

  const ret = await runMint(to, path, filename, nftName, nftDescription, contractAddr, walletAddr, network, videoCid);
  res.status(201).send({
    status: "OK",
    description: "NFT Created",
    nft: ret
  });
  console.log(req.url);
});

app.listen("8081", "127.0.0.1", (req, res) => {
  console.log("Server listening on 127.0.0.1:8081");
});
