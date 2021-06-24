import { log } from '@utils/Logger';

import app from './app';

require('dotenv/config');

app.listen(process.env.PORT || 3333, () => {
  log('🚀  Server started');
});
