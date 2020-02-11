# E-Voting with BlockChain

## Dependency

1. Python 2.7.15
2. Node 8.16.0 and preceding npm module

### NPM Modules

1. @worldsibu/convector-cli
2. @worldsibu/hurley
3. @worldsibu/convector-rest-api

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
hurl invoke election election_createVoter '{"id":"1","voterName":"a","votingPhase":"string1","votingStatus":"string2","votingPermission":"string3","validationStatus":"string4","validationOfficer":"string5","created":"string6","modified":"string7"}'
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

# Instruction to Call Rest Api
Design the Web Application to invoke following endpoints for the below mentioned Models
## Admin

### createAdmin

```
http://localhost:8000/election/createAdmin
# POST Request
```

Data To Be Send

```json
{
  "admin": {
    "id": "ID",
    "role": "Role - Validator, Election_Officer, Booth_Officer",
    "created": "Send a Timestamp As String",
    "modified": "Send a Timestamp As String"
  }
}
```

It is similar to invoking following hurl command

```bash
hurl invoke election election_createAdmin {"id": "ID", "role": "Role - Validator, Election_Officer, Booth_Officer", "created": "Send a Timestamp As String", "modified": "Send a Timestamp As String"}
```

### getAdminByID

```
http://localhost:8000/election/getAdminByID/:adminId
# GET Request
```

### getAllAdmins

```
http://localhost:8000/election/getAllAdmins
# GET Request
```

## Voter

### createVoter

```
http://localhost:8000/election/createVoter
# POST Request
```

Data To Be Send

```json
{
  "voter": {
    "id": "ID",
    "voterName": "Name",
    "votingPhase": "Next Election To Be Voting/ ### - If No Election Announced",
    "votingStatus": "0-Voted/1-To-Be-Voting/3-Uneligible",
    "votingPermission": "0-After Election is announced/1-On Election Day",
    "validationStatus": "0-Not validated/1-Validated",
    "created": "Send a Timestamp As String",
    "modified": "Send a Timestamp As String"
  }
}
```

### changeVotingStatus

```
http://localhost:8000/election/changeVotingStatus
# POST Request
```

Data To Be Send

```json
{
  "voterId": "voterId",
  "votingStatus": "0/1/3"
}
```

### changeVotingPhase

```
http://localhost:8000/election/changeVotingPhase
# POST Request
```

Data To Be Send

```json
{
  "voterId": "voterId",
  "votingPhase": "Next Election To Be Voting/ ### - If No Election Announced"
}
```

### changeVotingPermission

```
http://localhost:8000/election/changeVotingPermission
# POST Request
```

Data To Be Send

```json
{
  "voterId": "voterId",
  "votingPermission": "0-After Election is announced/1-On Election Day"
}
```

### changeVoterValidationStatus

```
http://localhost:8000/election/changeVoterValidationStatus
# POST Request
```

Data To Be Send

```json
{
  "voterId": "voterId",
  "validationStatus": "0-Not validated/1-Validated",
  "validationOfficer": "Validating Officer ID"
}
```

### getVoterByID

```
http://localhost:8000/election/getVoterByID/:voterId
# GET Request
```

### getAllVoters

```
http://localhost:8000/election/getAllVoters
# GET Request
```

## Candidates

### createCandidate

```
http://localhost:8000/election/createCandidate
# POST Request
```

Data To Be Send

```json
{
  "candidate": {
    "id": "ID",
    "candidateName": "Name",
    "candidaturePhase": "Participating Election Id",
    "candidatureStatus": "Last Standing Postion/ 0 - Before Election",
    "totalVotes": 000,
    "validationStatus": "0-Not validated/1-Validated",
    "created": "Send a Timestamp As String",
    "modified": "Send a Timestamp As String"
  }
}
```

### changeCandidaturePhase

```
http://localhost:8000/election/changeCandidaturePhase
# POST Request
```

Data To Be Send

```json
{
  "candidateId": "candidateId",
  "candidaturePhase": "Participating Election Id"
}
```

### changeCandidatureStatus

```
http://localhost:8000/election/changeCandidatureStatus
# POST Request
```

Data To Be Send

```json
{
  "candidateId": "candidateId",
  "candidatureStatus": "1/2/3/4/......"
}
```

### changeCandidateValidationStatus

```
http://localhost:8000/election/changeCandidateValidationStatus
# POST Request
```

Data To Be Send

```json
{
  "candidateId": "candidateId",
  "validationStatus": "0-Not validated/1-Validated",
  "validationOfficer": "Validating Officer ID"
}
```

### getCandidateByID

```
http://localhost:8000/election/getCandidateByID/:candidateId
# GET Request
```

### getAllCandidates

```
http://localhost:8000/election/getAllCandidates
# GET Request
```

## Election

### createElection

```
http://localhost:8000/election/createElection
# POST Request
```

Data To Be Send

```json
{
  "election": {
    "id": "ID",
    "date": "Send Election Date as a String",
    "created": "Send a Timestamp As String",
    "modified": "Send a Timestamp As String"
  }
}
```

### getElectionByID

```
http://localhost:8000/election/getElectionByID/:electionId
# GET Request
```

### getAllElections

```
http://localhost:8000/election/getAllElections
# GET Request
```

## Voting

### addVoting

```
http://localhost:8000/election/addVoting
# POST Request
```

Data To Be Send

```json
{
  "voting": {
    "id": "Unique Identifier - Timestamp+RandomDigit+VoterId",
    "election": "ElectionId",
    "created": "Send a Timestamp As String",
    "modified": "Send a Timestamp As String"
  },
  "candidateId": "candidateId"
}
```

### getAllVotings

```
http://localhost:8000/election/getAllVotings
# GET Request
```

## Notes

For any doubt in routes refer following link:
https://github.com/Abhishek-Kaudare/E-Voting-With-BlockChain/blob/master/packages/server/src/controllers/router.ts
# Contributions

Special thanks to Triads for starting this amazingly useful project for the community.
