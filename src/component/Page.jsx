import React from 'react';

import ClickMeButton from './ClickMeButton';
import Buttons from './Buttons';

export default function Page({ count, buttonIndexs, onClick }) {
  return (
    <div>
      <p>
        Counter
      </p>
      <ClickMeButton count={count} onClick={onClick} />
      <Buttons buttons={buttonIndexs} onClick={onClick} />
    </div>
  );
}
