// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Election, ElectionController } from '../src';

describe('Election', () => {
  let adapter: MockControllerAdapter;
  let electionCtrl: ConvectorControllerClient<ElectionController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    electionCtrl = ClientFactory(ElectionController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'ElectionController',
        name: join(__dirname, '..')
      }
    ]);

    adapter.addUser('Test');
  });
  
  it('should create a default model', async () => {
    const modelSample = new Election({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await electionCtrl.$withUser('Test').create(modelSample);
  
    const justSavedModel = await adapter.getById<Election>(modelSample.id);
  
    expect(justSavedModel.id).to.exist;
  });
});