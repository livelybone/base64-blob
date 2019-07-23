/**
 * Format：/^data:[\w\d]*\/[\d\w]*;base64,.*$/
 * */
declare type Base64Url = string

/**
 * dataURL to blob
 * */
export function base64ToBlob(base64: Base64Url): Promise<Blob>

/**
 * blob to dataURL
 * */
export function blobToBase64(blob: Blob): Promise<Base64Url>
