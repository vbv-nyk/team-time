"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new ApolloClient({
    uri: "http://192.168.0.109:4000",
    cache: new InMemoryCache(),
  });

  return (
    <html lang="en">
      <Provider store={store}>
        <ApolloProvider client={client}>
          <body className={inter.className}>{children}</body>
        </ApolloProvider>
      </Provider>
    </html>
  );
}
