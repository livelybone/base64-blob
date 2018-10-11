/* global Promise */
import b64ToBlob from 'b64-to-blob'

/**
 * dataURL to blob
 * */
export function base64ToBlob(base64) {
  try {
    var arr = base64.split(',')
    var mime = arr[0].match(/:(.*?);/)[1]
    var blobStr = atob(arr[1])
    return Promise.resolve(b64ToBlob(blobStr, mime))
  } catch (e) {
    return Promise.reject(e)
  }
}

/**
 * blob to dataURL
 * */
export function blobToBase64(blob) {
  return new Promise(function (res, rej) {
    try {
      var a = new FileReader()
      a.onload = function (e) {
        res(e.target.result)
      }
      a.readAsDataURL(blob)
    } catch (e) {
      rej(e)
    }
  })
}
