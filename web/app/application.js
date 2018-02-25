//static resources
import 'src/styles/globalStyles';
import './styles/main.scss';

//application bootstrap
import './router';

import {Promise} from 'bluebird';

Promise.onPossiblyUnhandledRejection((error) => {
  throw error;
});
