import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Admin extends ConvectorModel<Admin> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.admin';

  @Required()
  @Validate(yup.string())
  public adminId: string;

  @Required()
  @Validate(yup.string())
  public role: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public created: string;

  @Required()
  @Validate(yup.string())
  public modified: string;

}
