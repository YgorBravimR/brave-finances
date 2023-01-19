
interface Card {
  avaiable_limit: string;
  spent_value: string;
  percent: number // spent to limit
  limit: string,
  description: string,
  flag: string,
  account: "Checking" | "Saving" | "Investiment" | "Other",
  closing_day: number,
  due_date: number
}

interface Props {
  data: {
    best_cc_to_buy: string;
    avaiable_limit: string; // Of the best credit card
    total_amount: string; // To pay in all credit cards
    cards: Card[]
  }
}

export const creditCardsApiResponse: Props = {
  data: {
    best_cc_to_buy: "Chase Sapphire Reserve", // The one far from the closing day
    avaiable_limit: "$10,000", // It's limit
    total_amount: "$2,500", // In all cards
    cards: [
      {
        avaiable_limit: "$5,000",
        spent_value: "$1,500",
        percent: 41,
        limit: "$10,000",
        description: "Visa Platinum",
        flag: "Visa",
        account: "Checking",
        closing_day: 25,
        due_date: 10
      },
      {
        avaiable_limit: "$2,000",
        spent_value: "$500",
        percent: 55,
        limit: "$8,000",
        description: "Mastercard Gold",
        flag: "Mastercard",
        account: "Saving",
        closing_day: 28,
        due_date: 15
      },
      {
        avaiable_limit: "$1,000",
        spent_value: "$100",
        percent: 28,
        limit: "$5,000",
        description: "Discover Card",
        flag: "Discover",
        account: "Investiment",
        closing_day: 30,
        due_date: 20
      },
      {
        avaiable_limit: "$3,000",
        spent_value: "$800",
        percent: 27,
        limit: "$11,000",
        description: "Amex Blue",
        flag: "Amex",
        account: "Other",
        closing_day: 27,
        due_date: 25
      },
      {
        avaiable_limit: "$4,000",
        spent_value: "$1,200",
        percent: 82,
        limit: "$13,000",
        description: "Capital One",
        flag: "Capital One",
        account: "Checking",
        closing_day: 29,
        due_date: 5
      }
    ]
  }
}

export const creditCardsArray = [
  {
    limit: "$10,000",
    description: "Chase Sapphire Reserve",
    flag: "Visa",
    account: "Checking",
    closing_day: 25,
    due_date: 5
  },
  {
    limit: "$5,000",
    description: "Amex Platinum",
    flag: "Amex",
    account: "Checking",
    closing_day: 28,
    due_date: 3
  },
  {
    limit: "$7,500",
    description: "Capital One Venture",
    flag: "Visa",
    account: "Savings",
    closing_day: 20,
    due_date: 10
  },
  {
    limit: "$2,500",
    description: "Discover it",
    flag: "Discover",
    account: "Checking",
    closing_day: 15,
    due_date: 5
  },
  {
    limit: "$1,000",
    description: "Citi Double Cash",
    flag: "Mastercard",
    account: "Checking",
    closing_day: 30,
    due_date: 20
  },
  {
    limit: "$3,500",
    description: "Wells Fargo Cash Wise",
    flag: "Visa",
    account: "Checking",
    closing_day: 25,
    due_date: 5
  },
  {
    limit: "$5,000",
    description: "US Bank Cash+",
    flag: "Visa",
    account: "Savings",
    closing_day: 20,
    due_date: 10
  },
  {
    limit: "$2,500",
    description: "Bank of America Cash Rewards",
    flag: "Mastercard",
    account: "Checking",
    closing_day: 15,
    due_date: 5
  },
  {
    limit: "$1,000",
    description: "Navy Federal Cash Rewards",
    flag: "Mastercard",
    account: "Checking",
    closing_day: 30,
    due_date: 20
  },
  {
    limit: "$3,500",
    description: "Chase Freedom Unlimited",
    flag: "Visa",
    account: "Checking",
    closing_day: 25,
    due_date: 5
  }
]
