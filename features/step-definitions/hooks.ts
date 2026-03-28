import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30000);
import { CustomWorld } from './world';

Before(async function(this: CustomWorld) {
  await this.init();
});

After(async function(this: CustomWorld) {
  await this.cleanup();
});
