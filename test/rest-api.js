const getApi = require('../rest-api.js');

QUnit.module('api tests');

QUnit.test('status code validation', async assert => {
  const response = await getApi(2);

  assert.equal(response.status, 200, 'should be 200');
});

QUnit.test('specie validation', async assert => {
  const response = await getApi(2);

  const data = await response.json();

  assert.notEqual(data.species, 'Alien', 'should not be Alien');
});

QUnit.test('unknown origin validation', async assert => {  
  const response = await getApi(391);

  const data = await response.json();

  assert.notOk(data.origin.url, 'should be empty');
});

QUnit.test('properties validation', async assert => {  
  const response = await getApi(391);
  const data = await response.json();
  
  const response2 = await getApi(302);
  const data2 = await response2.json();
  
  assert.notPropEqual(data, data2, 'should be the same properties');
  assert.expect(1);
});
