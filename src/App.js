import Hello from "./Hello";
import User from "./User";


function App() {
  return (
    
    <div className="App">
      
      <User username = 'primo uetnte' mess= 'ciao mondo'/>
      <User username = 'chiara' mess= 'ciao chiara è sei una sirena'/>
      <User username = 'serena' mess= 'ciao serena'/>
      <User username = 'giulia' mess= 'ciao giulia'/>
      <Hello post = 'create da tey'>
        <h3>post: è una bellissima giornata </h3>
        <button>click on me</button>
      </Hello>
      <Hello post = 'create da serena'>
        <h4>post: oggi è giornata interessante</h4>
      </Hello>
     
      
    </div>
  );
}

export default App;
