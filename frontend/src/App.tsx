import UserContextProvider from "./context/UserContextProvider";
import Routers from "./Routers";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </UserContextProvider>
  );
};

export default App;
