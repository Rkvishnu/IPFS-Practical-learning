const {ethers} =require("hardhat");
require("dotenv").config({path: ".env"});

async function main(){

    const metadataURL ="ipfs://QmcfsZCGdcXyHJP8MupMQwYuSET8TFJCHUhAaoJwe4EJuP";
    const lw3PunksContract = await ethers.getContractFactory("LW3Punks");// after compilation of of our contract
    const deployedLW3PunksContract  =await lw3PunksContract.deploy(metadataURL);
    await deployedLW3PunksContract.deployed();
    console.log("LW3 Contract address is :" , deployedLW3PunksContract.address)

}
// call the main() and check if there is any error
main()
.then(() => process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});