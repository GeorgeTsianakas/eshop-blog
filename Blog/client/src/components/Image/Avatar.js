import Image from './Image';
import './Avatar.css';

const avatar = props => (
    < div
        className="avatar"
        style={
            {
                props.size + 'rem', height
            :
            props.size + 'rem'
        }
        }
    >
        <
            Image
            imageUrl={props.image}
        />
        < /div>
            )


            export default avatar;
