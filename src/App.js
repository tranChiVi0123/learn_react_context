import React, {useState} from 'react';
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import Store from "./store";
import ComponentC from "./components/componentC";
import ComponentD from "./components/componentD";
import ComponentE from "./components/componentE";
import ComponentF from "./components/componentF";
import ComponentG from "./components/componentG";

function App() {
  return (
      <Store>
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
          <ComponentD/>
          <ComponentE/>
          <ComponentF/>
          <ComponentG/>
      </Store>
  );
}

export default App;
