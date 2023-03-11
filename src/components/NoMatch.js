import {Link} from 'react-router-dom';

export default function NoMatch() {
    return (
    <div className='container_nf_outer'>
        <div className='container_nf_inner'>
            <div className='notfound'>
                <h2>Page 404</h2>
                <h2>Nothing to see here!</h2>
                    <button className='button-404'>
                        <Link className='link' to="/">Go Home</Link>
                    </button>
            </div>
        </div>
    </div>
        );
}