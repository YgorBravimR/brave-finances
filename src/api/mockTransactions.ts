interface Incomes {
  price: string,
  received_paid: boolean;
  date: string,
  description: string,
  category: string,
  type: 'income'
  account: string,
  tags: string[];
  fixed: boolean;
  repeat: boolean;
  repeated_times: number | null; // null if repeat is false
  time_period: string | null; // null if repeat is false
}

interface Expense {
  price: string,
  received_paid: boolean;
  date: string,
  description: string,
  category: string,
  type: 'expense'
  account: string,
  tags: string[];
  fixed: boolean;
  repeat: boolean;
  repeated_times: number | null; // null if repeat is false
  time_period: string | null; // null if repeat is false
}

interface CcExpense {
  price: string,
  date: string,
  description: string,
  category: string,
  card_name: string,
  invoice: string,
  tags: string[],
  installment: boolean,
  repeated_times: string, // null if installment is false
  type: "credit_card"
}

interface Transfer {
  price: string;
  date: string;
  origin_account: string;
  destination_account: string;
  tags: string[];
  recurring: boolean;
  type: "transfer"
  repeat_on_day: string | null; // null if recurring is false
}

export const incomesArrayApi: Incomes[] = [
  {
    price: "$1,000",
    received_paid: true,
    date: "Nov, 08",
    description: "Paycheck",
    category: "Salary",
    type: "income",
    account: "Checking",
    tags: ["work"],
    fixed: true,
    repeat: true,
    repeated_times: 12,
    time_period: "month"
  },
  {
    price: "$500",
    received_paid: true,
    date: "Nov, 07",
    description: "Freelance Work",
    category: "Side Gig",
    type: "income",
    account: "Checking",
    tags: ["freelance"],
    fixed: false,
    repeat: true,
    repeated_times: 6,
    time_period: "month"
  },
  {
    price: "$100",
    received_paid: true,
    date: "Nov, 07",
    description: "Investment Interest",
    category: "Investments",
    type: "income",
    account: "Savings",
    tags: ["investment"],
    fixed: false,
    repeat: true,
    repeated_times: 12,
    time_period: "month"
  },
  {
    price: "$250",
    received_paid: true,
    date: "Nov, 06",
    description: "Gift from Family",
    category: "Gifts",
    type: "income",
    account: "Checking",
    tags: ["family"],
    fixed: false,
    repeat: false,
    repeated_times: null,
    time_period: null
  },
  {
    price: "$800",
    received_paid: true,
    date: "Nov, 04",
    description: "Rental Income",
    category: "Rental Property",
    type: "income",
    account: "Checking",
    tags: ["rental"],
    fixed: true,
    repeat: false,
    repeated_times: null,
    time_period: null
  },
  {
    price: "$100",
    received_paid: true,
    date: "2022-01-01",
    description: "Sale of Personal Item",
    category: "Sales",
    type: "income",
    account: "Checking",
    tags: ["sale"],
    fixed: false,
    repeat: false,
    repeated_times: null,
    time_period: null
  }
]

export const expensesArrayApi: Expense[] = [
  {
    price: "$1,000",
    received_paid: true,
    date: "Nov, 11",
    description: "Rent",
    category: "Housing",
    type: "expense",
    account: "Checking",
    tags: ["housing"],
    fixed: true,
    repeat: true,
    repeated_times: 12,
    time_period: "month"
  },
  {
    price: "$500",
    received_paid: true,
    date: "Nov, 09",
    description: "Car Payment",
    category: "Transportation",
    type: "expense",
    account: "Checking",
    tags: ["auto"],
    fixed: true,
    repeat: true,
    repeated_times: 6,
    time_period: "month"
  },
  {
    price: "$100",
    received_paid: false,
    date: "Nov, 07",
    description: "Gym Membership",
    category: "Personal Care",
    type: "expense",
    account: "Checking",
    tags: ["health", "fitness"],
    fixed: true,
    repeat: true,
    repeated_times: 12,
    time_period: "month"
  },
  {
    price: "$100",
    received_paid: false,
    date: "Nov, 05",
    description: "Grocery Shopping",
    category: "Food",
    type: "expense",
    account: "Checking",
    tags: ["groceries"],
    fixed: false,
    repeat: false,
    repeated_times: null,
    time_period: null
  },
  {
    price: "$75",
    received_paid: false,
    date: "Nov, 05",
    description: "Gift for Friend's Birthday",
    category: "Gifts",
    type: "expense",
    account: "Checking",
    tags: ["gifts", "birthday"],
    fixed: false,
    repeat: false,
    repeated_times: null,
    time_period: null
  },
  {
    price: "$50",
    received_paid: false,
    date: "2022-01-01",
    description: "Cable Bill",
    category: "Utilities",
    type: "expense",
    account: "Checking",
    tags: ["utilities"],
    fixed: true,
    repeat: false,
    repeated_times: null,
    time_period: null
  }
]

export const creditCardExpensesArrayApi: CcExpense[] = [
  {
    price: "100.00",
    date: "January 1, 2023",
    description: "Grocery shopping",
    category: "Food",
    card_name: "Visa",
    invoice: "June 01, 2023",
    tags: ["food", "necessities"],
    installment: false,
    repeated_times: "",
    type: "credit_card"
  },
  {
    price: "50.00",
    date: "January 2, 2020",
    description: "Gas for car",
    category: "Transportation",
    card_name: "Mastercard",
    invoice: "234567",
    tags: ["gas", "transportation"],
    installment: false,
    repeated_times: "",
    type: "credit_card"
  },
  {
    price: "75.00",
    date: "January 3, 2020",
    description: "Monthly gym membership",
    category: "Health",
    card_name: "Visa",
    invoice: "June 01, 2023",
    tags: ["fitness", "health", "membership"],
    installment: false,
    repeated_times: "",
    type: "credit_card"
  },
  {
    price: "200.00",
    date: "January 4, 2020",
    description: "New laptop",
    category: "Technology",
    card_name: "Mastercard",
    invoice: "July 01, 2023",
    tags: ["laptop", "technology"],
    installment: true,
    repeated_times: "12",
    type: "credit_card"
  }
];

export const transfersArrayApi: Transfer[] = [
  {
    price: "100.00",
    type: "transfer",
    date: "January 1, 2020",
    origin_account: "Checking Account",
    destination_account: "Savings Account",
    tags: ["transfer", "savings"],
    recurring: false,
    repeat_on_day: null
  },
  {
    price: "50.00",
    type: "transfer",
    date: "January 2, 2020",
    origin_account: "Checking Account",
    destination_account: "Rent",
    tags: ["rent", "monthly"],
    recurring: true,
    repeat_on_day: "01"
  },
  {
    price: "75.00",
    type: "transfer",
    date: "January 3, 2020",
    origin_account: "Savings Account",
    destination_account: "Gym Membership",
    tags: ["fitness", "membership"],
    recurring: true,
    repeat_on_day: "15"
  },
  {
    price: "200.00",
    type: "transfer",
    date: "January 4, 2020",
    origin_account: "Checking Account",
    destination_account: "Car Payment",
    tags: ["car", "loan"],
    recurring: false,
    repeat_on_day: null
  }
];
