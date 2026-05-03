import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BookOpenCheck,
  Brain,
  FolderCode,
  LucideAngularModule,
  RectangleEllipsis,
} from 'lucide-angular';
import { FlowbiteService } from '../../../flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {
  private _flowbiteService = inject(FlowbiteService);
  readonly folderCode = FolderCode;
  readonly brain = Brain;
  readonly bookOpenCheck = BookOpenCheck;
  readonly rectangleEllipsis = RectangleEllipsis;
  ngOnInit(): void {
    this._flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
