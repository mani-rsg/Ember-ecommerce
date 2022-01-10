import Application from 'ember-ecommerce/app';
import config from 'ember-ecommerce/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
