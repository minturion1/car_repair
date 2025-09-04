
import { useParams } from 'react-router-dom';
import s from './Sidebar.module.css';
import services from '../../ServicesList/ServicesListData';
import Input from './Input/Input';
import ServiceCategories from './ServiceCategories/ServiceCategories';
import Contacts from './Contacts/Contacts';

function Sidebar(props) {
    const { id } = useParams();
    const service = services.find((s) => s.id === Number(id));

     if (!service) {
            return <h2>Service id={id} has not been found</h2>; 
        }
    return (
        <div className={s.container}>
            <Input />
            <ServiceCategories services={props.services}/>
            <Contacts />
        </div>
    );
}

export default Sidebar;