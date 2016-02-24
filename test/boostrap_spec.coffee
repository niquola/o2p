assert = require('assert')
o2p = require('../src/o2p')

code = """
SELECT * from users
where id = 5
"""

describe "o2p", ->
  it "start", ->
    console.log o2p.parse(code)
    # assert.deepEqual(sql(k), v)
