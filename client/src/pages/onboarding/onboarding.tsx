/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Range, createSliderWithTooltip } from 'rc-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
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
  ErrorMessage,
} from './styles';
import 'rc-slider/assets/index.css';
import { createBusinessOwner, createInvestor } from './actions';
import { getUser } from '../login';

const RangeWithTooltip = createSliderWithTooltip(Range);

const validationErrors = {
  firstName: 'You must submit your first name.',
  lastName: 'You must submit your last name.',
  businessName: 'You must submit your business name.',
  location: 'You must submit your location.',
  tags: 'Your tags must have at least 1 hashtag.',
};

const Onboarding = () => {
  const [isBusinessOwner, setIsBusinessOwner] = useState(false);
  const [isInvestor, setIsInvestor] = useState(false);
  const [isMinorityOwned, setIsMinorityOwned] = useState(false);
  const [profileInfo, setProfileInfo] = useState({ firstName: '', lastName: '', profilePicture: '' });
  const [newBusinessOwner, setNewBusinessOwner] = useState({
    certificate: '',
    businessName: '',
    location: '',
    bio: '',
    tags: '',
    storyBio: '',
  });
  const [newInvestor, setNewInvestor] = useState<{
    location: string;
    bio: string;
    tags: string;
    minMaxLoan: number[] | null;
  }>({
    location: '',
    bio: '',
    tags: '',
    minMaxLoan: null,
  });
  const [errorMessages, setErrorMessages] = useState({});
  const user = useSelector(getUser);

  const validateThenSubmitBusinessOwner = () => {
    const newErrorMessages = {
      firstName: profileInfo.firstName.length > 0 ? null : validationErrors.firstName,
      lastName: profileInfo.lastName.length > 0 ? null : validationErrors.lastName,
      businessName: newBusinessOwner.businessName.length > 0 ? null : validationErrors.businessName,
      location: newBusinessOwner.location.length > 0 ? null : validationErrors.location,
      tags: !newBusinessOwner.tags.length || newBusinessOwner.tags.includes('#') ? null : validationErrors.tags,
    };
    setErrorMessages(newErrorMessages);

    if (Object.values(newErrorMessages).every((error) => !error)) {
      let splitTags = newBusinessOwner.tags.split('#');
      splitTags = splitTags.filter((tag) => tag.length > 0).map((tag) => tag.replace(/ /g, ''));
      const businessOwnerInput = {
        ...newBusinessOwner,
        ...profileInfo,
        minorityOwned: isMinorityOwned,
        tags: splitTags,
      };
      createBusinessOwner(businessOwnerInput, user);
    }
  };

  const validateThenSubmitInvestor = () => {
    const newErrorMessages = {
      firstName: profileInfo.firstName.length > 0 ? null : validationErrors.firstName,
      lastName: profileInfo.lastName.length > 0 ? null : validationErrors.lastName,
      location: newInvestor.location.length > 0 ? null : validationErrors.location,
      tags: !newInvestor.tags.length || newInvestor.tags.includes('#') ? null : validationErrors.tags,
    };
    setErrorMessages(newErrorMessages);

    if (Object.values(newErrorMessages).every((error) => !error)) {
      let splitTags = newInvestor.tags.split('#');
      splitTags = splitTags.filter((tag) => tag.length > 0).map((tag) => tag.replace(/ /g, ''));
      const investorInput = {
        ...newInvestor,
        ...profileInfo,
        tags: splitTags,
      };
      createInvestor(investorInput, user);
    }
  };

  return (
    <Wrapper>
      <Title>
        <h1>Just a Few More Steps</h1>
        <h2>Tell Us a Bit About Yourself...</h2>
      </Title>
      <h3>What&#39;s your name?</h3>
      <TextInput
        placeholder="First Name"
        onBlur={(e) => setProfileInfo({ ...profileInfo, firstName: e.target.value })}
      />
      <TextInput placeholder="Last Name" onBlur={(e) => setProfileInfo({ ...profileInfo, lastName: e.target.value })} />
      <h3>Profile Picture (upload an image URL)</h3>
      <TextInput
        placeholder="Provide an image URL..."
        onBlur={(e) => setProfileInfo({ ...profileInfo, profilePicture: e.target.value })}
      />
      <h3>Who are you?</h3>
      <CheckboxContainer>
        <Checkbox
          checked={isBusinessOwner}
          onChange={(e) => {
            setIsBusinessOwner(e.target.checked);
            if (isInvestor) setIsInvestor(false);
            setErrorMessages({});
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
            setErrorMessages({});
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
          {isMinorityOwned && (
            <div>
              <h3>Provide a link for your certificate:</h3>
              <TextInput
                placeholder="Provide your certificate link..."
                onBlur={(e) => setNewBusinessOwner({ ...newBusinessOwner, certificate: e.target.value })}
              />
            </div>
          )}
          <h3>What is the name of your business?</h3>
          <TextInput
            placeholder="Your answer here..."
            onBlur={(e) => setNewBusinessOwner({ ...newBusinessOwner, businessName: e.target.value })}
          />
          <h3>Where are you located?</h3>
          <TextInput
            placeholder="Enter your location..."
            onBlur={(e) => setNewBusinessOwner({ ...newBusinessOwner, location: e.target.value })}
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
            {!Object.values(errorMessages).every((error) => !error) && (
              <div>
                {Object.values(errorMessages).map(
                  (error) =>
                    typeof error === 'string' && (
                      <ErrorMessage key={error}>
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        {error}
                      </ErrorMessage>
                    ),
                )}
              </div>
            )}
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
          <h3>Where are you located?</h3>
          <TextInput
            placeholder="Enter your location..."
            onBlur={(e) => setNewInvestor({ ...newInvestor, location: e.target.value })}
          />
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
            {!Object.values(errorMessages).every((error) => !error) && (
              <div>
                {Object.values(errorMessages).map(
                  (error) =>
                    typeof error === 'string' && (
                      <ErrorMessage key={error}>
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        {error}
                      </ErrorMessage>
                    ),
                )}
              </div>
            )}
          </SubmitContainer>
        </UserSection>
      )}
    </Wrapper>
  );
};

export default Onboarding;
