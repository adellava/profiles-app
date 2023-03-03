import { CharacterCompleteProfile } from './CharacterCompleteProfile';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import completeProfileMock from './mock/completeProfileMock';

describe('CharacterCompleteProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CharacterCompleteProfile completeCharacter={completeProfileMock} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render a complete profile', () => {
    const testRenderer = TestRenderer.create(
      <CharacterCompleteProfile completeCharacter={completeProfileMock} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
