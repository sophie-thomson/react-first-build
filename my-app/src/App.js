// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';


function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      {/* greeting 'prop' is added to the FunctionalGreetingWithProps  */}
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Sophie" age="47" />
      <StatefulGreeting greeting="I'm a stateful class component!"/>
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
