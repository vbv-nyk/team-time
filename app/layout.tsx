"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
