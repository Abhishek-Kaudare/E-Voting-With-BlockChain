# E-Voting with BlockChain 

## Dependency

1) Python 2.7.15
2) Node 8.16.0 and corresponding npm module

### NPM Modules

1) @worldsibu/convector-cli
2) @worldsibu/hurley
3) @worldsibu/convector-rest-api


## Installation steps

### Start

```bash
#
# Linux Installation Guide - Operate as superuser 
su

# Install dependencies 
npm install -g @worldsibu/convector-cli
npm install -g @worldsibu/hurley
npm install -g @worldsibu/convector-rest-api


# Clone the Repository
git clone https://github.com/Abhishek-Kaudare/E-Voting-With-BlockChain.git

# Migrate to the Root Folder of Repository
cd 'path-to-root'

# Install dependencies - From the root of your project
npm i --unsafe-perm

# Create a new development blockchain network  - From the root of your project
npm run env:restart 

# Install your smart contract
npm run cc:start election

```

## About Hurley (Invoking Only For More Details Go To The Main Repository Link Below)
You don't to be in any specific folder path, you just need the name of the chaincode.
```bash
hurl invoke election election_createVoter {"voter": {"id": "1","voterName": "a", "votingPhase": "string1", "votingStatus": "string2", "votingPermission": "string3", "validationStatus": "string4", "validationOfficer": "string5", "created": "string6", "modified": "string7"}}
# Command.: hurl invoke <ChaincodeName> <Chaincode_FunctionName> <Params>
```

### Running the Server

```bash

# Inside your Convector CLI generated project's root

conv-rest-api generate api -c election -f election.config.json
# Command.: conv-rest-api generate api -c <chaincode-project-name> -f ./<chaincode-config-file>

# Compile everything - May Not Need This Try If Next step didn't work
npx lerna bootstrap

# Start the server
npx lerna run start --scope server --stream
```



## Important Links

### Convector
https://github.com/worldsibu/convector
### Convector Cli

https://github.com/worldsibu/convector-cli
### Hurley

https://github.com/worldsibu/hurley

### Convector Rest Api Generator
https://github.com/worldsibu/convector-rest-api



## Contributions

Special thanks to Triads for starting this amazingly useful project for the community.
