import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

interface MenuNode {
  name: string,
  children?: MenuNode[],
  icon?: string
}

const MENU_TREE: MenuNode[] = [
  {
    name: 'Dashboard',
    icon: 'home'
  },
  {
    name: 'Transactions',
    icon: 'swap_horizontal_circle',
    children: [
      {
        name: 'Charge',
        children: [
          {
            name: 'Dashboard'
          },
          {
            name: 'Payment Requests'
          },
          {
            name: 'Charge Requests'
          },
          {
            name: 'Manage Paybills & Accounts'
          },
          {
            name: 'Manage Payment Methods'
          }
        ]
      },
      {
        name: 'Refund'
      },
      {
        name: 'Reconcile'
      },
      {
        name: 'Balance'
      },
      {
        name: 'Forex'
      }
    ]
  },
  {
    name: 'Payouts',
    icon: 'autorenew'
  },
  {
    name: 'Messaging',
    icon: 'mark_chat_unread'
  },
  {
    name: 'Customers',
    icon: 'people_alt'
  },
  {
    name: 'Onboarding',
    icon: 'account_circle'
  }
];

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();
  

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = MENU_TREE;
    console.log(this.treeControl);
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;

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
