import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";

function App() {
  const [session, setUser] = useState(null);

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  const logout = async () => {
    await supabase.auth.signOut()
  
  };

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error(error);
    } else {
      setUser(data?.session);
    }
  };

  useEffect(() => {
    getSession();
    const {data: authListener} = supabase.auth.onAuthStateChange((event,data)=>{
      switch (event){
        case "SIGNED_IN":
          setUser(data?.session);
          break;
        case "SIGNED_OUT":
            setUser(null);
            break;
        default:
      }
    })
    return () => {
      authListener.unsubscribe();
    }
  }, []);

  return (
    <div>
      {session ? (
        <div>
          <h1>Welcome</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default App;
