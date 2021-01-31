/* eslint-disable max-len */
import React, { useState } from 'react';
import { Range, createSliderWithTooltip } from 'rc-slider';
import { Wrapper, Title, CheckboxContainer } from './styles';
import 'rc-slider/assets/index.css';

const RangeWithTooltip = createSliderWithTooltip(Range);

const Onboarding = () => {
  const [isBusinessOwner, setIsBusinessOwner] = useState(false);
  const [isInvestor, setIsInvestor] = useState(false);
  const [isMinorityOwned, setIsMinorityOwned] = useState(false);
  const [newBusinessOwner, setNewBusinessOwner] = useState({});
  const [newInvestor, setNewInvestor] = useState({});

  return (
    <Wrapper>
      <Title>
        <h1>Just a Few More Steps</h1>
        <h2>Tell Us a Bit About Yourself...</h2>
      </Title>
      <h3>What&#39;s your name?</h3>
      <input placeholder="First Name" />
      <input placeholder="Last Name" />
      <h3>Who are you?</h3>
      <CheckboxContainer>
        <input
          type="checkbox"
          checked={isBusinessOwner}
          onChange={(e) => {
            setIsBusinessOwner(e.target.checked);
            if (isInvestor) setIsInvestor(false);
          }}
        />
        <span>I&#39;m a small business owner in need of some help</span>
      </CheckboxContainer>
      <CheckboxContainer>
        <input
          type="checkbox"
          checked={isInvestor}
          onChange={(e) => {
            setIsInvestor(e.target.checked);
            if (isBusinessOwner) setIsBusinessOwner(false);
          }}
        />
        <span>I&#39;m an investor looking for passionate people to invest in</span>
      </CheckboxContainer>

      {isBusinessOwner && (
        <div>
          As an app designed to help minoirty communities, we want the majority of our benefactors to be people in
          disenfranchiesed communities. While anyone is free to use this app, please keep this in mind.
          <h3>Is your business minority owned? *</h3>
          <CheckboxContainer>
            <input
              type="checkbox"
              checked={isMinorityOwned}
              onChange={(e) => {
                setIsMinorityOwned(e.target.checked);
              }}
            />
            <span>Yes, we are a minority owned business</span>
          </CheckboxContainer>
          <CheckboxContainer>
            <input
              type="checkbox"
              checked={!isMinorityOwned}
              onChange={(e) => {
                setIsMinorityOwned(e.target.checked);
              }}
            />
            <span>No, we are not a minority owned business</span>
          </CheckboxContainer>
          <h3>What is the name of your business?</h3>
          <input placeholder="Your answer here..." />
          <h3>Tell us about what you do!</h3>
          <input placeholder="Write your bio here..." />
          <h3>Any EGSs investors should be aware of?</h3>
          <input placeholder="Separate by '#'. Ex: #Carbon Neutral #LBGTQ+ Friendly ..." />
          <h3>What do you need the money for?</h3>
          <input placeholder="Tell us your story..." />
        </div>
      )}

      {isInvestor && (
        <div>
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
          />
          <h3>Tell us about why you&#39;re here!</h3>
          <input placeholder="Write your bio here..." height={70} />
          <h3>Any EGSs that you&#39;d like to look out for?</h3>
          <input placeholder="Separate by '#'. Ex: #Carbon Neutral #LBGTQ+ Friendly ..." />
        </div>
      )}
    </Wrapper>
  );
};

export default Onboarding;
