import {ThemeProvider, BaseStyles} from '@primer/react';
import Homepage from './components/Homepage';
import CustomizedHeader from './components/CustomizedHeader';


function App() {

  return (
    <ThemeProvider>
      <BaseStyles>
        <CustomizedHeader/>
        <Homepage/>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
