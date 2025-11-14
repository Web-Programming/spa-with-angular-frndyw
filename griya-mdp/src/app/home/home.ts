import { Component, OnInit } from '@angular/core';
import { Housing } from '../lokasi-perumahan/lokasi-perumahan';

export class Home implements OnInit {
  housingList: Housing[] = [
    {
      id: 1,
      name: 'Griya Asri Residence',
      price: 850000000,
      type: 'rumah',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      location: '',
      image: '',
      rating: 0,
      status: ''
    },
    // ... more housing data
  ];
  filteredList: Housing[] = [];
  selectedFilter: string = 'all';
  
  ngOnInit() {
    this.filteredList = [...this.housingList];
  }

  filterByType(type: string) {
    this.selectedFilter = type;
    if (type === 'all') {
      this.filteredList = [...this.housingList];
    } else {
      this.filteredList = this.housingList.filter(h => h.type === type);
    }
  }
  
  isFilterActive(type: string): boolean {
    return this.selectedFilter === type;
  }
}