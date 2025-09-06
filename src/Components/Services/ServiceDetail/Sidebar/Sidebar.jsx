
    import { useParams } from 'react-router-dom';
    import s from './Sidebar.module.css';
    import Input from './Input/Input';
    import ServiceCategories from './ServiceCategories/ServiceCategories';
    import Contacts from './Contacts/Contacts';
    import { useState } from 'react';

    function Sidebar(props) {
        console.log(props.services);
        const [searchServices, setSearchServices] = useState(props.services);
        const [searchValue, setSearchValue] = useState('');

        function onSearchChange(value) {
            setSearchValue(value);
            setSearchServices(props.services.filter(service =>
                service.name.toLowerCase().includes(value.toLowerCase())
            ));
        }
        function resetSearch() {
            setSearchValue('');
            setSearchServices(props.services);
        }

        const { id } = useParams();
        const service = props.services.find((s) => s.id === Number(id));

        if (!service) {
                return <h2>Service id={id} has not been found</h2>; 
            }
        return (
            <div className={s.container}>
                <Input onSearchChange={onSearchChange} searchValue={searchValue} />
                <ServiceCategories resetSearch={resetSearch} services={searchServices}/>
                <Contacts />
            </div>
        );
    }

    export default Sidebar;