import { Request, Response } from 'express';
import { ElectionControllerBackEnd } from '../convector';


export async function ElectionController_createAdmin_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .createAdmin(params.admin));
            
    } catch(ex) {
        console.log('Error post ElectionController_createAdmin', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_createVoter_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .createVoter(params.voter));
            
    } catch(ex) {
        console.log('Error post ElectionController_createVoter', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_createCandidate_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .createCandidate(params.candidate));
            
    } catch(ex) {
        console.log('Error post ElectionController_createCandidate', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_createElection_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .createElection(params.election));
            
    } catch(ex) {
        console.log('Error post ElectionController_createElection', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_addVoting_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .addVoting(params.voting,params.candidateId));
            
    } catch(ex) {
        console.log('Error post ElectionController_addVoting', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_changeVotingStatus_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .changeVotingStatus(params.voterId,params.votingStatus));
            
    } catch(ex) {
        console.log('Error post ElectionController_changeVotingStatus', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_changeVotingPhase_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .changeVotingPhase(params.voterId,params.votingPhase));
            
    } catch(ex) {
        console.log('Error post ElectionController_changeVotingPhase', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_changeVotingPermission_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .changeVotingPermission(params.voterId,params.votingPermission));
            
    } catch(ex) {
        console.log('Error post ElectionController_changeVotingPermission', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_changeVoterValidationStatus_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .changeVoterValidationStatus(params.voterId,params.validationStatus,params.validationOfficer));
            
    } catch(ex) {
        console.log('Error post ElectionController_changeVoterValidationStatus', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_getAllVoters_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await ElectionControllerBackEnd
            .getAllVoters());
        
    } catch(ex) {
        console.log('Error get ElectionController_getAllVoters', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_getVoterByID_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await ElectionControllerBackEnd
            .getVoterByID(params.voterId));
        
    } catch(ex) {
        console.log('Error get ElectionController_getVoterByID', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_changeCandidaturePhase_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .changeCandidaturePhase(params.candidateId,params.candidaturePhase));
            
    } catch(ex) {
        console.log('Error post ElectionController_changeCandidaturePhase', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_changeCandidatureStatus_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .changeCandidatureStatus(params.candidateId,params.candidatureStatus));
            
    } catch(ex) {
        console.log('Error post ElectionController_changeCandidatureStatus', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_changeCandidateValidationStatus_post(req: Request, res: Response): Promise<void>{
    try{
        let params = req.body;
            res.status(200).send(await ElectionControllerBackEnd
                .changeCandidateValidationStatus(params.candidateId,params.validationStatus,params.validationOfficer));
            
    } catch(ex) {
        console.log('Error post ElectionController_changeCandidateValidationStatus', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_getAllCandidates_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await ElectionControllerBackEnd
            .getAllCandidates());
        
    } catch(ex) {
        console.log('Error get ElectionController_getAllCandidates', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_getCandidateByID_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await ElectionControllerBackEnd
            .getCandidateByID(params.candidateId));
        
    } catch(ex) {
        console.log('Error get ElectionController_getCandidateByID', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_getAllAdmins_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await ElectionControllerBackEnd
            .getAllAdmins());
        
    } catch(ex) {
        console.log('Error get ElectionController_getAllAdmins', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_getAllVotings_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await ElectionControllerBackEnd
            .getAllVotings());
        
    } catch(ex) {
        console.log('Error get ElectionController_getAllVotings', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_getAllElections_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await ElectionControllerBackEnd
            .getAllElections());
        
    } catch(ex) {
        console.log('Error get ElectionController_getAllElections', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_getAdminByID_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await ElectionControllerBackEnd
            .getAdminByID(params.adminId));
        
    } catch(ex) {
        console.log('Error get ElectionController_getAdminByID', ex.stack);
        res.status(500).send(ex);
    }
}
export async function ElectionController_getElectionByID_get(req: Request, res: Response): Promise<void>{
    try{
        let params = req.params;
        res.status(200).send(await ElectionControllerBackEnd
            .getElectionByID(params.electionId));
        
    } catch(ex) {
        console.log('Error get ElectionController_getElectionByID', ex.stack);
        res.status(500).send(ex);
    }
}