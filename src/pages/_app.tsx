import { taskStore } from "@/app/taskStore/taskStore";
import RootLayout from "@/components/layout/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={taskStore}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
