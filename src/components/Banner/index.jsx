import React from 'react';
import {
  StyledBanner,
  StyledBannerContent,
  StyledBannerTitle,
  StyledBannerDescription,
  StyledBannerButtonContainer,
  StyledBannerButton,
  StyledBannerButtonSecondary,
} from './styled';

function Banner() {
  return (
    <StyledBanner>
      <StyledBannerContent>
        <StyledBannerTitle>Banner</StyledBannerTitle>
        <StyledBannerDescription>
          Lorem ipsum dolor sit amet.
        </StyledBannerDescription>
        <StyledBannerButtonContainer>
          <StyledBannerButton>Button</StyledBannerButton>
          <StyledBannerButtonSecondary>
            Button Secondary
          </StyledBannerButtonSecondary>
        </StyledBannerButtonContainer>
      </StyledBannerContent>
    </StyledBanner>
  );
}

export default Banner;
