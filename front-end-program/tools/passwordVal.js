const ok = 'accepted'
function check (password) {
  if (password.length == 0) return '密码不能为空'
  if (password.length < 6) return '密码需至少6位'
  return ok
}

exports.ok = ok
exports.check = check