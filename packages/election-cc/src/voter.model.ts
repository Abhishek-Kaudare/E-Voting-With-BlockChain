import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Voter extends ConvectorModel<Voter> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.voter';

  @Required()
  @Validate(yup.string())
  public voterName: string;

  @Required()
  @Validate(yup.string())
  public votingPhase: string;

  @Required()
  @Validate(yup.string())
  public votingStatus: string;

  @Required()
  @Validate(yup.string())
  public votingPermission: string;

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
