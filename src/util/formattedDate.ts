export const americanInBrazilian = (data: string): string => {
    const date = new Date(data);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

/* DD/MM/YYYY in YYYY/MM/DD */ 
export const brazilianInAmerican = (data: string): Date => {
    const aux = data.split('/');
    const strDate = `${aux[2]}/${aux[1]}/${aux[0]}`;
    const date = new Date(strDate);
    return date;
}