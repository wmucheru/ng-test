export interface MenuNode {
  name: string,
  children?: MenuNode[],
  icon?: string,
  active?: boolean
}

export const MENU_TREE: MenuNode[] = [
  {
    name: 'Dashboard',
    icon: 'home'
  },
  {
    name: 'Transactions',
    icon: 'swap_horizontal_circle',
    active: true,
    children: [
      {
        name: 'Charge',
        active: true,
        children: [
          {
            name: 'Dashboard',
            active: true
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