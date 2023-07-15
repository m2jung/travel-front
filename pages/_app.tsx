import { AppProps } from "next/app";

export default function MyApp({ Component }: AppProps): JSX.Element {
  return (
    <>
      <Component />
    </>
  )
}
