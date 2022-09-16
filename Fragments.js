import React from 'react'
import Column from '../Components/Column'

// We get warning if we define table tag inside the div tag
function Fragments() {
  return (
    <React.Fragment>
        <table>
          <tbody>
            <tr>
                <td>Name: </td>
                <td>City: </td>
            </tr>
            <tr>
                <Column />
            </tr>
          </tbody>     
        </table>
    </React.Fragment>
  )
}

export default Fragments