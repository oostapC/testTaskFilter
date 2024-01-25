import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @ViewChild(MatSelect) foodSelect!: MatSelect;
 

  foods = [{ value: 'בקשה התקבלה' }, { value: 'הועבר לטיפול' }, { value: 'הופקה התחייבות' }];
  isSaveButtonDisabled = true;
  filterValue: string | null = null;


  isDropdownOpen = false;

  

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  onSelectionSave(select: MatSelect): void {
    this.filterValue = select.value;
    select.close();
  }

  onSelectChange(e: any) {
    this.isSaveButtonDisabled = e.value === null;
  }

  resetSelect(select: MatSelect): void {
    select.writeValue(null);
    select.close();
    this.isSaveButtonDisabled = true;
    this.filterValue = null;
  }
}