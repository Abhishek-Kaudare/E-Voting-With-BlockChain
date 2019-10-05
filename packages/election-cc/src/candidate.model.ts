import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Candidate extends ConvectorModel<Candidate> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.candidate';

  @Required()
  @Validate(yup.string())
  public candidateName: string;

  @Required()
  @Validate(yup.string())
  public candidaturePhase: string;

  @Required()
  @Validate(yup.string())
  public candidatureStatus: string;

  @Required()
  @Validate(yup.number())
  public totalVotes: number;

  @Required()
  @Validate(yup.string())
  public validationStatus: string;

  @Validate(yup.string())
  public validationOfficer: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public created: string;

  @Required()
  @Validate(yup.string())
  public modified: string;
}
