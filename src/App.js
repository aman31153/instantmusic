import './App.css';
import NavbarContainer from './store/containers/NavbarContainer';
import MediaControlCard from './components/global/player';
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink,from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import { connect } from 'react-redux';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './components/global/admin/login';
import Home from './components/home';
import Dashboard from './components/global/admin/home';
function App(props) {
  const errorLink = onError(({graphqlErrors,networkError})=>{
    if(graphqlErrors){
      graphqlErrors.map(({message,location,path})=>{
       return message;
      })
    }
  })
  const link = from([
   errorLink,
   new HttpLink({uri:"http://localhost:8001/graphql"}),
  ]);
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link:link,
  });
  
  
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <NavbarContainer />
      <div id="icerik">
      {(props?.data?.add_signup?.data!=='') ?<h1 style={{textAlign:'center', color:'blue'}}>Thank you for subscribing us! {props?.data?.add_signup?.data}</h1>:null}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route exact path="/admin" component={Login} />
          <Route path="/admin/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
     </div>
        <MediaControlCard />
      </ApolloProvider>
      </div>
      
  );
}

const mapStateToProps = (state) => ({
  data:state
});
export default connect(mapStateToProps,null)(App);
