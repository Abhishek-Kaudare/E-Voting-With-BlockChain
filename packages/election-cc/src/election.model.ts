import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

export class Election extends ConvectorModel<Election> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.election';

  @Required()
  @Validate(yup.string())
  public date: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public created: string;

  @Required()
  @Validate(yup.string())
  public modified: string;
}
