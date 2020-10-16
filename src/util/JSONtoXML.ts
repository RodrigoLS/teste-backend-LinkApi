import * as js2xmlparser from 'js2xmlparser';

export const objectToXML = (data: Object) => {
    return js2xmlparser.parse('raiz', data);
}