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
    voting: Voting
  ) {
    await voting.save();
  }

  
}
