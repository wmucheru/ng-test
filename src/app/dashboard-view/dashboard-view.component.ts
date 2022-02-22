import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { MenuNode, MENU_TREE } from './dashboard-menu';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();

  constructor() {
    this.dataSource.data = MENU_TREE;
  }

  ngOnInit(): void {

  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;

  /**
   * 
   * Chart creation
   * 
  */
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Performance (%)',
        backgroundColor: 'rgb(42, 194, 104, 0.2)',
        borderColor: '#2AC268',
        pointBackgroundColor: '#2AC268',
        pointBorderColor: '#2AC268',
        borderWidth: 1,
        fill: 'origin'
      }
    ],
    labels: [ 'Oct-1', 'Oct-2', 'Oct-3', 'Oct-4', 'Oct-5', 'Oct-6', 'Oct-7' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      x: {}
    },
    plugins: {
      legend: { display: false }
    },
    maintainAspectRatio: false
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}
