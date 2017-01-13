

/*
'use strict';

const assert = require(`assert`);
const config = require(`./config`);
const utils = require(`nodejs-repo-tools`);

describe(`app.js`, () => {
  if (!process.env.E2E_TESTS) {
    it(`should run`, (done) => {
      utils.testLocalApp(config, done);
    });
  }

  it(`should create an express app`, (done) => {
    utils.getRequest(config)
      .get(`/`)
      .expect(200)
      .expect((response) => {
        assert.equal(response.text, config.msg);
      })
      .end(done);
  });
});
*/