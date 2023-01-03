import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "../services/axios";
import { parseCookies, setCookie } from 'nookies'

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  fullname?: string,
  avatar?: string,
  email: string,
  password: string,
  created_at?: Date,
  updated_at?: Date
}

interface AuthContextType {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User | null
  isAuthenticated: boolean
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@MyBills:token': token } = parseCookies()

    if (token) {
      api.get('/users')
        .then((res) => {
          setUser(res.data)
        })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    const res = await api.post('/sessions', { email, password })
    const { token, user } = res.data.data;
    setCookie(undefined, '@MyBills:token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user)

    router.push('/dashboard');
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
