interface Account {
  account_name: string,
  current_balance: string,
  predicted_balance: string,
}

interface Props {
  data: {
    current_balance: string,
    predicted_valance: string,
    per_account: Account[]
  }
}

export const accountsApiResponse: Props = {
  data: {
    current_balance: "R$ 3000,00",
    predicted_valance: "R$ 3500,00",
    per_account: [
      {
        account_name: "Conta 01",
        current_balance: "R$ 800,00",
        predicted_balance: "R$ 1200,00",
      },
      {
        account_name: "Conta 02",
        current_balance: "R$ 1150,00",
        predicted_balance: "R$ 1250,00",
      },
      {
        account_name: "Conta 03",
        current_balance: "R$ 1050,00",
        predicted_balance: "R$ 1050,00",
      },
    ]
  }
}
