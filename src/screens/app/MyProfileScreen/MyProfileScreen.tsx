import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: AppTabScreenProps<'MyProfileScreen'>,
) {
  return (
    <Screen>
      <Text preset="headingSmall">My Profile</Text>
    </Screen>
  );
}
