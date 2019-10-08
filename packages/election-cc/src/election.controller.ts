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

  @Invokable()
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

  @Invokable()
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

  @Invokable()
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

  @Invokable()
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

  @Invokable()
  public async getAllVoters() {
    const allVoters = await Voter.getAll<Voter>();
    return allVoters;
    // Think of way to return voters according to VoterPhase
  }

  @Invokable()
  public async getVoterByID(
    @Param(yup.string())
    voterId: string
  ) {
    const voter = await Voter.getOne(voterId);
    return voter;
  }

  @Invokable()
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

  @Invokable()
  public async changeCandidatureStatus(
    @Param(yup.string())
    candidateId: string,
    @Param(yup.string())
    candidatureStatus: string
  ) {
    const candidate = await Candidate.getOne(candidateId);
    candidate.candidatureStatus = candidatureStatus;
    // Think of how to add validating officer role at every phase
    await candidate.save();
  }

  @Invokable()
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

  @Invokable()
  public async getAllCandidates() {
    const allCandidates = await Candidate.getAll<Candidate>();
    return allCandidates;
    // Think of way to return candidates according to CandidaturePhase
  }

  @Invokable()
  public async getCandidateByID(
    @Param(yup.string())
    candidateId: string
  ) {
    const candidate = await Candidate.getOne(candidateId);
    return candidate;
  }

  @Invokable()
  public async getAllAdmins() {
    const allAdmin = await Admin.getAll<Admin>();
    return allAdmin;
  }

  @Invokable()
  public async getAdminByID(
    @Param(yup.string())
    adminId: string
  ) {
    const admin = await Admin.getOne(adminId);
    return admin;
  }

  @Invokable()
  public async getAllVotings() {
    const allVoting = await Voting.getAll<Voting>();
    return allVoting;
  }

  @Invokable()
  public async getAllElections() {
    const allElection = await Election.getAll<Election>();
    return allElection;
  }

  @Invokable()
  public async getElectionByID(
    @Param(yup.string())
    electionId: string
  ) {
    const election = await Election.getOne(electionId);
    return election;
  }
  // Think of way to introduce winner
}
