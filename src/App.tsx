import "./styles/global.css";
import { EnvelopeSimple, Lock } from "phosphor-react";

import { Button } from "./components/Button/Button";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Heading } from "./components/Heading/Heading";
import { Logo } from "./components/Logo/Logo";
import { Text } from "./components/Text/Text";
import { TextInput } from "./components/TextInput/TextInput";

export function App() {
  return (
    <main className="px-4 w-screen h-screen flex flex-col gap-10 items-center justify-center bg-gray-900">
      <header className="flex flex-col items-center justify-center">
        <Logo />
        <Heading size="lg">Ignite Lab</Heading>
        <Text size="lg" className="text-gray-300 mt-1">
          Faça login e comece a usar
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-[480px] gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de email</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input
              autoComplete="off"
              id="email"
              type="text"
              name="email"
              placeholder="johndoe@gmail.com"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              autoComplete="off"
              id="password"
              type="password"
              name="password"
              placeholder="*************"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex gap-2 items-center">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4">
        <Text size="sm" asChild>
          <button
            type="button"
            className="text-gray-300 underline underline-offset-2 hover:text-gray-200"
          >
            Esqueceu sua senha?
          </button>
        </Text>
        <Text size="sm" asChild>
          <button
            type="button"
            className="text-gray-300 underline underline-offset-2 hover:text-gray-200"
          >
            Não possui conta? Crie uma agora!
          </button>
        </Text>
      </footer>
    </main>
  );
}
