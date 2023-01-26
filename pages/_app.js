import "../styles/global.css";
import ErrorBoundary from "../components/errorboundary";

const App = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
};

export default App;
