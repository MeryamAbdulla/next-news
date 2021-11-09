import styles from '../styles/EOM.module.css';
import { Toolbar } from '../components/toolbar';

export const EOM = ({ employee }) => {
    console.log(employee)
    return(
        <div className='page-container'>
            <Toolbar/>
            <div className={styles.main}>
                <h1>Employee Of The Month</h1>

                <div className={styles.employeeOfMonth}>
                    <h3>Meryam Abdulla</h3>
                    <h6>Frontend Developer</h6>
                    <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*'/>
                    <p>asdfghjklqwertyusdfghjqwertsdfg</p>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOgMonth',

    );
    const employee = await apiResponse.json();

    return {
        props: {
            employee
        }
    }
};

export default EOM
