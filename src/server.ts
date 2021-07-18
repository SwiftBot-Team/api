import { log } from '@utils/Logger';

import app from './app';

require('dotenv/config');

const YouTubeNotifier = require('youtube-notification');
 
const notifier = new YouTubeNotifier({
  hubCallback: 'https://swiftbotnovo.herokuapp.com/',
  port: 8080,
  secret: 'Something',
  path: '/youtube'
});
notifier.setup();
 
notifier.on('notified', data => {
  console.log('New Video');
  console.log(
    `${data.channel.name} just uploaded a new video titled: ${data.video.title}`
  );
});
 
notifier.subscribe('channel_1');
 
[
  'UCjBO43ykxlSs3j7F7EXcBUQ',
  'UCU5JicSrEM5A63jkJ2QvGYw',
  'UCV306eHqgo0LvBf3Mh36AHg',
  'UCowJvMDgjFLbhp1a67zTZFw',
  'UC9HR3SsYA6ZNxH7qAfl4DAA',
  'UC-E1waou_aC3re8NJh4x9YQ',
  'UCnU2EtUW8Z4DxSqXxJ5cMQg',
  'UCcn0BFXHCtkqJl8CAPDj9og',
  '854706957281132585',
  'UC1-2dgnFmhAM0YRvaGMAJnw',
  'UCDNL2QaQpgt-5Ukz_zZ2-ZA',
  '842124488140652595',
  'UCmj-bdZKc5FQiiYAI8akItg',
  'UCZdKSyHf6CxqaEWWXRlXegg',
  '840519114442539018',
  'UCpjEFqQSpw-aisDvxBvgPLQ',
  'UCnb7TKiwdLBo9iUPw53c24w',
  '827229298162270228',
  'UC_YErXUb0lBpBcVyHb-XzxA',
  'UCktHFGIcSNM01X_R6tKTAWA',
  'UCj_ZXctc8if--cyK9zNtpiw',
  '838827462179684373',
  'UCLTmVZQfUj6ghBF-VdRKyWg',
  'UCjqRJqnTrn35mFqXhw8DnQQ',
  '849315502237155369',
  '849316163221848125',
  'UC_Etf-z_aXrwRUDjqkxk8Lw'
].forEach(c => notifier.subscribe(c))



app.listen(process.env.PORT || 3333, () => {
  log('🚀  Server started');
});
