var birthdayParser = require('../birthday_parser')

const zodiacTestcase = [
  ['1999-11-08', '天蝎座'],
  ['2019-04-19', '白羊座'],
  ['2011-03-28', '白羊座'],
  ['2002-03-21', '白羊座'],
  ['2011-04-20', '金牛座'],
  ['2011-04-30', '金牛座'],
  ['2003-05-18', '金牛座'],
  ['2001-05-28', '双子座'],
  ['1999-06-13', '双子座'],
  ['1933-06-30', '巨蟹座'],
  ['1915-07-03', '巨蟹座'],
  ['1911-07-23', '狮子座'],
  ['2000-08-08', '狮子座'],
  ['2000-08-24', '处女座'],
  ['2000-09-18', '处女座'],
  ['2000-09-25', '天秤座'],
  ['2000-10-16', '天秤座'],
  ['1999-10-31', '天蝎座'],
  ['1977-11-01', '天蝎座'],
  ['1988-11-23', '射手座'],
  ['1996-12-02', '射手座'],
  ['2010-12-30', '摩羯座'],
  ['2011-01-01', '摩羯座'],
  ['2014-01-28', '水瓶座'],
  ['2008-02-15', '水瓶座'],
  ['2006-02-28', '双鱼座'],
  ['2008-02-28', '双鱼座'],
  ['2009-02-29', '双鱼座'],
  ['1966-03-04', '双鱼座']
]

test('Test zodiac classification', function () {
  for (var i = 0; i < zodiacTestcase.length; i++) {
    expect(birthdayParser.getZodiac(zodiacTestcase[i][0])).toBe(zodiacTestcase[i][1])
  }
})

const ageTestDates = ['2000-10-16', '2000-10-01', '2000-10-05', '1999-11-08', '2019-04-19', '1789-06-04',
  '1543-05-23', '1999-02-28', '2004-02-29', '2008-02-29', '2003-03-01']
const ageTestCurDates = ['2019-10-18', '2060-09-24', '3201-10-02', '2019-10-18', '2020-04-19', '1799-05-07',
  '1565-07-08', '2000-02-29', '2008-02-29', '2016-02-28', '2008-02-29']
const ageTestAns = [19, 59, 1200, 19, 1, 9, 22, 1, 4, 7, 4]
test('Test age calculation', function () {
  for (var i = 0; i < ageTestDates.length; i++) {
    var dateArray = ageTestCurDates[i].split('-')
    var year = parseInt(dateArray[0])
    var month = parseInt(dateArray[1])
    var date = parseInt(dateArray[2])
    var testCur = new Date(year, month - 1, date)
    expect(birthdayParser.getAge(ageTestDates[i], testCur)).toBe(ageTestAns[i])
  }
})
