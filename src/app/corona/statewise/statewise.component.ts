import { CoronaService } from './../../shared/corona.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-statewise',
  templateUrl: './statewise.component.html',
  styleUrls: ['./statewise.component.css']
})
export class StatewiseComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;
  statewise : any;
  hidetable= true;
  Html: boolean = false
  title = 'State Wise Corona!';
  searchText;
  constructor(public cService: CoronaService) { }

  ngOnInit(): void {
    this.cService.getStateWise().subscribe((data) => {
      this.statewise = data.statewise ;
      console.log(this.statewise);
     ;
    });
  }

  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;

    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('statewise-corona.pdf');
  }
}
