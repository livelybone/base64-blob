/**
 * Format：/^data:[\w\d]*\/[\d\w]*;base64,.*$/
 * */
type DataUrl = string

/**
 * dataURL to blob
 * */
export function base64ToBlob(base64: DataUrl): Promise<Blob>

/**
 * blob to dataURL
 * */
export function blobToBase64(blob: Blob): Promise<DataUrl>
