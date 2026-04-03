
    import { useParams } from 'react-router-dom';
    import s from './Sidebar.module.css';
    import Input from './Input/Input';
    import ServiceCategories from './ServiceCategories/ServiceCategories';
    import Contacts from './Contacts/Contacts';
    import { useState } from 'react';
    import Skeleton from 'react-loading-skeleton';
    import { useQuery } from '@tanstack/react-query';
    import { getServiceNames } from '../../../../api/servicesApi';

    function Sidebar() {
        const { id } = useParams();
        const {
            data: services = [],
            isLoading,
            isError,
            error,
        } = useQuery({
            queryKey: ["services", "names"],
            queryFn: getServiceNames,
            staleTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false,
        });
        const [searchValue, setSearchValue] = useState('');
        
        console.log(services)
        if (isLoading) {
        return (
        <div className={s.skeleton}>
            <Skeleton
            style={{ marginBottom: "20px", borderRadius: "20px" }}
            baseColor="#2b2b2b"
            highlightColor="#fff"
            height={250}
            width="100%"
            />
            <Skeleton
            style={{ marginBottom: "20px", borderRadius: "20px" }}
            baseColor="#2b2b2b"
            highlightColor="#fff"
            height={250}
            width="100%"
            />
            <Skeleton
            style={{ marginBottom: "20px", borderRadius: "20px" }}
            baseColor="#2b2b2b"
            highlightColor="#fff"
            height={250}
            width="100%"
            />
        </div>
        );
    }

    if (isError) {
        return <p style={{ color: "red" }}>Error: {error.message}</p>;
    }
        function onSearchChange(value) {
            setSearchValue(value);
        }
        function resetSearch() {
            setSearchValue('');
        }
        const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        return (
            <div className={s.container}>
                <Input onSearchChange={onSearchChange} searchValue={searchValue} />
                <ServiceCategories resetSearch={resetSearch} services={filteredServices}/>
                <Contacts />
            </div>
        );
    }

    export default Sidebar;