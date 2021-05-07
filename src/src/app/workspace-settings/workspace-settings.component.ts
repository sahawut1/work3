import { Component, OnInit } from '@angular/core';
import { Setdata } from '../setdata';

@Component({
  selector: 'app-workspace-settings',
  templateUrl: './workspace-settings.component.html',
  styleUrls: ['./workspace-settings.component.css']
})
export class WorkspaceSettingsComponent implements OnInit {

  constructor() { }
  setData : Setdata[] = [{
    set1 : "Files: <b>Auto Save Delay</b>",
    set2 : "Contros the delay in ms after which a dirty file is saved automatically",
    set3 : 1000
  },
  {
    set1 : "Editor: <b>Font Size</b>",
    set2 : "Controls the font size in pixels.",
    set3 : 12
  },
  {
    set1 : "Editor: <b>Font Family<b>",
    set2 : "Controls the font family",
    set3 : "Menlo,Mona,'Courier New',monospace"
  }
  ]


  ngOnInit(): void {
  }

}
