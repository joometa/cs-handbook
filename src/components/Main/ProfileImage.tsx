import React from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK =
  'https://tistory1.daumcdn.net/tistory/3829592/attach/64abbf85fb834c149045b16e119f0aca'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
