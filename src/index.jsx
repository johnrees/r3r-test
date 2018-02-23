import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import R3r from './R3r';

const root = document.getElementById('root');
const load = () => render((
  <AppContainer>
    <R3r />
  </AppContainer>
), root);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
