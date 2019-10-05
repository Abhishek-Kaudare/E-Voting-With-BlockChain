import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Election extends ConvectorModel<Election> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.election';

  @Required()
  @Validate(yup.string())
  public election_id: string;

  @ReadOnly()
  @Required()
  @Validate(yup.number())
  public created: number;

  @Required()
  @Validate(yup.number())
  public modified: number;
}
