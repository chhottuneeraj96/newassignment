import * as React from 'react';
import { Text} from 'react-native'
import { useSelector } from 'react-redux';

const ScreenThird = () => {
    const state = useSelector(state => state)
    const [nameData, setName] = React.useState(state?.stateData)
  
    React.useEffect(() => {
      console.log("STATE CHECK", state)
    })
    return (
      <Text>
        Hi, Welcome {nameData}
      </Text>
  
    );
  };

  export default ScreenThird;