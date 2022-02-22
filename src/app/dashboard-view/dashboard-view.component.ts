import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

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
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;
}
