"use client"

import Home from "../src/app/page"
import { LanguageProvider } from "../src/context/language-context"

export default function Page() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  )
}
