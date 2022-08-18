const { assert } = require("chai")
const { groupUsers } = require("../utils")

/*
[
      {
         "id" : 7077310102503424,
         "is_plus" : false,
         "last_login" : "2022-08-17T01:39:28.863Z",
         "name" : "PollyRichards",
         "online_status" : "OFFLINE",
         "picture" : {
            "comment" : "Gogoomu hifamwod co ugez vitkujih buderam fo pusras zizteaf igululgud uv tidoli uwe mevhagog sec lasok weh isoabi.",
            "url" : "https://loremflickr.com/424/424/gay,man/all?lock=3729"
         }
      },
      {
         "id" : 4336970241146880,
         "is_plus" : true,
         "last_login" : "2022-08-16T11:36:28.860Z",
         "name" : "RosettaReese",
         "online_status" : "ONLINE",
         "picture" : {
            "comment" : "Goduvva zib waozule wu kete zeoju mozuzap hallov alowehpor saroc diwjuwcu muza woswug ho juptam onno.",
            "url" : "https://loremflickr.com/424/424/gay,man/all?lock=8764"
         }
      }
   ]
   */
describe('groupUsers', () => {
    it('returns an empty array when given 2 empty arrays', () => {
        const basic = []
        const detailed = []
        const expected = []
        actual = groupUsers(basic, detailed)
        assert.deepEqual(actual, expected)
    });
    it('returns one user with all useful data grouped when given basic and detailed data of that user', () => {
        const basic = [
            {
                "id": 7077310102503424,
                "name": "PollyRichards",
            },
        ]
        const detailed = [{
            "headline": "You can't parse the alarm without bypassing the back-end FTP alarm!",
            "id": 7077310102503424,
        }]
        const expected = [
            {
                "id": 7077310102503424,
                "name": "PollyRichards",
                "headline": "You can't parse the alarm without bypassing the back-end FTP alarm!",
            }
        ]
        actual = groupUsers(basic, detailed)
        assert.deepEqual(actual, expected)
    });
    it('combines user data for multiple, in order users', () => {
        const basic = [
            {
                "id": 1,
                "name": "PollyRichards",
            },
            {
                "id": 2,
                "name": "Tom",
            },
        ]
        const detailed = [
            {
                "headline": "You can't parse the alarm without bypassing the back-end FTP alarm!",
                "id": 1,
            },
            {
                "headline": "I'm in",
                "id": 2,
            }
        ]
        const expected = [
            {
                "id": 1,
                "name": "PollyRichards",
                "headline": "You can't parse the alarm without bypassing the back-end FTP alarm!",
            },
            {
                "id": 2,
                "name": "Tom",
                "headline": "I'm in",

            }
        ]
        actual = groupUsers(basic, detailed)
        assert.deepEqual(actual, expected)
    });
    it('groups unordered user data and combines them', () => {
        const basic = [
            {
                "id": 2,
                "name": "Tom",
            },
            {
                "id": 1,
                "name": "PollyRichards",
            },
        ]
        const detailed = [
            {
                "headline": "You can't parse the alarm without bypassing the back-end FTP alarm!",
                "id": 1,
            },
            {
                "headline": "I'm in",
                "id": 2,
            }
        ]
        const expected = [
            {
                "id": 2,
                "name": "Tom",
                "headline": "I'm in",

            },
            {
                "id": 1,
                "name": "PollyRichards",
                "headline": "You can't parse the alarm without bypassing the back-end FTP alarm!",
            }
        ]
        actual = groupUsers(basic, detailed)
        assert.deepEqual(actual, expected)
    });
});