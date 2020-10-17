import * as js2xmlparser from 'js2xmlparser';

export const objectToXML = (data: Object): string => {
    const xml = js2xmlparser.parse('raiz', data);
    return encode_utf8(xml);
}

function encode_utf8(data: string): string {
  return unescape(encodeURIComponent(data));
}