import React from 'react';

import DocumentsUpload from './DocumentsUpload';
import LangPairings from './LangPairings';
import DesiredTone from './DesiredTone';
import UrgentJob from './UrgentJob';
import SignInForm from './SignInForm';

const Main = () => (
  <div className="main">
    <h1 className="main__title">
      select what you want to translete
    </h1>
    <div className="main__select">
      <input type="radio" id="website" name="translated" value="website" required />
      <label for="website" class="main__label">Website</label>

      <input type="radio" id="doc" name="translated" value="doc" />
      <label for="doc" class="main__label">Documents</label>

      <input type="radio" id="account" name="translated" value="account" />
      <label for="account" class="main__label">Social Account</label>
    </div>
    <DocumentsUpload />
    <LangPairings />
    <div className="main__tone-with-urgent">
      <DesiredTone />
      <UrgentJob />
    </div>
    <SignInForm />
  </div>
)

export default Main;
