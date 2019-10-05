import * as yup from 'yup';

import { ChaincodeTx } from "@worldsibu/convector-platform-fabric";
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from "@worldsibu/convector-core";

import { Election } from "./election.model";
import { Admin } from "./admin.model";
import { Voter } from "./voter.model";
import { Candidate } from "./candidate.model";
import { Voting } from "./voting.model";

@Controller("election")
export class ElectionController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async createAdmin(
    @Param(Admin)
    admin: Admin
  ) {
    await admin.save();
  }

  @Invokable()
  public async createVoter(
    @Param(Voter)
    voter: Voter
  ) {
    await voter.save();
  }

  @Invokable()
  public async createCandidate(
    @Param(Candidate)
    candidate: Candidate
  ) {
    await candidate.save();
  }

  @Invokable()
  public async createElection(
    @Param(Election)
    election: Election
  ) {
    await election.save();
  }

  @Invokable()
  public async addVoting(
    @Param(Voting)
    voting: Voting,
    @Param(yup.string())
    candidateId: string
  ) {
    const candidate = await Candidate.getOne(candidateId);
    candidate.totalVotes = candidate.totalVotes + 1;

    await candidate.save();
    await voting.save();
  }

  public async changeVotingStatus(
    @Param(yup.string())
    voterId: string,
    @Param(yup.string())
    votingStatus: string,
  ) {
    const voter = await Voter.getOne(voterId);
    voter.votingStatus = votingStatus;

    await voter.save();
  }

  public async changeVotingPhase(
    @Param(yup.string())
    voterId: string,
    @Param(yup.string())
    votingPhase: string,
  ) {
    const voter = await Voter.getOne(voterId);
    voter.votingPhase = votingPhase;

    await voter.save();
  }

  public async changeVotingPermission(
    @Param(yup.string())
    voterId: string,
    @Param(yup.string())
    votingPermission: string,
  ) {
    const voter = await Voter.getOne(voterId);
    voter.votingPermission = votingPermission;

    await voter.save();
  }

  public async changeVoterValidationStatus(
    @Param(yup.string())
    voterId: string,
    @Param(yup.string())
    validationStatus: string,
    @Param(yup.string())
    validationOfficer: string,
  ) {
    const voter = await Voter.getOne(voterId);
    voter.validationStatus = validationStatus;
    voter.validationOfficer = validationOfficer;
    // Add Admin Checks with Role Check for validationOfficer
    await voter.save();
  }

  public async getAllVoters() {
    const allVoters = await Voter.getAll<Voter>();
    return allVoters;
    // Think of way to return voters according to VoterPhase
  }

  public async changeCandidaturePhase(
    @Param(yup.string())
    candidateId: string,
    @Param(yup.string())
    candidaturePhase: string
  ) {
    const candidate = await Candidate.getOne(candidateId);
    candidate.candidaturePhase = candidaturePhase;
    // Think of how to add validating officer role at every phase
    await candidate.save();
  }

  public async changeCandidateValidationStatus(
    @Param(yup.string())
    candidateId: string,
    @Param(yup.string())
    validationStatus: string,
    @Param(yup.string())
    validationOfficer: string,
  ) {
    const candidate = await Candidate.getOne(candidateId);
    candidate.validationStatus = validationStatus;
    candidate.validationOfficer = validationOfficer;
    // Add Admin Checks with Role Check for validationOfficer
    await candidate.save();
  }

  public async getAllCandidates() {
    const allCandidates = await Candidate.getAll<Candidate>();
    return allCandidates;
    // Think of way to return candidates according to CandidaturePhase
  }
  // Think of way to introduce winner
}
