//import react
import React from 'react';

//import fetch
import { data } from '../../lib/fetch';

import { useState } from 'react';

//import Crypto_nav_subsection
import Crypto_nav_subsection from './crypto_nav_subsection';

function Middle() {
  return (
    data?.map((key:any) => (
      <Crypto_nav_subsection key={key} name={key.name}/>
    ))
    
  )
}

export default Middle;