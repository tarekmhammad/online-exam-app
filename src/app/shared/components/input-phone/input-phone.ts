import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CountryData } from '../../interfaces/country-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-phone',
  imports: [FormsModule],
  templateUrl: './input-phone.html',
  styleUrl: './input-phone.css',
})
export class InputPhone {
  ngOnInit(): void {
    initFlowbite();
  }
  userPhone!: string;

  getPhoneNumber() {
    console.log(this.userPhone);
    sessionStorage.setItem('userPhone', this.userPhone);
  }
  isListOpen: boolean = false;
  toggleList(): void {
    this.isListOpen = !this.isListOpen;
  }

  selectedCountry: CountryData = {
    name: 'Egypt',
    shortName: 'EG',
    code: '+20',
    flag: 'imgs/flags/flag-egypt.png',
    placeHolder: '1012345678',
  };
  countries: CountryData[] = [
    {
      name: 'Palestine',
      shortName: 'PS',
      code: '+970',
      flag: 'imgs/flags/flag-palestine.png',
      placeHolder: '59 900 0000',
    },
    {
      name: 'Syria',
      shortName: 'SY',
      code: '+963',
      flag: 'imgs/flags/flag-Syria.png',
      placeHolder: '094 095 096',
    },
    {
      name: 'Egypt',
      shortName: 'EG',
      code: '+20',
      flag: 'imgs/flags/flag-egypt.png',
      placeHolder: '1012345678',
    },
    {
      name: 'Saudi',
      shortName: 'SA',
      code: '+20',
      flag: 'imgs/flags/flag-Saudi.png',
      placeHolder: '11 400 0000',
    },
  ];

  searchCountry(countryName: string): CountryData | undefined {
    return this.countries.find((c) => c.name == countryName);
  }
  selectCountry(countryName: string) {
    const country: CountryData | undefined = this.searchCountry(countryName);
    if (country) {
      this.selectedCountry = country;
    }
    // this.isListOpen = false
  }
}
