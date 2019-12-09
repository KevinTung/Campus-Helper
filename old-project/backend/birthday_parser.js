// Parse birthday, which must be like 'YYYY-MM-DD'
// Calculate the age using birthday
// Classify the zodiac using birthday

const zodiacs = ['摩羯座', '水瓶座', '双鱼座', '白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座']
// sorted by date
const division = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22]

function getAge (birthday, cur) {
  // birthday: string, yyyy-mm-dd
  // cur: Date
  var birthArray = birthday.split('-')
  var birthYear = parseInt(birthArray[0])
  var birthMonth = parseInt(birthArray[1])
  var birthDate = parseInt(birthArray[2])

  // cur: current date
  var curYear = cur.getFullYear()
  var curMonth = cur.getMonth() + 1
  var curDate = cur.getDate()

  var age = curYear - birthYear - 1
  if (curMonth > birthMonth) {
    age++
  } else if (curMonth === birthMonth) {
    if (curDate >= birthDate) age++
  }
  return age
}

function getZodiac (birthday) {
  var birthArray = birthday.split('-')
  var birthMonth = parseInt(birthArray[1])
  var birthDate = parseInt(birthArray[2])

  var index = birthMonth
  if (birthDate < division[birthMonth - 1]) index--
  return zodiacs[index % 12]
}

exports.getAge = getAge
exports.getZodiac = getZodiac
