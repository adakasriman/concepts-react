import React,{useState} from 'react';

function WithObject(props) {
    const [name, setName] = useState({ firstName: "", lastName: "" })
    return (
        <div>
            <input type="text" placeholder='firstname' onChange={(e) => setName({ ...name, firstName: e.target.value })} />
            <input type="text" placeholder='lastName' onChange={(e) => setName({ ...name, lastName: e.target.value })} />
            <div>
                <p>first name: {name.firstName}</p>
                <p>last name: {name.lastName}</p>
            </div>
        </div>
    );
}

export default WithObject;