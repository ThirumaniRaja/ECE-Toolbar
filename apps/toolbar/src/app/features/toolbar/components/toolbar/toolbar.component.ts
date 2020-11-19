import { Component, OnInit } from '@angular/core';
import {
  faEdit,
  faUnderline,
  faKeyboard
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'ece-toolbar-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  faEdit = faEdit;
  faUnderline = faUnderline;
  faKeyboard = faKeyboard;
  showMenu = false;
  selctedIndex;
  public toolsList = [
    { tool: faEdit, toolOption: 'Free Line' },
    { tool: faEdit, toolOption: 'Rectangle' },
    { tool: faEdit  },
    { tool: faUnderline},
    { tool: faUnderline  },
    { tool: faUnderline, toolOption: 'Clear All' },
    { tool: faKeyboard, },
    { tool: faUnderline, toolOption: 'Circle' },
    { tool: faKeyboard },
    { tool: faKeyboard, toolOption: 'Oval' },
    { tool: faKeyboard, toolOption: 'Square' },
    { tool: faKeyboard }
  ];
  constructor() {}

  ngOnInit(): void {}

  selectedTool(toolData, index) {
    if (toolData.toolOption) {
      this.showMenu = true
      this.selctedIndex = index
      
    } else {
      this.showMenu = false
      
    }
  }

  showData(data,i){
    console.log("selcted index",i,data)
  }
}
