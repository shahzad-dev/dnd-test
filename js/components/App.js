import React from 'react';;
import Relay from 'react-relay';
import HobbiesList from './units/Hobbies';
import Example1 from './Example1';
import Example2 from './Example2';
import DustbinSingleTarget from './example3';

class App extends React.Component {
    render() {
        return (
            <div style={{width: "50%", height: 500, border: "1px solid", padding: 10}}>
                {/*<Example1 />*/}
                {/*<Example2 />*/}
                {/*<DustbinSingleTarget />*/}
            </div>
    )}
}

export default Relay.createContainer(App, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        ${HobbiesList.getFragment('Viewer')},
      }
    `,
  },
});
