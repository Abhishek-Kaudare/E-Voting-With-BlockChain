import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Voting extends ConvectorModel<Voting> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.voting';

  @Required()
  @Validate(yup.string())
  public election: string;

  @ReadOnly()
  @Required()
  @Validate(yup.number())
  public created: number;

  @Required()
  @Validate(yup.number())
  public modified: number;
}
