export class Helper {
    
  cleanStrings(strings: string[]): string {
    return strings.join('').replace(/['",\r]|\blocation\b/gi, '');
  }

  extractNumber(input: any): string {
    return input.match(/\d+/g);
  }
}
