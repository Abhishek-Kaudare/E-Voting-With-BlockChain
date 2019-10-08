import * as express from 'express';
import { 
    ElectionController_createAdmin_post,
    ElectionController_createVoter_post,
    ElectionController_createCandidate_post,
    ElectionController_createElection_post,
    ElectionController_addVoting_post,
    ElectionController_changeVotingStatus_post,
    ElectionController_changeVotingPhase_post,
    ElectionController_changeVotingPermission_post,
    ElectionController_changeVoterValidationStatus_post,
    ElectionController_getAllVoters_get,
    ElectionController_getVoterByID_get,
    ElectionController_changeCandidaturePhase_post,
    ElectionController_changeCandidatureStatus_post,
    ElectionController_changeCandidateValidationStatus_post,
    ElectionController_getAllCandidates_get,
    ElectionController_getCandidateByID_get,
    ElectionController_getAllAdmins_get,
    ElectionController_getAllVotings_get,
    ElectionController_getAllElections_get,
    ElectionController_getAdminByID_get,
    ElectionController_getElectionByID_get } from './controllers'
export default express.Router()
.post('/election/createAdmin', ElectionController_createAdmin_post)
.post('/election/createVoter', ElectionController_createVoter_post)
.post('/election/createCandidate', ElectionController_createCandidate_post)
.post('/election/createElection', ElectionController_createElection_post)
.post('/election/addVoting', ElectionController_addVoting_post)
.post('/election/changeVotingStatus', ElectionController_changeVotingStatus_post)
.post('/election/changeVotingPhase', ElectionController_changeVotingPhase_post)
.post('/election/changeVotingPermission', ElectionController_changeVotingPermission_post)
.post('/election/changeVoterValidationStatus', ElectionController_changeVoterValidationStatus_post)
.get('/election/getAllVoters', ElectionController_getAllVoters_get)
.get('/election/getVoterByID/:voterId', ElectionController_getVoterByID_get)
.post('/election/changeCandidaturePhase', ElectionController_changeCandidaturePhase_post)
.post('/election/changeCandidatureStatus', ElectionController_changeCandidatureStatus_post)
.post('/election/changeCandidateValidationStatus', ElectionController_changeCandidateValidationStatus_post)
.get('/election/getAllCandidates', ElectionController_getAllCandidates_get)
.get('/election/getCandidateByID/:candidateId', ElectionController_getCandidateByID_get)
.get('/election/getAllAdmins', ElectionController_getAllAdmins_get)
.get('/election/getAllVotings', ElectionController_getAllVotings_get)
.get('/election/getAllElections', ElectionController_getAllElections_get)
.get('/election/getAdminByID/:adminId', ElectionController_getAdminByID_get)
.get('/election/getElectionByID/:electionId', ElectionController_getElectionByID_get)
