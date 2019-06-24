import md5 from 'js-md5'
import sha256 from 'js-sha256'
import base64 from 'js-base64'
import CryptoJS from 'crypto-js'

export const AES_KEY = '1234567856789012'
export const AES_IV = '1234567856789012'

export const Md5Encode = (val) => {
  return md5(val)
}

export const SHA256Encode = (val) => {
  return sha256(val)
}

export const Base64Encode = (val) => {
  return base64.Base64.encode(val)
}

export const Base64Decode = (val) => {
  return base64.Base64.decode(val)
}

export const AESEncode = (val, key, iv) => {
  let keyHex = CryptoJS.enc.Base64.parse(key)
  let ivHex = CryptoJS.enc.Base64.parse(iv)

  let encrypted = CryptoJS.AES.encrypt(val, keyHex, { iv: ivHex, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.toString()
}

export const AESDecode = (val, key, iv) => {
  let keyHex = CryptoJS.enc.Base64.parse(key)
  let ivHex = CryptoJS.enc.Base64.parse(iv)

  let decrypt = CryptoJS.AES.decrypt(val, keyHex, { iv: ivHex, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return Base64Decode(CryptoJS.enc.Base64.stringify(decrypt))
}

