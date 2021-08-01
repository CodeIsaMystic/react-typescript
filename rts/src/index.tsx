import ReactDOM from 'react-dom';

// import GuestList from './state/GuestList'
// import EventComponent from './events/EventComponent';
import UserSearch from './state/UserSearch';


const App = () => {
  return (
    <div>
      {/* <EventComponent />  */}
      <UserSearch /> 
      {/* <GuestList /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
