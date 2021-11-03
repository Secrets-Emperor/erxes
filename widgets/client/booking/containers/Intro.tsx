import * as React from 'react';
import Intro from '../components/Intro';
import { AppConsumer } from './AppContext';

function IntroContainer() {
  return (
    <AppConsumer>
      {({ goToBooking, getBooking }) => {
        const booking = getBooking();

        return <Intro booking={booking} goToBooking={goToBooking} />;
      }}
    </AppConsumer>
  );
}

export default IntroContainer;