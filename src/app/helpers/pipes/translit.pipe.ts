import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translit',
  standalone: true,
})
export class TranslitPipe implements PipeTransform {
  private map: Record<string, string> = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'yo',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'kh',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ы: 'y',
    э: 'e',
    ю: 'yu',
    я: 'ya',
    ь: '',
    ъ: '',
  };

  transform(value: string | null | undefined): string {
    if (!value) return '';
    return value
      .split('')
      .map((char) => {
        const lower = char.toLowerCase();
        const latin = this.map[lower] || char;
        return char === lower
          ? latin
          : latin.charAt(0).toUpperCase() + latin.slice(1);
      })
      .join('');
  }
}
