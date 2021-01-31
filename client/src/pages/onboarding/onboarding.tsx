/* eslint-disable max-len */
import React, { useState } from 'react';
import { Range, createSliderWithTooltip } from 'rc-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper,
  Title,
  TextInput,
  Checkbox,
  MultilineTextInput,
  CheckboxContainer,
  UserSection,
  SubmitContainer,
  UpdateInfo,
} from './styles';
import 'rc-slider/assets/index.css';

const RangeWithTooltip = createSliderWithTooltip(Range);

const validationErrors = {
  firstName: 'You must submit your first name.',
  lastName: 'You must submit your last name.',
  businessName: 'You must submit your business name.',
  tags: 'Your tags must have at least 1 hashtag.',
};

const Onboarding = () => {
  const [isBusinessOwner, setIsBusinessOwner] = useState(false);
  const [isInvestor, setIsInvestor] = useState(false);
  const [isMinorityOwned, setIsMinorityOwned] = useState(false);
  const [fullName, setFullName] = useState({ firstName: '', lastName: '' });
  const [newBusinessOwner, setNewBusinessOwner] = useState({ businessName: '', bio: '', tags: '', storyBio: '' });
  const [newInvestor, setNewInvestor] = useState<{ bio: string; tags: string; minMaxLoan: number[] | null }>({
    bio: '',
    tags: '',
    minMaxLoan: null,
  });
  const [errorMessages, setErrorMessages] = useState({});

  const validateThenSubmitBusinessOwner = () => {
    const newErrorMessages = {
      firstName: fullName.firstName.length > 0 ? null : validationErrors.firstName,
      lastName: fullName.lastName.length > 0 ? null : validationErrors.lastName,
      businessName: newBusinessOwner.businessName.length > 0 ? null : validationErrors.businessName,
      tags: !newBusinessOwner.tags.length || newBusinessOwner.tags.includes('#') ? null : validationErrors.tags,
    };
    setErrorMessages(newErrorMessages);

    if (Object.values(newErrorMessages).every((error) => !error)) {
      console.log('success');
    }
  };

  const validateThenSubmitInvestor = () => {
    const newErrorMessages = {
      firstName: fullName.firstName.length > 0 ? null : validationErrors.firstName,
      lastName: fullName.lastName.length > 0 ? null : validationErrors.lastName,
      tags: !newBusinessOwner.tags.length || newBusinessOwner.tags.includes('#') ? null : validationErrors.tags,
    };
    setErrorMessages(newErrorMessages);

    if (Object.values(newErrorMessages).every((error) => !error)) {
      console.log('success');
    }
  };

  return (
    <Wrapper>
      <Title>
        <h1>Just a Few More Steps</h1>
        <h2>Tell Us a Bit About Yourself...</h2>
      </Title>
      <h3>What&#39;s your name?</h3>
      <TextInput placeholder="First Name" onBlur={(e) => setFullName({ ...fullName, firstName: e.target.value })} />
      <TextInput placeholder="Last Name" onBlur={(e) => setFullName({ ...fullName, lastName: e.target.value })} />
      <h3>Who are you?</h3>
      <CheckboxContainer>
        <Checkbox
          checked={isBusinessOwner}
          onChange={(e) => {
            setIsBusinessOwner(e.target.checked);
            if (isInvestor) setIsInvestor(false);
          }}
        />
        <span>I&#39;m a small business owner in need of some help</span>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          checked={isInvestor}
          onChange={(e) => {
            setIsInvestor(e.target.checked);
            if (isBusinessOwner) setIsBusinessOwner(false);
          }}
        />
        <span>I&#39;m an investor looking for passionate people to invest in</span>
      </CheckboxContainer>

      {isBusinessOwner && (
        <UserSection>
          <span>
            As an app designed to help minoirty communities, we want the majority of our benefactors to be people in
            disenfranchiesed communities. While anyone is free to use this app, please keep this in mind.
          </span>
          <h3>Is your business minority owned? *</h3>
          <CheckboxContainer>
            <Checkbox
              checked={isMinorityOwned}
              onChange={() => {
                setIsMinorityOwned(true);
              }}
            />
            <span>Yes, we are a minority owned business</span>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox
              checked={!isMinorityOwned}
              onChange={() => {
                setIsMinorityOwned(false);
              }}
            />
            <span>No, we are not a minority owned business</span>
          </CheckboxContainer>
          <h3>What is the name of your business?</h3>
          <TextInput
            placeholder="Your answer here..."
            onBlur={(e) => setNewBusinessOwner({ ...newBusinessOwner, businessName: e.target.value })}
          />
          <h3>Tell us about what you do!</h3>
          <MultilineTextInput
            placeholder="Write your bio here..."
            onBlur={(e) => setNewBusinessOwner({ ...newBusinessOwner, bio: e.target.value })}
          />
          <h3>Any EGSs investors should be aware of?</h3>
          <TextInput
            placeholder="Separate by '#'. Ex: #Carbon Neutral #LBGTQ+ Friendly ..."
            onBlur={(e) => setNewBusinessOwner({ ...newBusinessOwner, tags: e.target.value })}
          />
          <h3>What do you need the money for?</h3>
          <MultilineTextInput
            placeholder="Tell us your story..."
            onBlur={(e) => setNewBusinessOwner({ ...newBusinessOwner, storyBio: e.target.value })}
          />
          <SubmitContainer>
            <h2>That&#39;s It!</h2>
            <UpdateInfo onClick={validateThenSubmitBusinessOwner}>
              <span>Update Info</span> <FontAwesomeIcon icon={faCaretRight} size="lg" />
            </UpdateInfo>
          </SubmitContainer>
          <span style={{ color: 'gray' }}>
            * Minority-owned business means a business that is at least 51 percent owned by one or more minority
            individuals who are United States citizens or legal resident aliens, or in the case of a corporation,
            partnership, or limited liability company or other entity, at least 51 percent of the equity ownership
            interest in the corporation, partnership, or limited liability company or other entity is owned by one or
            more minority individuals who are United States citizens or legal resident aliens, and both the management
            and daily business operations are controlled by one or more minority individuals.
          </span>
        </UserSection>
      )}

      {isInvestor && (
        <UserSection>
          <h3>How much are you willing to loan per client?</h3>
          <RangeWithTooltip
            step={100}
            min={100}
            max={10000}
            tipFormatter={(amount) => `$${amount}`}
            trackStyle={[
              {
                backgroundColor: '#edf060',
                height: '0.4rem',
              },
            ]}
            railStyle={{ height: '0.4rem' }}
            handleStyle={[
              {
                border: '3px solid #edf060',
                backgroundColor: '#071013',
                width: '1rem',
                height: '1rem',
              },
            ]}
            onAfterChange={(e) => setNewInvestor({ ...newInvestor, minMaxLoan: [e[0], e[1]] })}
          />
          <h3>Tell us about why you&#39;re here!</h3>
          <MultilineTextInput
            placeholder="Write your bio here..."
            onBlur={(e) => setNewInvestor({ ...newInvestor, bio: e.target.value })}
          />
          <h3>Any EGSs that you&#39;d like to look out for?</h3>
          <TextInput
            placeholder="Separate by '#'. Ex: #Carbon Neutral #LBGTQ+ Friendly ..."
            onBlur={(e) => setNewInvestor({ ...newInvestor, tags: e.target.value })}
          />
          <SubmitContainer>
            <h2>That&#39;s It!</h2>
            <UpdateInfo onClick={validateThenSubmitInvestor}>
              <span>Update Info</span> <FontAwesomeIcon icon={faCaretRight} size="lg" />
            </UpdateInfo>
          </SubmitContainer>
        </UserSection>
      )}
    </Wrapper>
  );
};

export default Onboarding;
